// src/controllers/ProjectsController.js

import cardData from '../models/cardData';

const ProjectsController = {
    getCardData: () => {
        // Here you could fetch data from an API or perform other logic
        return cardData;
    }
};

export default ProjectsController;
