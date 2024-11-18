
import HeaderComp from "../components/header";
import SearchSection from "../components/searchsection";
import ListProducts from "../components/listproducts";
import ProductTitle from "../components/productTitle";
function LearningResourcesPage() {
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
                <ListProducts />
            </div>
        </div>
    )
}

export default LearningResourcesPage