import './NotFound.css';

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>

            <div class="flex justify-center flex-wrap place-items-center h-screen not-found">

                <div class="found-detail text-white shadow-lg rounded-xl  p-4 relative overflow-hidden">
                    <h1 className="text-center italic text-9xl font-bold">404</h1>
                    <h2 className="mb-4 text-lg md:text-5xl font-bold">Oops! That page can’t be found.</h2>
                    <span className="text-center flex justify-center">
                        <Link to="/"><button className="block appoinment-btn text-white inline-flex items-center border-0 py-1 px-3 duration-400	 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0">
                            <span className="mr-2">Back To Home</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                        </button></Link>
                    </span>
                </div>
            </div>


        </>
    );
};

export default NotFound;