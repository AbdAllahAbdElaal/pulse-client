import React from 'react';

function FeaturedEventSection() {
    return (
        <div>
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="section-title mb-2">Featured Event</h2>
                    <p className="text-muted mb-4">Latest moments from our education support activities.</p>
                    <div className="card shadow-sm p-4" style={{ border: '1px dashed rgb(143, 194, 143)' }}>
                        <h5 className="mb-2">First Aid and BLS Course</h5>
                        <p className="mb-1 text-muted"><strong>Location:</strong> Palestine School - Gaza</p>
                        <p className="mb-0 text-muted"><strong>Date:</strong> May 5, 2026</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedEventSection;