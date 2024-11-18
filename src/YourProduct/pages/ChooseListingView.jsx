import { MouseEvent } from "react";
import { useState } from "react";
import "../style/listingview.css"
import HeaderComp from "../components/header";
import ListingItems from "../components/listingItems";

function ListingView() {
    var firstlayer = ['003-stationery 1.png', '002-graduation 1.png', '001-gadget 1.png','004-application 1.png','hand.png']
    var firstlayername = ['School Supplies', 'Learning Resources', 'Gadgets','Others','Sell Items']
    return (
        <>
            <HeaderComp />
            <div className="listingsContainer">
                <div className="ListingTitle">Choose Listing Type</div>
            </div>
            <div className="layerCont">
                <div className="firstlayer">
                    {firstlayer.map((item, index) => (
                        <ListingItems key={index} imgsrc={item} titleimg={firstlayername[index]} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListingView;