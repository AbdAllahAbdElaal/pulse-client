import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <footer className="site-footer pt-5 pb-3">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4 col-xl-3">
          <Link className="footer-brand d-inline-block mb-3" to="/">PULSE Foundation</Link>
          <p className="footer-text mb-0">
            Developing Future Doctors & Advancing Community Health
          </p>
        </div>
        <div className="col-4 col-lg-3 col-xl-3">
          <h6 className="footer-title">Quick Links</h6>
          <div className="d-flex flex-column gap-2 footer-links">
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="col-8 col-lg-5 col-xl-3">
          <h6 className="footer-title">Contact</h6>
          <p className="footer-text mb-2">Palestine - Gaza</p>

          <a className="text-white text-decoration-none d-flex mt-2" 
            href="mailto:pulse.med.edu@gmail.com" 
            rel="noopener noreferrer" 
            target="_blank" 
            title="Contact Us On Gmail" >
            <i className="fa-solid fa-envelope me-2 email-icon"></i>
            <p className="footer-text mb-0" style={{ fontSize: '18px' }}>pulse.med.edu@gmail.com</p>
          </a>

          <a href="https://wa.me/970594395448" rel="noopener noreferrer" target="_blank"
            className="text-white text-decoration-none d-flex mt-2" title="Contact Us On WhatsApp">
            <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
            <p className="footer-text mb-0" style={{ fontSize: '18px' }}>+970594395448</p>
          </a>

          <a href="https://wa.me/972599411484" rel="noopener noreferrer" target="_blank"
            className="text-white text-decoration-none d-flex mt-2" title="Contact Us On WhatsApp">
            <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
            <p className="footer-text mb-0" style={{ fontSize: '18px' }}>+972599411484</p>
          </a>
        </div>
        <div className="col-lg-12 col-xl-3">
          <h6 className="footer-title">Follow Us</h6>
          <div className="social-links">
            <a className="social-icon Facebook-icon" href="#" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a className="social-icon Instagram-icon"
              href="https://www.instagram.com/pulse_committee?igsh=MXJ5bHluN2hwMnlrMA==" target="_blank"
              rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a className="social-icon Twitter-icon" href="#" target="_blank" rel="noopener noreferrer"
              aria-label="Twitter X"><i className="bi bi-twitter-x"></i></a>
            <a className="social-icon LinkedIn-icon" href="#" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a className="social-icon YouTube-icon" href="#" target="_blank" rel="noopener noreferrer"
              aria-label="YouTube"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-4 pt-3 text-center">
        <small>Copyright © 2026 PULSE Foundation. All Rights Reserved.</small>
      </div>
    </div>
  </footer>
  );
}

export default Footer;