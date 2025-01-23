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
  const [status, setStatus] = useState(""); // Added state for status feedback

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    setStatus("Sending..."); // Display sending message status

    // Make sure to replace these with your own EmailJS Service ID, Template ID, and Public Key
    // emailjs
    //   .sendForm(
    //     "service_9unj08l", // Service ID
    //     "template_ispgf0i", // Template ID
    //     e.target,           // Form element
    //     "hD_T7QS6B4RPxFbpE" // Public Key
    //   )
    emailjs
      .sendForm(
        "service_ce1j7wm", // Service ID
        "template_fqp67iu", // Template ID
        e.target,           // Form element
        "sf-Kw6-h85cmz_CGy" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!"); // Success message
          clearState(); // Reset the form
        },
        (error) => {
          console.log(error.text);
          setStatus("Error: Unable to send message."); // Error message
        }
      );
  };

  return (
    <div>
      <style jsx>{`
        .gradient-background {
          background: radial-gradient(43.3% 50% at 50% 50%, rgba(255, 109, 0, .35) 0%, rgba(16, 0, 0, 1) 100%);
          color: white;
        }
      `}</style>
      <div id="contact" className="gradient-background">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={name} // Bind value to state
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email} // Bind value to state
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message} // Bind value to state
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="status">
                  {status && <p>{status}</p>} {/* Display status message */}
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2025 Core AI Solutions India.</p>
        </div>
      </div>
    </div>
  );
};