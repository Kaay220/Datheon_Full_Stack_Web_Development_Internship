import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState('')

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    setStatusType('loading')

    try {
      const response = await fetch(
        'https://formspree.io/f/xljbjwqw',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )

      if (response.ok) {
        setStatus('Message sent successfully! 🎉')
        setStatusType('success')

        setFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        setStatus('Something went wrong. Please try again.')
        setStatusType('error')
      }
    } catch (error) {
      setStatus('Network error. Please check your connection.')
      setStatusType('error')
    }
  }

  return (
    <section className="contact section-padding" id="contact">
      <div className="section-heading">
        <p className="section-label">TAP IN</p>
        <h2>Let's Work <span>Together</span></h2>
        <p className="section-subtitle">
          Have a project or opportunity in mind? I'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's start a conversation.</h3>

          <p>
            I'm always open to discussing new projects,
            opportunities and ideas. Feel free to reach out!
          </p>

          <a href="mailto:giftkamsi2@gmail.com" className="contact-link">
            <Mail size={20} />
            <span>giftkamsi2@gmail.com</span>
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/Kaay220"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size={22} />
            </a>

            <a
              href="https://linkedin.com/in/gift-egbunine-986b40366"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size={22} />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status === 'Sending...'}>
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            <Send size={17} />
          </button>

          {status && (
            <p className={`form-status ${statusType}`} role="status" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
