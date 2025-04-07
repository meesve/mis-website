"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import styles from "@/styles/image-carousel.module.css"

type ImageItem = {
  src: string
  alt: string
  subscript?: string
  orientation: "horizontal" | "vertical"
}

interface ImageCarouselProps {
  images: ImageItem[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const isScrolling = useRef(false)
  const animationRef = useRef<number | null>(null)
  const velocity = useRef(0)
  const lastX = useRef(0)
  const lastTime = useRef(0)

  // Create a circular array of images for seamless looping
  // We duplicate the images to ensure there are enough for scrolling in either direction
  const extendedImages = [...images, ...images, ...images, ...images, ...images]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Set initial scroll position to the middle set
    const scrollToMiddle = () => {
      const singleSetWidth = carousel.scrollWidth / 5 * 2
      carousel.scrollLeft = singleSetWidth
    }

    scrollToMiddle()

    // Handle the seamless infinite scroll
    const handleScroll = () => {
      if (isScrolling.current || !carousel) return
      
      const totalWidth = carousel.scrollWidth
      const singleSetWidth = totalWidth / 5
      
      // If scrolled past the middle sets
      if (carousel.scrollLeft >= singleSetWidth * 3) {
        isScrolling.current = true
        // Wait for scrolling to stop before adjusting
        setTimeout(() => {
          carousel.style.scrollBehavior = 'auto'
          carousel.scrollLeft = singleSetWidth * 2 + (carousel.scrollLeft - singleSetWidth * 3)
          setTimeout(() => {
            carousel.style.scrollBehavior = ''
            isScrolling.current = false
          }, 50)
        }, 100)
      } 
      // If scrolled before the middle sets
      else if (carousel.scrollLeft < singleSetWidth) {
        isScrolling.current = true
        // Wait for scrolling to stop before adjusting
        setTimeout(() => {
          carousel.style.scrollBehavior = 'auto'
          carousel.scrollLeft = singleSetWidth * 2 - (singleSetWidth - carousel.scrollLeft)
          setTimeout(() => {
            carousel.style.scrollBehavior = ''
            isScrolling.current = false
          }, 50)
        }, 100)
      }
    }

    carousel.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      carousel.removeEventListener("scroll", handleScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [images.length])

  // Apply deceleration after touch/mouse is released 
  const applyMomentum = () => {
    if (!carouselRef.current || Math.abs(velocity.current) < 0.5) {
      velocity.current = 0;
      return;
    }

    // Apply friction to gradually slow down
    velocity.current *= 0.95;
    
    carouselRef.current.scrollLeft -= velocity.current;
    
    animationRef.current = requestAnimationFrame(applyMomentum);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return

    // Stop any ongoing momentum scrolling
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      velocity.current = 0;
    }

    setIsDragging(true)
    setStartX(e.clientX)
    lastX.current = e.clientX;
    lastTime.current = Date.now();
    setScrollLeft(carouselRef.current.scrollLeft)
    carouselRef.current.style.cursor = "grabbing"
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab"
    }
    
    // Start momentum scrolling
    applyMomentum();
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return

    // Calculate velocity for momentum scrolling
    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      const dx = e.clientX - lastX.current;
      velocity.current = dx / dt * 15; // Scale factor for comfortable momentum
    }
    lastX.current = e.clientX;
    lastTime.current = now;

    const x = e.clientX
    const walk = (x - startX) * 1.2 // Reduced for smoother scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return

    // Stop any ongoing momentum scrolling
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      velocity.current = 0;
    }

    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    lastX.current = e.touches[0].clientX;
    lastTime.current = Date.now();
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    
    // Start momentum scrolling with more momentum for mobile
    velocity.current *= 1.2; // Give a little extra momentum on touch devices
    applyMomentum();
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return
    
    // Calculate velocity for momentum scrolling
    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      const dx = e.touches[0].clientX - lastX.current;
      velocity.current = dx / dt * 15; // Increased for better mobile momentum
    }
    lastX.current = e.touches[0].clientX;
    lastTime.current = now;
    
    const x = e.touches[0].clientX
    const walk = (x - startX) * 0.7 // Reduced for gentler touch scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className={styles.carouselWrapper}>
      <Image
        src="/images/assets/tear.svg"
        alt="background tear"
        width={1700}
        height={120}
        priority
        className={styles.tearBackground}
      />
      <div
        className={styles.carouselContainer}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {extendedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`${styles.imageWrapper} ${image.orientation === "vertical" ? styles.vertical : styles.horizontal}`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                draggable="false"
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 300px"
                loading={index < 10 ? "eager" : "lazy"}
              />
            </div>
            {image.subscript && <div className={styles.subscript}>{image.subscript}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

