import React from 'react';

const SingleFeedback = ({feedback}) => {
    return (
        <div style={{
            width: '465px', height: '335px',
            marginRight: 'auto',
        }} className=" col-md-4 col-sm-12">
            <div className="card promoting-card">
                <div className="card-body d-flex flex-row">
                    <img src={feedback.img} className="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
                    <div>
                        <h5 className="card-title  font-weight-bold mb-2">{feedback.name}</h5>
                        <p className="card-text">{feedback.designation}</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="collapse-content">
                        <p className="card-text color_five" >{feedback.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFeedback;