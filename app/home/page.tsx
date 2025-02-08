import Link from "next/link"
import styles from "@/styles/layout.module.css"
import Footer from "@/components/footer"
import PartnerCarousel from "@/components/partner-carousel"
import Image from "next/image"
import ClippedTextSVG from "@/components/text-bubble"

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
            <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "4rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
            >
              <ClippedTextSVG 
                shape="shape1" 
                text={[
                  { 
                    text: "Crafting Legacie with Made In Stitchess", 
                    fontSize: '1.5rem',
                  },
                  { 
                    text: "At Made in Stitches, we elevate brands through high-quality clothing production, custom printing,", 
                  },
                  { 
                    text: "and diverse branding solutions. From artist merchandise and corporate apparel to intricate embroidery, ", 
                    
                  },
                  { 
                    text: "custom stickers, and labels, we're a dynamic and innovative one-stop-shop", 
                    
                  },
                  { 
                    text: "that caters to all your branding needs.", 
                   
                  }
                ]} 

                x={20} 
                y={40} 
                lineHeight={20}
                firstLineSpacing={35}
              />
              <ClippedTextSVG 
                shape="shape2" 
                text={[
                  { 
                    text: "Beyond entertainment, we've partnered with government entities, SMEs,",
                    x: 425,
                    y: 80
                  },
                  { 
                    text: "and various sectors, including hospitality, construction, retail, festivals,",
                    x: 425,
                    y: 100
                  },
                  { 
                    text: "and popular restaurant chains such as 'The Avocado Show'.",
                    x: 570,
                    y: 120
                  },
                  { 
                    text: "Your sports club, bar, educational institution, event, or conference could be next in line...",
                    x: 230,
                    y: 140
                  }
                ]} 
              />
              <ClippedTextSVG 
                shape="shape3" 
                text={[
                  { 
                    text: "What sets us apart is our fusion of innovative design and meticulous craftsmanship.", 
                  },
                  { 
                    text: "We master various printing techniques, from Full Color and Digital to Direct to Foil (DTF) and screen printing.", 
                  },
                  { 
                    text: "Coupled with specialized services like creating comprehensive bookworks and engaging flyers.", 
                  },
                  {
                    text: "Our unique offerings encompass white-label services, pop-up events, and exclusive"
                  },
                  {
                    text: "limited-edition merchandise. We provide a full spectrum of services"
                  },
                  {
                    text: "to enhance your brand presence and identity."
                  }
                ]} 
                x={20} 
                y={40} 
                lineHeight={20}
                firstLineSpacing={20}
              />
            </div>
          </div>
          <PartnerCarousel />
        </main>
      </div>
      <Footer />
    </div>
  )
}

