import React from "react";
import ProjectCard from "../components/ProjectCard";
import img1 from "../assets/Project portfolio.png";
import img2 from "../assets/fresh mart.png";
import img3 from "../assets/Expensetracker.png";
import img4 from "../assets/Eventproject.png";


const Projects = () => {
  return (
    <section id="projects" className="section-projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard
          title="My Portfolio"
          description="This is a personal portfolio website built to showcase my skills, projects, and experience. It highlights my work, resume, and contact information in a professional layout."
          image={img1}
          techStack={["React", "CSS", "JavaScript"]}
          codeLink="https://github.com/myrepo"
          demoLink="https://myportfolio.com"
          detailsLink="https://myportfolio.com/details"
        />
        <ProjectCard
          title="Fresh Greeny Market"
          // description="MERN app for Natural items ,there we can add items to card to buy."
          description="This is a MERN stack web app for buying natural items like fruits, vegetables, and herbal products. Users can browse items and add them to a cart for purchase."
          image={img2}
          techStack={["React", "Express.js", "Node.js", "MongoDB"]}
          codeLink="https://github.com/SWATHI0120/client"
          demoLink="https://fruitshopfrontend.vercel.app/"
          detailsLink="https://ainotemate.live/details"
        />
         <ProjectCard
          title="Expense Tracker"
          description=" MERN stack app to track your daily income and expenses. Users can add transactions and view their balance, income, and spending."
          image={img3}
          techStack={["React", "Express.js", "Node.js", "MongoDB"]}
          codeLink="https://github.com/SWATHI0120/Expense-Tracker"
          demoLink="https://expense-tracker-liard-tau.vercel.app/"
          detailsLink="https://ainotemate.live/details"
        />
         <ProjectCard
          title="Eventify"
          description="MERN app for note-taking with AI productivity features."
          image={img4}
          techStack={["React", "Express.js", "Node.js", "MongoDB"]}
          codeLink="https://github.com/ainotemate"
          demoLink="https://ainotemate.live"
          detailsLink="https://ainotemate.live/details"
        />
      </div>
    </section>
  );
};

export default Projects;


// import React from "react";
// import ProjectCard from "../components/Projectcard"; // Ensure this component exists
// import img1 from "../assets/Project portfolio.png"; // replace with actual path or a valid image

// const Projects = () => {
//   return (
//     <section id="projects" className="section">
//       <h2>Projects</h2>
//       <div className="project-grid">
//         <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//          <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//          <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//          <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//          <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//         {/* Add more ProjectCards as needed */}
//       </div>
//     </section>
//   );
// };

// export default Projects;
