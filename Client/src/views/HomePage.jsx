import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import Herocomponent from '../components/HeroComponent';
import '../styles/App.css'; // Import the CSS file for styling
import '../styles/Cursor.css'; // Import the CSS file for cursor styling

function HomePage() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <NavbarComponent />
                <div className="flex-1 mt-4">
                    <Herocomponent />
                </div>
            </div>
            <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
        </div>
    );
}

export default HomePage;
