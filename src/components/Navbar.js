import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Images/logo.png';
import '../assets/css/style.css';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top px-5 py-3">
            <Link to="/" className="navbar-brand mx-auto d-block">
                <img src={logo} width="150px" alt="NextEra Connect Pvt Ltd" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse" style={{ justifyContent: "end" }}>
                <ul className="navbar-nav my-2">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link text-center mx-2 ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={`nav-link text-center mx-2 ${location.pathname === '/about' ? 'active' : ''}`}>ABOUT US</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className={`nav-link text-center mx-2 ${location.pathname.startsWith('/services') ? 'active' : ''}`} href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            SERVICES
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/services/product-development" className="dropdown-item">PRODUCT DEVELOPMENT</Link></li>
                            <li><Link to="/services/general-staffing-services" className="dropdown-item">GENERAL STAFFING SERVICES</Link></li>
                            <li><Link to="/services/middleware-enterprise-integration" className="dropdown-item">MIDDLEWARE ENTERPRISE INTEGRATION</Link></li>
                            <li><Link to="/services/training" className="dropdown-item">TRAINING</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/career" className={`nav-link text-center mx-2 ${location.pathname === '/career' ? 'active' : ''}`}>CAREER</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={`nav-link text-center mx-2 ${location.pathname === '/contact' ? 'active' : ''}`}>CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
