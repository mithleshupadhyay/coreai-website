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





