import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <section className="py-5 cta-section text-white text-center"
            style={{ background: 'linear-gradient(135deg, #4d7baf, #007a41)' }}>
            <div className="container">
                <h2 className="mb-3">Your Support Can Make a Difference</h2>
                <p className="mb-4">Volunteer, donate, or partner with us to rebuild healthcare education.</p>
                <Link style={{ color: '#035f34' }} className="btn btn-light btn-lg px-5 rounded-pill fw-bold" 
                   to="/contact">Support Now</Link>
            </div>
        </section>
    )
}

export default Contact;