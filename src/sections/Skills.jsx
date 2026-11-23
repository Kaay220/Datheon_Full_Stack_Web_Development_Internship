import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench
} from 'lucide-react'

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frontend Development',
      icon: <Monitor size={24} />,
      skills: ['React', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Development Tools',
      icon: <Wrench size={24} />,
      skills: ['Git', 'GitHub', 'Postman']
    }
  ]

  return (
    <section className="skills section-padding" id="skills">
      <div className="section-heading">
        <p className="section-label">MY EXPERTISE</p>
        <h2>Technical <span>Skills</span></h2>
        <p className="section-subtitle">
          Technologies and tools I work with.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <div className="skill-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
