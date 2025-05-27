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
import HeroSection from "@/components/hero-section"
import { useState, useEffect, useRef } from "react"

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    // comment
    
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
      src: "/images/image-carousel/AtelierRxL.JPG",
      alt: "Atelier Reservé x Levi's",
      title: "Atelier Reservé x Levi's",
      service: "embroidery",
      orientation: "square" as const,
    },
    {
      src: "/images/image-carousel/AtelierRxL_1.JPG",
      alt: "Atelier Reservé x Levi's",
      orientation: "square" as const,
    },
    {
      src: "/images/image-carousel/AtelierRxL_2.JPG",
      alt: "Atelier Reservé x Levi's",
      orientation: "square" as const,
    },
    {
      src: "/images/image-carousel/AR_0.jpg",
      alt: "Atelier Reservé",
      title: "Atelier Reservé",
      service: "embroidery",
      orientation: "square" as const,
    },
    {
      src: "/images/image-carousel/AR_1.jpg",
      alt: "Atelier Reservé",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/AR_2.jpg",
      alt: "Atelier Reservé",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/AR_3.jpg",
      alt: "Atelier Reservé",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/Baba_1.JPG",
      alt: "Baba boys",
      title: "Baba Boys",
      service: "textile printing",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/Baba_2.JPG",
      alt: "Baba boys",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/BH.JPG",
      alt: "Bdar Hari",
      title: "Bdar Hari",
      service: "embroidery",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/BH2.JPG",
      alt: "Bdar Hari",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/ByBorre.jpeg",
      alt: "By Borre",
      title: "By Borre",
      service: "embroidery",
      orientation: "horizontal" as const,
    },
    {
      src: "/images/image-carousel/made in stitches_ embroidery.jpg",
      alt: "Made in Stitches",
      title: "Made in Stitches",
      service: "embroidery",
      orientation: "horizontal" as const,
    },
    {
      src: "/images/image-carousel/moooi_ embroidery.JPG",
      alt: "Moooi",
      title: "Moooi",
      service: "embroidery",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/moooi_ embroidery 2.JPG",
      alt: "Moooi",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/NoArt_Cut&Sew.jpeg",
      alt: "No Art Cut & sew",
      title: "NoArt",
      service: "cut & sew",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/NoArt_Cut&Sew 2.jpeg",
      alt: "No Art Cut & Sew",
      orientation: "vertical" as const,
    },
    {
      src: "/images/image-carousel/Rijksoverheid_embroidery.JPG",
      alt: "Rijksoverheid",
      title: "Rijksoverheid",
      service: "embroidery",
      orientation: "horizontal" as const,
    },
    {
      src: "/images/image-carousel/Rijksoverheid_embroidery 2.JPG",
      alt: "Rijksoverheid",
      orientation: "horizontal" as const,
    },
    {
      src: "/images/image-carousel/SNIPES2.jpg",
      alt: "Snipes",
      orientation: "horizontal" as const,
    },
    {
      src: "/images/image-carousel/SNIPES.jpg",
      alt: "Snipes",
      title: "Snipes",
      service: "pop-up",
      orientation: "horizontal" as const,
    },
    
    {
      src: "/images/image-carousel/Soul Pray Kill_cut&sew.jpeg",
      alt: "Soul Pray Kill",
      title: "Soul Pray Kill",
      service: "cut & sew",
      orientation: "vertical" as const,
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
      <div className={styles.heroImage}>
        <Image
          src="/images/hero_bg.png"
          alt="Hero Image"
          width={2000}
          height={1000}
          priority
          />
      </div>
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
                    <button onClick={() => scrollTo(aboutRef)} className={styles.mobileNavLink}>
                      about
                    </button>
                    <button onClick={() => scrollTo(projectsRef)} className={styles.mobileNavLink}>
                      projects
                    </button>
                    <button onClick={() => scrollTo(servicesRef)} className={styles.mobileNavLink}>
                      services
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
                <button onClick={() => scrollTo(aboutRef)} className={styles.navLink}>
                  about
                </button>
                <button onClick={() => scrollTo(projectsRef)} className={styles.navLink}>
                  projects
                </button>
                <button onClick={() => scrollTo(servicesRef)} className={styles.navLink}>
                  services
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
            <HeroSection onContactClick={() => scrollTo(contactRef)} />
          </div>
          <div ref={projectsRef}>
            <ImageCarousel images={images} />
          </div>
          <div ref={servicesRef}>
            <Services />
          </div>
          <PartnerCarousel />
          <div ref={aboutRef}>
          <Accordion title={accordionData.title} subtitle={accordionData.subtitle} items={accordionData.items} />
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

