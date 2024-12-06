// ViewMessagePage.jsx
import React, { useState } from "react";
import MessageSidebar from "../components/MessageSidebar";
import MessageHeader from "../components/MessageHeader";
import MessageContent from "../components/MessageContent";
import MessageInput from "../components/MessageInput";
import MessageSearchContent from "../components/MessageSearchContent";  // Updated import

const ViewMessagePage = () => {
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

    const toggleSearchOverlay = () => {
        setIsSearchOverlayOpen(!isSearchOverlayOpen);
    };

    const handleSelectMessage = () => {
        console.log("Message selected");
    };

    return (
        <div className="flex h-screen">
            <MessageSidebar onToggleSearchOverlay={toggleSearchOverlay} onSelectMessage={handleSelectMessage} />
            <div className="flex flex-col w-full">
                <MessageHeader onToggleSearchOverlay={toggleSearchOverlay} />
                <MessageContent />
                <MessageInput />
            </div>
            <MessageSearchContent isOpen={isSearchOverlayOpen} onClose={toggleSearchOverlay} /> {/* Updated component usage */}
        </div>
    );
};

export default ViewMessagePage;
