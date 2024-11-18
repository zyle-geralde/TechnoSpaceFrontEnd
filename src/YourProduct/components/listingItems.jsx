import { Fragment } from "react"
import "../style/listingview.css"



function ListingItems(props) {
    return (
        <>
            <div key={props.key} className="categoryContainer">
                <img src={`/images/${props.imgsrc}`} className="categoryImage"></img>
                <div className="categoryLabel">{props.titleimg}</div>
            </div>
        </>
    )
}

export default ListingItems