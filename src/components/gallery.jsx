// import { Image } from "./image";
// import React from "react";

// export const Gallery = (props) => {
//   return (
//     <div id="portfolio" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2 style={{ color: "#fff" }}>Gallery</h2>
//           <p style={{ color: "#fff" }}>
//             These are some of our memorable moments captured on camera. 
//           </p>
//         </div>
//         <div className="row">
//           <div className="portfolio-items">
//             {props.data
//               ? props.data.map((d, i) => (
//                   <div
//                     key={`${d.title}-${i}`}
//                     className="col-sm-6 col-md-4 col-lg-4"
//                   >
//                     <Image
//                       title={d.title}
//                       largeImage={d.largeImage}
//                       smallImage={d.smallImage}
//                     />
//                   </div>
//                 ))
//               : "Loading..."}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




import { Image } from "./image";
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
