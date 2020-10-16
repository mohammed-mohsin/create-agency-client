import React, { useEffect, useState } from 'react';
import { Dots } from 'react-preloaders';
import { Link } from 'react-router-dom';

import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([])
    // const loading = true

    // services.length<0? <Dots/>:

    useEffect(() => {
        fetch('https://limitless-retreat-44666.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



 




    return (
        <section className="c_a_services">
            <div className="container">
                <h3 className="text-center medium_font_size font-weight-bold color_two">Provide awesome <span className="color_three">services</span></h3>
                <div style={{marginTop: '100px'}} className="row ">



                    {
                        services.map((service => <SingleService key={service._id} service={service} />))
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;