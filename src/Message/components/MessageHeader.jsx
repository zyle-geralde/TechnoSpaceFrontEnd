// MessageHeader.jsx
import React from "react";

const MessageHeader = ({ onToggleSearchOverlay }) => {
    return (
        <div className="flex justify-between items-center border-b border-gray-200 p-4 mb-4">
            <div className="flex flex-row items-center">
                <div className="text-[56px] font-bold mr-3">Seller</div>
                <div className="text-3xl text-gray-500 pt-2">Product Inquiry</div>
            </div>
            <div className="flex flex-row items-center gap-x-10">
                <img src="/svg/search_icon.svg" className="w-[32px] h-[32px]" onClick={onToggleSearchOverlay} />
                <img src="/svg/dots_icon.svg" className="w-[32px] h-[32px]" />
            </div>
        </div>
    );
};

export default MessageHeader;
