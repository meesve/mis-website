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

  // Create a circular array of images for seamless looping
  // We duplicate the images to ensure there are enough for scrolling in either direction
  const extendedImages = [...images, ...images, ...images]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Set initial scroll position to the middle set
    const scrollToMiddle = () => {
      const singleSetWidth = carousel.scrollWidth / 3
      carousel.scrollLeft = singleSetWidth
    }

    scrollToMiddle()

    // Handle the seamless infinite scroll
    const handleScroll = () => {
      if (!carousel) return

      const totalWidth = carousel.scrollWidth
      const singleSetWidth = totalWidth / 3

      // If we've scrolled past the middle set to the right
      if (carousel.scrollLeft >= singleSetWidth * 2) {
        // Jump back to the first set + the overflow amount
        const overflowAmount = carousel.scrollLeft - singleSetWidth * 2
        carousel.scrollLeft = singleSetWidth + overflowAmount
      }

      // If we've scrolled before the middle set to the left
      if (carousel.scrollLeft < singleSetWidth) {
        // Jump forward to the third set - the underflow amount
        const underflowAmount = singleSetWidth - carousel.scrollLeft
        carousel.scrollLeft = singleSetWidth * 2 - underflowAmount
      }
    }

    carousel.addEventListener("scroll", handleScroll)
    return () => carousel.removeEventListener("scroll", handleScroll)
  }, [images.length])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return

    e.preventDefault() // Prevent default drag behavior
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
    carouselRef.current.style.cursor = "grabbing"
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab"
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return

    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return

    setIsDragging(true)
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return

    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
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
        onTouchEnd={handleMouseUp}
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
              />
            </div>
            {image.subscript && <div className={styles.subscript}>{image.subscript}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

