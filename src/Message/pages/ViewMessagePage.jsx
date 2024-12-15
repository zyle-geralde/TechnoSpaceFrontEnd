import React, { useState, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import MessageSidebar from "../components/MessageSidebar";
import MessageHeader from "../components/MessageHeader";
import MessageContent from "../components/MessageContent";
import MessageInput from "../components/MessageInput";
import MessageSearchContent from "../components/MessageSearchContent";
import HeaderComp from "../../YourProduct/components/header";

const ViewMessagePage = () => {
    const userId = "7b920704-9205-400b-93e5-86c169bd57b1"; // Static userId for now
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
    const [messages, setMessages] = useState([]); // Initialize messages as an array
    const [selectedConversationId, setSelectedConversationId] = useState(null);
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:7016/chatHub")
            .configureLogging("debug") // Enable debug logs
            .build();

        newConnection
            .start()
            .then(() => {
                console.log("SignalR connection established!");
                setConnection(newConnection);
            })
            .catch((error) => {
                console.error("Error starting SignalR connection:", error);
            });

        newConnection.on("ReceiveMessage", (message) => {
            console.log("Message received via SignalR:", message);

            // Ensure that messages state is updated correctly
            setMessages((prevMessages) => {
                if (Array.isArray(prevMessages)) {
                    return [...prevMessages, message];
                } else {
                    console.error("prevMessages is not an array:", prevMessages);
                    return [message];
                }
            });
        });

        return () => {
            if (newConnection) {
                newConnection.stop();
            }
        };
    }, []);

    const toggleSearchOverlay = () => {
        setIsSearchOverlayOpen(!isSearchOverlayOpen);
    };

    const onMessagesFetched = async (conversationId) => {
        if (!conversationId) return;

        try {
            console.log("Fetching messages for conversation ID:", conversationId); // Log to verify conversationId

            const response = await fetch(
                `https://localhost:7016/api/messages/conversation/${conversationId}`
            );
            const data = await response.json();
            console.log("Fetched messages:", data); // Log fetched data
            
            // Ensure that data is an array
            if (data && Array.isArray(data.$values)) {
                setMessages(data.$values); // Use $values array
                console.log("Messages state updated"); // Log state update
            } else {
                console.error("Invalid data format:", data);
                setMessages([]); // Reset to an empty array in case of error
            }
        } catch (error) {
            console.error("Error fetching messages:", error);
            setMessages([]);
        }
    };

    const handleSelectConversation = (conversationId) => {
        console.log("Selected conversation ID:", conversationId);
        setSelectedConversationId(conversationId);
        onMessagesFetched(conversationId);
    };

    const handleSendMessage = async (messageContent) => {
        if (!connection) {
            alert("SignalR connection is not ready.");
            return;
        }

        if (!selectedConversationId) {
            alert("Please select a valid conversation to send a message.");
            return;
        }

        try {
            await connection.invoke("SendMessage", {
                conversationId: selectedConversationId,
                senderId: userId,
                content: messageContent,
                timestamp: new Date().toISOString(),
                isRead: false,
            });
            
            console.log("Message sent successfully");
        } catch (error) {
            console.error("Error sending message via SignalR:", error);
        }
    };

    return (
        <div>
            <HeaderComp />
            <div className="flex h-screen">
                <MessageSidebar
                    onToggleSearchOverlay={toggleSearchOverlay}
                    onSelectConversation={handleSelectConversation}
                />
                <div className="flex flex-col justify-between w-full">
                    <MessageHeader onToggleSearchOverlay={toggleSearchOverlay} />
                    <MessageContent messages={messages} userId={userId} />
                    <MessageInput onSendMessage={handleSendMessage} />
                </div>
                <MessageSearchContent isOpen={isSearchOverlayOpen} onClose={toggleSearchOverlay} />
            </div>
        </div>
    );
};

export default ViewMessagePage;
