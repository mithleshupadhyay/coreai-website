// import React from "react";

// export const About = (props) => {
//   return (
//     <div id="about">
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-12 col-md-6">
//             {" "}
//             <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
//           </div>
//           <div className="col-xs-12 col-md-6">
//             <div className="about-text">
//               <h2 style={{ color: "#fff" }}>About Us</h2>
//               <p style={{ color: "#fff" }}>{props.data ? props.data.paragraph : "loading..."}</p>
//               <h3 style={{ color: "#fff" }}>Why Choose Us?</h3>
//               <div className="list-style">
//                 <div className="col-lg-6 col-sm-6 col-xs-12">
//                   <ul style={{ color: "#fff" }}>
//                     {props.data
//                       ? props.data.Why.map((d, i) => (
//                           <li key={`${d}-${i}`}>{d}</li>
//                         ))
//                       : "loading"}
//                   </ul>
//                 </div>
//                 <div className="col-lg-6 col-sm-6 col-xs-12">
//                   <ul style={{ color: "#fff" }}>
//                     {props.data
//                       ? props.data.Why2.map((d, i) => (
//                           <li key={`${d}-${i}`}> {d}</li>
//                         ))
//                       : "loading"}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };








import React from "react";

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
