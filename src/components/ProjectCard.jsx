import React from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import '../styles/projectcard.css';

const ProjectCard = ({ title, description, image, techStack = [], codeLink, demoLink, detailsLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-used">
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <FaCodeBranch /> Code
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <FiExternalLink /> Live Demo
            </a>
          )}
          {detailsLink && (
            <a href={detailsLink} target="_blank" rel="noopener noreferrer">
              <AiOutlineInfoCircle /> More Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



// import React from 'react';
// import '../styles/projectcard.css';

// const ProjectCard = ({ title, description, image, techStack = [] }) => {
//   return (
//     <div className="project-card">
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <p><strong>Tech:</strong> {techStack.join(", ")}</p>
//     </div>
//   );
// };


// export default ProjectCard;
