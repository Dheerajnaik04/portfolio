import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} transition-all duration-300`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Header />
      <Skills />
      <Internships />
      <Projects />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
