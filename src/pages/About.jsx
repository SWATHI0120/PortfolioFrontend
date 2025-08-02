// src/pages/About.jsx
import React from 'react';
// import '../styles/section.css';
import '../styles/education.css'; // Make sure this file exists

const About = () => {
  return (
    
    <section id="about" className="section">
           <div className="resume-button-wrapper">
  <button
    className="resume-btn"
    onClick={() =>
      window.open("https://drive.google.com/file/d/1mYtjvV4VbCbIRq5uN2we46vX_OuyNRGT/view?usp=sharing", "_blank")
    }
  >
    View My Resume
  </button>
</div>
      <div className="about-box">
      <h2>About Me</h2>
      <p>
        Hi! I’m a React developer who loves building clean, responsive, and high-performing web apps. I’ve worked on projects using the MERN stack, where I handled both the frontend and backend to create smooth user experiences. I’ve also developed an AI Agent application, combining smart features with intuitive design to make the app both powerful and easy to use.
        I enjoy learning new technologies, turning ideas into real projects, and writing code that feels as good to use as it does to build.
      </p>
      </div>

      {/* 🎓 Education + 💼 Internship Side-by-Side */}
      <div className="education-internship-wrapper">
        {/* 🎓 Education Section */}
        <div className="education-section">
          <h2>🎓 Education</h2>

          <div className="education-card">
            <div className="dot" />
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-title">B.Tech in Information Technology</h3>
                <span className="badge current-badge">Current</span>
              </div>
              <p className="edu-dates">2023 - 2027</p>
              <p>Sri Eshwar College of Engineering</p>
              <p>CGPA: 8.10</p>
            </div>
          </div>

          <div className="education-card">
            <div className="dot" />
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-title">Higher Secondary Certificate (HSC)</h3>
                <span className="badge completed-badge">Completed</span>
              </div>
              <p className="edu-dates">2022 - 2023</p>
              <p>Sivaganga Government Model School</p>
              <p>Percentage: 88%</p>
            </div>
          </div>

          <div className="education-card">
            <div className="dot" />
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-title">Secondary School Leaving Certificate (SSLC)</h3>
                <span className="badge completed-badge">Completed</span>
              </div>
              <p className="edu-dates">2021 - 2022</p>
              <p>Government Higher Secondary School</p>
              <p>Successfully Completed</p>
            </div>
          </div>
        </div>

        {/* 💼 Internship Section */}
        <div className="education-section">
          <h2>💼 Internship</h2>

          <div className="education-card">
            <div className="dot" />
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-title">MERN Stack Internship</h3>
                <a
                  className="badge view-badge"
                  href="https://drive.google.com/file/d/1mthVs-8zaiQ_PDct8KCaFYyFHvFzzMln/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
              <p className="edu-dates">Feb 2024 - Mar 2024</p>
              <p>BETTER TOMORROW</p>
            </div>
          </div>

          <div className="education-card">
            <div className="dot" />
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-title">AI Agent Internship</h3>
                <a
                  className="badge view-badge"
                  href="https://drive.google.com/file/d/1TATGtkhpvNgbquKGDMSQvli0WU2p4Uvf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
              <p className="edu-dates">July 2025</p>
              <p>CODEBOOSTERS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
