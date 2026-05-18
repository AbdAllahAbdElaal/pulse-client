import React from 'react';

function Testimonials() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="section-title text-center mb-4">Testimonials</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="news-box h-100">
                            <p className="mb-2">
                            "Everything was excellent, and I look forward to participating in
                            more courses with the foundation."
                            </p>
                            <small className="text-muted">Dr. Deema - Healthcare Worker</small>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-box h-100">
                            <p className="mb-2">
                            "It was an essential course for all students, especially in current
                            conditions. Thank you for your support."
                            </p>
                            <small className="text-muted">Nurse Fatima - Beneficiary</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;