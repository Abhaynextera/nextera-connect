import React from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// CSS 
import '../assets/css/style.css';
import value from '../assets/Images/values.png';

import Navbar from './Navbar';
import Footer from './Footer';

const ContactButton = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <button onClick={handleContactClick} className='contact'>Contact Us</button>
    );
};

function About() {
    return (
        <>
            <Navbar />

            <div className='contact-wrapper'>
                <h1 className='text-center text-uppercase text-white'>We Breathe Life Into Ideas</h1>

                <div className='contact-img-wrapper container mt-4'>
                    <img className='mx-auto d-block w-100' src='https://techindustan.com/wp-content/uploads/2024/05/About-us-banner-image-1.png' alt='team'></img>
                </div>
            </div>

            <div className='container' style={{ marginTop: '15%' }}>
                <h1 className='text-center text-uppercase'>Transforming Concepts into <span className='text'> Digital Excellence </span> with Precision, Skill, and Innovative Tech</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 ceo-line-ani-1">
                        <div className="ceo-sec ">
                            <div className="ceo-name">
                                RISHI
                            </div>
                            <div className="ceo-img">
                                <div className="dark-img">
                                    <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width='375px' alt="img" />
                                </div>
                                <div className="color-img">
                                    <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width='375px' alt="img" />
                                </div>
                            </div>
                            <div className="ceo-tag">
                                CEO
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ceo-sec">
                        <div className="ceo-about">
                            <div className="content-1">
                                The main reason for Nextera' recognition is due to our talented tribe. Our sole motive is
                                to make sure that alongside growth of the company, our employees and client experience a
                                great work-life culture in the Industry.
                            </div>
                            <div className="content-2">
                                At Nextera, we believe in passion and compassion. We take pride in providing the best
                                solution to our clients and creating a fun and encouraging atmosphere for our tribe to keep
                                thriving tremendously.
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ceo-line-ani-2">
                        <div className="ceo-sec">
                            <div className="ceo-name">
                                RISHI
                            </div>
                            <div className="ceo-img">
                                <div className="dark-img">
                                    <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width='375px' alt="img" />
                                </div>
                                <div className="color-img">
                                    <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width='375px' alt="img" />
                                </div>
                            </div>
                            <div className="ceo-tag">
                                CEO
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cm-mission my-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pt-4'>
                            <h2 className='h1 text-uppercase'>Our <span className='text'>Mission</span></h2>
                            <p>At tecHindustan, we empower businesses with customized IT and business solutions, crafted to perfection over eight enriching years.
                                Our skilled team transforms ideas into dynamic digital experiences, enhancing efficiency and customer satisfaction anywhere in the globe.
                                With partners from Germany to Australia and beyond, we merge quality, integrity, and collaboration. Every project is a journey toward growth,
                                equipping enterprises with tools and support to thrive in tomorrow's digital era.</p>

                            <p>We are delivering services and building bridges to unprecedented heights, making every digital interaction count.
                                Each solution is a step toward a world where technology amplifies potential, and possibilities are limitless.</p>

                            <ContactButton />

                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <img src={value} className='mx-auto d-block w-100' alt='img'></img>
                        </div>
                    </div>
                </div>

                <h1 className='text-center text-uppercase'>Why Choose <span className='text'>NextEra</span> Connect?</h1>

                <div className='row mt-4'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                        <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                            <h3 className='h5'>Innovative Solutions</h3>
                            <p>Our commitment to pioneering technology ensures that our clients benefit from cutting-edge solutions. We stay ahead of the curve, delivering innovations that drive business growth</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                        <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                            <h3 className='h5'>Cybersecurity Excellence</h3>
                            <p>Security is non-negotiable. We prioritize the protection of your data and assets, employing state-of-the-art cybersecurity measures to guarantee a secure digital environment.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col- xxl-6'>
                        <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                            <h3 className='h5'>Customized Approaches</h3>
                            <p>Recognizing that each business is unique, we tailor our solutions to meet specific needs. Our flexible and adaptive approach ensures that our technology aligns seamlessly with your goals.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                        <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                            <h3 className='h5'>Industry Versatility</h3>
                            <p>From finance to healthcare, manufacturing to services, our solutions transcend industries. Whatever your sector, NextEra Connect has the expertise to elevate your technological capabilities.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default About;