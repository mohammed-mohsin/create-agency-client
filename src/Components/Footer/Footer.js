import React from 'react';

const Footer = () => {
    return (
        <footer className='c_a_footer containet row '>
            <div className='col-md-12'>

                <p className='color_four font-weight-bold text-center p-5 '>	&copy; Copyright  Creative Agency {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;