import './Header.css';
import logo from '../../../img/logo/logo-dark.png'

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

    // get logedin user 

    const {user,handleLogOut} = useAuth();

    return (
        <header className="text-gray-600 body-font">
            <div className=" mx-auto flex flex-wrap px-10 flex-col md:flex-row items-center items-center justify-between md:justify-center">
                <span className="flex items-center justify-between md:space-around md:">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="logo" src={logo} alt="" />
                </a>
                <span className="search-icon lg:border-r-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </span>
                </span>
                <nav className=" md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-2 md:mr-3 xl:mr-5 hover:text-gray-900">Home</Link>
                    <Link to="/services" className="mr-2 md:mr-3 xl:mr-5 hover:text-gray-900">Our Services</Link>
                    <Link to="/doctors" className="mr-2 md:mr-3 xl:mr-5 hover:text-gray-900">Doctors</Link>
                    <Link to="/contact" className="mr-2 md:mr-3 xl:mr-5 hover:text-gray-900">Contacts</Link>
                    {!user.email && 
                    <>
                    <Link to="/login" className="mr-2 md:mr-3 xl:mr-5 hover:text-gray-900">Login</Link>
                    <Link to="/signup" className="mr-2 md:mr-3 xl:mr-5 hover:text-gray-900">Sign Up</Link>
                    </>
                    }
                </nav>
                {user.email &&
                <>
                <h4 className="mr-2 font-bold text-gray-500">{user.displayName}</h4>
                <button onClick={handleLogOut} className="bg-gray-700 mr-4 text-white inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Log out</button>
                </>
                }
                <button className="appoinment-btn text-white inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg> Make an Appoinment
                </button>
            </div>
        </header>
    );
};

export default Header;