import { Fragment } from "react"
import "../style/listingview.css"



function ListingItems(props) {
    return (
        <>
            <div className="categoryContainer" onClick={props.onclickFunc}>
                <img src={`/images/${props.imgsrc}`} className="categoryImage"></img>
                <div className="categoryLabel">{props.titleimg}</div>
            </div>
        </>
    )
}

export default ListingItems