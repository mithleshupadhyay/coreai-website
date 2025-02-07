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








import React, { useState, useEffect } from "react";

export const Gallery = () => {
  const gifNames = [
    "AD_ASEG_Output.gif",
    "AD_Output.gif",
    "CN_ASEG_Output.gif",
    "CN_Output.gif",
    "MCI_ASEG_Output.gif",
    "MCI_Output.gif"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gifNames.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [gifNames.length]);

  return (
    <div id="portfolio" className="gallery-section">
      <style jsx>{`
        .gallery-section {
          background: linear-gradient(to bottom,rgb(34, 44, 28), #928dab);
          padding: 60px 20px;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
          position: relative;
          width: 100%;
          max-width: 1600px;
          height: 430px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gif-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: scale(1.2);
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
        }

        .gif-container.active {
          opacity: 1;
          transform: scale(1);
        }

        .gif-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      `}</style>

      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>These are some gif from our projects!</p>
        </div>
        <div className="portfolio-items">
          {gifNames.map((gif, index) => (
            <div
              key={gif}
              className={`gif-container ${index === currentIndex ? "active" : ""}`}
            >
              <img src={`/img/gif/${gif}`} alt={`Gallery GIF ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
