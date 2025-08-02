import React from "react";
import "../styles/Achievements.css"; // Make sure the path is correct

const achievements = [
  {
    name: "Portfolio Fest 2024",
    rank: "Second Place",
    year: "2024",
    certificateUrl: "https://example.com/hackathon-certificate.pdf",
  },
  {
    name: "Data Structures and Alogorithm",
    Platform: "Udemy",
    year: "2023",
    certificateUrl: "https://drive.google.com/file/d/1YZ3PvTbFXLGUxITW3IwkxOJqS1gGnHZS/view?usp=sharing",
  },
  {
    name: "Java programming",
    Platform: "Udemy",
    year: "2024",
    certificateUrl: "https://drive.google.com/file/d/1I3A_7ZE1YQrd-XrenA-9RhBzbLQO_FNg/view?usp=sharing",
  },
   {
    name: "Introduction to DataScience",
    Platform: "simplilearn",
    year: "2024",
    certificateUrl: "https://drive.google.com/file/d/11asXFPDZYh_5WEuWZOueiJHilWXBH9Fo/view?usp=sharing",
  },
   {
    name: "Python",
    Platform: "Guvi",
    year: "2024",
    certificateUrl: "https://drive.google.com/file/d/1DbQLLuJhNq8FBjoMucEw8tRKmUEbQmqs/view?usp=sharing",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="achievements-title">Achievements & Certifications</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <h3 className="achievement-name">{item.name}</h3>
            <p className="achievement-rank">{item.rank}</p>
             <p className="achievement-rank">{item.Platform}</p>
            <p className="achievement-year">{item.year}</p>
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="view-certificate-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
