import React from 'react'

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// CSS 
import '../assets/css/style.css';

import Navbar from './Navbar'
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Navbar />

      <div className='bg-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 col-xxl-3'></div>
            <div className='col-0 col-sm-0 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
              <h1 className='text-center text-uppercase text-white'>Contact Us</h1>
              <p className='text-white'>We're eager to connect with you! Whether you have questions, need more information
                about our services, or want to explore potential collaborations, we're here for you.</p>
              <div className='text-center'>
                <button className='contact border' style={{ background: 'transparent' }}>Get In Touch Now</button>
              </div>
            </div>
            <div className='col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 col-xxl-3'></div>
          </div>
        </div>
      </div>

      <div className='container my-5'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-lg-6 col-xl-6 col-xxl-6'>
            <h1 className=''>GET IN TOUCH AND <span className='text'>REACH US!!</span></h1>
            <p>We're eager to connect with you! Whether you have questions, need more information about our services, or want to explore potential collaborations, we're here for you.</p>

            <h2 className='h5 mt-4'>FOR FURTHER INQUIRIES CALL</h2>
            <h3 className='h2'>+91 6366555070</h3>

            <div className='row mt-4'>
              <div className='social-icon'>
                <div className='social-icon-outer-wrapper twitter'>
                  <i class="bi bi-twitter"></i>
                </div>
              </div>
              <div className='social-icon'>
                <div className='social-icon-outer-wrapper facebook'>
                  <i class="bi bi-facebook"></i>
                </div>
              </div>
              <div className='social-icon'>
                <div className='social-icon-outer-wrapper youtube'>
                  <i class="bi bi-youtube"></i>
                </div>
              </div>
              <div className='social-icon'>
                <div className='social-icon-outer-wrapper instagram'>
                  <i class="bi bi-instagram"></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-lg-6 col-xl-6 col-xxl-6'>
            <div className='box shadow rounded border-0 p-4'>
              <form className='needs-validation' novalidate>
                <div className='mb-3'>
                  <label for="name" className="form-label">Name</label>
                  <input type="text" className="form-control rounded-0" id="name" placeholder='E.g. John' required />
                  <div class="invalid-feedback">
                    Enter Your Name
                  </div>
                </div>

                <div className='mb-3'>
                  <label for="email" className="form-label">E-mail Address</label>
                  <input type="email" className="form-control rounded-0" id="email" placeholder='E.g. John@doe.com' required />
                  <div class="invalid-feedback">
                    Enter Valid Email Address
                  </div>
                </div>

                <div className='mb-3'>
                  <label for="phone" className="form-label">Phone Number</label>
                  <input type="phone" className="form-control rounded-0" id="phone" placeholder='E.g. +13004005000' required />
                  <div class="invalid-feedback">
                    Enter Valid Phone Number
                  </div>
                </div>

                <div class="">
                  <label for="message" className="form-label">Message</label>
                  <textarea className="form-control rounded-0" id="message" rows="4" placeholder='Enter Your Message...'></textarea>
                </div>

                <button className='contact border'>SUBMIT</button>

              </form>
            </div>
          </div>
        </div>

        <h1 className='mt-5 mb-3 text-center'>OFFICE <span className='text'>ADDRESS</span></h1>

        <div className='row'>
          <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
            <div className='bg-overlay'>
              <div className='card shadow rounded border-0 p-3 mb-4'>
                <h3 className='h5 text'>NEXTERA CONNECT PVT LTD.</h3>
                <p>CN - 622, 4th Floor
                  Novel MSR Park,
                  Subbaiah Reddy Colony,
                  Marathahalli, Bengaluru,
                  Karnataka 560037</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
            <div className='bg-overlay'>
              <div className='card shadow rounded border-0 p-3 mb-4'>
                <h3 className='h5 text'>PHONE NUMBER</h3>
                <p>Mobile: +91 6366555070</p>
                <p>Mobile: +91 6366555071</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
            <div className='bg-overlay'>
              <div className='card shadow rounded border-0 p-3 mb-4'>
                <h3 className='h5 text'>E MAIL</h3>
                <p>info@nexteraconnect.co.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact
