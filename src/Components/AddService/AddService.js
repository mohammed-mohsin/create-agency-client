import React, { useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, errors } = useForm();

    const [file, setFile] = useState(null)

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const onSubmit = data => {

        const service = new FormData()
        service.append('icon', file)
        service.append('title', data.title)
        service.append('description', data.description)

        fetch('https://limitless-retreat-44666.herokuapp.com/addService', {
            method: 'POST',
            body: service
        })
            .then(response => response.json())
            .then(data => {
                alert("Service Added successfully")
            })
            .catch(error => {
                console.error(error)
            })

    };




    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-2"><Sidebar /></div>
                    <div className="col-10 ">
                        <AdminNav />
                        <div className="c_a_admin__body">

                            <div className='mt-5'>
                                <div className='ml-auto mr-auto  rounded' style={{ height: '300px', width: '1100px' }} >

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-md-6">

                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">Service Title</label>
                                                    <input name="title" ref={register({ required: true })} type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter Title" />
                                                    {errors.title && <span className='text-danger'>This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">

                                                <label htmlFor="exampleFormControlInput1">Icon</label>

                                                <div style={{
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                }} className="form-group">
                                                    <div className="file btn btn-outline-success">
                                                        <FontAwesomeIcon icon={faCloudUploadAlt} />  Upload Image
            <input onChange={handleFileChange} style={{
                                                            position: 'absolute',
                                                            fontSize: '50px',
                                                            opacity: '0',
                                                            right: '0',
                                                            top: '0',
                                                        }} name="image" ref={register({ required: true })} type="file" id='exampleFormControlInput2'  />
                                                        {errors.image && <span className='text-danger'>This field is required</span>}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                                    <textarea name="description" ref={register({ required: true })} className="form-control form-control-lg" id="exampleFormControlTextarea1" placeholder="Enter Description" rows="5"></textarea>
                                                    {errors.description && <span className='text-danger'>This field is required</span>}
                                                </div>
                                            </div>

                                        </div>

                                        <button className='btn btn-success ' type="submit"> Submit</button>

                                    </form>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </>
    );
};

export default AddService;