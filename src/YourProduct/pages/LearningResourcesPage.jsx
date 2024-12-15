
import HeaderComp from "../components/header";
import SearchSection from "../components/searchsection";
import ListProducts from "../components/listproducts";
import ProductTitle from "../components/productTitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function LearningResourcesPage() {
    const navigate = useNavigate();

    var [serachWord, setSearchWord] = useState("")
    
    function searchWordFunc(word) {
        setSearchWord(word)
    }
    console.log(serachWord)

    function gotoEditLR(allrep) {
        navigate("/EditListing",{ state: { category: "LR",resdata: allrep} })
    }
    return (
        <div className="poppins pb-4">
            <HeaderComp />
            <div className="sm:px-10 md:px-20 lg:px-30 xl:px-40">    
                <SearchSection searchW={searchWordFunc}/>
                <ProductTitle titleText={"Learning Resources"} />
            </div>
            <ListProducts onFuncme={gotoEditLR} categ = "LR" wrodS = {serachWord}/>
        </div>
    )
}

export default LearningResourcesPage