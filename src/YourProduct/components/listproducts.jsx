import ProductCard from "./productCard"
import '../style/yourProductlist.css'
import { useNavigate } from "react-router-dom";

function ListProducts() {
    return (
        <>
            <div className="pGridView">
                <div className="productGrid">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default ListProducts