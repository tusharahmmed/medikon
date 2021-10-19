
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {

    // get id 
    const { serviceId } = useParams();

    //  set services
    const [serviceList, setServiceList] = useState([]);

    // get data
    useEffect(() => {
        fetch('/services.json')
            .then(response => response.json())
            .then(data => setServiceList(data));
    }, []);


    const serviceItem = serviceList.find(service => service.id == serviceId);

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-6/6 pt-4 mb-10 object-cover object-center rounded" alt="hero" src={serviceItem?.img} />
                <div className="text-center lg:w-2/3 w-full flex justify-center flex-col items-center">
                    <h1 className="border-b-2 pb-2 md:w-4/12 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {serviceItem?.title}
                    </h1>
                    <p className="mb-8 text-2xl font-bold leading-relaxed">
                        <i>{serviceItem?.description}</i>
                    </p>
                    <div className="flex justify-center">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleService;