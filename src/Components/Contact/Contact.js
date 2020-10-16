import React from 'react';



const Contact = () => {
    return (
        <div className="c_a_contact">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6 col-sm-12">
                        <h2 className="medium_font_size font-weight-bold">
                            Let us handle your <br /> project, professionally.
                        </h2>
                        <p className="color_four mt-5">With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>

                        <div className="c_a_contact__mapouter container=fluid row col-sm-12">
                            <div className="c_a_contact__gmap_canvas"><iframe width="600" height="500" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div>

                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 align=items-center mb-5">
                        <form>
                            <div className="form-group  ">
                                <input type="email" className="form-control form-control-lg" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Your name / company’s name" />
                            </div>


                            <div className="form-group">

                                <textarea className="form-control form-control-lg"
                                    rows="10" placeholder="Your message">

                                </textarea>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;