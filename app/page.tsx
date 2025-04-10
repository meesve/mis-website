"use client"

import { useEffect, useState } from "react"
import styles from "@/styles/landing.module.css"
import Image from "next/image"
import StopMotion from "@/components/stop-motion"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    router.push('/home')
  }

  if (!mounted) return null

  return (
    <div className={styles.container} onClick={handleClick} style={{ cursor: 'pointer' }}>
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

