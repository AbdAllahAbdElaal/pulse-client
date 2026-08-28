import React, { useState } from "react";

function VolunteerForm() {
  // إدارة حالة حقول الإدخال
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "", // تمت إضافة الحقل هنا
    type: "",   // تمت إضافة الحقل هنا
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // تحديث البيانات عند الكتابة في أي حقل
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // دالة إرسال البيانات إلى Laravel API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // استبدل الرابط برابط الـ API الخاص بك في لارافيل
      await axios.post("https://your-api-url.com/api/volunteer", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("حدث خطأ أثناء الإرسال:", error);
      alert("تعذر إرسال الطلب، يرجى المحاولة لاحقاً.");
    } finally {
      setLoading(false);
    }
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
                {/* حقل الاسم */}
                <div className="col-md-6">
                  <input name="name" type="text" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                
                {/* حقل الإيميل */}
                <div className="col-md-6">
                  <input name="email" type="email" className="form-control" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                </div>
                
                {/* حقل الهاتف */}
                <div className="col-md-6">
                  <input name="phone" type="tel" className="form-control" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                </div>

                {/* حقل الجنس */}
                <div className="col-md-6 d-flex align-items-center">
                  <label className="form-label mb-0">Gender: &nbsp;</label>
                  <div className="d-flex gap-3 align-items-center border p-2 rounded bg-light flex-grow-1">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={formData.gender === "male"} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={formData.gender === "female"} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>

                {/* حقل نوع التطوع */}
                <div className="col-12">
                  <select name="type" className="form-select" value={formData.type} onChange={handleChange} required>
                    <option value="">Choose Volunteer Type</option>
                    <option value="individual">Individual Volunteer</option>
                    <option value="organization">Organization Partner</option>
                  </select>
                </div>

                {/* زر الإرسال */}
                <div className="col-12">
                  <button type="submit" className="btn border-0 w-100 py-2 rounded-3 text-white" style={{ backgroundColor: "#358b80" }} disabled={loading}>
                    {loading ? "Sending..." : "Join as Volunteer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerForm;