import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section className='container'>
        <h1 className='text-center text-uppercase mt-5'>Our <span className='text'>Services</span></h1>
        <div className='cm-service'>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 mb-4">
              <div data-aos='fade-up' className="srvc-card-main-wrap">
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
              <div data-aos='fade-up' className="srvc-card-main-wrap">
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
              <div data-aos='fade-up' className="srvc-card-main-wrap">
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
              <div data-aos='fade-up' className="srvc-card-main-wrap">
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
      </section>
    </>
  )
}

export default Services
