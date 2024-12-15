import React, { useState, useEffect, useRef } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import MessageSidebar from "../components/MessageSidebar";
import MessageHeader from "../components/MessageHeader";
import MessageContent from "../components/MessageContent";
import MessageInput from "../components/MessageInput";
import MessageSearchContent from "../components/MessageSearchContent";
import HeaderComp from "../../YourProduct/components/header";

const ViewMessagePage = () => {
    const userId = localStorage.getItem('userId'); // Static userId for now
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
    const [messages, setMessages] = useState([]); // Initialize messages as an array
    const [selectedConversation, setSelectedConversation] = useState(null); // Store entire conversation object
    const selectedConversationIdRef = useRef(null); // Ref to store the conversation ID
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
            console.log("Fetching messages for conversation ID:", conversationId);

            const response = await fetch(
                `https://localhost:7016/api/messages/conversation/${conversationId}`
            );
            const data = await response.json();
            console.log("Fetched messages:", data);

            // Check if data is an array directly
            if (Array.isArray(data)) {
                setMessages(data);
                console.log("Messages state updated");
            } else {
                console.error("Invalid data format:", data);
                setMessages([]); // Reset to an empty array in case of error
            }
        } catch (error) {
            console.error("Error fetching messages:", error);
            setMessages([]);
        }
    };

    const handleSelectConversation = async (conversationId) => {
        console.log("handleSelectConversation called with ID:", conversationId);

        try {
            const response = await fetch(`https://localhost:7016/api/conversations/${conversationId}`);
            const conversation = await response.json();
            console.log("Fetched conversation details:", conversation);

            if (conversation) {
                setSelectedConversation(conversation);
                selectedConversationIdRef.current = conversationId;
                onMessagesFetched(conversationId);
            } else {
                console.error("Failed to fetch conversation details for ID:", conversationId);
            }
        } catch (error) {
            console.error("Error fetching conversation details:", error);
        }
    };

    const handleSendMessage = async (messageContent) => {
        if (!connection) {
            alert("SignalR connection is not ready.");
            return;
        }

        if (!selectedConversation) {
            alert("Please select a valid conversation to send a message.");
            return;
        }

        const conversationId = selectedConversationIdRef.current;
        if (!conversationId) {
            console.error("Selected conversation does not have an id:", selectedConversation);
            alert("Selected conversation does not have a valid id.");
            return;
        }

        try {
            console.log("Sending message with details:", {
                conversationId: conversationId,
                senderId: userId,
                content: messageContent,
            });

            await connection.invoke("SendMessage", {
                conversationId: conversationId,
                senderId: userId,
                content: messageContent,
            });

            // Manually update the message list immediately
            setMessages((prevMessages) => [...prevMessages, {
                conversationId: conversationId,
                senderId: userId,
                content: messageContent,
                timestamp: new Date().toISOString(), // Add a timestamp for immediate UI update
                isRead: false
            }]);

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
                    userId={userId} // Pass userId to MessageSidebar
                    onToggleSearchOverlay={toggleSearchOverlay}
                    onSelectConversation={handleSelectConversation}
                />
                <div className="flex flex-col justify-between min-w-[600px] w-full">
                    <MessageHeader 
                        onToggleSearchOverlay={toggleSearchOverlay}
                        conversation={selectedConversation}
                        userId={userId}
                    />
                    <MessageContent messages={messages} userId={userId} />
                    <MessageInput onSendMessage={handleSendMessage} />
                </div>
                <MessageSearchContent 
                    isOpen={isSearchOverlayOpen} 
                    onClose={toggleSearchOverlay} 
                    conversationId={selectedConversation ? selectedConversation.id : null}
                />
            </div>
        </div>
    );
};

export default ViewMessagePage;
