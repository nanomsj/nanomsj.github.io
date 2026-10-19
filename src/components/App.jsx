import React from 'react';
import PortfolioProvider from '../context/context';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
// import Awards from '../components/Awards/Awards';
// import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const App = () => (
  <PortfolioProvider>
    <Navbar />
    <About />
    <Education />
    <Experience />
    <Projects />
    {/* <Awards /> */}
    {/* <Skills /> */}
    <Contact />
    <Footer />
  </PortfolioProvider>
);

export default App;
