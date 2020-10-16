import React, { useContext, useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import Sidebar from '../Sidebar/Sidebar';
import img from '../../images/icons/service1.png'
import { UserContext } from '../../App';

const UserServiceList = () => {
    const [loggedInUser] = useContext(UserContext);

    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`https://limitless-retreat-44666.herokuapp.com/userOrders?email=` + loggedInUser.email, {

        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])




    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2"><Sidebar /></div>
                <div className="col-10 ">
                    <AdminNav />
                    <div className="c_a_admin__body">

                        <div className='mt-5'>
                            <div style={{
                                width: '1500px',
                                // height: '305px',
                                background: 'white',
                                marginTop: '50px',
                                borderRadius: '50px',
                            }} className='ml-auto mr-auto ' style={{ height: '300px', width: '1100px' }} >

                                <table style={{ backgroundColor: '#FFFFFF' }} className="table table-borderless rounded">
                                    <thead style={{ backgroundColor: '#F4F7FC' }} className="">
                                        <tr>

                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Services</th>
                                            <th scope="col">Project Details</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#FFFFFF' }}>


                                        {
                                            order.map(order =>
                                                <>
                                                    <tr key={order._id}>
                                                        <td><img height='50' weight='50' src={img} alt="" /></td>
                                                        <td>{order.name}</td>
                                                        <td>{order.service}</td>
                                                        <td>{order.details}</td>
                                                        <td>{order.price}$</td>
                                                        <td>
                                                            <button disabled type="button" className="text-danger btn btn-outline-light">{order.status}</button>
                                                        </td>
                                                    </tr>
                                                </>)

                                        }



                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserServiceList;