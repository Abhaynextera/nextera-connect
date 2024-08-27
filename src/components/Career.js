import React from 'react'

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// CSS 
import '../assets/css/style.css';

import Navbar from './Navbar'
import Footer from './Footer';

function Career() {
  return (
    <>

      <Navbar />

      <div className='bg-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
              <img src='' className='mx-auto d-block'></img>
            </div>
            <div className='col-0 col-sm-0 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
              <h1 className='text-center text-uppercase text-white'>Be Part Of Our Team</h1>
              <p className='text-white'>We’re on the lookout for talent like you!  Be part of a collaborative space and join us in developing solutions that empower businesses and breathe life into innovative ideas.</p>
              <div className='text-center'>
                <button className='contact border' style={{ background: 'transparent' }}>View Open Positions</button>
              </div>
            </div>
            <div className='col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
              <img src='' className='mx-auto d-block'></img>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className=''>
          <h1 className='h3 text-uppercase'>Be Part Of Our <span className='text'>Team</span></h1>
          <p>Welcome to the gateway of exciting opportunities! At NextEra Connect, we believe in cultivating a dynamic, collaborative, and innovative work environment. We’re on the lookout for talented individuals who are passionate about making a difference and driving success.</p>
        </div>

        <div className='mt-5'>
          <h1 className='h3 text-uppercase'>How to <span className='text'>Apply</span></h1>
          <p>Ready to embark on a rewarding career journey with NextEra Connect? Submit your application by sending your resume and cover letter to <span className='text'>[hr@nexteraconnect.co.in]</span></p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Career
