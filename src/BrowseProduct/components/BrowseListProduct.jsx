import React, { useState, useEffect } from "react"; // Ensure useState and useEffect are imported
import ProductCard from '../../YourProduct/components/productCard';
import "../styles/browseProd.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';


function BrowseListProducts(props) {
    var [loadedProductImage, setloadedProductImage] = useState(['./images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png', './images/sampleProduct.png'])
    var [loadedProductName, setloadedProductName] = useState(['bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf', 'bondbondpaaperpaeradjfnsjadfnkjsandf'])
    var [loadedProductPrice, setloadedProductPrice] = useState([200, 200, 200, 200, 200, 200, 200, 200])

    const creatorEmail = localStorage.getItem("email");
    
    var [allresponse, setAllResponse] = useState([])
    var [holdAllresp, setholdAllresp] = useState([])

    async function fetchAllProducts() {
        try {
            const response = await axios.get("https://localhost:7016/api/Products/all");
            console.log(response.data)

            setAllResponse(response.data)
            setholdAllresp(response.data)
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    }

    useEffect(() => {

        fetchAllProducts();
    }, []);
    
    return (
        <>
            <div className="pGridView">
                <div className="productGrid p-2">
                    {
                        allresponse.map((item, index) => (
                            <ProductCard imgsrc={item.mainImage}
                                prodName={item.name}
                                prodPrice={item.price}
                                key={index}
                                origdata={item}
                                onFunc={function () { 
                                    props.onFuncme(item)
                                }} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default BrowseListProducts;
