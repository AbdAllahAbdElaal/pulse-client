import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MissionVision from './components/Mission-Vision';

function About() {
  return (
    <>
        <Navbar logo="/images/white-logo.png"/>

        <Header title="Contact Us" subtitle="Send us a message using the form below."/>

        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4 p-md-5">
                                <h2 className="section-title mb-4">Contact Form</h2>
                                <div id="formStatus" className="alert d-none" role="alert"></div>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label" for="name">Full Name</label>
                                            <input className="form-control" type="text" id="name" name="name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label" for="email">Email Address</label>
                                            <input className="form-control" type="email" id="email" name="email" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label" for="subject">Subject</label>
                                            <input className="form-control" type="text" id="subject" name="subject" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label" for="message">Message</label>
                                            <textarea className="form-control" id="message" name="message" rows="6" required></textarea>
                                        </div>
                                    </div>
                                    <button className="btns btn mt-4" type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}

export default About;