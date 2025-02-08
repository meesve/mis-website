"use client"

import { useEffect, useRef } from "react"
import styles from "@/styles/carousel.module.css"

const partners = [
  { name: "Mayberry", logo: "/images/partners/Asset 18.svg?height=32&width=100" },
  { name: "NoART", logo: "/images/partners/Asset 17.svg?height=32&width=100" },
  { name: "Rolling Loud", logo: "/images/partners/Asset 16.svg?height=32&width=100" },
  { name: "SEDA", logo: "/images/partners/Asset 15.svg?height=32&width=100" },
  { name: "Rimon", logo: "/images/partners/Asset 12.svg?height=32&width=100" },
  { name: "Snipes", logo: "/images/partners/Asset 11.svg?height=32&width=100" },
  { name: "WooHah", logo: "/images/partners/Asset 9.svg?height=32&width=100" },
  { name: "Bidfood", logo: "/images/partners/Asset 8.svg?height=32&width=100" },
  { name: "Provoke", logo: "/images/partners/Asset 7.svg?height=32&width=100" },
  { name: "The Avocado Show", logo: "/images/partners/Asset 6.svg?height=32&width=100" },
  { name: "The Avocado Show", logo: "/images/partners/Asset 5.svg?height=32&width=100" },
  { name: "The Avocado Show", logo: "/images/partners/Asset 4.svg?height=32&width=100" },
  { name: "The Avocado Show", logo: "/images/partners/Asset 3.svg?height=32&width=100" }
]

export default function PartnerCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const addAnimation = () => {
      scroller.setAttribute("data-animated", "true")

      const scrollerContent = Array.from(scroller.children)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        scroller.appendChild(duplicatedItem)
      })
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation()
    }
  }, [])

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        <div className={styles.track} ref={scrollerRef}>
          {partners.map((partner, index) => (
            <img key={index} src={partner.logo || "/placeholder.svg"} alt={partner.name} className={styles.partner} />
          ))}
        </div>
      </div>
    </div>
  )
}

