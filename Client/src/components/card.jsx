// src/views/Card.js

import React from 'react';

function Card({ title, imageUrl, description, buttonText }) {
    return (
        <div className="w-full max-w-2xl p-4 text-center bg-stone-600 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-black">{title}</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
            <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                {buttonText}
            </a>
        </div>
    );
}

export default Card;
