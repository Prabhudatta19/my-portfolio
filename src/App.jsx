import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaveDivider from './components/WaveDivider';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Wave Divider going from hero to about */}
      <WaveDivider flip color="#1F1B24" />
      <About />
      <WaveDivider color="#1F1B24" />
      <Experience />
      <WaveDivider flip color="#1F1B24" />
      <Projects />
      <WaveDivider color="#1F1B24" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
