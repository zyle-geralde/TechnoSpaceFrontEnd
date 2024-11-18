import { Fragment } from "react"
import "../style/listingview.css"



function ListingItems(props) {
    return (
        <>
            <div className="categoryContainer">
                <img src={`/images/${props.imgsrc}`} className="categoryImage" onClick={props.onclickFunc}></img>
                <div className="categoryLabel">{props.titleimg}</div>
            </div>
        </>
    )
}

export default ListingItems