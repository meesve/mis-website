import Link from "next/link"
import styles from "@/styles/layout.module.css"
import Footer from "@/components/footer"
import PartnerCarousel from "@/components/partner-carousel"
import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
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

            <nav className={styles.nav}>
              <Link href="/about" className={styles.navLink}>
                about
              </Link>
              <Link href="/projects" className={styles.navLink}>
                projects
              </Link>
              <Link href="/shop" className={styles.navLink}>
                shop
              </Link>
              <Link href="/contact" className={styles.navLink}>
                contact
              </Link>

              <div className={styles.langSwitch}>
                <button>🇳🇱</button>
                <button>🇬🇧</button>
              </div>
            </nav>
          </header>

          <div className={styles.pageContent}>
            <div className={styles.heroSection}>
              <Image
                src="/images/assets/top_banner.svg"
                alt="We create, you shine"
                width={800}
                height={240}
                className={styles.topBanner}
              />
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaButton}>
                  <Image 
                    src="/images/assets/button.svg"
                    alt="Thread us a message"
                    width={400}
                    height={80}
                  />
                </Link>
                <Link href="tel:+yourphonenumber" className={styles.ctaButton}>
                  <Image
                    src="/images/assets/button2.svg"
                    alt="Call now"
                    width={200}
                    height={80}
                  />
                </Link>
              </div>
            </div>
          </div>
          <PartnerCarousel />
          <Image
            src="/images/assets/tear.svg"
            alt="wrapper"
            width={1700}
            height={120}
            priority
          />
          <ContactForm />
          
        </main>
      </div>
      <Footer />
    </div>
  )
}

