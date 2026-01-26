// Skills.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillRefs = useRef([]);

  const skills = [
    { name: "React", level: "70%" },
    { name: "Power BI", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "SQL", level: "85%" },
    { name: "Python", level: "80%" },
    { name: "CSS", level: "90%" },
  ];

  useEffect(() => {
    skillRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: el.dataset.level,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "restart pause resume reset",
          },
        }
      );
    });
  }, []);

  return (
    <section id="Skills" className="skills">
      <h2>Skills</h2>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={skill.name}>
            {/* Skill Name + Percent */}
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}</span>
            </div>

            {/* Skill Bar */}
            <div className="skill-bar">
              <div
                className="skill-fill"
                data-level={skill.level}
                ref={(el) => (skillRefs.current[index] = el)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
