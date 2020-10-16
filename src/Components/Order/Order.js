
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import AdminNav from '../AdminNav/AdminNav';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [serviceImg, setServiceImg] = useState()
    useEffect(() => {
        fetch('https://limitless-retreat-44666.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceImg(data))
    }, [])
    const onSubmit = data => {
        const order = { ...data, status: "Pending", icon: serviceImg }
        fetch('https://limitless-retreat-44666.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    };




    const { title } = useParams()
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2"><Sidebar /></div>
                <div className="col-10 ">
                    <AdminNav />
                    <div className="c_a_admin__body">

                        <div className='mt-5'>
                            <div className="container-fluid">
                                <div className="row">

                                    <div className="col-md-6 mt-5 ml-5">

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <input style={{ height: '60px' }} name="name" ref={register({ required: true })} type="name" className="form-control form-control-lg" defaultValue={loggedInUser.name} />
                                                {errors.name && <span className='text-danger'>This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <input style={{ height: '60px' }} name="email" ref={register({ required: true })} type="email" className="form-control form-control-lg" defaultValue={loggedInUser.email} />
                                                {errors.email && <span className='text-danger'>This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <input style={{ height: '60px' }} name="service" ref={register({ required: true })} type="text" className="form-control form-control-lg" defaultValue={title} />
                                                {errors.service && <span className='text-danger'>This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <textarea style={{ height: '112px' }} name="details" ref={register({ required: true })} type="text" className="form-control form-control-lg" placeholder="Project Details" />
                                                {errors.details && <span className='text-danger'>This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <input name="price" ref={register({ required: true })} type="text" className="form-control form-control-lg" placeholder="Price" />
                                                {errors.price && <span className='text-danger'>This field is required</span>}
                                            </div>
                                            <button type="submit" className="btn text-light btn-lg c_a_button mb-2">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;