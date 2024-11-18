import ProductCard from "./productCard"
import '../style/yourProductlist.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function ListProducts() {
    var [loadedProductImage, setloadedProductImage] = useState(['./images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png'])
    var [loadedProductName, setloadedProductName] = useState(['bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf'])
    var [loadedProductPrice, setloadedProductPrice] = useState([200,200,200,200,200,200,200,200])
    
    return (
        <>
            <div className="pGridView">
                <div className="productGrid">
                    {
                        loadedProductImage.map((item, index) => (
                            <ProductCard imgsrc={item} prodName={loadedProductName[index]} prodPrice={loadedProductPrice[index]} key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ListProducts