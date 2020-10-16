import React, { useContext } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as firebase from "firebase/app";
import { faCommentDots, faHdd, faPlus, faShoppingCart, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const handleSignOut = () => {
        // Sign Out 
        firebase.auth().signOut().then(function () {



            sessionStorage.clear()
        }).catch(function (error) {

            console.log(error)
        });
    }



    return (
        <section className=''>
            <div className="c_a_sidebar ">
                <Link to="/" className="d-flex justify-content-center p-5" > <img src={logo} width="150" height="50" className=" align-top" alt="Logo"
                    loading="lazy" /> </Link>


                <div className='  '>



                    {
                        loggedInUser.admin ? <>
                            <NavLink to="/servicelist" className="text-decoration-none active">
                                <h5 className="text-dark m-5 "> <span className='pr-2'> <FontAwesomeIcon icon={faHdd} />  </span>Service List </h5>
                            </NavLink>
                            <NavLink to="/addservice" className="text-decoration-none">
                                <h5 className="text-dark m-5 "> <span className='pr-2'> <FontAwesomeIcon icon={faPlus} /> </span> Add Service  </h5>
                            </NavLink>
                            <NavLink to="/makeadmin" className="text-decoration-none">
                                <h5 className="text-dark m-5 "> <span className='pr-2'> <FontAwesomeIcon icon={faUserPlus} /> </span> Make Admin </h5>
                            </NavLink>
                             </> 
                            :
                             <>
                                <NavLink to="/order" className="text-decoration-none active">
                                    <h5 className="text-dark m-5 "> <span className='pr-2'> <FontAwesomeIcon icon={faShoppingCart} />  </span>Order </h5>
                                </NavLink>
                                <NavLink to="/userservicelist" className="text-decoration-none">
                                    <h5 className="text-dark m-5 "> <span className='pr-2'> <FontAwesomeIcon icon={faHdd} /> </span> Service List  </h5>
                                </NavLink>
                                <NavLink to="/review" className="text-decoration-none">
                                    <h5 className="text-dark m-5 "> <span className='pr-2'> <FontAwesomeIcon icon={faCommentDots} /> </span> Review </h5>
                                </NavLink>
                            </>
                    }










                    <NavLink to="#" className="text-decoration-none">
                        <h5 onClick={handleSignOut} className="text-dark m-5 "> <span className='pr-2'><FontAwesomeIcon icon={faSignOutAlt} /></span> Log Out </h5>
                    </NavLink>


                </div>
            </div>
        </section>
    );
};

export default Sidebar;