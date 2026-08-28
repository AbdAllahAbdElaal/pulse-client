import {React,useRef, useEffect} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function ProgramDetails() {
  const videoContainerRef = useRef(null);

  const handleVideoClick = () => {
    const container = videoContainerRef.current;
    const iframe = document.getElementById("youtubePlayer");

    // Fullscreen
    if (container && container.requestFullscreen) {
      container.requestFullscreen();
    }

    // Play YouTube
    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "playVideo",
          args: []
        }),
        "*"
      );
    }
  };

  const pauseVideo = () => {
    const iframe = document.getElementById("youtubePlayer");

    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "pauseVideo",
          args: []
        }),
        "*"
      );
    }
  };


  useEffect(() => {
    const handleFullscreenChange = () => {
      // إذا خرجنا من Fullscreen
      if (!document.fullscreenElement) {
        pauseVideo();
      }
    };

    const handleBackButton = () => {
      // إذا كان الفيديو في Fullscreen
      if (document.fullscreenElement) {
        pauseVideo();

        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);
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
                ref={videoContainerRef}
                className="video-protection-container position-relative overflow-hidden rounded shadow-sm"
                id="videoContainer"
                onContextMenu={(e) => e.preventDefault()}
              >
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://player.mediadelivery.net/embed/737208/93eddd28-e711-4f12-8ed0-5e972630fab2?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                    title="Course Video"
                    loading="lazy"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
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
