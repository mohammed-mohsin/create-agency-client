import React from 'react';
import Brands from '../Brands/Brands';
import Hero from '../Hero/Hero';
import Nav from '../Nav/Nav';
import Works from '../Works/Works';

const Header = () => {
    return (
        <section className="c_a_header">
            <Nav />
            <Hero />
            <Brands/>
        </section>
    );
};

export default Header;