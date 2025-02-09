"use client"

import { useState, type FormEvent } from "react"
import styles from "@/styles/contact-form.module.css"
import { Heart } from "lucide-react"

type ReferralSource = "instagram" | "facebook" | "friend" | "other"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referralSource: "instagram" as ReferralSource,
    message: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={`${styles.label} ${styles.required}`}>
            first name
          </label>
          <input
            id="firstName"
            type="text"
            required
            className={styles.input}
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={`${styles.label} ${styles.required}`}>
            last name
          </label>
          <input
            id="lastName"
            type="text"
            required
            className={styles.input}
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={`${styles.label} ${styles.required}`}>
            email
          </label>
          <input
            id="email"
            type="email"
            required
            className={styles.input}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.label}>
            phone
          </label>
          <input
            id="phone"
            type="tel"
            className={styles.input}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="referralSource" className={styles.label}>
            how did you hear about us?
          </label>
          <select
            id="referralSource"
            className={styles.select}
            value={formData.referralSource}
            onChange={(e) => setFormData({ ...formData, referralSource: e.target.value as ReferralSource })}
          >
            <option value="instagram">instagram</option>
            <option value="facebook">facebook</option>
            <option value="friend">friend</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            thread us a message
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      </form>

      <div className={styles.contactInfo}>
        <h1 className={styles.title}>
          touch base! <Heart className={styles.heart} fill="currentColor" />
        </h1>
        <p>+31 (0) 20 400 3003</p>
        <p>info@madeinstitches.nl</p>

        <div className={styles.address}>
          <div className={styles.addressContent}>
            <p>Made in Stitches</p>
            <p>Melbournestraat 25</p>
            <p>1175 RM Lijnden</p>
            <p>The Netherlands</p>
          </div>
        </div>
      </div>
    </div>
  )
}

