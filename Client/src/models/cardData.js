const cardData = [
    {
        title: 'Color adjustment tool for color-blind people',
        imageUrl: 'url-to-image-1',
        description: 'This project aims to assist individuals with color vision deficiency...',
        buttonText: 'View on Github',
        status: 'public',
        url: 'https://github.com/shehanrandika99/FInal-Year-Project-2023-2024.git',
        tech: ['React', 'Python', 'Flask', 'TensorFlow', 'JavaScript','Node js', 'web extensions','AWS','Native Java Mobile App'],
        category: 'individual', // Added category
        type: 'fullstack' // Added type
    },
    {
        title: 'Virtual Room Planning System - HCI',
        imageUrl: '..',
        description: 'This is a Virtual Room Planning System that allows users and designers...',
        buttonText: 'View on Github',
        url: 'a href={url}',
        status: 'private',
        tech: ['Java Swing', 'Jmonkey', 'Figma UI'],
        category: 'group', // Added category
        type: 'desktop' // Added type
    },
    {
        title: 'Cinnamon Red Hotel Room Booking System',
        imageUrl: 'url-to-image-3',
        description: 'This is a Hotel Room Booking System that allows users to book rooms...',
        buttonText: 'View on Github',
        status: 'public',
        url: 'https://github.com/ravindu0823/Hotel-Room-Booking-System.git',
        tech: ['Vite','MERN','Tailwind CSS','Github pipe lines','Docker','Digital Ocean','PayPal Sandbox','Nodemailer'],
        category: 'group', // Added category
        type: 'fullstack' // Added type
    },
    {
        title: 'Learning-management-system',
        imageUrl: 'url-to-image-4',
        description: 'The mobile application for university students and lecturers enhances...',
        buttonText: 'View on Github',
        url: 'https://github.com/ravindu0823/Hotel-Room-Booking-System.git',
        tech: ['Native Java', 'XML', 'Firebase'],
        status: 'public',
        category: 'group', // Added category
        type: 'mobile' // Added type
    },
    {
        title: 'Garbage Management System',
        imageUrl: 'url-to-image-4',
        description: 'This is a web application for Garbage Management System. This application is developed using ASP .NET Framework and C# programming language. This application is developed for clean garbage areas in sri lanka',
        buttonText: 'View on Github',
        url: 'https://github.com/ravindu0823/ASP-.NET-Web-Application',
        tech: ['ASP.NET', 'SQL Server', 'C#', 'HTML 5', 'CSS', 'JavaScript','Boostrap 5'],
        status: 'public',
        category: 'group', // Added category
        type: 'fullstack' // Added type
    },
    {
        title: 'Easy shoping E-commerce website',
        imageUrl: 'url-to-image-4',
        description: 'According This project in the web application development module.we created this website Called “Easy Shopping”.Using this online shopping application user can same time, money user can avoid unnecessary delays in shopping as a recreational activity. So goal this web application is to create a web application is to create a web based interface for online customers. This system is easy to use and overcome all the difficulties of the customers. and this is my first project of the university .',
        buttonText: 'View on Github',
        url: 'https://github.com/shehanrandika99/Easy-Shopping-E-commerce-website.git',
        tech: ['PHP', 'HTML5', 'CSS', 'JavaScript', 'MYSQL'],
        status: 'public',
        category: 'group', // Added category
        type: 'fullstack' // Added type
    },
    {
        title: 'Kidney Disease Prediction System Mobile App',
        imageUrl: 'url-to-image-4',
        description: 'This Flutter/Dart-based mobile application allows users to input their medical report data and instantly receive a prediction on whether they have kidney disease. The app leverages machine learning models and is powered by a Python Flask backend to provide accurate and fast results. Easy to use and accessible, it aims to help users monitor their kidney health conveniently.',
        buttonText: 'View on Github',
        url: 'https://github.com/shehanrandika99/Easy-Shopping-E-commerce-website.git',
        tech: ['Flutter', 'Dart', 'Python', 'Jupyter Notebook','FLask REST API', 'Firebase'],
        status: 'public',
        category: 'group', // Added category
        type: 'mobile' // Added type
    },
    {
        title: 'Hackto-night-challenges',
        imageUrl: 'url-to-image-4',
        description: 'This project was developed for the NSBM FOSS Community s github Hackto-Night-Challenges, focusing on creating an eCommerce function. It uses PHP for the backend and HTML, CSS, and JavaScript for the frontend. The project was completed based on a given scenario, with detailed information available in the GitHub README file. and This is my first project of the push to the GitHub.',
        buttonText: 'View on Github',
        url: 'https://github.com/shehanrandika99/hackto-night-challenges.git',
        tech: ['PHP','HTML5', 'CSS', 'JavaScript', 'MYSQL'],
        status: 'public',
        category: 'group', // Added category
        type: 'fullstack' // Added type
    },
    // add github link
    {
        title: 'Movie Ticket Booking System',   
        imageUrl: 'url-to-image-4',
        description: 'This J2EE Java web development project, built using MySQL and Bootstrap, features two main interfaces: admin and user. Admins can manage movies by adding, removing, and updating listings. Users can book movie tickets and select seats, paying securely via the PayPal API. Upon successful payment, users receive an email via SMTP server detailing their booking information, including seat numbers and price.',
        buttonText: 'View on Github',
        url: 'https://github.com/shehanrandika99/',
        tech: ['java','J2EE', 'HTML5', 'JavaScript', 'Bootstrap', 'MySQL', 'PayPal API', 'SMTP Server'],
        status: 'public',
        category: 'group', // Added category
        type: 'fullstack' // Added type
    },
    {
        title: 'Node js CRUD Application',   
        imageUrl: 'url-to-image-4',
        description: 'This project is a simple CRUD application that allows users to create, read, update, and delete data. It uses Node.js and Express.js to handle the backend, database for used MOngoDB and using javascript OOP consepts.',
        buttonText: 'View on Github',
        url: 'https://github.com/shehanrandika99/hackto-night-challenges.git',
        tech: ['Node js','Express js', 'MongoDB', 'JavaScript',],
        status: 'public',
        category: 'group', // Added category
        type: 'fullstack' // Added type
    },
    {
        title: 'Portfolio Website',   
        imageUrl: 'url-to-image-4',
        description: 'This portfolio website showcases my work and skills using modern web technologies. Built with Vite, React, Tailwind CSS, HTML5, CSS, JavaScript, and Docker, it features a sleek and responsive design with engaging animations in JavaScript. The site highlights my projects, experience, and provides an easy way to connect with me.',
        buttonText: 'View on Github',
        url: 'https://github.com/shehanrandika99/My-Profile-2024.git',
        tech: ['Vite','React', 'Tailwind CSS', 'HTML5', 'CSS', 'JavaScript', 'Docker'],
        status: 'public',
        category: 'group', // Added category
        type: 'fullstack' // Added type
    },
    // Add more project data as needed
];

export default cardData;
