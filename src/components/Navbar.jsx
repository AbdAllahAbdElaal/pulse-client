import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({logo}) {
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
        <div className="top-bar position-absolute w-100 z-3 py-2 px-4 border-bottom border-light border-opacity-25"
            style={{top:'0', background:'rgba(0,0,0,0.15)'}}>
            <div className="container d-flex justify-content-end">
            <a href="#" className="text-white text-decoration-none ms-4"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="text-white text-decoration-none ms-4"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/pulse_committee?igsh=MXJ5bHluN2hwMnlrMA==" 
                target="_blank" rel="noopener noreferrer" 
                className="text-white text-decoration-none ms-4">
                <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white text-decoration-none ms-4"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="text-white text-decoration-none ms-4"><i className="bi bi-youtube"></i></a>
            </div>
        </div>

        <nav className="navbar navbar-dark navbar-expand-lg bg-transparent position-absolute w-100 z-3 py-3" style={{ top: '40px' }}>
            <div className="container">
            <Link to="/" className="logo"><img src={logo} alt="PULSE Logo" className="logo"/></Link>
            <button className="navbar-toggler" type="button" onClick={() => setIsNavOpen(!isNavOpen)}
                aria-controls="mainNav" aria-expanded={isNavOpen} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="mainNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link active" to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about" onClick={() => setIsNavOpen(false)}>About Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/programs" onClick={() => setIsNavOpen(false)}>Our Programs</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/news" onClick={() => setIsNavOpen(false)}>News</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/donate" onClick={() => setIsNavOpen(false)}>Donation</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact" onClick={() => setIsNavOpen(false)}>Contact Us</Link></li>
                </ul>
                <Link className="btns btn ms-lg-4 px-4 fw-bold"
                to="/donate" onClick={() => setIsNavOpen(false)}>Donate</Link>
            </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;