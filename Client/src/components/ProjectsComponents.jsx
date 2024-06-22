import React, { useState } from 'react';
import Card from '../components/card';
import ProjectsController from '../controllers/ProjectsController';

function ProjectsComponents() {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const cardData = ProjectsController.getCardData();

    return (
        <div className="px-4 md:px-16">
            <div>
                <p className="text-6xl font-bold text-center mb-8">Projects</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
                {cardData.slice(0, showAllProjects ? cardData.length : 3).map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        description={card.description}
                        tech={card.tech}
                        status={card.status}
                        url={card.url}
                        buttonText={card.buttonText}
                    />
                ))}
                {!showAllProjects ? (
                    <button
                        onClick={() => setShowAllProjects(true)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Show other projects
                    </button>
                ) : (
                    <button
                        onClick={() => setShowAllProjects(false)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Show fewer projects
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProjectsComponents;
