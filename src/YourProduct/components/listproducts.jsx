import ProductCard from "./productCard";
import '../style/yourProductlist.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ListProducts(props) {
    const [loadedProductImage, setloadedProductImage] = useState([]);
    const [loadedProductName, setloadedProductName] = useState([]);
    const [loadedProductPrice, setloadedProductPrice] = useState([]);
    const [allresponse, setAllResponse] = useState([]);
    
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("https://localhost:7016/api/Products/category", {
                    params: { category: props.categ },
                });
                console.log(response.data);

                if (response.data && response.data.$values) {
                    const products = response.data.$values;

                    const holdimage = [];
                    const holdname = [];
                    const holdprice = [];
                    const allresp = [];
                    
                    for (const elem of products) {
                        if (localStorage.getItem("email") === elem.creator) {
                            allresp.push(elem);
                            holdimage.push(elem.mainImage);
                            holdname.push(elem.name);
                            holdprice.push(elem.price);
                        }
                    }
                    
                    setAllResponse(allresp);
                    setloadedProductImage(holdimage);
                    setloadedProductName(holdname);
                    setloadedProductPrice(holdprice);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
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
                    {allresponse.map((item, index) => (
                        <ProductCard 
                            imgsrc={item.mainImage}
                            prodName={item.name}
                            prodPrice={item.price}
                            key={index}
                            origdata={item}
                            onFunc={props.onFuncme} 
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListProducts;
