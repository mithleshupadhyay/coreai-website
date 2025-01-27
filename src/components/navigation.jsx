// import React from "react";

// export const Navigation = (props) => {
//   return (
//     <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//       <div className="container">
//         <div className="navbar-header">
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             {" "}
//             <span className="sr-only">Toggle navigation</span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//           </button>
//           <a className="navbar-brand page-scroll" href="#page-top">
//             Core AI
//           </a>{" "}
//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
//             <li>
//               <a href="#features" className="page-scroll">
//                 Features
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="page-scroll">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="page-scroll">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#portfolio" className="page-scroll">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="#testimonials" className="page-scroll">
//                 Testimonials
//               </a>
//             </li>
//             <li>
//               <a href="#team" className="page-scroll">
//                 Team
//               </a>
//             </li>
//             <li>
//               <a href="#contact-form" className="page-scroll">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };





// import React from "react";

// export const Navigation = (props) => {
//   return (
//     <nav
//       id="menu"
//       style={{
//         position: "fixed",
//         top: 0,
//         width: "100%",
//         zIndex: 1000,
//         background: "linear-gradient(to right, #6a11cb, #2575fc)",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         padding: "15px 25px",
//         borderRadius: "0 0 15px 15px",
//       }}
//     >
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div>
//           <a href="#page-top" style={{ display: "flex", alignItems: "center" }}>
//             <img
//               src="/img/CoreAI_logo.png"
//               alt="Core AI Logo"
//               style={{ height: "24px", width: "auto", borderRadius: "4px" }}
//             />
//           </a>
//         </div>

//         <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
//           <ul style={{ display: "flex", gap: "20px", listStyleType: "none", margin: 0, padding: 0 }}>
//             {[
//               { href: "#features", label: "Features" },
//               { href: "#about", label: "About" },
//               { href: "#services", label: "Services" },
//               { href: "#portfolio", label: "Gallery" },
//               { href: "#testimonials", label: "Testimonials" },
//               { href: "#team", label: "Team" },
//               { href: "#contact-form", label: "Contact" },
//             ].map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   style={{
//                     color: "#fff",
//                     textDecoration: "none",
//                     fontWeight: "600",
//                     fontSize: "15px",
//                     padding: "10px 15px",
//                     borderRadius: "6px",
//                     transition: "background-color 0.3s, transform 0.3s",
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.backgroundColor = "#ffffff20";
//                     e.target.style.transform = "scale(1.05)";
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.backgroundColor = "transparent";
//                     e.target.style.transform = "scale(1)";
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={{ width: "auto" }}></div>
//       </div>
//     </nav>
//   );
// };








// import React from "react";

// export const Navigation = (props) => {
//   return (
//     <nav
//       id="menu"
//       style={{
//         position: "fixed",
//         top: 0,
//         width: "100%",
//         zIndex: 1000,
//         background: "linear-gradient(to right, #6a11cb, #2575fc)",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         padding: "15px 25px",
//         borderRadius: "0 0 15px 15px",
//       }}
//     >
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div>
//           <a href="#page-top" style={{ display: "flex", alignItems: "center" }}>
//             <img
//               src="/img/CoreAI_logo.png"
//               alt="Core AI Logo"
//               style={{ height: "24px", width: "auto", borderRadius: "4px" }}
//             />
//           </a>
//         </div>

//         <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <ul
//             style={{
//               display: "flex",
//               gap: "25px", // Increased gap for better spacing
//               listStyleType: "none",
//               margin: 0,
//               padding: 0,
//               alignItems: "center",
//             }}
//           >
//             <li>
//               <a href="#page-top" style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src="/img/CoreAI_logo.png"
//                   alt="Core AI Logo"
//                   style={{
//                     height: "20px",
//                     width: "auto",
//                     marginRight: "15px", // Added extra margin
//                     verticalAlign: "middle",
//                   }}
//                 />
//               </a>
//             </li>
//             {[
//               { href: "#features", label: "Features" },
//               { href: "#about", label: "About" },
//               { href: "#services", label: "Services" },
//               { href: "#portfolio", label: "Gallery" },
//               { href: "#testimonials", label: "Testimonials" },
//               { href: "#team", label: "Team" },
//               { href: "#contact-form", label: "Contact" },
//             ].map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   style={{
//                     color: "#fff",
//                     textDecoration: "none",
//                     fontWeight: "600",
//                     fontSize: "15px",
//                     padding: "10px 15px",
//                     borderRadius: "6px",
//                     transition: "background-color 0.3s, transform 0.3s",
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.backgroundColor = "#ffffff20";
//                     e.target.style.transform = "scale(1.05)";
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.backgroundColor = "transparent";
//                     e.target.style.transform = "scale(1)";
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={{ width: "auto" }}></div>
//       </div>
//     </nav>
//   );
// };







// import React from "react";

// export const Navigation = (props) => {
//   return (
//     <nav
//       id="menu"
//       style={{
//         position: "fixed",
//         top: 0,
//         width: "100%",
//         zIndex: 1000,
//         background: "linear-gradient(to right, #6a11cb, #2575fc)",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         padding: "15px 25px",
//         borderRadius: "0 0 15px 15px",
//       }}
//     >
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <ul
//             style={{
//               display: "flex",
//               gap: "25px", // Adjusted gap for better spacing
//               listStyleType: "none",
//               margin: 0,
//               padding: 0,
//               alignItems: "center",
//             }}
//           >
//             <li>
//               <a href="#page-top" style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src="/img/CoreAI_logo.png"
//                   alt="Core AI Logo"
//                   style={{
//                     height: "20px",
//                     width: "auto",
//                     marginRight: "15px", // Added extra margin
//                     verticalAlign: "middle",
//                   }}
//                 />
//               </a>
//             </li>
//             {[
//               { href: "#features", label: "Features" },
//               { href: "#about", label: "About" },
//               { href: "#services", label: "Services" },
//               { href: "#portfolio", label: "Gallery" },
//               { href: "#testimonials", label: "Testimonials" },
//               { href: "#team", label: "Team" },
//               { href: "#contact-form", label: "Contact" },
//             ].map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   style={{
//                     color: "#fff",
//                     textDecoration: "none",
//                     fontWeight: "600",
//                     fontSize: "15px",
//                     padding: "10px 15px",
//                     borderRadius: "6px",
//                     transition: "background-color 0.3s, transform 0.3s",
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.backgroundColor = "#ffffff20";
//                     e.target.style.transform = "scale(1.05)";
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.backgroundColor = "transparent";
//                     e.target.style.transform = "scale(1)";
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };




import React from "react";

export const Navigation = (props) => {
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
