import React from 'react'
import Hero from 'components/Hero';
import Techstack from 'components/Techstack';
import Experience from 'components/Experience';
import Projects from 'components/Projects';
import Navbar from 'components/Navbar';
import Education from 'components/Education';
import Certificate from 'components/Certificate';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Techstack />
            <Education />
            <Certificate />
            <Experience />
            <Projects />
        </>
    );
}

export default HomePage