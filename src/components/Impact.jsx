import React from 'react';

// تم تغيير الحرف الأول ليكون كبيراً
function ImpactSection() {
    return (
        <div>
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <h2 className="section-title mb-3 text-start">Our Impact</h2>
                            {/* تم إزالة وسم <p> الذي كان يحيط بالقائمة لأنها ممارسة HTML خاطئة */}
                            <ul className="text-muted">
                                <li><strong>Empowerment:</strong> We enable students to become independent learners, capable of self-development and confident decision-making.</li>
                                <li><strong>Leadership:</strong> We strive to develop physicians who lead, influence, and drive change—not just practice medicine.</li>
                                <li><strong>Social Responsibility:</strong> We believe medicine is a humanitarian mission, and we connect medical knowledge with serving community needs.</li>
                                <li><strong>Excellence:</strong> We are committed to the highest standards of quality in education, activities, and outcomes.</li>
                                <li><strong>Collaboration:</strong> We work as a team and believe true impact comes from shared efforts and collective expertise.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="stat-box text-center">
                                        <h3>35+</h3>
                                        <p className="mb-0">Completed Projects</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="stat-box text-center">
                                        <h3>1200+</h3>
                                        <p className="mb-0">Supported Students</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="stat-box text-center">
                                        <h3>22+</h3>
                                        {/* تم إصلاح الخطأ المطبعي هنا */}
                                        <p className="mb-0">Classrooms Restored</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="stat-box text-center">
                                        <h3>47</h3>
                                        <p className="mb-0">Countries of Ambassadors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// التصدير بالاسم الجديد
export default ImpactSection;