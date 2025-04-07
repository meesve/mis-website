"use client"

import Link from "next/link"
import styles from "@/styles/layout.module.css"
import Footer from "@/components/footer"
import PartnerCarousel from "@/components/partner-carousel"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import Accordion from "@/components/accordion"
import Services from "@/components/services"
import ImageCarousel from "@/components/image-carousel"
import { useState, useEffect, useRef } from "react"

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Check on initial load
    checkIfMobile()
    
    // Set up event listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
      if (isMobile) {
        setMobileMenuOpen(false)
      }
    }
  }

  const images = [
    {
      src: "/images/image-carousel/hor.jpg",
      alt: "Image",
      subscript: "Image 1",
      orientation: "horizontal" as const,
    },
    {
      src: "/images/image-carousel/ver.jpeg",
      alt: "Image",
      subscript: "Image 2",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/hor.jpg",
      alt: "Image",
      orientation: "horizontal" as const,
    },
    {
      src: "/images/image-carousel/ver.jpeg",
      alt: "Image",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/hor.jpg",
      alt: "Image",
      subscript: "Image 5",
      orientation: "horizontal" as const,
    },
  ]

  const accordionData = {
    title: "WHAT WE'RE MADE OF",
    subtitle: "100% MADE IN STITCHES",
    items: [
      {
        title: "PEAK PERFECTION",
        content: (
          <>
            <p>We take pride in our attention to detail, ensuring every garment is made with care and precision.</p>
            <p>Our focus is on durability, creating long-lasting pieces that hold up over time.</p><br/>
            <p>By using high-quality materials and advanced machinery, we stay ahead of the curve.</p><br/>
            <p>Your brand is in good hands with a team that values quality and reliability.</p>
          </>
        ),
      },
      {
        title: "CONSCIOUS CRAFTING",
        content: (
          <p>
            Reflecting our commitment to environmental responsibility, sustainability is at the heart of what we do,
            from the materials we source to the way we produce.
          </p>
        ),
      },
      {
        title: "CUSTOM CARE",
        content: (
          <>
            <p>
              Every project is unique, and we treat it that way. We work closely with you to bring your ideas to life,
              offering hands-on guidance from start to finish.
            </p><br/>
            <p>
              Our made-to-measure approach solidifies that every detail is tailored to your needs, delivering a product
              that fully meets your expectations.
            </p>
          </>
        ),
      },
      {
        title: "ONE STOP SHOP",
        content: (
          <>
            <p>
              Sure, we could rattle off a long list starting with merchandise, brand identities, engaging flyers, book
              designs, large-format posters, banners, exhibition panels, and pop-up events...you name it.
            </p><br/>
            <p>But that&apos;s not what it&apos;s about. What really matters is what you want. We&apos;re here to make it happen.</p>
          </>
        ),
      },
      {
        title: "SCALABILITY & FLEXIBILITY",
        content: (
          <>
            <p>Whether you&apos;re just starting out or an industry veteran, we adapt to your brand&apos;s unique needs.</p>
            <p><br/>
              With fast turnaround times and a streamlined workflow, we keep things efficient without sacrificing
              quality.
            </p>
          </>
        ),
      },
      {
        title: "FORWARD THINKING",
        content: (
          <>
            <p>
              Our balanced focus on current strengths and future aspirations positions Made In Stitches not just as a
              provider of branding solutions, but as a visionary in brand storytelling and identity creation.
            </p><br/>
            <p>We go beyond branding, we&apos;re crafting legacies.</p>
          </>
        ),
      },
      {
        title: "DIRTY 30",
        content: (
          <>
            <p>With over 30+ years of experience in commercial printing, we&apos;re not afraid to get our hands dirty.</p><br/>
            <p>We understand the craft and apply the best techniques to bring your designs to life.</p>
          </>
        ),
      },
    ],
  }

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <Link href="/home" className={styles.logo}>
              <Image
                src="/images/logo_mis.svg"
                alt="MADE IN STITCHES"
                width={160}
                height={120}
                className={styles.logo}
                priority
              />
            </Link>

            {isMobile ? (
              <div className={styles.mobileNav}>
                <button 
                  className={styles.hamburgerBtn} 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? '✕' : '☰'}
                </button>
                
                {mobileMenuOpen && (
                  <div className={styles.mobileMenu}>
                    <button onClick={() => scrollTo(servicesRef)} className={styles.mobileNavLink}>
                      about
                    </button>
                    <button onClick={() => scrollTo(projectsRef)} className={styles.mobileNavLink}>
                      projects
                    </button>
                    <button onClick={() => scrollTo(contactRef)} className={styles.mobileNavLink}>
                      contact
                    </button>
                    <div className={styles.langSwitch}>
                      <button>🇳🇱</button>
                      <button>🇬🇧</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <nav className={styles.nav}>
                <button onClick={() => scrollTo(servicesRef)} className={styles.navLink}>
                  about
                </button>
                <button onClick={() => scrollTo(projectsRef)} className={styles.navLink}>
                  projects
                </button>
                <button onClick={() => scrollTo(contactRef)} className={styles.navLink}>
                  contact
                </button>

                <div className={styles.langSwitch}>
                  <button>🇳🇱</button>
                  <button>🇬🇧</button>
                </div>
              </nav>
            )}
          </header>
          <div className={styles.pageContent}>
            <div className={styles.heroSection}>
              <Image
                src="/images/assets/top_banner.svg"
                alt="We create, you shine"
                width={800}
                height={240}
                className={styles.topBanner}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
              <div className={styles.ctaButtons}>
                <button onClick={() => scrollTo(contactRef)} className={styles.ctaButton}>
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
          <PartnerCarousel />
          <Accordion title={accordionData.title} subtitle={accordionData.subtitle} items={accordionData.items} />
          <div ref={servicesRef}>
            <Services />
          </div>
          <div ref={projectsRef}>
            <ImageCarousel images={images} />
          </div>
          <div ref={contactRef}>
            <ContactForm />
          </div>
          
        </main>
      </div>
      <Footer />
    </div>
  )
}

