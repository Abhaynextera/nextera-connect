import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
    return (
        <>
            <div className='footer-bg mt-5'>
                <h1 className='h3 text-center text-uppercase text-white'>Connect With Us</h1>
            </div>

            <div className='cm-wrapper'>
                <div className='row gx-0'>
                    <div className='cm-contact-icon text-center'>
                        <div className='outer-wrapper get-in-touch'>
                            <i class="bi bi-file-text-fill"></i>
                        </div>
                        <h1 className='h5 fw-bold'>Get in Touch</h1>
                        <a href='/' className='text'>Get a Free Quote</a>
                    </div>
                    <div className='cm-contact-icon text-center'>
                        <div className='outer-wrapper call-us'>
                            <i class="bi bi-telephone-outbound-fill"></i>
                        </div>
                        <h1 className='h5 fw-bold text-center'>Call Us</h1>
                        <a href='/' className='text'>+91 6366555070</a>
                    </div>
                    <div className='cm-contact-icon text-center'>
                        <div className='outer-wrapper mail-us'>
                            <i class="bi bi-envelope-paper-fill"></i>
                        </div>
                        <h1 className='h5 fw-bold text-center'>Mail Us</h1>
                        <a href='/' className='text'>info@nexteraconnect.co.in</a>
                    </div>
                    <div className='cm-contact-icon text-center'>
                        <div className='outer-wrapper teams'>
                            <i class="bi bi-microsoft-teams"></i>
                        </div>
                        <h1 className='h5 fw-bold text-center'>Teams With Us</h1>
                        <a href='/' className='text'>NextEra Connect</a>
                    </div>
                    <div className='cm-contact-icon text-center'>
                        <div className='outer-wrapper whatsapp'>
                            <i class="bi bi-whatsapp"></i>
                        </div>
                        <h1 className='h5 fw-bold text-center'>Whatsapp Now</h1>
                        <a href='/' className='text'>+91 6366555070</a>
                    </div>
                </div>
            </div>

            <div className='cm-fwrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                            <h2 className='h5'>| ABOUT COMPANY</h2>
                            <p className=''>We specialize in comprehensive human resources management and recruitment services, offering tailored solutions to meet the diverse needs of businesses across various industries.</p>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2'>
                            <h2 className='h5'>| QUICK LINKS</h2>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Services</p>
                            <p>Career</p>
                            <p>Contact Us</p>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                            <h2 className='h5'>| OUR SERVICES</h2>
                            <p>Product Development</p>
                            <p>General Staffing Services</p>
                            <p>Middleware Enterprise Integration</p>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                            <h2 className='h5'>| CONTACT DETAIL</h2>
                            <p className=''><i class="bi bi-house-door-fill"></i>&nbsp; NextEra Connect Pvt Ltd.,</p>
                            <p className='px-4'>CN - 622, 4th floor <br></br> Novel MSR Building,</p>
                            <p className=''><i class="bi bi-geo-alt-fill"></i>&nbsp; Subbaiah Reddy Colony, <br></br>
                            &nbsp; &nbsp; &nbsp; Marathahalli, Bengaluru, <br></br>
                            &nbsp; &nbsp; &nbsp; Karnataka 560037.</p>
                            <p className=''><i class="bi bi-telephone-fill"></i>&nbsp; <tel>+91 6366555070</tel></p>
                            <p className=''><i class="bi bi-envelope-at-fill"></i>&nbsp; info@nexteraconnect.co.in</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cm-fwrapper-cpyrt'>
                <p className='text-center'>COPYRIGHT © 2023 <b>NEXTERACONNECT</b>. ALL RIGHTS RESERVED</p>
            </div>
        </>
    )
}

export default Footer
