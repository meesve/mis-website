import Link from "next/link"
import styles from "@/styles/layout.module.css"
import Footer from "@/components/footer"
import PartnerCarousel from "@/components/partner-carousel"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import Accordion from "@/components/accordion"
import Services from "@/components/services"

export default function HomePage() {

  const accordionData = {
    title: "WHAT WE'RE MADE OF",
    subtitle: "100% MADE IN STITCHES",
    items: [
      {
        title: "PEAK PERFECTION",
        content: (
          <>
            <p>We take pride in our attention to detail, ensuring every garment is made with care and precision.</p>
            <p>Our focus is on durability, creating long-lasting pieces that hold up over time.</p>
            <p>By using high-quality materials and advanced machinery, we stay ahead of the curve.</p>
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
            </p>
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
            </p>
            <p>But that's not what it's about. What really matters is what you want. We're here to make it happen.</p>
          </>
        ),
      },
      {
        title: "SCALABILITY & FLEXIBILITY",
        content: (
          <>
            <p>Whether you're just starting out or an industry veteran, we adapt to your brand's unique needs.</p>
            <p>
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
            </p>
            <p>We go beyond branding, we're crafting legacies.</p>
          </>
        ),
      },
      {
        title: "DIRTY 30",
        content: (
          <>
            <p>With over 30+ years of experience in commercial printing, we're not afraid to get our hands dirty.</p>
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
          <Accordion title={accordionData.title} subtitle={accordionData.subtitle} items={accordionData.items} />
          <Services />
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

