import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import AdminNav from '../AdminNav/AdminNav';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        
        const feedback ={...data , img:loggedInUser.img}
    


        fetch('https://limitless-retreat-44666.herokuapp.com/addFeedback',{
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(feedback)
        })
        .then(response => response.json())
        .then(data => {
            alert('Feedback Places Successfully')
        })
        .catch(error => {
            console.error(error)
        })
    };
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
                                                <input style={{ height: '60px' }} name="name" ref={register({ required: true })} type="name" className="form-control form-control-lg" placeholder="Your name " />
                                                {errors.name && <span className='text-danger'>This field is required</span>}
                                            </div>
                                            
                                            <div className="form-group">
                                                <input style={{ height: '60px' }} name="designation" ref={register({ required: true })} type="text" className="form-control form-control-lg" placeholder="Company's Name & Designation " />
                                                {errors.designation && <span className='text-danger'>This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <textarea style={{ height: '112px' }} name="description" ref={register({ required: true })} type="text" className="form-control form-control-lg" placeholder="Description" />
                                                {errors.description && <span className='text-danger'>This field is required</span>}
                                            </div>
                                           
                                            <button type="submit" className="btn btn-lg text-light c_a_button mb-2">Submit</button>
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

export default Review;