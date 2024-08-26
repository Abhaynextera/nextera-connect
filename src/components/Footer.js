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
        </>
    )
}

export default Footer
