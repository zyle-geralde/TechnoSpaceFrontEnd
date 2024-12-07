import { MouseEvent } from "react";
import { useState } from "react";
import "../../YourProduct/style/listingview.css"
import HeaderComp from "../../YourProduct/components/header";
import ListingItems from "../../YourProduct/components/listingItems";
import BackComp from "../../EditYourProducts/components/backcomp";
import { useNavigate } from "react-router-dom";

function SellListingView() {
    var firstlayer = ['003-stationery 1.png', '002-graduation 1.png', '001-gadget 1.png', '004-application 1.png']
    var firstlayername = ['School Supplies', 'Learning Resources', 'Gadgets', 'Others']
    var funcList = [navigateToSchoolSupplies, navigateToLearningResources, navigateToGadgets, navigateToOthers]


    const navigate = useNavigate()

    function navigateToLearningResources() {
        navigate("/SellProductsInListing", { state: { category: "LR" } })
    }
    function navigateToSchoolSupplies() {
        navigate("/SellProductsInListing", { state: { category: "SS" } })
    }
    function navigateToGadgets() {
        navigate("/SellProductsInListing", { state: { category: "G" } })
    }
    function navigateToOthers() {
        navigate("/SellProductsInListing", { state: { category: "O" } })
    }
    function navigateToBack() {
        navigate("/Yourproducts")
    }
    return (
        <div className="flex flex-col poppins borderbox">
            <HeaderComp onFunc={navigateToBack} />
            <div className="sm:px-10 md:px-20 lg:px-30 xl:px-40 flex flex-col">
                <div className="p-2 flex flex-row-reverse items-center m-auto w-full">
                    <div className="rounded-sm text-center bg-primary-color w-full text-white text-lg p-2 mx-auto m-2 md:w-2/3 lg:w-1/2 ">Sell Listing Type</div>
                    <BackComp onFunc={navigateToBack} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-2">
                    {firstlayer.map((item, index) => (
                        <div className="flex justify-center items-center">
                            <ListingItems key={index} imgsrc={item} titleimg={firstlayername[index]} onclickFunc={funcList[index]} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SellListingView;