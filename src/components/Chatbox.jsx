// import React, { useState } from "react";

// const Chatbox = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const toggleChatbox = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSend = async () => {
//     if (input.trim()) {
//       setMessages([...messages, { text: input, sender: "user" }]);
//       const userMessage = input;
//       setInput("");

//       // Here you can call your chatbot function to get a response
//       // Example: const response = await yourChatbotFunction(userMessage);
//       // setMessages([...messages, { text: userMessage, sender: "user" }, { text: response, sender: "bot" }]);
//     }
//   };

//   return (
//     <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
//       <button onClick={toggleChatbox} style={{ padding: "10px", borderRadius: "5px" }}>
//         Chat
//       </button>
//       {isOpen && (
//         <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", width: "300px", backgroundColor: "#fff" }}>
//           <div style={{ maxHeight: "200px", overflowY: "auto" }}>
//             {messages.map((msg, index) => (
//               <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
//                 <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
//               </div>
//             ))}
//           </div>
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyPress={(e) => e.key === "Enter" && handleSend()}
//             style={{ width: "100%", padding: "5px", borderRadius: "5px", marginTop: "10px" }}
//           />
//           <button onClick={handleSend} style={{ padding: "5px", borderRadius: "5px", marginTop: "5px" }}>
//             Send
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbox;








import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";

export const Chatbox = () => {
  console.log("Chatbox Component Loaded!"); // Debugging Log

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChatbox = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span>Chat with AI</span>
            <IoClose className="cursor-pointer" size={24} onClick={toggleChatbox} />
          </div>
          <div className="p-3 h-60 overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 flex border-t">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-lg" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center"
          onClick={toggleChatbox}
        >
          <IoChatbubbleEllipsesOutline size={24} />
        </button>
      )}
    </div>
  );
};
