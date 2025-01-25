import React from "react";

export const Team = (props) => {
  // Dynamic row distribution: Adjust the number of items per row
  const distributeItems = (array) => {
    const layout = [4, 3, 5]; // Adjust the number of items per row here
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

  return (
    <div
      id="team"
      className="text-center"
      style={{
        padding: "10px", // Reduced padding
        background: "linear-gradient(135deg, #1a73e8, #9b59b6)", // Gradient background
        color: "#fff", // Ensures text contrast
        minHeight: "80vh", // Reduced minHeight for smaller section height
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-title" style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#fff" }}>Meet the Team</h2>
          <p style={{ color: "#fff" }}>
            Our team at Core AI Solutions combines expertise in AI and healthcare to create innovative solutions for better patient care.
          </p>
        </div>
        <div>
          {props.data
            ? distributeItems(props.data).map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  style={{
                    display: "flex",
                    flexDirection: rowIndex % 2 === 0 ? "row" : "row-reverse",
                    justifyContent: row.length < 4 ? "center" : "space-between",
                    flexWrap: "wrap",
                    marginBottom: "15px", // Reduced margin between rows
                  }}
                >
                  {row.map((d, i) => (
                    <div
                      key={`${d.name}-${i}`}
                      style={{
                        flex: "1 1 calc(100% / 4 - 20px)", // Default to 4 items per row
                        maxWidth: "calc(100% / 4 - 20px)",
                        margin: "8px", // Reduced margin between items
                        boxSizing: "border-box",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between", // Ensures consistent height alignment
                        height: "270px", // Fixed height for consistent boxes
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly transparent dark card
                          borderRadius: "8px",
                          padding: "10px",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                          transition: "transform 0.3s, box-shadow 0.3s",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between", // Ensures consistent card height
                          height: "100%",
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
                          src={d.img}
                          alt={d.name}
                          style={{
                            width: "100%",
                            maxWidth: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "10px",
                            alignSelf: "center", // Centers the image horizontally
                          }}
                        />
                        <div>
                          <h4 style={{ color: "#fff", marginBottom: "5px" }}>{d.name}</h4>
                          <p style={{ color: "#ddd" }}>{d.job}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};




// import React from "react";

// export const Team = (props) => {
//   const distributeItems = (array) => {
//     const layout = [4, 3, 5]; // Adjust the number of items per row here
//     const result = [];
//     let startIndex = 0;

//     layout.forEach((count) => {
//       if (startIndex < array.length) {
//         result.push(array.slice(startIndex, startIndex + count));
//         startIndex += count;
//       }
//     });

//     if (startIndex < array.length) {
//       result.push(array.slice(startIndex));
//     }

//     return result;
//   };

//   return (
//     <div
//       id="team"
//       style={{
//         padding: "80px 20px",
//         background: "linear-gradient(135deg, #1E3C72, #2A5298)",
//         color: "#fff",
//         minHeight: "80vh",
//       }}
//     >
//       <div
//         className="container"
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           textAlign: "center",
//         }}
//       >
//         <div className="section-title" style={{ marginBottom: "50px" }}>
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "700",
//               marginBottom: "15px",
//               color: "#FFFFFF",
//               textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
//             }}
//           >
//             Meet the Team
//           </h2>
//           <p
//             style={{
//               fontSize: "1.2rem",
//               color: "#E4E7EB",
//               maxWidth: "600px",
//               margin: "0 auto",
//               lineHeight: "1.6",
//             }}
//           >
//             Our team at Core AI Solutions combines expertise in AI and healthcare to create innovative solutions for better patient care.
//           </p>
//         </div>
//         <div>
//           {props.data
//             ? distributeItems(props.data).map((row, rowIndex) => (
//                 <div
//                   key={`row-${rowIndex}`}
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: row.length < 4 ? "center" : "space-between",
//                     flexWrap: "wrap",
//                     gap: "20px",
//                     marginBottom: "30px",
//                   }}
//                 >
//                   {row.map((d, i) => (
//                     <div
//                       key={`${d.name}-${i}`}
//                       style={{
//                         flex: "1 1 calc(100% / 4 - 20px)",
//                         maxWidth: "calc(100% / 4 - 20px)",
//                         textAlign: "center",
//                         backgroundColor: "rgba(255, 255, 255, 0.1)",
//                         borderRadius: "16px",
//                         padding: "20px",
//                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
//                         transition: "transform 0.3s, box-shadow 0.3s",
//                         overflow: "hidden",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "scale(1.05)";
//                         e.currentTarget.style.boxShadow =
//                           "0 8px 16px rgba(0, 0, 0, 0.5)";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "scale(1)";
//                         e.currentTarget.style.boxShadow =
//                           "0 4px 8px rgba(0, 0, 0, 0.3)";
//                       }}
//                     >
//                       <img
//                         src={d.img}
//                         alt={d.name}
//                         style={{
//                           width: "100px",
//                           height: "100px",
//                           borderRadius: "50%",
//                           objectFit: "cover",
//                           marginBottom: "15px",
//                           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                           border: "4px solid rgba(255, 255, 255, 0.8)",
//                         }}
//                       />
//                       <h4
//                         style={{
//                           fontSize: "1.3rem",
//                           fontWeight: "600",
//                           color: "#fff",
//                           marginBottom: "5px",
//                         }}
//                       >
//                         {d.name}
//                       </h4>
//                       <p style={{ fontSize: "1rem", color: "#ddd" }}>{d.job}</p>
//                     </div>
//                   ))}
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };
