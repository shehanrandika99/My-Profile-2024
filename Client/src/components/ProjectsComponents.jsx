import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card';
import ProjectsController from '../controllers/ProjectsController';

function ProjectCard({ card }) {
    return (
        <Card
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
            tech={card.tech}
            status={card.status}
            url={card.url}
            buttonText={card.buttonText}
        />
    );
}

function ProjectsComponents() {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [category, setCategory] = useState('all');
    const [type, setType] = useState('all');
    const cardData = ProjectsController.getCardData();

    const filterProjects = () => {
        return cardData.filter(card => {
            const categoryMatch = category === 'all' || card.category === category;
            const typeMatch = type === 'all' || card.type === type;
            return categoryMatch && typeMatch;
        });
    };

    return (
        <div className="px-4 md:px-16 ">
            <div>
                <p className="text-6xl font-bold text-center mb-8">Projects</p>
            </div>

            <div className="flex flex-col items-center space-y-4 mt-10">
                {filterProjects().slice(0, showAllProjects ? filterProjects().length : 3).map((card, index) => (
                    <ProjectCard key={index} card={card} />
                ))}
                {!showAllProjects && (
                    <Link to="/all-projects">
                        <button
                            className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded"
                        >
                            Show all projects
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ProjectsComponents;
