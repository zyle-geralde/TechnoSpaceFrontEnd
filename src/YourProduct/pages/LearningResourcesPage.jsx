
import HeaderComp from "../components/header";
import SearchSection from "../components/searchsection";
import ListProducts from "../components/listproducts";
import ProductTitle from "../components/productTitle";
import { useNavigate } from "react-router-dom";
function LearningResourcesPage() {
    const navigate = useNavigate();

    function gotoEditLR() {
        navigate("/EditLearningResources")
    }
    return (
        <div style={{
            "maxHeight": "100vh", "minHeight": "100vh", "height": "100vh", "display": "flex", "flexDirection": "column",
            "overflowY":"hidden"
        }}>
            <div>
                <HeaderComp />
            </div>
            <div>
                <SearchSection />
            </div>
            <div>
                <ProductTitle titleText={"Learning Resources"} />
            </div>
            <div className="scrollable-container">
                <ListProducts onFuncme={gotoEditLR} />
            </div>
        </div>
    )
}

export default LearningResourcesPage