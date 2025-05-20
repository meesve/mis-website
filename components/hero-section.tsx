"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/layout.module.css"

interface HeroSectionProps {
  onContactClick: () => void
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Image
          src="/images/assets/top_banner.svg"
          alt="We create, you shine"
          width={800}
          height={240}
          className={styles.topBanner}
          style={{ 
            width: '150%', 
            height: 'auto', 
            marginLeft: '-20%' 
          }}
          priority
        />
        <div className={styles.ctaButtons}>
          <button onClick={onContactClick} className={styles.ctaButton}>
            <Image 
              src="/images/assets/button.svg"
              alt="Thread us a message"
              width={400}
              height={80}
              style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
            />
          </button>
          <Link href="tel:+yourphonenumber" className={styles.ctaButton}>
            <Image
              src="/images/assets/button2.svg"
              alt="Call now"
              width={200}
              height={80}
              style={{ width: '100%', height: 'auto', maxWidth: '200px' }}
            />
          </Link>
        </div>
      </div>
    </div>
  )
} 