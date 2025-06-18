import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App; 