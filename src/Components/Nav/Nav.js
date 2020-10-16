import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logos/logo.png'

const Nav = () => {
    return (
        <section className="c_a_nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <Link to="/" > <img src={logo} width="150" height="50" className="d-inline-block align-top" alt="Logo" loading="lazy" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item ml-4 active">
                                <NavLink className=" nav-link" to="/" activeClassName="selected">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item ml-4">
                                <NavLink className=" nav-link" to="/" >Our Portfolio</NavLink>
                            </li>
                            <li className="nav-item ml-4">
                                <NavLink className=" nav-link" to="/" >Our Team</NavLink>
                            </li>
                            <li className="nav-item ml-4">
                                <NavLink className=" nav-link" to="/" >Contact Us</NavLink>
                            </li>
                            <li className="nav-item ml-4">
                                <NavLink className=" nav-link" to="/login" >

                                    <button style={{ width: '134px' }} className="c_a_button ">Login</button>
                                </NavLink>
                            </li>

                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Nav;