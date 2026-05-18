import React from 'react';

function Programs() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="section-title text-center mb-4">Our Programs</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <h5>Medical Education</h5>
                                <p className="text-muted mb-0">Developing clinical and academic knowledge in a modern, practical approach.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <h5>Clinical Training</h5>
                                <p className="text-muted mb-0">Enhancing practical skills and connecting students with real medical practice.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <h5>Community Survice</h5>
                                <p className="text-muted mb-0">Strengthening the physician’s role in health awareness and community
                                    well-being.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Programs;