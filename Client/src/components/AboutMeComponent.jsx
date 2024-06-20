import React from 'react';
import Image3 from '../assets/images/image-3.jpg';
import '../styles/AboutMeComponent.css'; // Import the component-specific CSS file

function AboutMeComponent() {
  return (
    <div className="p-4 font-custom">
      <div>
        <p className='text-6xl font-bold my-2 text-center'>About Me</p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center p-4 mt-12">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src={Image3} alt="Profile" className="h-auto w-80 md:w-60 lg:w-80" />
          </div>
          <div className="text-justify md:text-left md:max-w-xl">
            <p className='text-lg text-justify' >
              I am a passionate and dedicated developer with a strong focus on creating meaningful and engaging web and mobile applications. My goal is to leverage technology to solve real-world problems and make a positive impact on people's lives. Currently, I am in my final year of pursuing a BSc in Software Engineering at Plymouth University, UK, through NSBM Green University. I have completed an internship as an R&D Software Engineer, where I gained valuable experience working on ASP.NET sites, machine learning projects, and mobile applications. My expertise spans across React, Android (Java), and React Native, allowing me to build robust and user-centric applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeComponent;
