import React from 'react';
import Contact from '../../Components/Contact/Contact';
import Feedback from '../../Components/Feedback/Feedback';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Services from '../../Components/Services/Services';
import Works from '../../Components/Works/Works';

const Home = () => {
    return (
        <>
            <Header/>
            <Services/>
            <Works/>
            <Feedback/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;