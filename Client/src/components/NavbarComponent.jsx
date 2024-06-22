import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarComponent() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const activeItem = location.pathname === '/' ? 'Home' : location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(1).slice(1);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="fixed w-full z-20 top-0 start-0  backdrop-blur-lg">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900">AGS Randika</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-gray-900 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white border border-black dark:hover:bg-lime-300 dark:focus:ring-lime-300">Download Resume</button>
                        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={menuOpen}>
                            <span className="sr-only">Open main menu</span>
                            {menuOpen ? (
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <Link
                                    to="/"
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeItem === 'Home' ? 'text-gray-900 ' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700'}`}
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeItem === 'About' ? 'text-black ' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700'}`}
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeItem === 'Services' ? 'text-black ' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700'}`}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeItem === 'Contact' ? 'text-black ' : 'text-gray-900 hover:bg-gray-100  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700'}`}
                                >
                                    Skils
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarComponent;
