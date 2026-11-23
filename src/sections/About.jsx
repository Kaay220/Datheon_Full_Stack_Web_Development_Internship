import { Code2, Lightbulb, Rocket } from 'lucide-react'
import gift from '../assets/projects/gift-profile.png'
function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="section-heading">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p className="section-subtitle">
          A little about who I am and what I do.
        </p>
      </div>

      <div className="about-container">

        {/* left side */}
        <div className="about-left">
          <div className="about-text">
           <h3>
             Passionate about building
             <span> digital experiences.</span>
           </h3>

           <p>
             I'm Gift Kamsiyochi Egbunine, a Software Developer
             passionate about creating responsive and
             functional web applications.
           </p>

           <p>
             I enjoy turning ideas into practical digital
             solutions, exploring modern technologies and
             continuously improving my development skills.
             My interests span frontend development,
             backend technologies and database management.
           </p>

           <p>
             I believe in writing clean, maintainable code
             and creating applications that provide
             meaningful experiences for users.
            </p>

           <a href="#projects" className="about-link">
             Explore my projects →
           </a>
         </div>

         <div className="about-cards">
           <div className="about-card">
             <Code2 size={28} />
             <h4>Clean Code</h4>
             <p>
               Writing organized and maintainable code
               for reliable applications.
             </p>
           </div>

           <div className="about-card">
             <Lightbulb size={28} />
              <h4>Creative Thinking</h4>
             <p>
               Finding practical solutions to
               development challenges.
             </p>
           </div>

           <div className="about-card">
              <Rocket size={28} />
             <h4>Continuous Growth</h4>
             <p>
               Learning new technologies and
               improving my development skills.
             </p>
           </div>
         </div>
       </div>

       {/* right side */}
       <div className="about-image">
         <img src={gift} alt="Gift Kamsiyochi Egbunine" />
       </div>
      </div>
    </section>
  )
}

export default About
