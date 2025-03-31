import Image from "next/image"
import Link from "next/link"
import styles from "./terms.module.css"

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/home">
        <div className={styles.logo}>
          <Image src="/images/logo_mis.svg" alt="MADE in STITCHES" width={120} height={40} priority />
        </div>
        </Link>
      </header>

      <nav className={styles.navigation}>
        <Link href="/terms" className={styles.activeLink}>
          terms and conditions
        </Link>
        <Link href="/privacy" className={styles.link}>
          privacy policy
        </Link>
      </nav>

      <main className={styles.content}>
        <p className={styles.lastUpdated}>Last updated: November 08, 2019</p>

        <p className={styles.paragraph}>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
          https://madeinstitches.nl website (the "Service") operated by Made in Stitches ("us", "we", or "our").
        </p>

        <p className={styles.paragraph}>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          These Terms apply to all visitors, users and others who access or use the Service.By accessing or using the
          Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not
          access the Service. The Terms and Conditions agreement for Made in Stitches has been created with the help of
          Terms and Conditions Generator.
        </p>

        <h2 className={styles.sectionTitle}>Links To Other Web Sites</h2>
        <p className={styles.paragraph}>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by
          Colourcake. Colourcake has no control over, and assumes no responsibility for, the content, privacy policies,
          or practices of any third party web sites or services. You further acknowledge and agree that Colourcake shall
          not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by
          or in connection with use of or reliance on any such content, goods or services available on or through any
          such web sites or services.
        </p>

        <p className={styles.paragraph}>
          We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or
          services that you visit.
        </p>

        <h2 className={styles.sectionTitle}>Governing Law</h2>
        <p className={styles.paragraph}>
          These Terms shall be governed and construed in accordance with the laws of the Netherlands, without regard to
          its conflict of law provisions.
        </p>

        <p className={styles.paragraph}>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
          these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our
          Service, and supersede and replace any prior agreements we might have between us regarding the Service.
        </p>

        <h2 className={styles.sectionTitle}>Print Productions</h2>
        <p className={styles.paragraph}>
          Colourcake applies fixed delivery conditions of the KVGO on print productions.
        </p>

        <h2 className={styles.sectionTitle}>Changes</h2>
        <p className={styles.paragraph}>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes
          a material change will be determined at our sole discretion.
        </p>

        <p className={styles.paragraph}>
          By continuing to access or use our Service after those revisions become effective, vyou agree to be bound by
          the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>

        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.paragraph}>If you have any questions about these Terms, please contact us.</p>
      </main>
    </div>
  )
}

