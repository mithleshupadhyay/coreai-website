

export const About = (props) => {
  return (
    <div
      id="about"
      style={{
        background: "linear-gradient(135deg,rgb(184, 54, 31),rgb(129, 63, 36), #6a11cb)",
        padding: "60px 20px",
        color: "#ffffff",
      }}
    >
      <style jsx>{`
        .about-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          gap: 40px;
          align-items: stretch;
          flex-wrap: wrap;
        }

        .about-image,
        .about-content {
          flex: 1;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .about-content {
          background: rgba(255, 255, 255, 0.08);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .about-content h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .about-content h3 {
          font-size: 2rem;
          margin-top: 20px;
          margin-bottom: 15px;
          color: #00f2fe;
        }

        .about-content p {
          font-size: 1.5rem;
          line-height: 1.8;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .list-container {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .list {
          flex: 1;
          min-width: 220px;
        }

        .list ul {
          list-style: none;
          padding: 0;
        }

        .list ul li {
          position: relative;
          margin-bottom: 10px;
          padding-left: 25px;
          font-size: 1.5rem;
          color: #ffffff;
        }

        .list ul li:before {
          content: "✔";
          position: absolute;
          left: 0;
          top: 0;
          color: #4facfe;
          font-size: 1.5rem;
        }
      `}</style>

      <div className="about-container">
        {/* Left Section: Image */}
        <div className="about-image">
          <img
            src="img/about.jpg"
            alt="About Us"
            className="img-fluid"
          />
        </div>

        {/* Right Section: Content */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            {props.data ? props.data.paragraph : "Loading..."}
          </p>
          <h3>Why Choose Us?</h3>
          <div className="list-container">
            {/* Left List */}
            <div className="list">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  : "Loading..."}
              </ul>
            </div>

            {/* Right List */}
            <div className="list">
              <ul>
                {props.data
                  ? props.data.Why2.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  : "Loading..."}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};






import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_ce1j7wm", // Service ID
        "template_fqp67iu", // Template ID
        e.target, // Form element
        "sf-Kw6-h85cmz_CGy" // Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          clearState();

          // Hide status message after 3 seconds
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        () => {
          setStatus("Error: Unable to send message.");
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <div>
      <style jsx>{`
        /* Smooth scrolling across the page */
        html {
          scroll-behavior: smooth;
        }

        .contact-section {
          background: linear-gradient(to right, #6a11cb, #2575fc);
          padding: 60px 20px;
          font-family: Arial, sans-serif;
        }

        .contact-container {
          display: flex;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
          gap: 20px;
          justify-content: center;
        }

        /* Contact Form */
        .contact-form {
          flex: 2 1 65%; /* Takes up 65% width for a larger form */
          background: linear-gradient(to bottom, #ffffff, #e0f7fa);
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          height: auto; /* Adjust to content's height */
          min-height: 400px; /* Ensure it has a minimum height */
        }

        .contact-form h2 {
          margin-bottom: 20px;
          font-size: 2.4rem;
          color: #00796b;
        }

        .intro-text {
          margin-bottom: 20px;
          font-size: 1.2rem;
          color: #333;
          text-align: center;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-control {
          width: 100%;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1.2rem;
        }

        .form-control:focus {
          outline: none;
          border-color: #00796b;
        }

        .btn-submit {
          background: linear-gradient(to right, #00796b, #004d40);
          color: #fff;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
          font-size: 1.3rem;
          align-self: center;
        }

        .btn-submit:hover {
          background: linear-gradient(to right, #004d40, #00251a);
        }

        .status-message {
          margin-top: 20px;
          font-size: 1.3rem;
          color: #00796b;
          text-align: center;
        }

        /* Contact Info */
        .contact-info {
          flex: 1 1 30%; /* Takes up 30% width for a smaller contact info */
          background: linear-gradient(to bottom, #ffffff, #e0f7fa);
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          height: auto !important; /* Allow height to adjust */
          min-height: 200px; /* Reduced min-height */
        }

        .contact-info h3 {
          margin-bottom: 20px;
          font-size: 2.4rem;
          color: #00796b;
        }

        .contact-info p {
          margin-bottom: 10px;
          font-size: 1.3rem;
          color: #333;
        }

        .social-links {
          margin-top: 20px;
          text-align: center;
        }

        .social-links a {
          margin-right: 15px;
          color: #00796b;
          font-size: 3rem;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: #004d40;
        }

        .footer {
          background: linear-gradient(to right, #ff6f61, #d33f49);
          color: #fff;
          padding: 10px 0;
          text-align: center;
          font-size: 1.2rem;
        }

        /* Responsiveness: Stack them vertically on smaller screens */
        @media (max-width: 768px) {
          .contact-form, .contact-info {
            flex: 1 1 100%; /* 100% width on small screens */
            min-height: auto; /* Allow height to adjust */
          }
        }
      `}</style>

      <div className="contact-section" id="contact-form">
        <div className="contact-container">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>

            {/* Introductory Text */}
            <div className="intro-text">
              <p>Fill this form to contact us. We would love to hear from you!</p>
            </div>

            {/* Form Fields */}
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
                onChange={handleChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
                onChange={handleChange}
                value={message}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </div>

            {/* Status Message */}
            {status && <div className="status-message">{status}</div>}
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Address: {props.data ? props.data.address : "Loading..."}</p>
            <p>Phone: {props.data ? props.data.phone : "Loading..."}</p>
            <p>Email: {props.data ? props.data.email : "Loading..."}</p>
            <div className="social-links">
              <a href={props.data ? props.data.facebook : "#"}>
                <i className="fa fa-facebook"></i>
              </a>
              <a href={props.data ? props.data.twitter : "#"}>
                <i className="fa fa-twitter"></i>
              </a>
              <a href={props.data ? props.data.youtube : "#"}>
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2025 Core AI Solutions India. All Rights Reserved.</p>
      </div>
    </div>
  );
};




import React from "react";

export const Features = (props) => {
  return (
    <div
      id="features"
      style={{
        background: "linear-gradient(135deg,rgb(203, 70, 17),rgb(97, 36, 8))", // New refined gradient
        color: "#ffffff",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <style jsx>{`
        .features-container {
          max-width: 1200px;
          margin: auto;
        }

        .section-title h2 {
          font-size: 2.8rem;
          margin-bottom: 50px;
          color: #ffffff;
          font-weight: 700;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          justify-content: center;
        }

        .feature-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .feature-image {
          width: 100%;
          max-height: 200px;
          object-fit: cover;
          margin-bottom: 20px;
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .feature-title {
          font-size: 1.6rem;
          margin-bottom: 15px;
          color: #ffffff;
          font-weight: 600;
        }

        .feature-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #dcdcdc;
          text-align: center;
          padding: 0 15px;
        }

        @media (max-width: 768px) {
          .feature-title {
            font-size: 1.4rem;
          }

          .feature-text {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .feature-title {
            font-size: 1.3rem;
          }

          .feature-text {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="features-container">
        <div className="section-title">
          <h2>Features</h2>
        </div>

        <div className="feature-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="feature-card">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="feature-image"
                    onError={(e) => {
                      e.target.src = "img/placeholder.jpg"; // Fallback for broken images
                    }}
                  />
                  <h3 className="feature-title">{d.title}</h3>
                  <p className="feature-text">{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};




import { Image } from "./image";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome for icons
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="gallery-section">
      <style jsx>{`
        .gallery-section {
          background: linear-gradient(to bottom, #1f1c2c, #928dab);
          padding: 60px 20px;
          font-family: Arial, sans-serif;
        }

        .section-title {
          margin-bottom: 40px;
          text-align: center;
        }

        .section-title h2 {
          font-size: 2.8rem;
          font-weight: bold;
          color: #f9f9f9;
        }

        .section-title p {
          font-size: 1.2rem;
          color: #e0e0e0;
        }

        .portfolio-items {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .portfolio-items .col-sm-6 {
          flex: 0 1 calc(33.333% - 20px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .portfolio-items .col-sm-6:hover .image-wrapper {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
        }

        .image-wrapper {
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        @media (max-width: 992px) {
          .portfolio-items .col-sm-6 {
            flex: 0 1 calc(50% - 20px);
          }
        }

        @media (max-width: 768px) {
          .portfolio-items .col-sm-6 {
            flex: 0 1 calc(100% - 20px);
          }
        }
      `}</style>

      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>These are some of our memorable moments captured on camera.</p>
        </div>
        <div className="portfolio-items">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <div className="image-wrapper">
                    <Image
                      // title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};





import React from "react";

export const Header = (props) => {
  return (
    <header id="header" style={{ position: "relative" }}>
      {/* Background filled with GIF */}
      <div
        className="intro"
        style={{
          background: `url('/img/gif.gif') center center / cover no-repeat`, // Sets GIF as the background
          padding: "150px 0",
          textAlign: "center",
          boxSizing: "border-box",
          height: "100vh", // Ensures it covers the full viewport height
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Overlay for readability */}
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for contrast
            zIndex: 1,
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row">
            <div className="col-xs-12 text-center">
              {/* Core AI Logo */}
              <div className="logo-container" style={{ marginBottom: "5px" }}>
                <a href="/" style={{ display: "inline-block" }}>
                  <img
                    src="/img/CoreAI_logo.png" // Path to the Core AI logo
                    alt="Core AI Logo"
                    style={{
                      width: "200px",
                      height: "auto",
                      marginBottom: "5px", // Reduced margin bottom to bring logo closer to text
                      maxWidth: "100%",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </div>

              {/* Header Text */}
              <div className="intro-text" style={{ marginTop: "0" }}>
                <h1
                  style={{
                    fontSize: "3.5rem",
                    color: "#ffffff",
                    fontWeight: "bold",
                    marginBottom: "5px", // Adjusted margin bottom
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    animation: "fadeIn 2s ease-out",
                  }}
                >
                  {props.data ? props.data.title : "Core AI Solutions India"}
                </h1>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    maxWidth: "800px",
                    margin: "0 auto",
                    marginBottom: "40px",
                    lineHeight: "1.8",
                    animation: "fadeIn 2s ease-out",
                  }}
                >
                  {props.data
                    ? props.data.paragraph
                    : "Building the future with innovative AI solutions."}
                </p>
                {/* Buttons */}
                <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      background: "#feb47b",
                      color: "#fff",
                      padding: "18px 35px",
                      fontSize: "1.5rem",
                      borderRadius: "50px",
                      textDecoration: "none",
                      transition: "0.3s",
                      border: "2px solid #feb47b",
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    Learn More
                  </a>
                  <a
                    href="#contact-form"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      background: "#1c92d2",
                      color: "#fff",
                      padding: "18px 35px",
                      fontSize: "1.2rem",
                      borderRadius: "50px",
                      textDecoration: "none",
                      transition: "0.3s",
                      border: "2px solid #1c92d2",
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add subtle fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
};



import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};




import React from "react";

export const Navigation = () => {
  return (
    <nav
      id="menu"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "15px 25px",
        borderRadius: "0 0 15px 15px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ul
            style={{
              display: "flex",
              gap: "25px", // Adjusted gap for better spacing
              listStyleType: "none",
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            <li>
              <a href="#page-top" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/img/CoreAI_logo.png"
                  alt="Core AI Logo"
                  style={{
                    height: "42px", // Increased logo height
                    width: "auto",
                    marginRight: "15px", // Added extra margin
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </li>
            {[
              { href: "#features", label: "Features" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Gallery" },
              { href: "#testimonials", label: "Testimonials" },
              { href: "#team", label: "Team" },
              { href: "#contact-form", label: "Contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "15px",
                    padding: "10px 15px",
                    borderRadius: "6px",
                    transition: "background-color 0.3s, transform 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#ffffff20";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};



import React from "react";

export const Services = (props) => {
  return (
    <div
      id="services"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Sophisticated gradient
        color: "#ffffff",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <style jsx>{`
        .services-container {
          max-width: 1200px;
          margin: auto;
        }

        .section-title h2 {
          font-size: 2.8rem;
          margin-bottom: 50px;
          color: #ffffff;
          font-weight: 700;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Automatically adjust columns */
          gap: 30px;
          justify-content: center;
        }

        .service-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .service-image {
          width: 100%;
          max-height: 200px;
          object-fit: cover;
          margin-bottom: 20px;
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .service-title {
          font-size: 1.6rem;
          margin-bottom: 15px;
          color: #ffffff;
          font-weight: 600;
        }

        .service-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #dcdcdc;
          text-align: center;
          padding: 0 15px;
        }

        @media (max-width: 768px) {
          .service-title {
            font-size: 1.4rem;
          }

          .service-text {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .service-title {
            font-size: 1.3rem;
          }

          .service-text {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="services-container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            At Core AI Solutions, we deliver a wide array of innovative AI-driven healthcare services to enhance efficiency and patient outcomes.
          </p>
        </div>

        <div className="service-grid">
          {props.data
            ? props.data.map((service, i) => (
                <div key={`${service.name}-${i}`} className="service-card">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="service-image"
                    onError={(e) => {
                      e.target.src = "img/placeholder.jpg"; // Fallback for broken images
                    }}
                  />
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-text">{service.text}</p>
                </div>
              ))
            : "Loading services..."}
        </div>
      </div>
    </div>
  );
};





import React from "react";

export const Team = (props) => {
  // Dynamic row distribution: Adjust the number of items per row
  const distributeItems = (array) => {
    const layout = [4, 3, 5]; // Adjust the number of items per row here
    const result = [];
    let startIndex = 0;

    layout.forEach((count) => {
      if (startIndex < array.length) {
        result.push(array.slice(startIndex, startIndex + count));
        startIndex += count;
      }
    });

    // Add any remaining items to a final row
    if (startIndex < array.length) {
      result.push(array.slice(startIndex));
    }

    return result;
  };

  return (
    <div
      id="team"
      className="text-center"
      style={{
        padding: "10px", // Reduced padding
        background: "linear-gradient(135deg, #1a73e8, #9b59b6)", // Gradient background
        color: "#fff", // Ensures text contrast
        minHeight: "80vh", // Reduced minHeight for smaller section height
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-title" style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#fff" }}>Meet the Team</h2>
          <p style={{ color: "#fff" }}>
            Our team at Core AI Solutions combines expertise in AI and healthcare to create innovative solutions for better patient care.
          </p>
        </div>
        <div>
          {props.data
            ? distributeItems(props.data).map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  style={{
                    display: "flex",
                    flexDirection: rowIndex % 2 === 0 ? "row" : "row-reverse",
                    justifyContent: row.length < 4 ? "center" : "space-between",
                    flexWrap: "wrap",
                    marginBottom: "15px", // Reduced margin between rows
                  }}
                >
                  {row.map((d, i) => (
                    <div
                      key={`${d.name}-${i}`}
                      style={{
                        flex: "1 1 calc(100% / 4 - 20px)", // Default to 4 items per row
                        maxWidth: "calc(100% / 4 - 20px)",
                        margin: "8px", // Reduced margin between items
                        boxSizing: "border-box",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between", // Ensures consistent height alignment
                        height: "270px", // Fixed height for consistent boxes
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly transparent dark card
                          borderRadius: "8px",
                          padding: "10px",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                          transition: "transform 0.3s, box-shadow 0.3s",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between", // Ensures consistent card height
                          height: "100%",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                        }}
                      >
                        <img
                          src={d.img}
                          alt={d.name}
                          style={{
                            width: "100%",
                            maxWidth: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "10px",
                            alignSelf: "center", // Centers the image horizontally
                          }}
                        />
                        <div>
                          <h4 style={{ color: "#fff", marginBottom: "5px" }}>{d.name}</h4>
                          <p style={{ color: "#ddd" }}>{d.job}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};




import React, { useEffect, useState } from "react";

export const Testimonials = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        props.data ? (prevIndex + 1) % props.data.length : 0
      );
    }, 4000); // 4 seconds delay for each testimonial

    return () => clearInterval(interval); // Cleanup the interval
  }, [props.data]);

  const gradientColors = [
    "linear-gradient(to bottom right, #8E44AD, #3498DB)",
    "linear-gradient(to bottom right, #FF512F, #F09819)",
    "linear-gradient(to bottom right, #16A085, #F4D03F)",
    "linear-gradient(to bottom right, #e96443, #904e95)",
    "linear-gradient(to bottom right, #76b852, #8DC26F)",
  ];

  return (
    <div
      id="testimonials"
      style={{
        background: "linear-gradient(135deg, #1F1C2C, #928DAB)", // Updated gradient
        padding: "10px 10px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}
    >
      <div className="section-title text-center" style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "15px",
            color: "#FFFFFF",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          What Our Clients Say
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#E4E7EB",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Here’s what our clients have to say about their experience with us.
        </p>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          height: "260px",
          overflow: "hidden",
        }}
      >
        {props.data
          ? props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: i === currentIndex ? "50%" : i < currentIndex ? "-100%" : "100%",
                  transform: "translate(-50%, -50%)",
                  opacity: i === currentIndex ? 1 : 0,
                  transition: "all 0.7s ease-in-out",
                  background: gradientColors[i % gradientColors.length],
                  borderRadius: "16px",
                  padding: "25px",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    marginBottom: "12px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                    marginBottom: "15px",
                    lineHeight: "1.5",
                    color: "#fff",
                  }}
                >
                  {d.text}
                </p>
                <h4
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    color: "#FFF",
                    textTransform: "capitalize",
                  }}
                >
                  - {d.name}
                </h4>
              </div>
            ))
          : "Loading testimonials..."}
      </div>
    </div>
  );
};
