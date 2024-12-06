// MessageInput.jsx
import React from "react";

const MessageInput = () => {
    return (
        <div className="border-t border-gray-200 p-4 flex items-center">
            <div className="relative flex-1">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full px-4 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <img src="/svg/send_icon.svg" alt="Send" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer" />
            </div>
        </div>
    );
};

export default MessageInput;
