import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedEvent from './components/FeaturedEvent';
import Impact from './components/Impact';
import NewsSection from './components/NewsSection';
import MissionVision from './components/Mission-Vision';
import VolunteerForm from './components/VolunteerForm';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';

function Home() {
  return (
    // استخدام fragment (<>) لتغليف المكونات بدون إضافة ديف إضافي للـ DOM
    <>

      <Navbar logo="/images/green-logo.png"/>
      
      {/* القسم الترحيبي */}
      <HeroSection />

      <FeaturedEvent />

      <Impact />

      {/* قسم الأخبار الديناميكي */}
      <div className="container mt-5">
        <h2 className="section-title text-center mb-4">Latest News</h2>
        <NewsSection limit={3}/>
      </div>

      <MissionVision />

      <VolunteerForm />

      <Programs />

      <Contact />

      <Testimonials />

      <Partners />

    </>
  );
}

export default Home;