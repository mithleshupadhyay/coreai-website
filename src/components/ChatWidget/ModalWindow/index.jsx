import { useState, useRef, useEffect } from "react";
import { styles } from "../styles";

const API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const MODEL = "llama-3.3-70b-versatile";
const STORAGE_KEY = "chat_history";
const MAX_HISTORY = 100; // Store last 100 messages instead of 20

function ModalWindow({ visible, setVisible }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    try {
      const storedMessages = localStorage.getItem(STORAGE_KEY);
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error("Error loading chat history:", error);
    }
  }, []);

  // Update messages and store them in localStorage
  const updateMessages = (newMessages) => {
    const lastMessages = newMessages.slice(-MAX_HISTORY); // Keep last 100 messages
    setMessages(lastMessages);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lastMessages));
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    updateMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            {
              role: "system",
              content:
                "You are Core AI Chatbot, an expert in AI-powered healthcare. You only respond to queries related to AI in healthcare, such as AI applications in diagnosis, patient management, medical imaging, and AI-driven drug discovery. If a user asks anything outside of this domain, politely refuse to answer.",
            },
            ...newMessages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that.";

      updateMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching Groq response:", error);
      updateMessages([...newMessages, { text: "Error connecting to Groq API.", sender: "bot" }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50); // Keep cursor in input
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
      <button onClick={() => setVisible(false)} style={{ float: "right", margin: "10px" }}>
        Close
      </button>
      <div style={{ padding: "10px", height: "calc(100% - 60px)", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px 0" }}>
            <p
              style={{
                background: msg.sender === "user" ? "#daf8cb" : "#f1f1f1",
                padding: "5px",
                borderRadius: "8px",
                display: "inline-block",
              }}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{ padding: "10px", display: "flex" }}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{ flex: 1, padding: "8px" }}
          placeholder="Type your message..."
          disabled={false} // Always allow typing
        />
        <button onClick={sendMessage} style={{ marginLeft: "5px", padding: "8px 12px" }} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;













// import { useState } from "react";
// import { styles } from "../styles";

// const API_KEY = process.env.REACT_APP_API_KEY;

// function ModalWindow({ visible, setVisible }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { text: input, sender: "user" }];
//     setMessages(newMessages);
//     setInput("");

//     try {
//       const response = await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo",
//           messages: [{ role: "user", content: input }],
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`API request failed with status: ${response.status}`);
//       }

//       const data = await response.json();
//       const botReply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that.";

//       setMessages([...newMessages, { text: botReply, sender: "bot" }]);
//     } catch (error) {
//       console.error("Error fetching OpenAI response:", error);
//       setMessages([...newMessages, { text: "Error connecting to OpenAI API.", sender: "bot" }]);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       sendMessage();
//     }
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
//           onKeyDown={handleKeyPress}  // Listen for Enter key press
//           style={{ flex: 1, padding: "8px" }}
//           placeholder="Type your message..."
//         />
//         <button onClick={sendMessage} style={{ marginLeft: "5px", padding: "8px 12px" }}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default ModalWindow;















