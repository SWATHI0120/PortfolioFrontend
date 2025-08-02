import React from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Home';
import SocialIcons from './pages/SocialIcons';
import About from './pages/About';

import Skills from './pages/Skills';
import Projects from './pages/Projects';
import CodingPlatforms from './pages/CodingPlatforms';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialIcons />
      <About />
      <Skills />
      <Projects />
      <CodingPlatforms />
      <Achievements/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;