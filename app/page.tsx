"use client"

import { useEffect, useState } from "react"
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
    <h1>Hello</h1>
  )
}

