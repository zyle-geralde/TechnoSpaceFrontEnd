import '../style/yourProductlist.css'
import { useNavigate } from "react-router-dom";


function SearchSection() {
    const navigate = useNavigate();

    function backtoListing() {
        navigate("/Yourproducts")
    }
    return (
        <>
            <div className="searchsecCont">
                <img src="./images/back.png" className='backButton' onClick={backtoListing}></img>
                <div style={{ "display": "flex", "flexDirection": "row", "alignItems": "center" }}>
                    <div style={{ "display": "flex", "flexDirection": "row", marginRight: "20px", "alignItems": "center" }}>
                        <input type='text' className='searchInput'></input>
                        <img src='./images/Search.png' style={{ "height": "25px", "width": "25px", "marginLeft": "-45px" }}></img>
                    </div>
                    <div className="dropdown">
                        <img
                            src="./images/Filter.png"
                            alt="Dropdown Trigger"
                            className="btn dropdown-toggle filterButton"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ "width": "48px", "height": "38px", "cursor": "pointer"}}
                        />

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" style={{"cursor":"pointer"}}>All</a></li>
                            <li><a className="dropdown-item" style={{"cursor":"pointer"}}>Low to High Price</a></li>
                            <li><a className="dropdown-item" style={{"cursor":"pointer"}}>High to Low Price</a></li>
                            <li><a className="dropdown-item" style={{"cursor":"pointer"}}>A to Z</a></li>
                            <li><a className="dropdown-item" style={{"cursor":"pointer"}}>Z to A</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{ "opacity": "0" }}>.</div>
            </div>
        </>
    )
}

export default SearchSection