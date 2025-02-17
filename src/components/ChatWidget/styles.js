// import { colors } from "./config";

// export const styles = {
//   chatWidget: {
//     position: "fixed",
//     bottom: "15px",
//     right: "15px",
//     background: `linear-gradient(135deg, ${colors.primary} 40%, ${colors.accent} 100%)`,
//     padding: "10px 18px",
//     borderRadius: "30px",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
//     transition: "all 0.3s ease-in-out",
//     color: "white",
//     fontWeight: "bold",
//     fontSize: "14px",
//     zIndex: 9999, // Ensures chat widget stays on top
//   },
//   chatWidgetText: {
//     fontSize: "14px",
//     fontWeight: "500",
//   },
//   modalWindow: {
//     position: "fixed",
//     bottom: "65px",
//     right: "15px",
//     width: "320px",
//     height: "45vh", // Compact height
//     maxWidth: "calc(100% - 40px)",
//     background: "rgba(255, 255, 255, 0.9)", // Glassmorphic effect
//     backdropFilter: "blur(10px)", // Adds blur effect
//     borderRadius: "16px",
//     border: `1px solid ${colors.primary}`,
//     overflow: "hidden",
//     boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.2)",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     transition: "transform 0.3s ease-in-out, opacity 0.2s ease-in-out",
//     zIndex: 9999, // Ensures modal stays in front of everything
//   },
// };

import { colors } from "./config";

export const styles = {
  chatWidget: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: `linear-gradient(135deg, ${colors.primary} 40%, ${colors.accent} 100%)`,
    padding: "12px 20px",
    borderRadius: "50px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.5)",
    transition: "all 0.3s ease-in-out",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    zIndex: 9999,
  },
  chatWidgetText: {
    fontSize: "14px",
    fontWeight: "500",
  },
  modalWindow: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "350px",
    height: "50vh", // Adjusted for better view
    maxWidth: "calc(100% - 40px)",
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    border: `1px solid rgba(255, 255, 255, 0.3)`,
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s ease-in-out, opacity 0.2s ease-in-out",
    zIndex: 9999, // Ensures chatbox stays above everything
  },
};















// import { colors } from "./config";

// export const styles = {
//   chatWidget: {
//     position: "fixed",
//     bottom: "20px",
//     right: "20px",
//     backgroundColor: colors.primary,
//     padding: "7px 18px",
//     borderRadius: "10px",
//     cursor: "pointer",
//   },
//   chatWidgetText: {
//     color: "white",
//     fontSize: "15px",
//     marginLeft: "5px",
//   },
//   modalWindow: {
//     position: "fixed",
//     bottom: "70px",
//     right: "20px",
//     width: "370px",
//     height: "65vh",
//     maxWidth: "calc(100% - 48px)",
//     maxHeight: "calc(100% - 48px)",
//     backgroundColor: "white",
//     borderRadius: "12px",
//     border: `2px solid ${colors.primary}`,
//     overflow: "hidden",
//     boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
// };