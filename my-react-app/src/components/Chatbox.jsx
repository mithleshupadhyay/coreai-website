import React, { useState } from "react";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      const userMessage = input;
      setInput("");

      // Here you can call your chatbot function to get a response
      // Example: const response = await yourChatbotFunction(userMessage);
      // setMessages([...messages, { text: userMessage, sender: "user" }, { text: response, sender: "bot" }]);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      <button onClick={toggleChatbox} style={{ padding: "10px", borderRadius: "5px" }}>
        Chat
      </button>
      {isOpen && (
        <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", width: "300px", backgroundColor: "#fff" }}>
          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
                <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            style={{ width: "100%", padding: "5px", borderRadius: "5px", marginTop: "10px" }}
          />
          <button onClick={handleSend} style={{ padding: "5px", borderRadius: "5px", marginTop: "5px" }}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbox;