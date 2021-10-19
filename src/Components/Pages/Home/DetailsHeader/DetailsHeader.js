import './DetailsHeader.css';

import React from 'react';

const DetailsHeader = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 flex justify-center">

                <div className="grid grid-cols-1 md:grid-cols-3  -mt-10 md:w-12/12 lg:w-9/12 justify-items-stretch">

                    <div className="h-full">
                        <div className="emergency-case p-12 py-8 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <h2 className="text-lg text-white font-medium title-font my-4">
                                Emergency Cases</h2>
                            <p className="leading-relaxed text-gray-200">Please feel free to contact our friendly reception staff with any medical enquiry.</p>
                            <span className="flex items-center py-3 mt-2">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 border rounded-full p-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </span>
                                <h3 className="text-white text-2xl">01061245741</h3>
                            </span>
                        </div>
                    </div>


                    <div className="h-full">
                        <div className="doctors-timetabel p-12 py-8 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <h2 className="text-lg text-white font-medium title-font my-4">Doctors Timetable</h2>
                            <p className="leading-relaxed text-gray-100">Qualified doctors available six days a week, view our timetable to make an appointment.</p>
                            <button className="px-4 py-2 mt-5 text-white font-bold transition-colors duration-200 transform border rounded-lg focus:outline-none">View Timetable</button>
                        </div>
                    </div>


                    <div className="h-full">
                        <div className="opening-hours p-12 py-8 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                            <h2 className="text-lg text-white font-medium title-font my-4">Opening Hours</h2>
                            <table className="text-white w-full">
                                <tbody>
                                    <tr>
                                        <td className="">Monday – Friday</td>
                                        <td className="">8.00 – 7:00 pm</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Saturday</td>
                                        <td className="py-1">9.00 – 8.00 pm</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Sunday</td>
                                        <td className="py-1">10.00 – 9.00 pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DetailsHeader;