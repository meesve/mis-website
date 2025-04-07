"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "@/styles/landing.module.css"
import Image from "next/image"
import StopMotion from "@/components/stop-motion"

export default function LandingPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) return null

  return (
    <div className={`${styles.container} ${isExiting ? styles.containerExit : ''}`}>
      <div className={styles.contentWrapper}>
        <div className={styles.stopMotionContainer}>
          <StopMotion />
        </div>
        <div className={styles.logoContainer}>
          <Image
            src="/images/main_logo.svg"
            alt="MADE IN STITCHES"
            width={1250}
            height={300}
            className={styles.logo}
            priority
          />
        </div>
      </div>
    </div>
  )
}

