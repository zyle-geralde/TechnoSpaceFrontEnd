import React, { useState } from "react";
import axios from "axios";

const MessageSearchContent = ({ isOpen, onClose, conversationId }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMessages, setFilteredMessages] = useState([]);

    const handleSearch = async () => {
        console.log("handleSearch called with searchTerm:", searchTerm);
        console.log("Searching in conversation ID:", conversationId);

        if (searchTerm) {
            try {
                const response = await axios.get(`https://localhost:7016/api/Messages/conversation/${conversationId}/search?term=${searchTerm}`);
                console.log("Search response:", response.data);
                setFilteredMessages(response.data);
            } catch (error) {
                console.error("Error searching messages:", error);
                setFilteredMessages([]);
            }
        } else {
            setFilteredMessages([]);
        }
    };

    const handleKeyDown = (e) => {
        console.log("handleKeyDown called with key:", e.key);

        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term === '') {
            setFilteredMessages([]);
        }
    };

    const handleClose = () => {
        setSearchTerm('');
        setFilteredMessages([]);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="min-w-[400px] flex flex-col bg-white rounded-md shadow-lg p-4 transition-all">
            <button className="self-end text-gray-500 hover:text-black" onClick={handleClose}>
                ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Search Messages</h2>
            <input 
                type="text" 
                placeholder="Search for messages" 
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="w-full p-2 border border-gray-300 rounded-md" 
            />
            <div className="mt-4">
                {filteredMessages.length > 0 ? (
                    <ul>
                        {filteredMessages.map(message => (
                            <li key={message.id} className="p-2 border-b border-gray-200">
                                <div className="text-sm text-gray-600">{message.content}</div>
                                <div className="text-xs text-gray-400">{new Date(message.timestamp).toLocaleString()}</div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No messages found.</p>
                )}
            </div>
        </div>
    );
};

export default MessageSearchContent;
