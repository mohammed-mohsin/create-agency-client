import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import iconGoogle from '../../images/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const [admin, setAdmin] = useState(false)

    // setLoggedInUser(admin)

    // console.log(loggedInUser)


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = (e) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {

            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, img: photoURL }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <>

            <br /><br /><br />
            <nav className="navbar navbar-light bg-transparent">
                <div className="ml-auto mr-auto">
                    <Link to="/" className="d-flex justify-content-center" > <img src={logo} width="150" height="50" className=" align-top" alt="Logo"
                        loading="lazy" /> </Link>
                </div >
            </nav>

            <div className="container">
                <div className="row">
                    <div style={{ marginTop: '100px', width: '570px', height: '450px' }} className=" ml-auto mr-auto border mt-5">
                        <div className="  text-center p-5 mt-5" >
                            <h3 className="text-center">Login With </h3>
                            <div className="from-group">

                                <br />
                                <br />
                                <button onClick={handleGoogleSignIn} className="btn rounded-pill ml-auto border mt-3 mr-auto btn-light"> <span>  <img width="20" src={iconGoogle} alt="" /></span>   Continue with Google </button>
                                <br />
                                <br />
                                <p className='text-center mt-3'>Don’t have an account? <Link to='/login' className='text-primary'>Create an account</Link></p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;