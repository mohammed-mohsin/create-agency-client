import React, { useContext } from 'react';
import { UserContext } from '../../App';

const AdminNav = () => {
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    return (

        <>
        <div className="container-fluid">
            <div style={{weight:'1130px',height:'80px' }}className="row d-flex justify-content-between align-items-center">
                <div className="p-3">
                    <h3>Welcome</h3>
                    {/* <h3>Add Services</h3> */}
                </div>
                <div className="p-3">
                    <h5>{loggedInUser.name}</h5>
                </div>


            </div>
        </div>
            
            
        </>
    );
};

export default AdminNav;