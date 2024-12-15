import '../styles/browseProd.css'
import { useNavigate } from "react-router-dom";


function BrowseSearchSection() {

    return (
        <>
            <div className="searchsecCont">
                <div style={{ "display": "flex", "flexDirection": "row", "alignItems": "center" }}>
                    <div style={{ "display": "flex", "flexDirection": "row", marginRight: "20px", "alignItems": "center" }}>
                        <input type='text' className='searchInput'></input>
                        <img src='./images/Search.png' style={{ "height": "25px", "width": "25px", "marginLeft": "-45px" }}></img>
                    </div>
                </div>
                <div style={{ "opacity": "0" }}>.</div>
            </div>
        </>
    )
}

export default BrowseSearchSection