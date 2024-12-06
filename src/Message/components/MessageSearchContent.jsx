// MessageSearchContent.jsx
import React from "react";

const MessageSearchContent = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="w-80 flex flex-col bg-white rounded-md shadow-lg p-4 transition-all">
            <button className="self-end text-gray-500 hover:text-black" onClick={onClose}>
                ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Search Messages</h2>
            <input type="text" placeholder="Search for messages" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
    );
};

export default MessageSearchContent;