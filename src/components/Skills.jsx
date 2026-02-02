// Skills.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

      <motion.div
        className="skill-list"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
