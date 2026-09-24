import { useState } from 'react'

function Contact() {
  const [message, setMessage] = useState('')
  const [showHelp, setShowHelp] = useState(false)

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
            Enter your message using the form below. I will get back to you as
            soon as possible!
          </p>
        </div>
      )}

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Your email" />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />

        <p className="char-count">Characters: {message.length}</p>

        <button type="submit" className="submit-btn">Send Message</button>
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
