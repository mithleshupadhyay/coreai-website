// import React from "react";

// export const Features = (props) => {
//   return (
//     <div id="features" className="text-center">
//       <div className="container">
//         <div className="col-md-10 col-md-offset-1 section-title">
//           <h2>Features</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
//                   {" "}
//                   <i className={d.icon}></i>
//                   <h3>{d.title}</h3>
//                   <p>{d.text}</p>
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };






// import React from "react";

// export const Features = (props) => {
//   return (
//     <div
//       id="features"
//       style={{
//         background: "linear-gradient(135deg, #6a11cb, #2575fc, #00c6ff)",
//         color: "#ffffff",
//         padding: "60px 20px",
//         textAlign: "center",
//       }}
//     >
//       <style jsx>{`
//         .features-container {
//           max-width: 1200px;
//           margin: auto;
//         }

//         .section-title h2 {
//           font-size: 2.5rem;
//           margin-bottom: 40px;
//           color: #ffffff;
//         }

//         .feature-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 40px;
//           justify-content: center;
//         }

//         .feature-card {
//           flex: 1 1 calc(25% - 20px);
//           min-width: 250px;
//           background: rgba(255, 255, 255, 0.08);
//           padding: 20px;
//           border-radius: 15px;
//           text-align: center;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//           transition: transform 0.3s, box-shadow 0.3s;
//         }

//         .feature-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
//         }

//         .feature-icon {
//           font-size: 3rem;
//           margin-bottom: 20px;
//           color: #00c6ff;
//         }

//         .feature-title {
//           font-size: 1.5rem;
//           margin-bottom: 15px;
//           color: #ffffff;
//         }

//         .feature-text {
//           font-size: 1.1rem;
//           line-height: 1.8;
//           color: #d1d1d1;
//         }

//         @media (max-width: 768px) {
//           .feature-card {
//             flex: 1 1 100%;
//           }
//         }
//       `}</style>

//       <div className="features-container">
//         <div className="section-title">
//           <h2>Features</h2>
//         </div>

//         <div className="feature-grid">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.title}-${i}`} className="feature-card">
//                   <i className={`feature-icon ${d.icon}`}></i>
//                   <h3 className="feature-title">{d.title}</h3>
//                   <p className="feature-text">{d.text}</p>
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };






// import React from "react";

// export const Features = (props) => {
//   return (
//     <div
//       id="features"
//       style={{
//         background: "linear-gradient(135deg,rgb(128, 40, 14),rgb(218, 96, 65),rgb(134, 41, 25))", // New gradient
//         color: "#ffffff",
//         padding: "60px 20px",
//         textAlign: "center",
//       }}
//     >
//       <style jsx>{`
//         .features-container {
//           max-width: 1100px;
//           margin: auto;
//         }

//         .section-title h2 {
//           font-size: 2.3rem;
//           margin-bottom: 40px;
//           color: #ffffff;
//         }

//         .feature-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 30px;
//           justify-content: center;
//         }

//         .feature-card {
//           flex: 1 1 calc(22% - 20px);
//           min-width: 220px;
//           max-width: 250px;
//           height: auto; /* Adjust height dynamically */
//           background: rgba(255, 255, 255, 0.1);
//           padding: 20px;
//           border-radius: 12px;
//           text-align: center;
//           box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
//           transition: transform 0.3s, box-shadow 0.3s;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .feature-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
//         }

//         .feature-icon {
//           font-size: 2.5rem;
//           margin-bottom: 15px;
//           color: #2c5364;
//         }

//         .feature-title {
//           font-size: 1.3rem;
//           margin-bottom: 10px;
//           color: #ffffff;
//         }

//         .feature-text {
//           font-size: 1rem;
//           line-height: 1.6;
//           color: #dcdcdc;
//           word-wrap: break-word;
//           text-align: center;
//         }

//         @media (max-width: 768px) {
//           .feature-card {
//             flex: 1 1 calc(45% - 20px);
//           }

//           .feature-icon {
//             font-size: 2.2rem;
//           }

//           .feature-title {
//             font-size: 1.2rem;
//           }

//           .feature-text {
//             font-size: 0.95rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .feature-card {
//             flex: 1 1 100%;
//           }

//           .feature-icon {
//             font-size: 2rem;
//           }

//           .feature-title {
//             font-size: 1.1rem;
//           }

//           .feature-text {
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>

//       <div className="features-container">
//         <div className="section-title">
//           <h2>Features</h2>
//         </div>

//         <div className="feature-grid">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.title}-${i}`} className="feature-card">
//                   <i className={`feature-icon ${d.icon}`}></i>
//                   <h3 className="feature-title">{d.title}</h3>
//                   <p className="feature-text">{d.text}</p>
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };




// import React from "react";

// export const Features = (props) => {
//   return (
//     <div
//       id="features"
//       style={{
//         background: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Improved gradient
//         color: "#ffffff",
//         padding: "80px 20px",
//         textAlign: "center",
//       }}
//     >
//       <style jsx>{`
//         .features-container {
//           max-width: 1200px;
//           margin: auto;
//         }

//         .section-title h2 {
//           font-size: 2.5rem;
//           margin-bottom: 50px;
//           color: #ffffff;
//         }

//         .feature-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 30px;
//           justify-content: center;
//         }

//         .feature-card {
//           background: linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           padding: 20px;
//           border-radius: 15px;
//           text-align: center;
//           box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
//           transition: transform 0.3s, box-shadow 0.3s;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .feature-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
//         }

//         .feature-image {
//           width: 100%;
//           max-height: 180px;
//           object-fit: cover;
//           margin-bottom: 20px;
//           border-radius: 12px;
//           border: 2px solid rgba(255, 255, 255, 0.2);
//         }

//         .feature-title {
//           font-size: 1.5rem;
//           margin-bottom: 10px;
//           color: #ffffff;
//         }

//         .feature-text {
//           font-size: 1rem;
//           line-height: 1.6;
//           color: #f1f1f1;
//           text-align: center;
//         }

//         @media (max-width: 768px) {
//           .feature-title {
//             font-size: 1.3rem;
//           }

//           .feature-text {
//             font-size: 0.95rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .feature-title {
//             font-size: 1.2rem;
//           }

//           .feature-text {
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>

//       <div className="features-container">
//         <div className="section-title">
//           <h2>Features</h2>
//         </div>

//         <div className="feature-grid">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.title}-${i}`} className="feature-card">
//                   <img
//                     src={d.img}
//                     alt={d.title}
//                     className="feature-image"
//                     onError={(e) => {
//                       e.target.src = "img/placeholder.jpg"; // Fallback for broken images
//                     }}
//                   />
//                   <h3 className="feature-title">{d.title}</h3>
//                   <p className="feature-text">{d.text}</p>
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };




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
