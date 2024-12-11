
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
        <div className="poppins pb-4">
            <HeaderComp />
            <div className="sm:px-10 md:px-20 lg:px-30 xl:px-40">    
                <SearchSection />
                <ProductTitle titleText={"Learning Resources"} />
            </div>
            <ListProducts onFuncme={gotoEditLR} categ = "LR"/>
        </div>
    )
}

export default LearningResourcesPage