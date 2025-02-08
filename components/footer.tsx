import Link from "next/link"
import styles from "@/styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.leftLinks}>
          <Link href="/terms" className={styles.link}>
            terms and conditions
          </Link>
          <Link href="/privacy" className={styles.link}>
            privacy policy
          </Link>
        </div>

        <div className={styles.rightLinks}>
          <div>
            <Link href="https://instagram.com" className={styles.link}>
              INSTAGRAM
            </Link>
          </div>
          <div>
            <Link href="/contact" className={styles.link}>
              CONTACT
            </Link>
          </div>
          <address className={styles.address}>
            Made in Stitches
            <br />
            Melbournestraat 25
            <br />
            1175 RM Lijnden
            <br />
            The Netherlands
          </address>
        </div>
      </div>
    </footer>
  )
}

