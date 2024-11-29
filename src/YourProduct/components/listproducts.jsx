import ProductCard from "./productCard"
import '../style/yourProductlist.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function ListProducts(props) {
    var [loadedProductImage, setloadedProductImage] = useState(['./images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png'])
    var [loadedProductName, setloadedProductName] = useState(['bondbon', 'bondbond', 'bondbondpaap', 'bondbondp', 'bondbondp', 'bondbondpa', 'bondbondpaa', 'bondbondp'])
    var [loadedProductPrice, setloadedProductPrice] = useState([200,200,200,200,200,200,200,200])
    
    return (
        <>
            <div className="sm:px-10 md:px-20 lg:px-30 xl:px-40">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 px-2">
                    {
                        loadedProductImage.map((item, index) => (
                            <ProductCard imgsrc={item} 
                            prodName={loadedProductName[index]} 
                            prodPrice={loadedProductPrice[index]} 
                            key={index} 
                            onFunc={props.onFuncme} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ListProducts