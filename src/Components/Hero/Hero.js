import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImage from '../../images/logos/Frame.png'

const Hero = () => {
    return (
        <section className="c_a_hero">
            <div className="container">
                <div className="row d-flex align-items-center  ">
                    <div className="col-md-6 text-sm-center text-md-left">
                        <h1 className='font-weight-bold  display-sm-4'>Let’s Grow Your <br />Brand To The <br />Next Level</h1>
                        <p className='color_one smallest_font_size mt-4 '> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                        <NavLink className=" nav-link" to="/login" >
                            <button style={{ width: '170px' }} className="c_a_button mt-3">Hire Us</button>

                        </NavLink>
                    </div>
                    <div className="col-md-6  c_a_hero__right  ">
                        <img className='img-fluid ' width="625" height="425" src={heroImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;