import './App.css';
import React from 'react'
import Hero from 'components/Hero';
import Techstack from 'components/Techstack';
import Experience from 'components/Experience';
import Projects from 'components/Projects';
import Navbar from 'components/Navbar';
import Education from 'components/Education';
import Certificate from 'components/Certificate';

function App() {
  return (
    <div className='text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.6),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-4'>
        <Navbar />
        <Hero />
        <Techstack />
        <Education />
        <Certificate />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
