import React, { useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import Card from '../components/card';
import ProjectsController from '../controllers/ProjectsController';

function ProjectCard({ card }) {
    console.log(card.type); // Print card.type to the console
    return (
        <Card
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
            tech={card.tech}
            status={card.status}
            url={card.url}
            buttonText={card.buttonText}
            type={card.type}
        />
    );
}

function AllProjectsPage() {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [selectedTech, setSelectedTech] = useState('');

    const cardData = ProjectsController.getCardData();

    const handleTechChange = (tech) => {
        setSelectedTech(tech);
        if (tech === 'Mobile App development') {
            console.log(1);
        } else if (tech === 'Fullstack Development') {
            console.log(2);
        } else if (tech === 'Desktop Apps') {
            console.log(3);
        } else if (tech === 'See All Projects') {
            console.log(0);
        }
    };

    // Filter card data based on selected technology
    const filteredCardData = selectedTech && selectedTech !== 'See All Projects'
        ? cardData.filter(card => {
            if (selectedTech === 'Mobile App development' && card.type === 'mobile') {
                return true;
            }
            if (selectedTech === 'Fullstack Development' && card.type === 'fullstack') {
                return true;
            }
            if (selectedTech === 'Desktop Apps' && card.type === 'desktop') {
                return true;
            }
            return false;
        })
        : cardData;

    return (
        <div>
            <div className='h-80 bg-gradient-to-r from-black via-gray-600 to-black mt-20'>
                <p className='text-4xl sm:text-6xl text-white font-bold text-center pt-20'>All Projects</p>
                <p className='text-xs sm:text-sm text-white font-light text-center mt-8'>
                    Full Stack Development | Mobile App Development | UI & UX | AI and ML
                </p>
            </div>

            <div className="relative flex flex-col mx-4 sm:mx-10 mt-8 bg-white rounded-xl shadow-md p-4">
                <p className="text-start font-bold text-xl text-blue-gray-00"><i className="fas fa-filter mr-2"></i>Filter by Technology</p>
                <nav className="flex flex-col sm:flex-row sm:gap-4 p-2 font-normal text-blue-gray-700">
                    {['See All Projects', 'Mobile App development', 'Fullstack Development', 'Desktop Apps'].map((tech, index) => (
                        <div key={index} role="button" className="flex items-center p-2 leading-tight transition-all rounded-lg hover:bg-blue-gray-50 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900">
                            <label htmlFor={`horizontal-list-${tech.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center cursor-pointer">
                                <div className="grid place-items-center mr-3">
                                    <div className="inline-flex items-center">
                                        <label className="relative flex items-center cursor-pointer">
                                            <input
                                                name="horizontal-list"
                                                id={`horizontal-list-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                                                type="radio"
                                                className="peer relative h-5 w-5 appearance-none rounded-full border border-blue-gray-200 checked:border-gray-900 transition-all"
                                                onChange={() => handleTechChange(tech)}
                                            />
                                            <span className="absolute text-gray-900 transition-opacity opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                    <circle cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <p className="text-base font-medium text-blue-gray-400">{tech}</p>
                            </label>
                        </div>
                    ))}
                </nav>
            </div>

            <div className="flex flex-col items-center space-y-4 mt-10 px-4 sm:px-0">
                {filteredCardData.slice(0, showAllProjects ? filteredCardData.length : 25).map((card, index) => (
                    <ProjectCard key={index} card={card} />
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <button
                    className='text-white font-bold py-2 px-4 rounded mt-4 bg-blue-500'
                    onClick={() => setShowAllProjects(!showAllProjects)}
                >
                    {showAllProjects ? 'Show Less' : 'Show More'}
                </button>
            </div>

            <div><NavbarComponent /></div>
        </div>
    );
}

export default AllProjectsPage;
