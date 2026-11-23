import { useState } from 'react'
import {
  Compass,
  Home,
  User,
  Code2,
  Folder,
  Mail,
  X
} from 'lucide-react'
import './DroneNav.css'

function DroneNav({activeSection}) {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Skills', icon: Code2, id: 'skills' },
    { name: 'Projects', icon: Folder, id: 'projects' },
    { name: 'Contact', icon: Mail, id: 'contact' }
  ]

  return (
    <div className="drone-nav">
      {open && (
        <div className="drone-panel">
          <div className="drone-panel-header">
            <span>Quick Navigation</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <X size={18} />
            </button>
          </div>

          {links.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? 'drone-active' : ''}
                onClick={() => setOpen(false)}
              >
                <Icon size={17} />
                {link.name}
              </a>
            )
          })}
        </div>
      )}
      
      <span className="drone-label">
        VIEWING: {activeSection.toUpperCase()}
      </span>
      
      <button
        className="drone-orb"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close quick navigation' : 'Open quick navigation'}
        aria-expanded={open}
      >
        {open ? <X size={25} /> : <Compass size={25} />}
      </button>
    </div>
  )
}

export default DroneNav
