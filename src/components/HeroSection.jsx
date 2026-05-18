import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div>
        <header className="hero-video-section position-relative min-vh-100 d-flex align-items-center overflow-hidden pb-5">
            <video autoPlay loop muted playsInline className="position-absolute w-100 h-100 object-fit-cover z-0"
                style={{ top: '0', left: '0', objectFit: 'cover' }}>
                <source src="/videos/IMG_7730 2.MOV" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className="position-absolute w-100 h-100 bg-dark z-1" style={{ opacity: '0.55', top: '0', left: '0' }}></div>

                <div className="container position-relative z-2 text-white text-start" style={{ paddingTop: '100px'}}>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mt-5 pt-5">
                        <p className="mb-2 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Welcome to Our Pulse</p>
                        <h1 className="display-4 fw-bold mb-4 lh-sm" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                            Developing Future Doctors & Advancing Community Health
                        </h1>
                        <p className="lead mb-4 fw-normal"
                            style={{ maxWidth: '650px', fontSize: '1.15rem', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                            LeaderShip, Student Education, Medical Training, Research, & Community Health
                        </p>
                        <Link to="/donate" className="btns btn  btn-lg px-5 py-3 fw-bold mt-2">Donate Now</Link>
                    </div>
                </div>
            </div>
        </header>
        {/* <div className="blur-overlay d-flex justify-content-center align-items-center">
            <h1 className="text-black fw-bold shadow-sm">Stay tuned. PULSE is coming !</h1>
        </div> */}
    </div>
  );
}

export default HeroSection;