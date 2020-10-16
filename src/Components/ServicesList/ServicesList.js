import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import Sidebar from '../Sidebar/Sidebar';

const ServicesList = () => {

    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://limitless-retreat-44666.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    const updateStatus=(id)=>{
       const status = document.querySelector('#status').value;
   
       fetch(`update${id}`,{
           method: 'PATCH',
           headers: {
            'content-type': 'application/json' 
        },
        body: JSON.stringify(status)
       })
       .then(res => res.json())
       .then(data =>{
           alert("Status Updated")
       })
        
     

    }
    return (
        <>

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

                                                <th scope="col">Name</th>
                                                <th scope="col">Email ID</th>
                                                <th scope="col">Services</th>
                                                <th scope="col">Project Details</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ backgroundColor: '#FFFFFF' }}>
                                            {service.map(service =>
                                                <tr key={service._id}>

                                                    <td>{service.name}</td>
                                                    <td>{service.email}</td>
                                                    <td>{service.service}</td>
                                                    <td>{service.description}</td>
                                                    <td>
                                                        <form>
                                                            <div className="form-group border-0">
                                                                <select id="status" name="status" defaultValue={service.status} onChange={()=>updateStatus(service._id)} className="form-control border-0" >
                                                                    <option value="Done" className='text-success'>Done</option>
                                                                    <option value="On Going" className='text-warning'>On going</option>
                                                                    <option value="Pending" className='text-danger'>Pending</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </td>

                                                </tr>

                                            )}


                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </>
    );
};

export default ServicesList;