import { useState } from "react";
import { BsFillChatFill } from "react-icons/bs";
import { styles } from "./styles";
import ModalWindow from "./ModalWindow";

function ChatWidget() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {visible && <ModalWindow visible={visible} setVisible={setVisible} />}

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setVisible(!visible)}
        style={{
          ...styles.chatWidget,
          border: hovered ? "1px solid black" : "",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BsFillChatFill size={20} color="white" />
          <span style={styles.chatWidgetText}>Chat Now!!</span>
        </div>
      </div>
    </div>
  );
}

export default ChatWidget;