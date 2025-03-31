import Link from "next/link"
import styles from "@/styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={styles.copyright}>
            COPYRIGHT © 2025 MADE IN STITCHES V.O.F.
          </div>
          <div className={styles.poweredBy}>
            POWERED BY MAYBERRY
          </div>
        </div>

        <div className={styles.rightLinks}>
          <Link href="https://instagram.com" className={styles.link}>
            INSTAGRAM
          </Link>
          <Link href="/contact" className={styles.link}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.bottomLinks}>
          <Link href="/terms" className={styles.link}>
            terms and conditions
          </Link>
          <Link href="/privacy" className={styles.link}>
            privacy policy
          </Link>
        </div>
        <address className={styles.address}>
          Made in Stitches<br />
          Melbournestraat 25<br />
          1175 RM Lijnden<br />
          The Netherlands
        </address>
      </div>
    </footer>
  )
}

