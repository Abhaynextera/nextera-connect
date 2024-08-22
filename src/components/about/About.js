import React, { useEffect } from 'react';
import '../../assets/css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <h1 className='text-center text-uppercase m-5'>Bringing Ideas & <span className='text'>Excellence</span> Together</h1>

            <div className=''>
                <div className='row gx-0'>
                    <div className='col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                        <div className="cm-home-idea-left-wrapper cm-section-spacing">
                            <div className="cm-home-idea-item cm-flex-type-2 cm-home-idea-item-1">
                                <div className="cm-content">
                                    <h4 data-aos="fade-up" data-aos-delay="100" className="fw-bold aos-init aos-animate">Who We Are</h4>
                                    <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">We are a leading IT and Software Solutions company in India that caters to rising ventures from various business territories become future-ready with the right technology stack.</p>
                                </div>
                            </div>
                            <div className="cm-home-idea-item cm-flex-type-2 cm-home-idea-item-2">
                                <div className="cm-content">
                                    <h4 data-aos="fade-up" data-aos-delay="100" className="fw-bold aos-init aos-animate">Why Choose Us</h4>
                                    <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">We endeavor to deliver quality &amp; credibility while customizing our budget-friendly mobile app development services for eCommerce, eLearning, and custom enterprise development.</p>
                                </div>
                            </div>
                            <div className="cm-home-idea-item cm-flex-type-2 cm-home-idea-item-3">
                                <div className="cm-content">
                                    <h4 data-aos="fade-up" data-aos-delay="100" className="fw-bold aos-init aos-animate">Areas of Expertise</h4>
                                    <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">All-encompassing mobile app development &amp; marketing, eCommerce development, eLearning development, social media management, PPC advertising, and in-house sales management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                        <div className='cm-home-idea-right-wrapper'>
                            <div class="cm-content cm-sec-bg text-white text-center">
                                <h4 data-aos="fade-up" class="aos-init aos-animate">We Help You Explore the Maximum Potential of Your Business.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
