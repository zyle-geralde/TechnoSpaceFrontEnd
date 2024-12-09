import ProductCard from "./productCard"
import '../style/yourProductlist.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function ListProducts(props) {
    var [loadedProductImage, setloadedProductImage] = useState([])
    var [loadedProductName, setloadedProductName] = useState([])
    var [loadedProductPrice, setloadedProductPrice] = useState([])
    

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("https://localhost:7016/api/Products/category", {
                    params: { category: props.categ },
                });
                console.log(response.data)

                var holdimage = []
                var holdname = []
                var holdprice = []
                for (var elem of response.data) {
                    holdimage.push(elem.mainImage)
                    holdname.push(elem.name)
                    holdprice.push(elem.price)
                }
                setloadedProductImage(holdimage)
                setloadedProductName(holdname)
                setloadedProductPrice(holdprice)
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        }

        fetchProducts();
    }, [props.categ]);

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