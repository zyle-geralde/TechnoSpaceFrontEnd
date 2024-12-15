import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { differenceInMinutes, differenceInHours, differenceInDays, differenceInYears } from 'date-fns';

const MessageSidebar = ({ onToggleSearchOverlay, onSelectConversation }) => {
    const [conversations, setConversations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeOptionsMenuId, setActiveOptionsMenuId] = useState(null);
    const optionsMenuRef = useRef(null);
    const userId = "7b920704-9205-400b-93e5-86c169bd57b1";

    const fetchMessages = async () => {
        try {
            const response = await axios.get(`https://localhost:7016/api/Conversations/user/${userId}`);
            console.log("API response:", response.data); // Log the response data

            // Extract conversations from the nested $values array
            const conversations = response.data?.$values || [];
            console.log("Extracted conversations:", conversations);

            setConversations(conversations);
        } catch (error) {
            console.error("Error fetching conversations:", error);
            setError(error.response?.data || "Unable to fetch messages.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, [userId]);

    const formatTimestamp = (timestamp) => {
        const now = new Date();
        const date = new Date(timestamp);
        const minutes = differenceInMinutes(now, date);
        const hours = differenceInHours(now, date);
        const days = differenceInDays(now, date);
        const years = Math.min(differenceInYears(now, date), 999);
      
        if (years > 0) return `${years}y`;
        if (days > 0) return `${days}d`;
        if (hours > 0) return `${hours}hr`;
        if (minutes >= 0) return `${minutes}m`;
        return '0';
    }

    const toggleOptionsMenu = (id) => {
        setActiveOptionsMenuId(activeOptionsMenuId === id ? null : id);
    };

    const handleClickOutside = (e) => {
        if (optionsMenuRef.current && !optionsMenuRef.current.contains(e.target)) {
            setActiveOptionsMenuId(null);
        }
    };

    useEffect(() => {
        if (activeOptionsMenuId) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeOptionsMenuId]);

    const handleDeleteConversation = (conversationId) => {
        console.log("Delete Conversation with ID:", conversationId);
        setActiveOptionsMenuId(null);
    };

    const handleReportConversation = (conversationId) => {
        console.log("Report Conversation with ID:", conversationId);
        setActiveOptionsMenuId(null);
    };

    return (
        <aside className="max-w-xs w-full border-r flex flex-col p-4 bg-white rounded-md">
            <div className="flex flex-row gap-x-2 items-center mb-4">
                <div onClick={() => window.history.back()}>
                    <img src="\svg\back_icon.svg" alt="Back" className="w-4 h-4 cursor-pointer" />
                </div>
                <h3 className="text-lg font-bold">Conversations</h3>
            </div>
            <div className="flex items-center mb-4 relative">
                <img
                    src="/svg/search_icon.svg"
                    alt="Search"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    onClick={onToggleSearchOverlay}
                />
                <input
                    type="text"
                    placeholder="Search Conversations"
                    className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>

            <div className="space-y-4 overflow-y-auto">
                {isLoading ? (
                    <div>Loading conversations...</div>
                ) : Array.isArray(conversations) && conversations.length > 0 ? (
                    conversations.map((conversation) => (
                        <div
                            key={conversation.id}
                            className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-all"
                            onClick={() => onSelectConversation(conversation.id)}
                        >
                            <div className="flex items-center w-full">
                                <div className="relative flex-shrink-0">
                                    <img
                                        src={conversation.profile_picture || "/default-profile.png"} // Use default if profile_picture is null
                                        alt={conversation.name}
                                        className={`w-10 h-10 rounded-full object-cover ${conversation.online ? "ring-2 ring-green-400" : ""}`}
                                    />
                                </div>
                                <div className="ml-3 flex-1">
                                    <div className="font-medium">{conversation.name}</div>
                                    <p className="text-xs text-gray-500 truncate w-full break-words">
                                        {conversation.last_message}
                                    </p>
                                </div>
                                <div className="text-sm mr-1">
                                    {formatTimestamp(conversation.lastUpdated)}
                                </div>
                                <div className="relative">
                                    <img
                                        src="/svg/dots_icon.svg"
                                        className="w-6 h-6 text-gray-500"
                                        alt="Options"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleOptionsMenu(conversation.id);
                                        }}
                                    />
                                    {activeOptionsMenuId === conversation.id && (
                                        <div
                                            ref={optionsMenuRef}
                                            className="absolute right-0 top-8 bg-white border border-gray-300 rounded-md shadow-lg"
                                        >
                                            <button
                                                onClick={() => handleDeleteConversation(conversation.id)}
                                                className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 text-xs"
                                            >
                                                <img
                                                    src="/svg/eye-crossed-icon.svg"
                                                    className="w-4 h-4 mr-3"
                                                    alt="Delete Icon"
                                                />
                                                Delete Conversation
                                            </button>
                                            <button
                                                onClick={() => handleReportConversation(conversation.id)}
                                                className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 text-xs"
                                            >
                                                <img
                                                    src="/svg/flag-icon.svg"
                                                    className="w-4 h-4 mr-3"
                                                    alt="Report Icon"
                                                />
                                                Report Seller
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No conversations available.</div>
                )}
            </div>
        </aside>
    );
};

export default MessageSidebar;
