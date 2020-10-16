import React, { useEffect, useState } from 'react';
import SingleFeedback from '../SingleFeedback/SingleFeedback';





const Feedback = () => {



    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        fetch('https://limitless-retreat-44666.herokuapp.com/feedbacks')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])




    return (
        <section className="c_a_feedback">
            <div className="container ">
                <h3 className=" pt-5 text-center color_one medium_font_size font-weight-bold ">Clients  <span className="color_three">Feedback</span></h3>
                <div className="row ">
                    {
                          feedback.map(feedback => <SingleFeedback key={feedback._id}  feedback={feedback} />, )
                    }
                    
                </div>

            </div>

        </section>
    );
};

export default Feedback;