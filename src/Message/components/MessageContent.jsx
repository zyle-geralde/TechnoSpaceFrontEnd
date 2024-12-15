import React, { useEffect, useRef } from "react";

const MessageContent = ({ messages, userId }) => {
    const messageEndRef = useRef(null);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    if (!messages) {
        return <div>Loading messages...</div>;
    }

    if (messages.length === 0) {
        return <div className="text-gray-500 text-center">No messages yet</div>;
    }

    // Sort messages by timestamp
    const sortedMessages = messages.slice().sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    return (
        <div className="flex-1 overflow-y-auto px-6">
            {sortedMessages.map((message) => (
                <div
                    key={message.id || `${message.timestamp}-${message.senderId}`}
                    className={`py-4 flex items-start space-x-4 ${
                        message.senderId === userId ? "justify-end" : ""
                    }`}
                >
                    {message.senderId !== userId && (
                        <img
                            src="src/assets/default_profile.png"
                            alt="Sender"
                            className="w-12 h-12 rounded-full border-2 border-gray"
                        />
                    )}
                    <div
                        className={`max-w-[70%] break-words px-4 py-2 rounded-lg shadow-sm ${
                            message.senderId === userId
                                ? "bg-green-100 text-right"
                                : "bg-blue-100"
                        }`}
                    >
                        <div className="text-sm text-gray-500">
                            {new Date(message.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </div>
                        <div className="mt-2">{message.content}</div>
                    </div>
                </div>
            ))}
            <div ref={messageEndRef} />
        </div>
    );
};

export default MessageContent;
