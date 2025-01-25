import React from "react";

export const Services = (props) => {
  // Dynamic row distribution: Adjust the number of items per row
  const distributeItems = (array) => {
    const layout = [3, 3, 2]; // Adjust the number of items per row here
    const result = [];
    let startIndex = 0;

    layout.forEach((count) => {
      if (startIndex < array.length) {
        result.push(array.slice(startIndex, startIndex + count));
        startIndex += count;
      }
    });

    // Add any remaining items to a final row
    if (startIndex < array.length) {
      result.push(array.slice(startIndex));
    }

    return result;
  };

  // New gradient colors for each card
  const gradientColors = [
    "linear-gradient(135deg, #ff7e5f, #feb47b)", // Warm orange to peach
    "linear-gradient(135deg, #6a11cb, #2575fc)", // Purple to blue
    "linear-gradient(135deg, #43cea2, #185a9d)", // Aqua to navy
    "linear-gradient(135deg, #f953c6, #b91d73)", // Pink to magenta
    "linear-gradient(135deg, #70e1f5, #ffd194)", // Soft teal to light orange
    "linear-gradient(135deg, #ee0979, #ff6a00)", // Deep pink to orange
    "linear-gradient(135deg, #11998e, #38ef7d)", // Green shades
    "linear-gradient(135deg, #fc466b, #3f5efb)", // Pink to deep blue
  ];

  return (
    <div
      id="services"
      className="text-center"
      style={{
        padding: "20px",
        background: "linear-gradient(135deg, #2c3e50, #4ca1af)", // Main background
        color: "#fff",
        minHeight: "90vh",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-title" style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#fff" }}>Our Services</h2>
          <p style={{ color: "#fff" }}>
            At Core AI Solutions, we deliver a wide array of innovative AI-driven healthcare services to enhance efficiency and patient outcomes.
          </p>
        </div>
        <div>
          {props.data
            ? distributeItems(props.data).map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    marginBottom: "20px",
                  }}
                >
                  {row.map((service, i) => (
                    <div
                      key={`${service.name}-${i}`}
                      style={{
                        flex: "1 1 calc(100% / 3 - 20px)", // 3 items per row
                        maxWidth: "calc(100% / 3 - 20px)",
                        margin: "10px",
                        boxSizing: "border-box",
                        textAlign: "center",
                        background: gradientColors[(rowIndex * 3 + i) % gradientColors.length],
                        borderRadius: "10px",
                        padding: "15px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        color: "#fff",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                      }}
                    >
                      <img
                        src={service.img}
                        alt={service.name}
                        style={{
                          width: "100%", // Full-width images
                          maxWidth: "100%",
                          height: "150px",
                          borderRadius: "10px",
                          objectFit: "cover", // Ensures image covers the area
                          marginBottom: "15px",
                        }}
                      />
                      <h4 style={{ marginBottom: "10px" }}>{service.name}</h4>
                      <p style={{ fontSize: "14px", marginBottom: "10px" }}>{service.text}</p>
                    </div>
                  ))}
                </div>
              ))
            : "Loading services..."}
        </div>
      </div>
    </div>
  );
};
