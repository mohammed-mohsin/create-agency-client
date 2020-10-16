import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        const admin={...data}
        fetch('https://limitless-retreat-44666.herokuapp.com/addAdmin',{
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(admin)
        })
        .then(response => response.json())
        .then(data => {
            alert('New Admin Successfully')
        })
        .catch(error => {
            console.error(error)
        })
    };

    // addAdmin


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
                                    <div style={{
                                        width: '1500px',
                                        height: '305px',
                                        background: 'white',
                                        marginTop: '50px',
                                        borderRadius: '50px',
                                        marginRight: 'auto',
                                        marginLeft: 'auto'
                                    }}>
                                        <div className="col-md-6 mt-5">

                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">Email address</label>
                                                    <input name="email" ref={register({ required: true })} type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                    {errors.email && <span className='text-danger'>This field is required</span>}
                                                </div>
                                                <button type="submit" className="btn btn-success mb-2">Submit</button>
                                            </form>
                                        </div>


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

export default MakeAdmin;