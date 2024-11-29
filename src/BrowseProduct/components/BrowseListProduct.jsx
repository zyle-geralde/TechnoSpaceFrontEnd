import ProductCard from '../../YourProduct/components/productCard';
import "../styles/browseProd.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function BrowseListProducts(props) {
    var [loadedProductImage, setloadedProductImage] = useState(['./images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png'])
    var [loadedProductName, setloadedProductName] = useState(['bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf'])
    var [loadedProductPrice, setloadedProductPrice] = useState([200,200,200,200,200,200,200,200])
    
    return (
        <>
            <div className="pGridView">
                <div className="productGrid">
                    {
                        loadedProductImage.map((item, index) => (
                            <ProductCard imgsrc={item} prodName={loadedProductName[index]} prodPrice={loadedProductPrice[index]} key={index} onFunc={props.onFuncme} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BrowseListProducts