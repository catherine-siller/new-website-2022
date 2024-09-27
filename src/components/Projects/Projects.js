import "./Projects.css";

const Projects = () => {
  return (
    <section id="Projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <a
          href="https://www.andrealynnofficial.com/"
          aria-label="Andrea Lynn Beauty Website"
          className="link"
          rel="noreferrer"
          target="_blank"
        >
          <div className="project">
            <p className="project-title">Andrea Lynn Beauty</p>
            <img
              alt="Catherine Siller"
              src={require("../../assets/images/andrea-lynn-beauty.png")}
            />
          </div>
        </a>
        <a
          href="https://www.centralcoastfacelab.com/"
          aria-label="Central Coast Face Lab Website"
          className="link"
          rel="noreferrer"
          target="_blank"
        >
          <div className="project">
            <p className="project-title">Central Coast Face Lab</p>
            <img
              alt="Catherine Siller"
              src={require("../../assets/images/face-lab.png")}
            />
          </div>
        </a>
        <a
          href="https://valadezcpa.com/"
          aria-label="Valadez CPA Website"
          className="link"
          rel="noreferrer"
          target="_blank"
        >
          <div className="project">
            <p className="project-title">Valadez CPA</p>
            <img
              alt="Catherine Siller"
              src={require("../../assets/images/valadez-cpa.png")}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
