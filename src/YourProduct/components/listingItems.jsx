import { Fragment } from "react"
import "../style/listingview.css"



function ListingItems(props) {
    return (
        <>
            <div className="border-2 w-full flex flex-col p-4 col-span-1 gap-2 hover:border-primary-color" onClick={props.onclickFunc}>
                <img src={`/images/${props.imgsrc}`} className="categoryImage object-contain p-3"></img>
                <div className="text-sm text-primary-color text-center">{props.titleimg}</div>
            </div>
        </>
    )
}

export default ListingItems