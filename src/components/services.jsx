import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Currently, we offer the following services. We are constantly adding new services to our portfolio.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};


// import React from "react";

// export const Services = (props) => {
//   return (
//     <div id="services" className="text-center py-5">
//       <div className="container">
//         <div className="section-title mb-5">
//           <h2>Our Services</h2>
//           <p>
//             Currently, we offer the following services. We are constantly adding new services to our portfolio.
//           </p>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 mb-4">
//                   <div className="card h-100">
//                     <div className="card-body text-center">
//                       <i className={`${d.icon} fa-3x mb-3`}></i>
//                       <h3 className="card-title">{d.name}</h3>
//                       <p className="card-text">{d.text}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };