import { MouseEvent } from "react";
import { useState } from "react";
import "../style/listingview.css"
import HeaderComp from "../components/header";
import ListingItems from "../components/listingItems";
import { useNavigate } from "react-router-dom";

function ListingView() {
    var firstlayer = ['003-stationery 1.png', '002-graduation 1.png', '001-gadget 1.png', '004-application 1.png', 'hand.png']
    var firstlayername = ['School Supplies', 'Learning Resources', 'Gadgets', 'Others', 'Sell Items']
    var funcList = [navigateToSchoolSupplies, navigateToLearningResources, navigateToGadgets, navigateToOthers, navigateToSellItems]


    const navigate = useNavigate()

    function navigateToLearningResources() {
        navigate("/Learningresourcesview")
    }
    function navigateToSchoolSupplies() {
        navigate("/Schoolsuppliesview")
    }
    function navigateToGadgets() {
        navigate("/Gadgetsview")
    }
    function navigateToOthers() {
        navigate("/Othersview")
    }
    function navigateToSellItems() {
        navigate("/SellListingView")
    }
    return (
        <div className="flex flex-col poppins borderbox">
            <HeaderComp />
            <div className="sm:px-10 md:px-20 lg:px-30 xl:px-40 flex flex-col">
                <div className="p-2 flex flex-col items-center m-auto">
                    <div className="rounded-sm text-center bg-primary-color w-full text-white text-lg p-2 mx-auto m-2 md:w-2/3 lg:w-1/2 ">Choose Listing Type</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-2">
                        {firstlayer.map((item, index) => (
                            <div key={index} className="flex justify-center items-center">
                            <ListingItems
                                    imgsrc={item}
                                    titleimg={firstlayername[index]}
                                    onclickFunc={funcList[index]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingView;