import linkly from '../assets/projects/linkly.png'
import kaabank from '../assets/projects/kaa-bank.png'
import enrolmentForm from '../assets/projects/enrolment-form.png'
import schoolTimetable from '../assets/projects/school-timetable.png'
import solarSystem from '../assets/projects/solar-system.png'
function Projects() {
  const projects = [
    {
      title: 'Linkly – URL Shortener',
      category: 'Full-Stack Development | TS Academy Capstone',
      description:
        'A team-based full-stack capstone project focused on building a URL shortening application that transforms long URLs into shorter, shareable links. My primary reponsibility was frontend development, including page structure, reusable components, routing, authentication flows and API integration with backend.',
      technologies: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      status: 'Full-Stack Team Capstone Project',
      liveUrl: 'https://linkly-url.onrender.com',
      backendUrl: 'https://url-shortener-woht.onrender.com',
      repoUrl: 'https://github.com/ini-123/URL-Shortener',
      image: linkly 
    },
    {
      title: 'KAA Bank – Digital Banking System',
      category: 'Backend Development | TS Academy Assignment',
      description:
        'A digital banking backend assignment focused on banking-related functionality and backend architecture. The project involved organizing routes, controllers and models, with Swagger UI used for API documentation and testing.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Swagger UI'],
      status: 'Backend Assignment',
      repoUrl: 'https://github.com/Kaay220/KAA-Bank-Digital-Banking-System',
      image: kaabank
    },
    {
      title: 'CRUD Application',
      category: 'Backend Development | TS Academy Assignment',
      description:
        'A beginner backend project demonstrating Create, Read, Update and Delete operations. The application used an in-memory array for temporary data storage, while Postman was used to test API endpoints.',
      technologies: ['JavaScript', 'Node.js', 'Express.js', 'Postman'],
      status: 'Backend Assignment',
      repoUrl: 'https://github.com/Kaay220/student-api-assignment'
    },
    {
      title: 'Student Enrolment Form',
      category: 'Frontend Development | TS Academy Assignment',
      description:
        'A student enrolment form created as part of my frontend development training, practising HTML structure, form elements and CSS styling.',
      technologies: ['HTML5', 'CSS3'],
      status: 'Frontend Assignment',
      codepenUrl: 'https://codepen.io/editor/KaayVerse/pen/019cf808-773a-7846-b99f-795b0fc821d1?tab=%2Findex.html%7C%2Fstyle.css&orientation=left&panel=files&show=split',
      image: enrolmentForm
    },
    {
      title: 'School Timetable',
      category: 'Frontend Development | TS Academy Assignment',
      description:
        'A school timetable webpage built to practise structuring tabular information with HTML and styling the layout with CSS.',
      technologies: ['HTML5', 'CSS3'],
      status: 'Frontend Assignment',
      codepenUrl: 'https://codepen.io/editor/KaayVerse/pen/019ce33f-c6dd-718c-8a2b-77aead490aef?tab=%2Findex.html%7C%2Fstyle.css&orientation=left&panel=files&show=split',
      image: schoolTimetable
    },
    {
      title: 'Explore our Solar System Through Data',
      category: 'HTML Milestone Project | TS Academy',
      description:
        'An educational milestone project developed from a Figma design mockup. It focused on presenting information about the solar system through a structured webpage.',
      technologies: ['HTML5', 'Figma'],
      status: 'Milestone Project',
      codepenUrl: 'https://codepen.io/editor/KaayVerse/pen/019d25c1-f817-7724-9021-f2ad122062cc?tab=%2Findex.html&orientation=left&panel=files&show=split',
      image: solarSystem
    }
  ]

  return (
    <section className="projects section-padding" id="projects">
      <div className="section-heading">
        <p className="section-label">MY RECENT WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          A selection of academic projects and practical work from my software development journey.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            {project.image && (
              <img
                src={project.image} 
                alt={`${project.title}preview`}
                className="project-image"
              />
            )}
            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            
           <p className="project-status">
             {project.status}
           </p>

           <div className="project-links">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                 href={project.liveUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                  Live Demo
               </a>
              )}

              {project.backendUrl && (
                <a
                  href={project.backendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Backend API
               </a>
              )}

              {project.repoUrl && project.repoUrl !== '#' && (
                <a
                 href={project.repoUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                 GitHub Repository
               </a>
              )}

              {project.codepenUrl && project.codepenUrl !== '#' && (
                <a
                  href={project.codepenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                 >
                 View on CodePen
                </a>
              )}
           </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

