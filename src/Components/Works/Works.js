import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import work1 from '../../images/carousel-1.png'
import work2 from '../../images/carousel-2.png'
import work3 from '../../images/carousel-3.png'

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img  className=" img-fluid" height="335" width="465" src={work1} onDragStart={handleDragStart} className=" " />,
    <img  className=" img-fluid" height="335" width="465" src={work2} onDragStart={handleDragStart} className="" />,
    <img  className=" img-fluid" height="335" width="465" src={work3} onDragStart={handleDragStart} className=" " />,
    
];
const Works = () => {
    return (
        <section className="c_a_works">
            <div className="container ">
            <h3 className=" pt-5 text-center medium_font_size font-weight-bold text-light">Here are some of   <span className="color_three">our works</span></h3>
                <div className="row ">
                    <div style={{
                        
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '100px',
                        overflow: 'hidden'
                    }}>

                        <AliceCarousel
                        style={{margin:'50px'}}
                            //   className="align-items-center"
                            mouseTracking
                            items={items}
                            paddingLeft={15}
                            paddingRight={15}
                            autoPlay
                    
                            autoPlayStrategy="none"
                            autoPlayInterval={1050}
                            autoWidth 
                            animationType="fadeout"
                            infinite
                            touchTracking={true}
                            
                            animationDuration={800}
                            responsive={responsive} />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Works;