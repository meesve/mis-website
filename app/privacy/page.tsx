import Image from "next/image"
import Link from "next/link"
import styles from "../terms/terms.module.css"

export default function PrivacyPage() {
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
        <Link href="/terms" className={styles.Link}>
          terms and conditions
        </Link>
        <Link href="/privacy" className={styles.activeLink}>
          privacy policy
        </Link>
      </nav>

      <main className={styles.content}>
        
        <p className={styles.lastUpdated}>Last updated: 15 January 2023</p>

        <section>
          <h2 className={styles.sectionTitle}>1. Important information and who we are</h2>
          <p className={styles.paragraph}>
            This privacy notice aims to give you information on how we collect and process your personal data
            including any data you may provide to us directly via our website or otherwise.
          </p>
          <p className={styles.paragraph}>
            It is important that you read this privacy notice together with any other privacy notice,
            fair processing notice or privacy policy we may provide at specific occasions when we are collecting or
            processing personal data about you so that you are fully aware of how and why we are using your data.
          </p>
          <p className={styles.paragraph}>
            Contact details: info@madeinstitches.nl
            Postal address: Melbournestraat 52, 1175BN, The Netherlands
            Telephone number: +020 4567893
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>2. The data we collect about you</h2>
          <p className={styles.paragraph}>
            Personal data means any information about an individual from which that person can be identified.
            It does not include data where the identity has been removed (anonymous data).
          </p>
          <p className={styles.paragraph}>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className={styles.list}>
            <li>Identity Data includes first name, last name, username, title, date of birth and gender.</li>
            <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
            <li>Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us.</li>
            <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access our website.</li>
            <li>Profile Data includes orders made by you, your interests, preferences, feedback and survey responses.</li>
            <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>3. How is your personal data collected?</h2>
          <p className={styles.paragraph}>
            We use different methods to collect data from and about you including through:
          </p>
          <ul className={styles.list}>
            <li>Direct interactions with our website and services</li>
            <li>Cookies and tracking technologies</li>
            <li>Third parties and publicly available sources</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>4. How we use your personal data</h2>
          <p className={styles.paragraph}>
            We will only use your personal data when the law allows us. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className={styles.list}>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests</li>
            <li>Where we need to comply with a legal or regulatory obligation</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>5. Data security</h2>
          <p className={styles.paragraph}>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
            used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents,
            contractors and other parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>6. Data retention</h2>
          <p className={styles.paragraph}>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for,
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>7. Your legal rights</h2>
          <p className={styles.paragraph}>
            You have the right to:
          </p>
          <ul className={styles.list}>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <p className={styles.paragraph}>
          If you have any questions about this privacy policy or our privacy practices, please contact us at info@madeinstitches.nl
        </p>
      </main>
    </div>
  )
}

