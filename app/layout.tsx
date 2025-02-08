import type { Metadata } from "next"
import "./globals.css"
import type React from "react" // Import React


export const metadata: Metadata = {
  title: "Made in Stitches",
  description: "Textile & Print Design Studio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

