
import HeaderComp from "../../YourProduct/components/header";
import SearchSection from "../../YourProduct/components/searchsection";
import ProductTitle from "../../YourProduct/components/productTitle";
import BrowseListProducts from "../components/BrowseListProduct";
import { useNavigate } from "react-router-dom";
import BrowseSearchSection from "../components/BrowseSearchSection";
import { useState,useRef } from "react";

function BrowsePage() {
    const navigate = useNavigate();
    var [droptitle, setdroptitle] = useState("All")
    const productRef = useRef(null);

    function OpenProd(prodSpecs) {
        navigate("/ViewProduct",{ state: { product: prodSpecs } })
    }
    function changeAll() {
        setdroptitle("All")
        window.location.reload()
    }
    function changeLR() {
        setdroptitle("Learning Resources")
        if (productRef.current) {
            productRef.current.fetchcategory("LR");
        }
    }
    function changeSS() {
        setdroptitle("School Supplies")
        if (productRef.current) {
            productRef.current.fetchcategory("SS");
        }
    }
    function changeO() {
        setdroptitle("Others")
        if (productRef.current) {
            productRef.current.fetchcategory("O");
        }
    }
    function changeG() {
        setdroptitle("Gadgets")
        if (productRef.current) {
            productRef.current.fetchcategory("G");
        }
    }
    return (
        <div style={{
            "maxHeight": "100vh", "minHeight": "100vh", "height": "100vh", "display": "flex", "flexDirection": "column",
            "overflowY": "hidden"
        }}>
            <div>
                <HeaderComp />
            </div>
            <div className="browseSubHead">

                <BrowseSearchSection />
            </div>
            <div className="browseTitlesubhead">
                <div className="dropdown browsedorphead">
                    <button className="btn btn-danger dropdown-toggle " type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        {droptitle}
                    </button>
                    <div className="dropdown-menu text-sm" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" onClick={changeAll}>All</button>
                        <button className="dropdown-item" type="button" onClick={changeLR}>Learning Resources</button>
                        <button className="dropdown-item" type="button"  onClick={changeSS}>School Supplies</button>
                        <button className="dropdown-item" type="button"  onClick={changeG}>Gadgets</button>
                        <button className="dropdown-item" type="button"  onClick={changeO}>Others</button>
                    </div>
                </div>
            </div>
            <div className="scrollable-container">
                <BrowseListProducts ref={productRef} onFuncme={OpenProd} />
            </div>
        </div>
    )
}

export default BrowsePage;