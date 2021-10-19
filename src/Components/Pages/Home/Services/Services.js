import './Services.css';

import React, { useEffect, useState } from 'react';
import ServiceItem from '../../../Shared/ServiceItem/ServiceItem';

const Services = () => {

    //  set services
    const [serviceItems, setServiceItems] = useState([]);
    // get data
    useEffect(()=>{
        fetch('/services.json')
        .then(response => response.json())
        .then(data => setServiceItems(data));
    },[]);
    

    return (
        <section className="services text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto w-9/12">
                <div className="flex flex-col text-center w-full mb-20">
                    <h3 className="service-subtitle">The Best Medical And General Practice Care!</h3>
                    <h1 className="service-title text-2xl font-bold title-font mb-4 text-gray-700 md:text-4xl">Providing Medical Care For The<br />
                        Sickest In Our Community.
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 -m-4 gap-10">

                {   
                        serviceItems.map(item => {
                            return <ServiceItem key={item.id} item={item}></ServiceItem>
                        })
                 }
                </div>
            </div>
        </section>
    );
};

export default Services;