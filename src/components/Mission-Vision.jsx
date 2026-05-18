import React from 'react';

function MissionVision() {
    return (
        <div>
            <section className="py-5 bg-light">
                <div className="container text-center">
                <h2 className="section-title mb-4">Our Mission & Vision</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                        <h5>Mission</h5>
                        <p className="text-muted mb-0">
                            We aim to support medical students in Gaza by providing an integrated environment
                            that includes medical education, clinical training, scientific research,
                            and leadership development, facilitating their academic and professional journey
                            and preparing them to become active contributors to their community and the healthcare
                            sector.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                        <h5>Vision</h5>
                        <p className="text-muted mb-0">
                            To be the leading initiative in empowering medical students in Gaza
                            by preparing competent physician leaders equipped with knowledge,
                            skills, and community awareness to actively contribute to rebuilding
                            and developing the healthcare system.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default MissionVision;