import { useState } from 'react'

const API_URL = 'http://localhost:5000/api/messages'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields before sending.')
      return
    }

    setSending(true)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.error || 'Failed to send message.')
      }

      setSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      alert(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <button
        className="help-toggle-btn"
        onClick={() => setShowHelp(!showHelp)}
      >
        {showHelp ? 'Hide Help' : 'Show Help'}
      </button>

      {showHelp && (
        <div className="help-box">
          <p>
            Enter your message using the form below. Your message will be saved
            and I will get back to you as soon as possible!
          </p>
        </div>
      )}

      {submitted && (
        <div className="success-box">
          <p>✅ Your message has been sent successfully!</p>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />

        <p className="char-count">Characters: {message.length}</p>

        <button type="submit" className="submit-btn" disabled={sending}>
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {message && (
        <div className="live-preview">
          <h3>Live Preview</h3>
          <p>{message}</p>
        </div>
      )}
    </section>
  )
}

export default Contact
