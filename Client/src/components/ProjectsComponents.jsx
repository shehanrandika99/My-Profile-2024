// src/views/ProjectsComponents.js

import React from 'react';
import Card from '../components/card';
import ProjectsController from '../controllers/ProjectsController';

function ProjectsComponents() {
    const cardData = ProjectsController.getCardData();

    return (
        <div className="px-4 md:px-16">
            <div>
                <p className="text-6xl font-bold text-center mb-8">Projects</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        description={card.description}
                        buttonText={card.buttonText}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsComponents;
