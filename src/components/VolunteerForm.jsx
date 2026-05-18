import React, { useState } from 'react';

function VolunteerForm() {
  // إدارة حالة حقول الإدخال
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // إدارة حالة نجاح الإرسال
  const [isSubmitted, setIsSubmitted] = useState(false);

  // تحديث البيانات عند الكتابة في الحقول
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // دالة إرسال البيانات (محاكاة للاتصال بالـ Backend)
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة الافتراضي
    
    // هنا سيتم لاحقاً وضع كود الـ fetch أو axios لإرسال البيانات إلى Laravel API
    console.log("تم إرسال بيانات المتطوع:", formData);
    
    // إظهار رسالة النجاح وإخفاء النموذج
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
        <div className="alert alert-success text-center shadow-sm" role="alert">
            شكراً لانضمامك! تم استلام طلبك بنجاح وسنتواصل معك قريباً.
        </div>
    );
  }

  return (
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Join Our Mission</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-4">
                <p className="text-muted">Become a volunteer and help us create a bigger impact.</p>
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email Address" required />
                  </div>
                  <div className="col-12">
                    <select className="form-select" required>
                      <option value="">Choose Volunteer Type</option>
                      <option>Individual Volunteer</option>
                      <option>Organization Partner</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn border-0 w-100 py-2 rounded-3 text-white"
                      style={{ backgroundColor: '#358b80' }}>Join as
                      Volunteer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    // <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
    //   <div className="mb-3">
    //     <label htmlFor="name" className="form-label">الاسم الكامل</label>
    //     <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
    //     <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="phone" className="form-label">رقم الهاتف</label>
    //     <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} required />
    //   </div>
    //   <button type="submit" className="btn btn-primary w-100">إرسال طلب التطوع</button>
    // </form>
  );
}

export default VolunteerForm;