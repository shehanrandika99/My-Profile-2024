// src/components/Card.jsx

import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import GithubButton from './GithubButton';

function Card({ title, imageUrl, description, buttonText, tech,status,url }) {
    return (
        <div className="w-full max-w-4xl p-4 text-center bg-stone-600 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
            <div className='w-24 h-auto border rounded-xl bg-black text-white flex items-center justify-center'>
                <i className='fab fa-github'></i>
                <p className='ml-2'>{status}</p>
            </div>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-black">{title}</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 text-justify">{description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
                {tech && tech.map((technology, index) => (
                    <div key={index} className='w-auto h-auto border rounded-xl bg-white text-gray-600 flex items-center justify-center px-4 py-2'>
                        {technology}
                    </div>
                ))}
            </div>
            <GithubButton url={url}/>
        </div>
    );
}

export default Card;
