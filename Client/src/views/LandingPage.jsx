import React, { useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import HomePage from './HomePage';
import HeroComponent from '../components/HeroComponent';
import HeroComponent2 from '../components/HeroComponent2';
import '../styles/Cursor.css'; // Import the CSS file for cursor styling
import AboutMeComponent from '../components/AboutMeComponent';
import SkilsComponent from '../components/SkilsComponent';
import ProjectsComponents from '../components/ProjectsComponents';
import ContactMeComponent from '../components/ContactMeComponent';
import EducationComponent from '../components/EducationComponent';
import ExperiencesComponent from '../components/ExperiencesComponent';
import FooterComponent from '../components/FooterComponent';

function LandingPage() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const aboutMeRef = React.useRef(null);
    const skillsRef = React.useRef(null);
    const projectsRef = React.useRef(null);
    const contactmeRef = React.useRef(null);
    const educationRef = React.useRef(null);
    const experienceRef = React.useRef(null);
    const footerRef = React.useRef(null);

    return (
        <div onMouseMove={handleMouseMove} className='bg-gradient-to-r from-[#ffffff] via-[#e4efde] to-[#fff]' >
            <NavbarComponent
                scrollToAboutMe={() => scrollToRef(aboutMeRef)}
                scrollToSkills={() => scrollToRef(skillsRef)}
                scrollToProjects={() => scrollToRef(projectsRef)}
                scrollToContactMe={() => scrollToRef(contactmeRef)}
                scrollToEducation={() => scrollToRef(educationRef)}
                scrollToExperience={() => scrollToRef(experienceRef)}
                scrollToFooter={()=> scrollToRef(footerRef)}
            />
            <div className="mt-20" ref={aboutMeRef}>
                <HeroComponent />
                <HeroComponent2 />
                <AboutMeComponent />
            </div>
            <div ref={skillsRef}>
                <SkilsComponent />
            </div>
            <div ref={projectsRef}>
                <ProjectsComponents />
            </div>
            {/* <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div> */}
  
            <div ref={educationRef}>
                <EducationComponent/>
            </div>
            <div ref={experienceRef}>
                <ExperiencesComponent/>
            </div>
            <div ref={contactmeRef}>
                <ContactMeComponent/>
            </div>
            <div ref={footerRef}>
                <FooterComponent/>
            </div>
        </div>
    );
}

export default LandingPage;
