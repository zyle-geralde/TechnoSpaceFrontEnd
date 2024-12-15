
import HeaderComp from "../components/header";
import SearchSection from "../components/searchsection";
import ListProducts from "../components/listproducts";
import ProductTitle from "../components/productTitle";
import { useNavigate } from "react-router-dom";
function GadgetsPage() {
    const navigate = useNavigate();
    function gotoEditLR(allrep) {
        navigate("/EditListing",{ state: { category: "G",resdata: allrep} })
    }
    return (
        <div className="pb-4 ">
            <HeaderComp />
            <div className="sm:px-10 md:px-20 lg:px-30 xl:px-40">
                <SearchSection />
                <ProductTitle titleText={"Gadgets"} />
            </div>
            <ListProducts onFuncme={gotoEditLR} categ = "G"/>
        </div>
    )
}

export default GadgetsPage