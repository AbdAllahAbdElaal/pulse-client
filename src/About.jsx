import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MissionVision from './components/Mission-Vision';

function About() {
  return (
    <>
        <Navbar logo="/images/white-logo.png"/>

        <Header title="About Us" subtitle="Simple, clear, and mission-focused information."/>

        <MissionVision />

        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="section-title text-center mb-4">Impact Numbers</h2>
                <div className="row g-3">
                    <div className="col-6 col-md-3">
                        <div className="stat-box text-center">
                            <h3 className="mb-1">35+</h3>
                            <p className="mb-0">Projects</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="stat-box text-center">
                            <h3 className="mb-1">1200+</h3>
                            <p className="mb-0">Students</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="stat-box text-center">
                            <h3 className="mb-1">18+</h3>
                            <p className="mb-0">Training Events</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="stat-box text-center">
                            <h3 className="mb-1">40+</h3>
                            <p className="mb-0">Volunteers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default About;