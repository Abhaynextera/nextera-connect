import React, { useEffect } from 'react';

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// CSS 
import './assets/css/style.css'; 

import Navbar from '../src/components/Navbar'; //Navbar 
import Carousel from './components/Carousel';  //Carousel
import Performance from './components/work/Performance';  //Performance
import Review from './components/review/Review';  //Review
import Footer from '../src/components/Footer';  //Footer

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Navbar />

            <Carousel />

            {/* About  */}

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

            {/* Services  */}

            <div className='container'>

                <h1 className='text-center text-uppercase mt-5'>Our <span className='text'>Services</span></h1>

                <div className='cm-service'>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 mb-4">
                            <div className="srvc-card-main-wrap">
                                <div className="srvc-card-details">
                                    <div className="srvc-card-content">
                                        <h2 className="">Salesforce Development</h2>
                                        <div className="description">
                                            Get a scalable, intensive, and engaging Salesforce application that boosts your business revenues with our Salesforce app development services that give highly advanced and market-winning mobile and web apps.
                                        </div>
                                        <div className="srvc-btn-home">
                                            <a href="salesforce-development-services" target="_blank" className="btn btn-primary">Explore</a>
                                        </div>
                                    </div>
                                    <div className="srvc-card-icon-list">
                                        <div className="srvc-list-icon">
                                            <a href="salesforce-implementation-services" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/implemention.svg" alt="Implemention service" />
                                                <div className="srvc-name">Implemention</div>
                                            </a>
                                        </div>
                                        <div className="srvc-list-icon">
                                            <a href="salesforce-consulting-services" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/consulting.svg" alt="Consulting service" />
                                                <div className="srvc-name">Consulting</div>
                                            </a>
                                        </div>
                                        <div className="srvc-list-icon">
                                            <a href="salesforce-sales-cloud-services" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/sales-cloud.svg" alt="Sales Cloud service" />
                                                <div className="srvc-name">Sales Cloud</div>
                                            </a>
                                        </div>
                                        <div className="srvc-list-icon">
                                            <a href="salesforce-services-cloud" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/service-cloud.svg" alt="Service Cloud service" />
                                                <div className="srvc-name">Service Cloud</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 mb-4">
                            <div className="srvc-card-main-wrap">
                                <div className="srvc-card-details">
                                    <div className="srvc-card-content">
                                        <h2 className=''>Mobile App Development</h2>
                                        <div className="description">
                                            Strengthen your digital presence and increase your revenue with our robust mobile app development process that unlocks the opportunity of adding value to your business while intensifying your reach globally.
                                        </div>
                                        <div className="srvc-btn-home">
                                            <a href="mobile-app-development" target="_blank" className="btn btn-primary">Explore</a>
                                        </div>
                                    </div>
                                    <div className="srvc-card-icon-list">
                                        <div className="srvc-list-icon">
                                            <a href="android-app-development" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/android.svg" alt="Android service" />
                                                <div className="srvc-name">Android</div>
                                            </a>
                                        </div>
                                        <div className="srvc-list-icon">
                                            <a href="ios-app-development" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/ios.svg" alt="iOS service" />
                                                <div className="srvc-name">iOS</div>
                                            </a>
                                        </div>
                                        <div className="srvc-list-icon">
                                            <a href="react-native-app-development" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/react.svg" alt="React service" />
                                                <div className="srvc-name">React</div>
                                            </a>
                                        </div>
                                        <div className="srvc-list-icon">
                                            <a href="flutter-app-development" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/flutter.svg" alt="Flutter service" />
                                                <div className="srvc-name">Flutter</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 mb-4">
                            <div className="srvc-card-main-wrap">
                                <div className="srvc-card-details">
                                    <div className="srvc-card-content">
                                        <h2 className="">Website Development</h2>
                                        <div className="description">
                                            Website development has become the greatest boon for businesses across the globe. Following the latest trend to meet users' expectations is something our company excels in. We help you complete your digital presence.
                                        </div>
                                        <div className="srvc-btn-home">
                                            <a href="website-development" target="_blank" className="btn btn-primary">Explore</a>
                                        </div>
                                    </div>
                                    <div className="srvc-card-icon-list">
                                        <div className="srvc-list-icon">
                                            <a href="frontend-development" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/frontend.svg" alt="Frontend service" />
                                                <div className="srvc-name">Frontend</div>
                                            </a>
                                        </div>
                                        <div className="srvc-list-icon">
                                            <a href="backend-development" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/backend.svg" alt="Backend service" />
                                                <div className="srvc-name">Backend</div>
                                            </a>
                                        </div>
                                        <div className="srvc-list-icon">
                                            <a href="full-stack-development" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/fullstack.svg" alt="FullStack service" />
                                                <div className="srvc-name">FullStack</div>
                                            </a>
                                        </div>
                                        <div className="srvc-list-icon">
                                            <a href="devops-solutions" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/devops.svg" alt="DevOps service" />
                                                <div className="srvc-name">DevOps</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 mb-4">
                            <div className="srvc-card-main-wrap">
                                <div className="srvc-card-details">
                                    <div className="srvc-card-content">
                                        <h2 className="">Digital Marketing Services</h2>
                                        <div className="description">
                                            Website development has become the greatest boon for businesses across the globe. Following the latest trend to meet users' expectations is something our company excels in. We help you complete your digital presence.
                                        </div>
                                        <div className="srvc-btn-home">
                                            <a href="website-development" target="_blank" className="btn btn-primary">Explore</a>
                                        </div>
                                    </div>
                                    <div class="srvc-card-icon-list">
                                        <div class="srvc-list-icon">
                                            <a href="search-engine-optimization" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/seo.svg" alt="seo service" />
                                                <div class="srvc-name"> SEO
                                                </div>
                                            </a>
                                        </div>
                                        <div class="srvc-list-icon">
                                            <a href="search-engine-marketing" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/sem.svg" alt="sem service" />
                                                <div class="srvc-name"> SEM</div>
                                            </a>
                                        </div>
                                        <div class="srvc-list-icon">
                                            <a href="social-media-marketing" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/smo.svg" alt="smo service" />
                                                <div class="srvc-name">SMO</div>
                                            </a>
                                        </div>
                                        <div class="srvc-list-icon">
                                            <a href="app-store-optimization" target="_blank">
                                                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/home/service/aso.svg" alt="aso service" />
                                                <div class="srvc-name">ASO</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* USP  */}

            <div className='container'>
                <h1 className='text-center text-uppercase my-5'>Unique <span className='text'>Selling</span> Points (USP<span className='text-lowercase'>s</span>)</h1>
                <div className='row'>
                    <div data-aos='fade-up' className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4'>
                        <div className='row'>
                            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                                <img src='https://nexteraconnect.co.in/wp-content/uploads/2023/12/1.png' className='' width='60px' alt='Recruitment Excellence'></img>
                            </div>
                            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10'>
                                <h1 className='h5 fw-bold'>Tailored Recruitment Excellence</h1>
                                <p className='text-secondary'>We specialize in tailoring recruitment strategies to fit the unique needs and aspirations of each client, ensuring a personalized approach that drives success.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4'>
                        <div className='row'>
                            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                                <img src='https://nexteraconnect.co.in/wp-content/uploads/2023/12/2.png' className='' width='60px' alt='Technology Advantage'></img>
                            </div>
                            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10'>
                                <h1 className='h5 fw-bold'>Innovative Technology Advantage</h1>
                                <p className='text-secondary'>Stay ahead in the competitive landscape with our commitment to integrating the latest tools and solutions for a modern and tech-savvy approach.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4'>
                        <div className='row'>
                            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                                <img src='https://nexteraconnect.co.in/wp-content/uploads/2023/12/3.png' className='' width='60px' alt='Talent Network'></img>
                            </div>
                            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10'>
                                <h1 className='h5 fw-bold'>Global Talent Network</h1>
                                <p className='text-secondary'>Access a global pool of top-tier talent, demonstrating our ability to source, vet, and place candidates across international borders.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4'>
                        <div className='row'>
                            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                                <img src='https://nexteraconnect.co.in/wp-content/uploads/2023/12/4.png' className='' width='60px' alt='Client-Centric'></img>
                            </div>
                            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10'>
                                <h1 className='h5 fw-bold'>Client-Centric Partnership</h1>
                                <p className='text-secondary'>Delivering prompt results without compromising on quality, our agile methodology ensures a swift and effective recruitment process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Work Performance  */}

            <Performance />

            {/* Review  */}

            <Review />

            {/* Footer  */}

            <Footer />
        </>
    )
}

export default Home
