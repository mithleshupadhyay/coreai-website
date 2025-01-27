// import React from "react";

// export const Header = (props) => {
//   return (
//     <header id="header">
//       <div className="intro">
//         <div className="overlay">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-8 col-md-offset-2 intro-text">
//                 <h1>
//                   {props.data ? props.data.title : "Loading"}
//                   <span></span>
//                 </h1>
//                 <p>{props.data ? props.data.paragraph : "Loading"}</p>
//                 <a
//                   href="#features"
//                   className="btn btn-custom btn-lg page-scroll"
//                 >
//                   Learn More
//                 </a>{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };




// import React from "react";

// export const Header = (props) => {
//   return (
//     <header id="header" style={{ position: "relative" }}>
//       {/* Background filled with GIF */}
//       <div
//         className="intro"
//         style={{
//           background: `url('/img/gif.gif') center center / cover no-repeat`, // Sets GIF as the background
//           padding: "120px 0",
//           textAlign: "center",
//           boxSizing: "border-box",
//           height: "100vh", // Ensures it covers the full viewport height
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* Overlay for readability */}
//         <div
//           className="overlay"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for contrast
//             zIndex: 1,
//           }}
//         ></div>

//         <div className="container" style={{ position: "relative", zIndex: 2 }}>
//           <div className="row">
//             <div className="col-xs-12 text-center">
//               {/* Core AI Logo */}
//               <div className="logo-container" style={{ marginBottom: "20px" }}>
//                 <a href="/" style={{ display: "inline-block" }}>
//                   <img
//                     src="/img/CoreAI_logo.png" // Path to the Core AI logo
//                     alt="Core AI Logo"
//                     style={{
//                       width: "200px",
//                       height: "auto",
//                       marginBottom: "20px",
//                       maxWidth: "100%",
//                       cursor: "pointer",
//                     }}
//                   />
//                 </a>
//               </div>

//               {/* Header Text */}
//               <div className="intro-text">
//                 <h1
//                   style={{
//                     fontSize: "3.5rem",
//                     color: "#ffffff",
//                     fontWeight: "bold",
//                     marginBottom: "20px",
//                     textTransform: "uppercase",
//                     letterSpacing: "2px",
//                     animation: "fadeIn 2s ease-out",
//                   }}
//                 >
//                   {props.data ? props.data.title : "Core AI Solutions India"}
//                 </h1>
//                 <p
//                   style={{
//                     color: "#ffffff",
//                     fontSize: "1.3rem",
//                     maxWidth: "800px",
//                     margin: "0 auto",
//                     marginBottom: "40px",
//                     lineHeight: "1.8",
//                     animation: "fadeIn 2s ease-out",
//                   }}
//                 >
//                   {props.data
//                     ? props.data.paragraph
//                     : "Building the future with innovative AI solutions."}
//                 </p>
//                 {/* CTA Button */}
//                 <a
//                   href="#features"
//                   className="btn btn-custom btn-lg page-scroll"
//                   style={{
//                     background: "#feb47b",
//                     color: "#fff",
//                     padding: "18px 35px",
//                     fontSize: "1.2rem",
//                     borderRadius: "50px",
//                     textDecoration: "none",
//                     transition: "0.3s",
//                     border: "2px solid #feb47b",
//                     boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add subtle fade-in animation */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };





import React from "react";

export const Header = (props) => {
  return (
    <header id="header" style={{ position: "relative" }}>
      {/* Background filled with GIF */}
      <div
        className="intro"
        style={{
          background: `url('/img/gif.gif') center center / cover no-repeat`, // Sets GIF as the background
          padding: "120px 0",
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
              <div className="logo-container" style={{ marginBottom: "20px" }}>
                <a href="/" style={{ display: "inline-block" }}>
                  <img
                    src="/img/CoreAI_logo.png" // Path to the Core AI logo
                    alt="Core AI Logo"
                    style={{
                      width: "200px",
                      height: "auto",
                      marginBottom: "20px",
                      maxWidth: "100%",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </div>

              {/* Header Text */}
              <div className="intro-text">
                <h1
                  style={{
                    fontSize: "3.5rem",
                    color: "#ffffff",
                    fontWeight: "bold",
                    marginBottom: "20px",
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
                    fontSize: "1.3rem",
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
                      fontSize: "1.2rem",
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
