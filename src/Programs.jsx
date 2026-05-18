import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Link } from 'react-router-dom';

function Programs() {
  return (
    <>
        <Navbar logo="/images/white-logo.png"/>

        <Header title="Our Programs" subtitle="Practical support with simple and focused initiatives."/>

        <section className="py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Medical Education</h5>
                                <p className="card-text text-muted">
                                    Developing clinical and academic knowledge in a modern, practical approach.
                                </p>
                                <Link to="/MedicalProgram" className="btns btn">More Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Community Survice</h5>
                                <p className="card-text text-muted">
                                    Strengthening the physician’s role in health awareness and community well-being.
                                </p>
                                <button className="btns btn">More Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}

export default Programs;