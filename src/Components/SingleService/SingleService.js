import React, { useContext } from 'react';
import { Dots } from 'react-preloaders';
import { Link } from 'react-router-dom';
import { zoomInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const styles = {
    zoomInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomInDown, 'bounce')
    }
}

const SingleService = (props) => {

    const { title, description, icon } = props.service

  
    return (
        <div className=" col-sm-12 col-md-6 col-lg-4 text-center c_a_services__service">
            <StyleRoot>

                <Link to={`/order/${title}`}>
                    <div style={styles.zoomInDown}>
                        <img width='100' height='100' className="img-fluid mr-auto ml-auto mt-3" src={`data:image/png;base64,${icon.img}`} alt="CardImageCap" />
                        <h5 className=" color_one font-weight-bold mt-3">{title}</h5>
                        <p className="color_four mt-4">{description}</p>
                    </div>
                </Link>
            </StyleRoot>
        </div>



    );
};

export default SingleService;