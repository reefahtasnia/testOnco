import React, { useEffect } from "react";
import "./CSS/style.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import demoVideo from "./assets/demovid1.mp4";
import Testimonials from './Testimonials.js';

const Home = () => {
  useEffect(() => {
    const canvas = document.getElementById("draw");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Redraw black background after resize
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 100; // Reduced for better control
    ctx.globalCompositeOperation = "destination-out";

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function draw(e) {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      [lastX, lastY] = [x, y];
    }

    function handleMouseDown(e) {
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
    }

    canvas.style.pointerEvents = "auto";
    canvas.style.zIndex = "0";

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", () => (isDrawing = false));
      canvas.removeEventListener("mouseout", () => (isDrawing = false));
    };
  }, []);

  return (
    <div className="home">
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section">
        <video autoPlay muted loop id="heroVideo">
          <source src={demoVideo} type="video/mp4" />
        </video>
        <canvas id="draw"></canvas>
        <div className="hero-copy">
          <h1>Understand</h1>
          <h1>Connect</h1>
          <h1>Heal</h1>
          <p>Your guide to cancer begins here</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="main-content">
        <section className="section about-us">
          <div className="main-container">
            <span className="text">
              Simplifying Cancer Care with AI, Community Support, and
              Personalized Resources
            </span>
            <div className="pic" />
            <span className="text-2">About Us</span>
            <span className="text-3">
              OncoConnect brings patients and doctors together on one platform,
              making cancer care simpler and more personal. With tools like
              health trackers, symptom monitors, and expert resources, we help
              patients stay informed and in control. Our goal is to create a
              supportive space where every step of the journey is guided with
              care, understanding, and hope.
            </span>
          </div>
        </section>

        <section className="our-services">
          <h2 className="services-title">OUR SERVICES</h2>
          <h3 className="services-subtitle">
            Comprehensive Tools to Support Your Cancer Journey
          </h3>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon cancer-risk-icon" />
              <h3 className="service-title">Cancer Risk Assessment Quiz</h3>
              <p className="service-description">
                Learn about your condition with curated articles, videos, and
                expert advice.
              </p>
              <a className="service-link" href="#learn-more">
                Learn more
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon financial-aid-icon" />
              <h3 className="service-title">Financial Aid</h3>
              <p className="service-description">
                Simplify complex medical reports with our AI-powered tool that
                provides clear, actionable insights.
              </p>
              <a className="service-link" href="#learn-more">
                Learn more
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon mental-health-icon" />
              <h3 className="service-title">Mental Health Support</h3>
              <p className="service-description">
                Track and monitor symptoms easily to share detailed updates with
                your doctor.
              </p>
              <a className="service-link" href="#learn-more">
                Learn more
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon doctor-patient-icon" />
              <h3 className="service-title">Doctor-Patient Connection</h3>
              <p className="service-description">
                Stay connected with your healthcare provider for real-time
                updates and support.
              </p>
              <a className="service-link" href="#learn-more">
                Learn more
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon ai-analyzer-icon" />
              <h3 className="service-title">AI Report Analyzer</h3>
              <p className="service-description">
                Stay connected with your healthcare provider for real-time
                updates and support.
              </p>
              <a className="service-link" href="#learn-more">
                Learn more
              </a>
            </div>
          </div>
          <div className="discover-features">
            <a href="#features" className="discover-link">
              Discover All Features
            </a>
          </div>
        </section>
        <section className="testimonial-section">
          <Testimonials />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
