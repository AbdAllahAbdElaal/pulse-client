import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function ProgramDetails() {
  return (
    <>
      <Navbar logo="/images/white-logo.png" />

      <Header
        title="Medical Program"
        subtitle="Developing clinical and academic knowledge in a modern, practical approach."
      />

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <h3 className="fw-bold mb-4">Program Overview</h3>
              <div
                className="video-protection-container position-relative overflow-hidden rounded shadow-sm"
                id="videoContainer"
                onContextMenu={(e) => e.preventDefault()}
              >
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0&disablekb=1"
                    title="Course Video"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="smart-overlay-top"></div>

                <div id="dynamicWatermark" className="watermark-text">
                  Pulse - 0594395448
                </div>
              </div>

              <div className="program-description">
                <h5 className="fw-bold">About This Course</h5>
                <p className="text-muted">
                  Here you will find a detailed description of the academic
                  course or training program. This text will be fetched
                  dynamically from the database later. It covers the objectives,
                  outcomes, and target audience for this specific medical
                  program.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="card shadow-sm border-0 sticky-top"
                style={{ top: '100px' }}
              >
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0 py-2">
                    <i className="fa-solid fa-folder-open me-2"></i> Course
                    Materials
                  </h5>
                </div>
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                      <div>
                        <i className="fa-solid fa-file-pdf text-danger fs-4 me-2"></i>
                        <span className="fw-semibold">Syllabus 2026.pdf</span>
                        <div className="text-muted small ms-4">2.4 MB</div>
                      </div>
                      <a
                        href="#"
                        className="btn btn-sm btn-outline-primary"
                        download
                      >
                        <i className="fa-solid fa-download"></i>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                      <div>
                        <i className="fa-solid fa-file-word text-primary fs-4 me-2"></i>
                        <span className="fw-semibold">Assignment 1.docx</span>
                        <div className="text-muted small ms-4">1.1 MB</div>
                      </div>
                      <a
                        href="#"
                        className="btn btn-sm btn-outline-primary"
                        download
                      >
                        <i className="fa-solid fa-download"></i>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                      <div>
                        <i className="fa-solid fa-file-powerpoint text-warning fs-4 me-2"></i>
                        <span className="fw-semibold">Lecture Slides.pptx</span>
                        <div className="text-muted small ms-4">5.8 MB</div>
                      </div>
                      <a
                        href="#"
                        className="btn btn-sm btn-outline-primary"
                        download
                      >
                        <i className="fa-solid fa-download"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProgramDetails;
