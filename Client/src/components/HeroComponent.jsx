import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileImage from '../assets/images/image-2.png';
import HeroComponent2 from './HeroComponent2';
import Lottie from 'react-lottie'; // Import the Lottie component
import animationData4 from '../lottieAnimations/Animation - 5.json';
import Button from './Button';

function HeroComponent() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData4, // Use the imported animationData4
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen mt-12 font-sans">
            <img src={ProfileImage} width={300} height={300} className="rounded-full" alt="Profile" />
            <h1 className="text-4xl font-normal text-lime-700 ">Hello There, I'm</h1>
            <h1 className="text-6xl font-bold mt-4">Shehan Randika</h1>
            <TypeAnimation
                sequence={[
                    'R & D Software Engineer',
                    1000,
                    'Full Stack Developer',
                    1000,
                    'Mobile App Developer',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block', marginTop: '16px' }}
                repeat={Infinity}
            />
            <Button />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Lottie options={defaultOptions} height={100} width={100} />
            </div>
        </div>
    );
}

export default HeroComponent;
