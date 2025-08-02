import React from 'react';
import '../styles/section.css';
import {
  FaCode,
  FaTools,
  FaDatabase,
  FaCogs,
  FaProjectDiagram,
  FaMobileAlt,
} from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md'; // ✅ Design icon

const skillSections = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    skills: ['VS Code', 'Postman'],
  },
  {
    title: 'Framework/Library',
    icon: <FaProjectDiagram />,
    skills: ['React', 'NodeJS','Express'],
  },
  {
    title: 'Database',
    icon: <FaDatabase />,
    skills: [ 'MongoDB', 'MySQL'],
  },
  // {
  //   title: 'Architecture',
  //   icon: <FaCogs />,
  //   skills: ['BLoC (Business Logic Component)', 'Clean Architecture'],
  // },
  {
    title: 'CI/CD',
    icon: <FaMobileAlt />,
    skills: ['GitHub'],
  },
  {
    title: 'Design',
    icon: <MdDesignServices />, // ✅ Using Material Design icon
    skills: ['Figma', 'Canva'],
  },
   
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-wrapper">
        {skillSections.map((section, index) => (
          <div key={index} className="skill-box">
            <h3 className="skill-title">
              <span className="icon">{section.icon}</span> {section.title}
            </h3>
            <ul className="skill-list">
              {section.skills.map((skill, i) => (
                <li key={i} className="skill-item">• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
