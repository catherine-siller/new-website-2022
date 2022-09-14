import './Projects.css'
import LaunchIcon from '../../assets/svg/launch.svg'

const Projects = () => {
  return (
    <section id='projects' className='section projects'>
      <h2 className='section-title'>Projects</h2>
      <div className='projects-grid'>
        <div className='project'>
          <p className='project-description'></p>
            <a
              href="https://www.andrealynnofficial.com/"
              aria-label="Andrea Lynn Beauty Website"
              className='link link--icon'
            >
              Andrea Lynn Beauty
            </a>
        </div>
        <div className='project'>
          <p className='project-description'></p>
            <a
              href="https://www.centralcoastfacelab.com/"
              aria-label="Central Coast Face Lab Website"
              className='link link--icon'
            >
              Central Coast Face Lab
            </a>
        </div>
      </div>
    </section>
  )
}

export default Projects