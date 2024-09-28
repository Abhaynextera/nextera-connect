import React from 'react';

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// CSS 
import '../../assets/css/style.css';

import Navbar from '../Navbar';
import Footer from '../Footer';

function Middleware() {
    return (
        <>
            <Navbar />

            <div className='bg-wrapper'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 col-xxl-3'></div>
                        <div className='col-0 col-sm-0 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <h1 className='text-center text-uppercase text-white'>Middleware Enterprise Integration</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id elit eros. In gravida vitae metus eget suscipit. Integer facilisis dolor quis varius accumsan.</p>
                            <div className='text-center'>
                                <button className='contact border' style={{ background: 'transparent' }}>Get In Touch Now</button>
                            </div>
                        </div>
                        <div className='col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 col-xxl-3'></div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <img className='mx-auto d-block w-50' src="https://media.istockphoto.com/id/1302168946/vector/coming-soon-red-ribbon-label-banner-open-available-now-sign-or-coming-soon-tag-vector.jpg?s=612x612&w=0&k=20&c=uzI1Ztsm3NcyQCscb1kQ3goarshfkR_n2ZDhAwgYPWQ="></img>
            </div>


            <Footer />
        </>
    )
}

export default Middleware
