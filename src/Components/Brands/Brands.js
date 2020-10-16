import React from 'react';
import brand1 from '../../images/logos/slack.png'
import brand2 from '../../images/logos/google.png'
import brand3 from '../../images/logos/uber.png'
import brand4 from '../../images/logos/netflix.png'
import brand5 from '../../images/logos/airbnb.png'

const Brands = () => {
    return (
        <section className='c_a_brands'>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 col-sm-6 mt-5">
                        <img className="m-2" height='50' weight='150' src={brand1} alt=""/>
                    </div>
                    <div className="col-md-4 col-sm-6 mt-5">
                        <img className="m-2" height='50' weight='150' src={brand2} alt=""/>
                    </div>
                    <div className="col-md-4 col-sm-6 mt-5">
                        <img className="m-2" height='50' weight='150' src={brand3} alt=""/>
                    </div>
                    <div className="col-md-4 col-sm-6 mt-5">
                        <img className="m-2" height='50' weight='150' src={brand4} alt=""/>
                    </div>
                    <div className="col-md-4 col-sm-6 mt-5">
                        <img className="m-2" height='50' weight='150' src={brand5} alt=""/>
                    </div>
                        
                    
                    
                    
                    {/* <img height='50' weight='150' src={brand2} alt=""/>
                    <img height='50' weight='150' src={brand3} alt=""/>
                    <img height='50' weight='150' src={brand4} alt=""/>
                    <img height='50' weight='150' src={brand5} alt=""/> */}
                    

                </div>
            </div>
        </section>
    );
};

export default Brands;