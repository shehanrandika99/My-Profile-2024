import React, { useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import HomePage from './HomePage';
import HeroComponent from '../components/HeroComponent';
import HeroComponent2 from '../components/HeroComponent2';
import '../styles/Cursor.css'; // Import the CSS file for cursor styling
import AboutMeComponent from '../components/AboutMeComponent';
import SkilsComponent from '../components/SkilsComponent';
import ProjectsComponents from '../components/ProjectsComponents';

function LandingPage() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div onMouseMove={handleMouseMove}>
            <NavbarComponent />
            <div className="mt-20">
                <HeroComponent />
                <HeroComponent2 />
                <AboutMeComponent/>
                <SkilsComponent/>
                <ProjectsComponents/>
            </div>
            {/* <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div> */}
        </div>
    );
}

export default LandingPage;
