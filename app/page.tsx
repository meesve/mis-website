"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "@/styles/landing.module.css"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTransition = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExiting(true)
    setTimeout(() => {
      router.push('/home')
    }, 500) // Match this with the CSS transition duration
  }

  if (!mounted) return null

  return (
    <div className={`${styles.container} ${isExiting ? styles.containerExit : ''}`}>
      <div style={{ position: 'relative' }}>
        <Image
          src="/images/main_logo.svg"
          alt="MADE IN STITCHES"
          width={1250}
          height={300}
          className={styles.logo}
          priority
        />
        <Image
          src="/images/heart.png"
          alt="MADE IN STITCHES"
          width={700}
          height={300}
          className={styles.heart}
          priority
        />
      </div>
      <a href="/home" onClick={handleTransition} className={styles.skip}>
        <ArrowDown size={24} />
      </a>
    </div>
  )
}

