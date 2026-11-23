import { ArrowUp } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>GIFT<span>.</span></h2>
          <p>
            Building digital experiences with creativity
            and purpose.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/Kaay220"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size={19} />
          </a>

          <a
            href="https://linkedin.com/in/gift-egbunine-986b40366"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size={19} />
          </a>

          <a href="#home" aria-label="Back to top">
            <ArrowUp size={19} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Gift Kamsiyochi Egbunine.
          All rights reserved.
        </p>
        <p>Designed & Built with ❤️ by Gift</p>
      </div>
    </footer>
  )
}

export default Footer
