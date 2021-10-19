import './ServiceItem.css';

import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = (props) => {
    // extract data 
    const {id,title,img,short_description} = props?.item;
    return (
        <div className="bg-white service-item">
                        <div className="h-full flex flex-col items-center ">
                            <span className="service-thumb">
                            <img alt="team" className="service-img flex-shrink-0 w-full h-68 object-cover object-center mb-4" src={img} />
                            </span>
                            <div className="w-full p-4">
                                <h2 className="title-font font-medium text-2xl text-gray-900">{title}</h2>
                                <p className="my-4 text-gray-400">{short_description}</p>
                                <Link to={`/services/${id}`}><button className="read-more flex px-4 py-2 mt-5 text-gray-700 font-bold transition-colors duration-200 transform border border-4 border-gray-900 rounded-md focus:outline-none "><svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg><span className="ml-1"> Read More</span></button></Link>

                            </div>
                        </div>
                    </div>
    );
};

export default ServiceItem;