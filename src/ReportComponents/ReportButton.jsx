import React from "react";
import { useState } from "react";
import "../ReportComponents/report.css"
import axios from "axios";

function ReportButton(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reportMessage, setReportMessage] = useState(null);
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
    const submitReport = async () => {
        if(!reportMessage) {
            showResponseResult("This field cannot be left blank.")
            return;
        }
        const reportDTO = {
            Title: reportMessage,
            CreatedDate: new Date().toISOString(),
            senderID: "7b920704-9205-400b-93e5-86c169bd57b1", //Change to the current user's id
            receiverID: "dfa727eb-0608-4cdb-8d4f-6e004f637a9s8", //change to the author of the product's id
        };
        try {
            axios.post('https://technospace-server-gjb6g4ckd4fagnbs.southeastasia-01.azurewebsites.net/api/report/',reportDTO);
            openModal()
            showResponseResult("Your report has been submitted and will be reviewed by the admin soon. Thank you for keeping our community safe!")
        }catch(error) {
            openModal()
            showResponseResult("An error occured, report was not submitted")
        }
    } 
    return (
        <div>
            <button onClick={openModal} className="px-4 p-2 bg-red-800 text-white self-center h-full">Report</button>

            {isModalOpen && 
            (
                <div className="absolute h-screen w-full top-0 left-0 z-50 backdrop-blur-sm flex -">
                    <div className="aniamtion-modal my-auto mx-auto bg-white w-4/5 md:w-1/2 p-4 rounded-md flex flex-col gap-4">
                        <div className="flex flex-row">
                            <p className="font-semibold mx-auto text-center text-lg">Report</p>
                            <div onClick={openModal} className="animation-all hover:rotate-90 hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </div>
                        </div>
                        <textarea onChange={(e)=>{setReportMessage(e.target.value)}} rows={5} placeholder="Describe the issue..." className="w-full border-2 p-2 text-center h-fit hide-scroll"></textarea>
                        <div className="flex flex-row gap-4">
                            <button className="w-full bg-gray-800 text-white mx-auto p-2 hover:bg-black" onClick={submitReport}>Submit Report</button>
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

export default ReportButton

