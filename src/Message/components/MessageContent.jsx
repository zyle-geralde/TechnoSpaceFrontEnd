// MessageContent.jsx
import React from "react";

const MessageContent = () => {
    return (
        <div className="flex-1 overflow-y-auto px-6">
            {/* Seller Message */}
            <div className="py-4 flex items-start space-x-4">
                <img src="https://via.placeholder.com/40" alt="Seller" className="w-12 h-12 rounded-full" />
                <div className="w-max bg-blue-100 px-4 py-2 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-medium">Seller</div>
                        <div className="text-sm text-gray-500">9:15 AM</div>
                    </div>
                    <div className="mt-2">Message content</div>
                </div>
            </div>

            {/* Buyer Message */}
            <div className="py-4 flex items-start space-x-4 justify-end">
                <div className="w-max bg-green-100 px-4 py-2 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-500 text-right">9:16 AM</div>
                    <div className="mt-2 text-right">Message content</div>
                </div>
            </div>
        </div>
    );
};

export default MessageContent;
