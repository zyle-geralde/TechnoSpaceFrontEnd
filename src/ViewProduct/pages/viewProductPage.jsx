import "../styles/viewproductstyle.css";
import ReportButton from "../../ReportComponents/ReportButton";
import HeaderComp from "../../YourProduct/components/header";
import BackComp from "../../EditYourProducts/components/backcomp";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useRef } from "react";
import axios from "axios";

function ViewProductPage() {
    const modelSell = useRef(null);
    const navigate = useNavigate();
    const { state } = useLocation();
    const product = state?.product;

    const handleShowModalsell = () => {
        if (modelSell.current) {
            window.$(modelSell.current).modal("show");
        }
    };

    const handleCloseModalsell = () => {
        if (modelSell.current) {
            window.$(modelSell.current).modal("hide");
        }
    };

    function goback() {
        navigate("/BrowseProduct");
    }

    async function getUserId(email) {
        try {
            const response = await axios.get(`https://localhost:7016/api/Register/id`, {
                params: { idNumber: email }
            });
            return response.data.id;
        } catch (error) {
            console.error("Error fetching user ID:", error);
            alert("Failed to fetch user ID.");
            throw error;
        }
    }

    async function handleMessageSeller() {
        try {
            const currentUserId = localStorage.getItem('userId'); // Fetch current user's ID
            const creatorId = await getUserId(product.creator); // Fetch creator's ID
    
            const conversationDTO = {
                User1Email: creatorId,
                User2Email: currentUserId,
                ProductId: product.id
            };
    
            console.log("Creating conversation with payload:", conversationDTO);
    
            const response = await axios.post('https://localhost:7016/api/Conversations', conversationDTO);
            console.log("Conversation created:", response.data);
            alert("Conversation started with the seller!");
        } catch (error) {
            let errorMessage = "Failed to start conversation. Please try again later.";
            if (error.response && error.response.data.errors) {
                console.error("Validation errors:", error.response.data.errors);
                errorMessage = "Please check the provided data.";
            } else if (error.request) {
                console.error("Error request data:", error.request);
            } else {
                console.error("Error message:", error.message);
            }
            console.error("Error config:", error.config);
            alert(errorMessage); // Provide user-friendly feedback
        }
    }
    
    

    const { mainImage, name, price, description, specialization, schedule, location, creator } = product || {};

    return (
        <>
            <HeaderComp />
            <div style={{ position: "absolute", top: "60px", left: "30px" }}>
                <BackComp onFunc={goback} />
            </div>

            <div className="divmain">
                <div className="contianmainProd">
                    <div className="firstHalfprod">
                        <div className="mainImageCont">
                            <img src={mainImage || "./images/defaultImage.png"} className="mainImage" alt="Main Product" />
                        </div>
                        <div className="subImageCont">
                            <div className="subImagesubCont">
                                <img src={mainImage || "./images/defaultImage.png"} className="subImage" alt="Sub Image 1" />
                            </div>
                            <div className="subImagesubCont">
                                <img src={mainImage || "./images/defaultImage.png"} className="subImage" alt="Sub Image 2" />
                            </div>
                            <div className="subImagesubCont">
                                <img src={mainImage || "./images/defaultImage.png"} className="subImage" alt="Sub Image 3" />
                            </div>
                            <div className="subImagesubCont">
                                <img src={mainImage || "./images/defaultImage.png"} className="subImage" alt="Sub Image 4" />
                            </div>
                        </div>
                    </div>
                    <div className="secondHalfprod">
                        <div className="prodTitle">
                            {name || "Product Name"}
                        </div>
                        <div className="prodPrice">
                            PHP {price || "0"}
                        </div>
                        <div className="buttonGroupClass flex">
                            <div className="messageBut" onClick={handleMessageSeller}>
                                Message Seller
                            </div>
                            <ReportButton />
                        </div>
                        <div className="containInfo">
                            <div style={{ fontWeight: "bold", marginTop: "10px" }}>Product Description</div>
                            <div className="ProdDesc">
                                {description || "No description available"}
                            </div>
                            <div style={{ fontWeight: "bold", marginTop: "10px" }}>Product Specification</div>
                            <div className="ProdSpecification">
                                {specialization || "No specification available"}
                            </div>
                            <div style={{ fontWeight: "bold", marginTop: "10px" }}>Available Schedule</div>
                            <div className="AveSched">
                                {schedule || "No schedule available"}
                            </div>
                            <div style={{ fontWeight: "bold", marginTop: "10px" }}>Location</div>
                            <div className="LocProd">
                                {location || "No location available"}
                            </div>
                        </div>
                        <div className="PurchProd" onClick={handleShowModalsell}>Purchase Product</div>
                    </div>
                </div>
            </div>

            <div
                ref={modelSell}
                className="modal fade"
                id="sellModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="sellModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <h5 className="modal-title" id="sellModalLabel" style={{ fontWeight: "bold", fontSize: "18px" }}>
                                Confirm
                            </h5>
                        </div>
                        <div className="modal-body" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>Are you sure you want to buy?</div>
                        <div className="modal-footer" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                aria-label="Close" onClick={handleCloseModalsell}
                                style={{ backgroundColor: "white", borderStyle: "solid", borderWidth: "1px", borderColor: "black", color: "black" }}
                            >
                                Cancel
                            </button>
                            <button type="button" className="btn" style={{ backgroundColor: "#800000c4", color: "white" }}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewProductPage;
