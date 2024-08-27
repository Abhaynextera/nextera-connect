import React from 'react';

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// CSS 
import '../../assets/css/style.css';

//Images
import cleaningStaff from '../../assets/Images/cleaningStaff.png';
import sales from '../../assets/Images/sales.png';
import guestHouse from '../../assets/Images/guestHouse.png';
import corporate from '../../assets/Images/corporate.png';
import transit from '../../assets/Images/transit.png';
import tickets from '../../assets/Images/tickets.png';

import Navbar from '../Navbar';
import Footer from '../Footer';

function Staffing() {
    return (
        <>
            <Navbar />

            <div className='bg-wrapper'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 col-xxl-3'></div>
                        <div className='col-0 col-sm-0 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <h1 className='text-center text-uppercase text-white'>General Staffing Services</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id elit eros. In gravida vitae metus eget suscipit. Integer facilisis dolor quis varius accumsan.</p>
                            <div className='text-center'>
                                <button className='contact border' style={{ background: 'transparent' }}>Get In Touch Now</button>
                            </div>
                        </div>
                        <div className='col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 col-xxl-3'></div>
                    </div>
                </div>
            </div>

            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                        <p>Optimize your workforce with our comprehensive staffing solutions. Whether you need temporary, permanent, or specialized skill recruitment, we tailor our services to meet your unique staffing requirements. Our experienced team ensures the right personnel for your housing society, IT company, shopping mall, or hospital. From administrative roles to niche skill sets, we provide efficient and reliable staffing services. Streamline your recruitment process with our outsourcing solutions, offering cost-effective and strategic hiring solutions. Trust us to deliver skilled and dedicated professionals who align with your organizational needs. Elevate your team with our staffing expertise, contributing to the success and growth of your organization.</p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                        <iframe className="rounded-4 w-100" height="315" src="https://www.youtube.com/embed/wca-ktM1tHs?si=6lhAO9yksb4rIqXa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <h1 className='text-center text-uppercase my-5'>General Staffing <span className='text'>Services</span></h1>

                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                        <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                            <h3 className='h5 text text-uppercase'>Permanent Staffing Services</h3>
                            <p>In the dynamic landscape of today’s business world, finding and retaining top talent is crucial for sustained growth and success. At NextEraConnect, we understand the significance of building a skilled and dedicated team to drive your organization forward. Our permanent staffing solutions are designed to alleviate the burdens of recruitment, providing you with access to exceptional professionals who seamlessly integrate into your company culture and contribute to your long-term objectives.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                        <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                            <h3 className='h5 text text-uppercase'>Contract Staffing Services</h3>
                            <p>In today’s rapidly evolving business landscape, flexibility is key to staying competitive. NextEraConnect offers comprehensive contract staffing solutions designed to provide your organization with the agility and expertise needed to navigate any challenge. Whether you require short-term support for a specific project or need to quickly scale your team to meet fluctuating demands, we have the resources and experience to deliver exceptional talent precisely when and where you need it.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                        <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                            <h3 className='h5 text text-uppercase'>Temporary Staffing Services</h3>
                            <p>NextEraConnect offers comprehensive temporary staffing solutions crafted to meet your immediate workforce needs with precision and speed. Whether you require temporary support to cover seasonal spikes, special projects, or unexpected absences, we provide flexible staffing options that ensure continuity and productivity for your organization.</p>
                        </div>
                    </div>
                </div>

                <h1 className='text-center text-uppercase my-5'>Staffing <span className='text'>Solutions</span> For...</h1>

                <div className='cm-staff-sol'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                                <img className='mx-auto d-block' src={sales} width='60px'></img>
                                <h4 className='h6 text text-uppercase text-center mt-4'>Retail and Sales associates</h4>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                                <img className='mx-auto d-block' src={guestHouse} width='60px'></img>
                                <h4 className='h6 text text-uppercase text-center mt-4'>Guest houses and Pantries</h4>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                                <img className='mx-auto d-block' src={cleaningStaff} width='60px'></img>
                                <h4 className='h6 text text-uppercase text-center mt-4'>Cleaning staff at distributed locations such as bank branches</h4>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                                <img className='mx-auto d-block' src={corporate} width='60px'></img>
                                <h4 className='h6 text text-uppercase text-center mt-4'>Single large sites such as corporate offices, IT parks, etc.</h4>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                                <img className='mx-auto d-block' src={transit} width='60px'></img>
                                <h4 className='h6 text text-uppercase text-center mt-4'>Personnel at Mass Transit Systems etc.</h4>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='card shadow rounded-4 border-0 p-3 mb-4'>
                                <img className='mx-auto d-block' src={tickets} width='60px'></img>
                                <h4 className='h6 text text-uppercase text-center mt-4'>Specialized functions such as Ticketing</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Staffing
