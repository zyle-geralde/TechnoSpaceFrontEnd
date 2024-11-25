import { MouseEvent } from "react";
import { useState } from "react";
import "../../YourProduct/style/listingview.css"
import HeaderComp from "../../YourProduct/components/header";
import ListingItems from "../../YourProduct/components/listingItems";
import { useNavigate } from "react-router-dom";

function SellListingView() {
    var firstlayer = ['003-stationery 1.png', '002-graduation 1.png', '001-gadget 1.png', '004-application 1.png']
    var firstlayername = ['School Supplies', 'Learning Resources', 'Gadgets', 'Others']
    var funcList = [navigateToSchoolSupplies, navigateToLearningResources, navigateToGadgets, navigateToOthers]


    const navigate = useNavigate()

    function navigateToLearningResources() {
        navigate("/SellProductsInListing")
    }
    function navigateToSchoolSupplies() {
        navigate("/SellProductsInListing")
    }
    function navigateToGadgets() {
        navigate("/SellProductsInListing")
    }
    function navigateToOthers() {
        navigate("/SellProductsInListing")
    }
    return (
        <>
            <div style={{ "overflowY": "hidden", "height": "100vh" }}>
                <HeaderComp />
                <div className="containListing">
                    <div className="listingsContainer">
                        <div className="ListingTitle">Sell Listing Type</div>
                    </div>
                    <div className="layerCont">
                        <div className="firstlayer">
                            {firstlayer.map((item, index) => (
                                <ListingItems key={index} imgsrc={item} titleimg={firstlayername[index]} onclickFunc={funcList[index]} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellListingView;