
import HeaderComp from "../components/header";
import SearchSection from "../components/searchsection";
import ListProducts from "../components/listproducts";

function LearningResourcesPage() {
    return (
        <div style={{ "minHeight": "100vh", "display": "flex", "flexDirection": "column" }}>
            <div>
                <HeaderComp />
            </div>
            <div>
                <SearchSection />
            </div>
            <div style={{"flex":"1"}}>
                <ListProducts />
            </div>
        </div>
    )
}

export default LearningResourcesPage