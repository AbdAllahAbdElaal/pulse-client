import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Link } from 'react-router-dom';

function MedicalProgram() {
  return (
    <>
      <Navbar logo="/images/white-logo.png" />

      <Header
        title="Medical Program"
        subtitle="Developing clinical and academic knowledge in a modern, practical approach."
      />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center custom-card-hover">
                <div className="card-body p-4">
                  <div className="icon-box mb-3 text-primary fs-1">
                    <i className="fa-solid fa-book-medical"></i>
                  </div>
                  <h5 className="card-title fw-bold">Academic Courses</h5>
                  <p className="card-text text-muted small">
                    Developing clinical and academic knowledge in a modern,
                    practical approach.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 pb-4">
                  <Link
                    to="/ProgramDetails"
                    className="btns btn w-100 rounded-pill"
                  >
                    View Program
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center custom-card-hover">
                <div className="card-body p-4">
                  <div className="icon-box mb-3 text-primary fs-1">
                    <i className="fa-solid fa-user-doctor"></i>
                  </div>
                  <h5 className="card-title fw-bold">Medical Training</h5>
                  <p className="card-text text-muted small">
                    Hands-on clinical training for practical medical excellence.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 pb-4">
                  <Link
                    to="/ProgramDetails"
                    className="btns btn w-100 rounded-pill"
                  >
                    View Program
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center custom-card-hover">
                <div className="card-body p-4">
                  <div className="icon-box mb-3 text-primary fs-1">
                    <i className="fa-solid fa-truck-medical"></i>
                  </div>
                  <h5 className="card-title fw-bold">Emergency Aid</h5>
                  <p className="card-text text-muted small">
                    Rapid response and life-saving emergency medical techniques.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 pb-4">
                  <Link
                    to="/ProgramDetails"
                    className="btns btn w-100 rounded-pill"
                  >
                    View Program
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center custom-card-hover">
                <div className="card-body p-4">
                  <div className="icon-box mb-3 text-primary fs-1">
                    <i className="fa-solid fa-microscope"></i>
                  </div>
                  <h5 className="card-title fw-bold">Research</h5>
                  <p className="card-text text-muted small">
                    Advancing medical science through innovative research
                    methodologies.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 pb-4">
                  <Link
                    to="/ProgramDetails"
                    className="btns btn w-100 rounded-pill"
                  >
                    View Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MedicalProgram;
