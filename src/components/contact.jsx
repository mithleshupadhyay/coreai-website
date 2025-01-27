// import { useState } from "react";
// import emailjs from "emailjs-com";
// import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };

// export const Contact = (props) => {
//   const [{ name, email, message }, setState] = useState(initialState);
//   const [status, setStatus] = useState(""); // Added state for status feedback

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const clearState = () => setState({ ...initialState });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name, email, message);
    
//     setStatus("Sending..."); // Display sending message status

//     // Make sure to replace these with your own EmailJS Service ID, Template ID, and Public Key
//     emailjs
//       .sendForm(
//         "service_9unj08l", // Service ID
//         "template_ispgf0i", // Template ID
//         e.target,           // Form element
//         "hD_T7QS6B4RPxFbpE" // Public Key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setStatus("Message sent successfully!"); // Success message
//           clearState(); // Reset the form
//         },
//         (error) => {
//           console.log(error.text);
//           setStatus("Error: Unable to send message."); // Error message
//         }
//       );
//   };

//   return (
//     <div>
//       <style jsx>{`
//         .gradient-background {
//           background: radial-gradient(43.3% 50% at 50% 50%, rgba(255, 109, 0, .35) 0%, rgba(16, 0, 0, 1) 100%);
//           color: white;
//         }
//       `}</style>
//       <div id="contact" className="gradient-background">
//         <div className="container">
//           <div className="col-md-8">
//             <div className="row">
//               <div className="section-title">
//                 <h2>Get In Touch</h2>
//                 <p>
//                   Please fill out the form below to send us an email and we will
//                   get back to you as soon as possible.
//                 </p>
//               </div>
//               <form name="sentMessage" onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="form-control"
//                         placeholder="Name"
//                         required
//                         onChange={handleChange}
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         placeholder="Email"
//                         required
//                         onChange={handleChange}
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     id="message"
//                     className="form-control"
//                     rows="4"
//                     placeholder="Message"
//                     required
//                     onChange={handleChange}
//                   ></textarea>
//                   <p className="help-block text-danger"></p>
//                 </div>
//                 <div id="status">
//                   {status && <p>{status}</p>} {/* Display status message */}
//                 </div>
//                 <button type="submit" className="btn btn-custom btn-lg">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="col-md-3 col-md-offset-1 contact-info">
//             <div className="contact-item">
//               <h3>Contact Info</h3>
//               <p>
//                 <span>
//                   <i className="fa fa-map-marker"></i> Address
//                 </span>
//                 {props.data ? props.data.address : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span>
//                   <i className="fa fa-phone"></i> Phone
//                 </span>{" "}
//                 {props.data ? props.data.phone : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span>
//                   <i className="fa fa-envelope-o"></i> Email
//                 </span>{" "}
//                 {props.data ? props.data.email : "loading"}
//               </p>
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="row">
//               <div className="social">
//                 <ul>
//                   <li>
//                     <a href={props.data ? props.data.facebook : "/"}>
//                       <i className="fa fa-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.twitter : "/"}>
//                       <i className="fa fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.youtube : "/"}>
//                       <i className="fa fa-youtube"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="footer">
//         <div className="container text-center">
//           <p>&copy; 2025 Core AI Solutions India.</p>
//         </div>
//       </div>
//     </div>
//   );
// };




// import { useState } from "react";
// import emailjs from "emailjs-com";
// import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };

// export const Contact = (props) => {
//   const [{ name, email, message }, setState] = useState(initialState);
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const clearState = () => setState({ ...initialState });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     emailjs
//       .sendForm(
//         "service_ce1j7wm", // Service ID
//         "template_fqp67iu", // Template ID
//         e.target, // Form element
//         "sf-Kw6-h85cmz_CGy" // Public Key
//       )
//       .then(
//         (result) => {
//           setStatus("Message sent successfully!");
//           clearState();

//           // Hide status message after 3 seconds
//           setTimeout(() => {
//             setStatus("");
//           }, 3000);
//         },
//         (error) => {
//           setStatus("Error: Unable to send message.");
//           setTimeout(() => {
//             setStatus("");
//           }, 3000);
//         }
//       );
//   };

//   return (
//     <div>
//       <style jsx>{`
//         .contact-section {
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           padding: 60px 20px;
//           font-family: Arial, sans-serif;
//         }

//         .contact-container {
//           display: flex;
//           flex-wrap: wrap;
//           max-width: 1200px;
//           margin: 0 auto;
//           gap: 20px;
//           justify-content: center;
//         }

//         /* Contact Form */
//         .contact-form {
//           flex: 2 1 65%; /* Takes up 65% width for a larger form */
//           background: linear-gradient(to bottom, #ffffff, #e0f7fa);
//           padding: 40px;
//           border-radius: 8px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           display: flex;
//           flex-direction: column;
//           height: auto; /* Adjust to content's height */
//           min-height: 400px; /* Ensure it has a minimum height */
//         }

//         .contact-form h2 {
//           margin-bottom: 20px;
//           font-size: 2.4rem;
//           color: #00796b;
//         }

//         .intro-text {
//           margin-bottom: 20px;
//           font-size: 1.2rem;
//           color: #333;
//           text-align: center;
//         }

//         .form-group {
//           margin-bottom: 15px;
//         }

//         .form-control {
//           width: 100%;
//           padding: 15px;
//           border: 1px solid #ccc;
//           border-radius: 8px;
//           font-size: 1.2rem;
//         }

//         .form-control:focus {
//           outline: none;
//           border-color: #00796b;
//         }

//         .btn-submit {
//           background: linear-gradient(to right, #00796b, #004d40);
//           color: #fff;
//           border: none;
//           padding: 12px 20px;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: background 0.3s ease;
//           font-size: 1.3rem;
//           align-self: center;
//         }

//         .btn-submit:hover {
//           background: linear-gradient(to right, #004d40, #00251a);
//         }

//         .status-message {
//           margin-top: 20px;
//           font-size: 1.3rem;
//           color: #00796b;
//           text-align: center;
//         }

//         /* Contact Info */
//         .contact-info {
//           flex: 1 1 30%; /* Takes up 30% width for a smaller contact info */
//           background: linear-gradient(to bottom, #ffffff, #e0f7fa);
//           padding: 20px;
//           border-radius: 8px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           display: flex;
//           flex-direction: column;
//           height: auto !important; /* Allow height to adjust */
//           min-height: 200px; /* Reduced min-height */
//         }

//         .contact-info h3 {
//           margin-bottom: 20px;
//           font-size: 2.4rem;
//           color: #00796b;
//         }

//         .contact-info p {
//           margin-bottom: 10px;
//           font-size: 1.3rem;
//           color: #333;
//         }

//         .social-links {
//           margin-top: 20px;
//           text-align: center;
//         }

//         .social-links a {
//           margin-right: 15px;
//           color: #00796b;
//           font-size: 3rem;
//           transition: color 0.3s ease;
//         }

//         .social-links a:hover {
//           color: #004d40;
//         }

//         .footer {
//           background: linear-gradient(to right, #ff6f61, #d33f49);
//           color: #fff;
//           padding: 10px 0;
//           text-align: center;
//           font-size: 1.2rem;
//         }

//         /* Responsiveness: Stack them vertically on smaller screens */
//         @media (max-width: 768px) {
//           .contact-form, .contact-info {
//             flex: 1 1 100%; /* 100% width on small screens */
//             min-height: auto; /* Allow height to adjust */
//           }
//         }
//       `}</style>

//       <div className="contact-section">
//         <div className="contact-container">
//           {/* Contact Form */}
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <h2>Contact Us</h2>

//             {/* Introductory Text */}
//             <div className="intro-text">
//               <p>Fill this form to contact us. We would love to hear from you!</p>
//             </div>

//             {/* Form Fields */}
//             <div className="form-group">
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="form-control"
//                 placeholder="Your Name"
//                 required
//                 onChange={handleChange}
//                 value={name}
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="Your Email"
//                 required
//                 onChange={handleChange}
//                 value={email}
//               />
//             </div>
//             <div className="form-group">
//               <textarea
//                 name="message"
//                 id="message"
//                 className="form-control"
//                 rows="5"
//                 placeholder="Your Message"
//                 required
//                 onChange={handleChange}
//                 value={message}
//               ></textarea>
//             </div>
//             <div>
//               <button type="submit" className="btn-submit">
//                 Send Message
//               </button>
//             </div>

//             {/* Status Message */}
//             {status && <div className="status-message">{status}</div>}
//           </form>

//           {/* Contact Info */}
//           <div className="contact-info">
//             <h3>Contact Info</h3>
//             <p>Address: {props.data ? props.data.address : "Loading..."}</p>
//             <p>Phone: {props.data ? props.data.phone : "Loading..."}</p>
//             <p>Email: {props.data ? props.data.email : "Loading..."}</p>
//             <div className="social-links">
//               <a href={props.data ? props.data.facebook : "#"}>
//                 <i className="fa fa-facebook"></i>
//               </a>
//               <a href={props.data ? props.data.twitter : "#"}>
//                 <i className="fa fa-twitter"></i>
//               </a>
//               <a href={props.data ? props.data.youtube : "#"}>
//                 <i className="fa fa-youtube"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="footer">
//         <p>&copy; 2025 Core AI Solutions India. All Rights Reserved.</p>
//       </div>
//     </div>
//   );
// };


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
        (result) => {
          setStatus("Message sent successfully!");
          clearState();

          // Hide status message after 3 seconds
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
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

