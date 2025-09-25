import React from 'react';
import '../styles/codingPlatforms.css';

const codingPlatforms = [
  {
    name: 'LeetCode',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    problemsSolved: 46,
    rank: '111,169',
    batch: '2025',
    link: 'https://leetcode.com/u/swathi00123/',
  },
  {
    name: 'CodeChef',
     icon: 'https://latestlogo.com/wp-content/uploads/2024/09/codechef.png', 
      problemsSolved: 100,
    rank: '3-star',
    batch: '2025',
    link: 'https://www.codechef.com/users/swathi0120',
  },
  {
    name: 'HackerRank',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
    problemsSolved: 64,
    rank: 'Gold',
    batch: '2025',
    link: 'https://www.hackerrank.com/profile/swathi_n2023it',
  },
  // {
  //   name: 'GeeksforGeeks',
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg',
  //   problemsSolved: 280,
  //   rank: '3-star',
  //   batch: '2025',
  //   link: 'https://auth.geeksforgeeks.org/user/your-profile',
  // },
  {
    name: 'SkillRack',
    icon: 'https://cdn.skillrack.com/img/logo.gif',
   
    problemsSolved: 345,
    rank: 'Level 6',
    batch: '2025',
    link: 'https://www.skillrack.com/faces/resume.xhtml?id=484664&key=a61fcf01922240b7667029f67760d6ed66016335',
  },
];

const CodingPlatforms = () => {
  return (
    <section className="coding-platforms-section" id="coding-platforms">
      <h2 className="section-title">Coding Platforms</h2>
      <div className="platforms-wrapper">
        {codingPlatforms.map((platform, index) => (
          <div className="platform-card" key={index}>
            <div className="logo-wrapper">
              <img src={platform.icon} alt={platform.name} className="platform-icon" />
            </div>
            <h3 className="platform-name">{platform.name}</h3>
            <ul className="platform-stats">
              <li><strong>Problems Solved:</strong> {platform.problemsSolved}</li>
              {/* <li><strong>Rank:</strong> {platform.rank}</li>
              <li><strong>Badge:</strong> {platform.batch}</li> */}
            </ul>
            <a
              href={platform.link}
              className="view-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingPlatforms;
