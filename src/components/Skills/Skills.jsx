import './Skills.css'

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Gatsby',
    'NextJS',
    'SASS',
    'LESS',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  ]
      
  return (
    <section className='section skills' id='skills'>
      <h2 className='title'>Skills</h2>
      <ul className='skills-list'>
        {skills.map((skill) => (
          <li key={Math.random()} className='skills-list-item'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills