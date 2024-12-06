// MessageSidebar.jsx
import React, { useState, useRef, useEffect } from "react";

const MessageSidebar = ({ onToggleSearchOverlay, onSelectMessage }) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const optionsMenuRef = useRef(null);

    const toggleOptionsMenu = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (optionsMenuRef.current && !optionsMenuRef.current.contains(event.target)) {
                setIsOptionsOpen(false);
            }
        };

        if (isOptionsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOptionsOpen]);

    const handleDeleteMessage = () => {
        console.log("Delete Message");
        setIsOptionsOpen(false);
    };

    const handleReportMessage = () => {
        console.log("Report Message");
        setIsOptionsOpen(false);
    };

    return (
        <aside className="max-w-xs w-full border-r flex flex-col p-4 bg-white rounded-md">
            <div className="flex flex-row gap-x-2 items-center mb-4">
                <div>
                    <img src="\svg\back_icon.svg" alt="Back" className="w-4 h-4 cursor-pointer" />
                </div>
                <h3 className="text-lg font-bold">Chats</h3>
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
                    placeholder="Search Messages"
                    className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>

            <div className="space-y-4">
                {/* Static message list showing buyer */}
                <div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-all" onClick={onSelectMessage}>
                    <div className="flex items-center w-full">
                        <div className="relative flex-shrink-0">
                            <img src="https://via.placeholder.com/40" alt="Buyer" className="w-10 h-10 rounded-full object-cover" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                        </div>
                        <div className="ml-3 flex-1">
                            <div className="font-medium">Buyer</div>
                            <p className="text-xs text-gray-500 truncate w-full break-words">{`Do you still have this item?`}</p>
                        </div>

                        <div className="relative flex-shrink-0">
                            <img
                                src="/svg/dots_icon.svg"
                                className="w-6 h-6 text-gray-500"
                                alt="Options"
                                onClick={toggleOptionsMenu}
                            />
                            {isOptionsOpen && (
                                <div ref={optionsMenuRef} className="absolute right-0 top-8 bg-white border border-gray-300 rounded-md shadow-lg">
                                    <button onClick={handleDeleteMessage} className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 text-xs">
                                        <img src="/svg/eye-crossed-icon.svg" className="w-4 h-4 mr-3" alt="Delete Icon" />
                                        Delete Message
                                    </button>
                                    <button onClick={handleReportMessage} className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 text-xs">
                                        <img src="/svg/flag-icon.svg" className="w-4 h-4 mr-3" alt="Report Icon" />
                                        Report Seller
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default MessageSidebar;
