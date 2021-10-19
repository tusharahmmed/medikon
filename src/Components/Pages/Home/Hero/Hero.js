import './Hero.css';
// import background from '../../../img/slider/h1_slider2.jpg';
import React from 'react';

const Hero = () => {

    const headerStyle = {
        backgroundImage: 'url(https://i.ibb.co/vBHJLJs/h1-slider2.jpg)',

    }
    return (
        <section style={headerStyle} className="text-gray-600 body-font hero-section pb-8 ">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="pl-10 xl:pl-40 lg:flex-grow w-full xl:w-3/6 lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h3 className="title-font sm:text-md text-md font-bold mb-4 font-medium text-blue-500">
                        We Work To Take Care Of Your Health And Body
                    </h3>
                    <h3 className="hero-title text-2xl md:text-5xl lg:text-7xl mb-4 font-bold ">The World's Best
                        <br className="hidden lg:inline-block" />Quality Treatment
                    </h3>
                    <p className="hero-description mb-8 font-bold leading-relaxed md:w-1/2">The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
                    <div className="hero-icons flex justify-center flex-wrap mt-2">
                        <img src="https://i.ibb.co/64Cjtst/slider-icon1.jpg" alt="" />
                        <img src="https://i.ibb.co/XXq1TYm/slider-icon2.jpg" alt="" />
                        <img src="https://i.ibb.co/cbW4jjH/slider-icon3.jpg" alt="" />
                        <img src="https://i.ibb.co/QJ6SjFy/slider-icon4.jpg" alt="" />
                        <div className="h-auto w-auto bg-blue-500 text-white p-2 flex flex-col justify-center items-center font-bold cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                            Explore All</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;