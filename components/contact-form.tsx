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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          referralSource: "instagram" as ReferralSource,
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
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

        {submitStatus === "success" && (
          <div className={styles.successMessage}>
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className={styles.errorMessage}>
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        <button 
          type="submit" 
          className={styles.sendButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "sending..." : "send"}
        </button>
      </form>

      <div className={styles.contactInfo}>
        <h1 className={styles.title}>
          touch base! <Heart className={styles.heart} fill="currentColor" />
        </h1>
        <div className={styles.contactInfoItems}>
          <p>+31 (0) 20 400 3003</p>
          <p>info@madeinstitches.nl</p>
        </div>

        <div className={styles.address}>
          <h1 className={styles.title}>visit us!</h1>
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

