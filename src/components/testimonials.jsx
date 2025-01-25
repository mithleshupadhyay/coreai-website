import React, { useEffect, useState } from "react";

export const Testimonials = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        props.data ? (prevIndex + 1) % props.data.length : 0
      );
    }, 4000); // 4 seconds delay for each testimonial

    return () => clearInterval(interval); // Cleanup the interval
  }, [props.data]);

  const gradientColors = [
    "linear-gradient(to bottom right, #8E44AD, #3498DB)",
    "linear-gradient(to bottom right, #FF512F, #F09819)",
    "linear-gradient(to bottom right, #16A085, #F4D03F)",
    "linear-gradient(to bottom right, #e96443, #904e95)",
    "linear-gradient(to bottom right, #76b852, #8DC26F)",
  ];

  return (
    <div
      id="testimonials"
      style={{
        background: "linear-gradient(135deg, #1F1C2C, #928DAB)", // Updated gradient
        padding: "10px 10px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}
    >
      <div className="section-title text-center" style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "15px",
            color: "#FFFFFF",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          What Our Clients Say
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#E4E7EB",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Here’s what our clients have to say about their experience with us.
        </p>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          height: "260px",
          overflow: "hidden",
        }}
      >
        {props.data
          ? props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: i === currentIndex ? "50%" : i < currentIndex ? "-100%" : "100%",
                  transform: "translate(-50%, -50%)",
                  opacity: i === currentIndex ? 1 : 0,
                  transition: "all 0.7s ease-in-out",
                  background: gradientColors[i % gradientColors.length],
                  borderRadius: "16px",
                  padding: "25px",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    marginBottom: "12px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                    marginBottom: "15px",
                    lineHeight: "1.5",
                    color: "#fff",
                  }}
                >
                  {d.text}
                </p>
                <h4
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    color: "#FFF",
                    textTransform: "capitalize",
                  }}
                >
                  - {d.name}
                </h4>
              </div>
            ))
          : "Loading testimonials..."}
      </div>
    </div>
  );
};
