import { useState } from "react";
import { styles } from "../styles";

const API_KEY = process.env.REACT_APP_API_KEY;

function ModalWindow({ visible, setVisible }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that.";

      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
      setMessages([...newMessages, { text: "Error connecting to OpenAI API.", sender: "bot" }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div
      style={{
        ...styles.modalWindow,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <button onClick={() => setVisible(false)} style={{ float: "right", margin: "10px" }}>Close</button>
      <div style={{ padding: "10px", height: "calc(100% - 60px)", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px 0" }}>
            <p style={{ background: msg.sender === "user" ? "#daf8cb" : "#f1f1f1", padding: "5px", borderRadius: "8px", display: "inline-block" }}>{msg.text}</p>
          </div>
        ))}
      </div>
      <div style={{ padding: "10px", display: "flex" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}  // Listen for Enter key press
          style={{ flex: 1, padding: "8px" }}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} style={{ marginLeft: "5px", padding: "8px 12px" }}>Send</button>
      </div>
    </div>
  );
}

export default ModalWindow;

















// import { useState } from "react";
// import { styles } from "../styles";

// function ModalWindow({ visible, setVisible }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { text: input, sender: "user" }];
//     setMessages(newMessages);
//     setInput("");

//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer OPENAI_API_KEY`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: input }],
//       }),
//     });

//     const data = await response.json();
//     const botReply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that.";

//     setMessages([...newMessages, { text: botReply, sender: "bot" }]);
//   };

//   return (
//     <div
//       style={{
//         ...styles.modalWindow,
//         opacity: visible ? 1 : 0,
//         transition: "opacity 0.3s ease-in-out",
//       }}
//     >
//       <button onClick={() => setVisible(false)} style={{ float: "right", margin: "10px" }}>Close</button>
//       <div style={{ padding: "10px", height: "calc(100% - 60px)", overflowY: "auto" }}>
//         {messages.map((msg, index) => (
//           <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px 0" }}>
//             <p style={{ background: msg.sender === "user" ? "#daf8cb" : "#f1f1f1", padding: "5px", borderRadius: "8px", display: "inline-block" }}>{msg.text}</p>
//           </div>
//         ))}
//       </div>
//       <div style={{ padding: "10px", display: "flex" }}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           style={{ flex: 1, padding: "8px" }}
//           placeholder="Type your message..."
//         />
//         <button onClick={sendMessage} style={{ marginLeft: "5px", padding: "8px 12px" }}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default ModalWindow;