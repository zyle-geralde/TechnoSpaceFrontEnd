// MessageInput.jsx
import React, { useState } from "react";
import axios from "axios";

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState(""); // State to manage input value

    const handleSubmit = () => {
        if (message.trim() !== "") {
            onSendMessage(message);
            setMessage(""); 
        }
    };

    return (
        <div className="border-t border-gray-200 p-4 flex items-center">
            <div className="relative flex-1">
                {/* Message input field */}
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} // Update state as user types
                    placeholder="Type your message..."
                    className="w-full px-4 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                {/* Send button */}
                <img
                    src="/svg/send_icon.svg"
                    alt="Send"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                    onClick={handleSubmit} // Call send message on click
                />
            </div>
        </div>
    );
};

export default MessageInput;
