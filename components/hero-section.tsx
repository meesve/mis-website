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
        {/* Desktop version - existing implementation */}
        <div className={styles.desktopHero}>
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
        </div>

        {/* Mobile version - SVG shape with text */}
        <div className={styles.mobileHero}>
          <div className={styles.mobileHeroText}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 450 300" 
              className={styles.mobileHeroSvg}
              aria-labelledby="mobile-hero-title"
              role="img"
            >
              <title id="mobile-hero-title">We create, you shine</title>
              <path
                className={styles.mobileHeroPolygon}
                d="M25,40 L400,0 L445,55 L425,240 L445,270 L70,290 L30,250 L0,65 Z"
              />
            </svg>
            <div className={styles.mobileHeroContent}>
              <h3 className={styles.mobileHeroTitle}>WE CREATE, YOU SHINE</h3>
              <p className={styles.mobileHeroDescription}>
                At Made in Stitches, we elevate brands
                through high quality clothing production,
                custom printing, and tailored branding solutions.<br/><br/>
                give us a call. and see your brand fully realized.
              </p>
            </div>
          </div>
        </div>

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
              style={{ width: '100%', height: 'auto', maxWidth: '160px' }}
            />
          </Link>
        </div>
      </div>
    </div>
  )
} 