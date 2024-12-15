import React from "react";
import { useState } from "react";
import "../ReviewComponents/review.css"
import axios from "axios";

function ReviewButton({ receiverId }){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewMessage, setReviewMessage] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null);
    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const showResponseResult = (message) => {
        setResponseMessage(message);
        setTimeout(() => {
            setResponseMessage(null);
        }, 2200);
    }

    const submitReview = async () => {
        if(!reportMessage) {
            showResponseResult("This field cannot be left blank.")
            return;
        }
        const reviewDTO = {
            Description: reviewMessage,
            ReceiverId: {receiverId},
            SenderId: localStorage.getItem("userId"),
            ModifiedDate: new Date().toISOString()
        }
        try {
            axios.post('https://localhost:7016/api/review',reviewDTO);
            openModal()
            showResponseResult("Your review has been successfully submitted. We greatly appreciate your contribution to maintaining a safe and welcoming community!")
        }catch(error) {
            openModal()
            showResponseResult("Oops! Something went wrong, and your review wasn't submitted. Please try again.")
        }

    }

    return (
        <div>
            <button onClick={openModal} className="px-4 p-2 bg-red-800 text-white self-center h-full">Review</button>

            {isModalOpen && 
            (
                <div className="absolute h-screen w-full top-0 left-0 z-50 backdrop-blur-sm flex -">
                    <div className="aniamtion-modal my-auto mx-auto bg-white w-4/5 md:w-1/2 p-4 rounded-md flex flex-col gap-4">
                        <div className="flex flex-row">
                            <p className="font-semibold mx-auto text-center text-lg">Review</p>
                            <div onClick={openModal} className="animation-all hover:rotate-90 hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </div>
                        </div>
                        <textarea onChange={(e)=>{setReviewMessage(e.target.value)}} rows={5} placeholder="Describe the issue..." className="w-full border-2 p-2 text-center h-fit hide-scroll"></textarea>
                        <div className="flex flex-row gap-4">
                            <button className="w-full bg-gray-800 text-white mx-auto p-2 hover:bg-black" onClick={submitReview}>Submit Review</button>
                        </div>
                    </div>
                </div>
            )}

            {responseMessage && 
            (
                <div className="absolute h-screen w-full top-0 left-0 z-50 backdrop-blur-sm flex">
                    <div className="aniamtion-modal my-auto mx-auto bg-white w-4/5 md:w-1/2 p-4 rounded-md flex flex-col gap-4">
                        <p className="text-center">{responseMessage}</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ReviewButton

