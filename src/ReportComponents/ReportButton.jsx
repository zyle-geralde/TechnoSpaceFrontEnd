import React, { useEffect } from "react";
import { useState } from "react";
import "../ReportComponents/report.css"
import axios from "axios";

function ReportButton({ receiverEmailAddress }){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reportMessage, setReportMessage] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null);
    const [hasReported, setHasReported] = useState(false)
    const [user, setUser] = useState(null)
    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const showResponseResult = (message) => {
        setResponseMessage(message);
        setTimeout(() => {
            setResponseMessage(null);
        }, 2200);
    }
    const fetchData = async () => {
        try {
            const currentID = localStorage.getItem("userId");
            // Fetch user data
            const userResponse = await axios.get(`https://localhost:7016/api/user?email=${receiverEmailAddress}`);
            const userId = userResponse.data.id;
            setUser(userResponse.data);

            console.log(`Logged in user: ${currentID}`)
            console.log(`Receiver user: ${userId}`)

            // Check if the user has already reported
            const reportResponse = await axios.get(`https://localhost:7016/api/report/check_if_reported/${currentID}/${userId}`);
            setHasReported(reportResponse.data);
            console.log(reportResponse.data)
        } catch (error) {
            console.error("Error checking if reported:", error);
            setHasReported(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [receiverEmailAddress]);
    

    const submitReport = async () => {
        if(!reportMessage) {
            showResponseResult("This field cannot be left blank.")
            return;
        }
        
        const reportDTO = {
            Title: reportMessage,
            CreatedDate: new Date().toISOString(),
            senderID: localStorage.getItem('userId'),
            receiverID: user.id,
        };
        try {
            axios.post('https://localhost:7016/api/report',reportDTO);
            openModal()
            fetchData()
            showResponseResult("Your report has been submitted and will be reviewed by our admin shortly. Thank you for helping keep our community safe!")
        }catch(error) {
            openModal()
            showResponseResult("Oops! Something went wrong, and your report wasn't submitted. Please try again.")
        }
    } 
    return (
        <div className="w-fit">
            {
                !hasReported &&
                <button onClick={openModal} className="px-4 p-2 bg-red-800 text-white h-full">Report User</button>
            }
            {
                hasReported &&
                <button onClick={openModal} className="px-4 p-2 bg-gray-300 text-gray-700 self-center h-full" disabled>Report User</button>
            }

            {isModalOpen && !hasReported &&
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

