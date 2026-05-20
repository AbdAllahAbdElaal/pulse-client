import React, { useState, useEffect } from 'react';

function NewsSection({ limit }) {
  // 1. تعريف الـ State لتخزين الأخبار القادمة من الباك اند
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. استخدام useEffect لجلب البيانات بمجرد تحميل المكون
  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/api/news`; 
    const url = limit ? `${baseUrl}?limit=${limit}` : baseUrl;

    fetch(url)
      .then(response => response.json()) // تحويل الاستجابة إلى JSON
      .then(data => {
        setNewsItems(data); // حفظ البيانات الحقيقية في الـ State
        setLoading(false);  // إيقاف حالة التحميل
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [limit]);

  // 3. عرض رسالة تحميل ريثما تصل البيانات من Laravel
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // 4. رسم البيانات على الشاشة
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {newsItems.map((news) => (
            <div className="col-md-6 col-lg-4" key={news.id}>
              <article className="card border-1 shadow-sm h-100 custom-card-hover">
                <img
                  src={news.image_url} // تأكد أن اسم الحقل يطابق ما كتبناه في Laravel
                  className="card-img-top"
                  alt={news.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="text-muted small mb-2">{news.date}</p>
                  <p className="card-text text-muted mb-0">{news.excerpt}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;