import React from 'react';
import logo from '../assets/Images/logo.png';
import '../assets/css/style.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top px-5 py-3">

                <img className="mx-auto d-block" src={logo} width="150px" alt="NextEra Connect Pvt Ltd"></img>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse" style={{justifyContent: "end"}}>
                    <ul className="navbar-nav my-2">
                        <li className="nav-item">
                            <a className="nav-link text-center mx-2 active" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center mx-2" href="/">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center mx-2" href="/">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center mx-2" href="/">CAREER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center mx-2" href="/">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
