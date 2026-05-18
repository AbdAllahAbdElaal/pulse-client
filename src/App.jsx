import React from 'react'; // استدعاء ميزات الفصل
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Programs from './Programs';
import News from './News';
import Donate from './Donate';
import Contact from './Contact';
import MedicalProgram from './MedicalProgram';
import ProgramDetails from './ProgramDetails'


function App() {
  return (
    <Router>
      <div className="pulse-app d-flex flex-column min-vh-100">
        {/* النافبار ثابت دائماً في الأعلى */}
        {/* <Navbar /> */}
        
        {/* منطقة تغيير الصفحات (المحتوى الديناميكي) */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/news" element={<News />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/MedicalProgram" element={<MedicalProgram />} />
            <Route path="/ProgramDetails" element={<ProgramDetails />} />
          </Routes>
        </main>

        {/* الفوتر ثابت دائماً في الأسفل */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;