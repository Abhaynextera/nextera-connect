import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Performance() {
    return (
        <>
            <div className='cm-performance-wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <h1 className='text-white text-uppercase my-5'>Work Performance</h1>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <p className='text-white my-5'>From start-ups to global corporations, we’ve supported hundreds of clients with website design, development, and maintenance services. techIndustan has been at the forefront of tech innovation since 2023.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="cm-carousel pt-3">
                <Carousel>
                    <Carousel.Item>
                        <img className="mx-auto d-block w-75" src="https://techindustan.com/wp-content/uploads/2024/02/EP-1-1.webp" alt="img" />
                        <Carousel.Caption>
                            <div className="slide1"></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="mx-auto d-block w-75" src="https://techindustan.com/wp-content/uploads/2024/02/Rebeelo-1.webp" alt="img" />
                        <Carousel.Caption>
                            <div className="slide2"></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="mx-auto d-block w-75" src="https://techindustan.com/wp-content/uploads/2024/02/Underworks-1-1.webp" alt="img" />
                        <Carousel.Caption>
                            <div className="slide3"></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}

export default Performance
