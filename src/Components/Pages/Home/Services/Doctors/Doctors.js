import './Doctors.css';

import React from 'react';

const Doctors = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto w-9/12">
                <div class="flex flex-col w-full mb-20">
                    <h1 class="service-title text-2xl font-bold title-font mb-4 text-gray-700 md:text-4xl">Meet Our Doctors</h1>
                    <p className="md:w-7/12 lg:w-5/12 text-gray-400">Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 -m-4 gap-10">

                    {/* doctors items */}

                    <div class="bg-white doc-item">
                        <div class="h-full flex flex-col items-center ">
                            <span className="service-thumb">
                            <img alt="team" class="docs-img flex-shrink-0 w-full h-68 object-cover object-center mb-4" src="https://i.ibb.co/Bfr95cY/Doctor-01-350x350.jpg" />
                            </span>
                            <div class="w-full p-4 doctors-description">
                                <h2 class="title-font font-medium text-2xl text-gray-900">Richard Muldoone</h2>
                                <h3 className="doctors-subtitle">Cardiology Specialist</h3>
                                <p class="my-4 text-gray-400">
                                Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George's University School of Medicine.                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white doc-item">
                        <div class="h-full flex flex-col items-center ">
                            <span className="service-thumb">
                            <img alt="team" class="docs-img flex-shrink-0 w-full h-68 object-cover object-center mb-4" src="https://i.ibb.co/25NP0HR/Doctor-03-350x350.jpg" />
                            </span>
                            <div class="w-full p-4 doctors-description">
                                <h2 class="title-font font-medium text-2xl text-gray-900">Maria Andaloro</h2>
                                <h3 className="doctors-subtitle">Pediatrician</h3>
                                <p class="my-4 text-gray-400">
                                Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed rigorous exams by the American Board of Pediatrics.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white doc-item">
                        <div class="h-full flex flex-col items-center ">
                            <span className="service-thumb">
                            <img alt="team" class="docs-img flex-shrink-0 w-full h-68 object-cover object-center mb-4" src="https://i.ibb.co/qd7g0TD/Doctor-02-350x350.jpg" />
                            </span>
                            <div class="w-full p-4 doctors-description">
                                <h2 class="title-font font-medium text-2xl text-gray-900">Michael Brian</h2>
                                <h3 className="doctors-subtitle">Dermatologists</h3>
                                <p class="my-4 text-gray-400">
                                Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the appearance of the skin, hair, and nails.                            </p>
                            </div>
                        </div>
                    </div>

                    


                </div>
            </div>
        </section>
    );
};

export default Doctors;