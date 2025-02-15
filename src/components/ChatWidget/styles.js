import { colors } from "./config";

export const styles = {
  chatWidget: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: colors.primary,
    padding: "7px 18px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  chatWidgetText: {
    color: "white",
    fontSize: "15px",
    marginLeft: "5px",
  },
  modalWindow: {
    position: "fixed",
    bottom: "70px",
    right: "20px",
    width: "370px",
    height: "65vh",
    maxWidth: "calc(100% - 48px)",
    maxHeight: "calc(100% - 48px)",
    backgroundColor: "white",
    borderRadius: "12px",
    border: `2px solid ${colors.primary}`,
    overflow: "hidden",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};