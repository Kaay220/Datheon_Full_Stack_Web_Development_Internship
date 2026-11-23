import { useState, useEffect } from 'react'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import DroneNav from './components/DroneNav'
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
  Download,
  Code2
} from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Contact'
  ]
  useEffect(() => {
    const sections = document.querySelectorAll(
     'main section[id]'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
         if (entry.isIntersecting) {
           setActiveSection(entry.target.id)
          }
        })
      },
      {
       threshold: 0.4
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">&lt;/&gt;</span>
          GiftPortfolio<span className="dot">.</span>
        </a>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={activeSection === link.toLowerCase() ? 'active-link' : ''}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#contact" className="hire-btn">
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">

            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="intro">HELLO, I'M GIFT KAMSIYOCHI EGBUNINE</p>

            <h1>
              Building Digital
              <br />
              Experiences That
              <br />
              <span>Make an Impact.</span>
            </h1>

            <p className="hero-description">
              I'm Gift Kamsiyochi Egbunine, a Software Developer focused on
              building beautiful, responsive and user-friendly
              web applications. I turn ideas into functional
              digital solutions and I work with modern technologies to create seamless user experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work <ArrowUpRight size={18} />
              </a>

              <a href="/Gift_Egbunine_Software_Development_CV.pdf" className="secondary-btn" download>
                Download CV <Download size={18} />
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Kaay220" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/gift-egbunine-986b40366" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="code-card">
              <div className="code-header">
                <span></span>
                <span></span>
                <span></span>
                <p>developer.js</p>
              </div>

              <div className="code-content">
                <p><span className="purple">const</span> developer = {'{'}</p>
                <p className="indent"><span className="blue">name</span>: <span className="green">'Gift Kamsiyochi Egbunine'</span>,</p>
                <p className="indent"><span className="blue">role</span>: <span className="green">'Software Developer'</span>,</p>
                <p className="indent"><span className="blue">skills</span>: [<span className="green">'Express.js'</span>, <span className="green">'React.js'</span>, <span className="green">'Node.js'</span>, <span className="green">'CSS'</span>],</p>
                <p className="indent"><span className="blue">passion</span>: <span className="green">'Building for the web'</span>,</p>
                <p className="indent"><span className="blue">creative</span>: <span className="orange">true</span>,</p>
                <p>{'}'}</p>
                <br />
                <p><span className="purple">function</span> <span className="blue">createMagic</span>() {'{'}</p>
                <p className="indent"><span className="purple">return</span> <span className="green">'Amazing websites!'</span>;</p>
                <p>{'}'}</p>
              </div>

              <div className="code-footer">
                <Code2 size={15} />
                <span>Always learning. Always building.</span>
              </div>
            </div>

            <div className="floating-tag tag-one">React.js</div>
            <div className="floating-tag tag-two">JavaScript</div>
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <DroneNav activeSection={activeSection}/>
      </main>
    </div>
  )
}

export default App
