import "./Skills.css";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Gatsby",
    "NextJS",
    "Wordpress",
    "Wix",
    "Bliss and Bone",
    "SASS",
    "LESS",
    "Git",
    "CI/CD",
    "Jest",
    "Enzyme",
  ];

  return (
    <section className="section skills" id="skills">
      <h2 className="title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <p key={Math.random()} className="skills-list-item">
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Skills;
