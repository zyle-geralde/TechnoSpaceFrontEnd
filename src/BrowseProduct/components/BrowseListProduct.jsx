import ProductCard from '../../YourProduct/components/productCard';
import "../styles/browseProd.css"
import { useNavigate } from "react-router-dom";
import { useState,useRef,forwardRef, useImperativeHandle} from "react";
import { useEffect } from 'react';
import axios from 'axios';

const BrowseListProducts = forwardRef((props, ref) => {
    const [allresponse, setAllResponse] = useState([]);

    async function fetchAllProducts() {
        try {
            const response = await axios.get("https://localhost:7016/api/Products/all");
            console.log(response.data);
            setAllResponse(response.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    }

    async function fetchcategory(pcategory) {
        const response = await axios.get("https://localhost:7016/api/Products/category", {
            params: { category: pcategory },
        });
        console.log(response.data)
        setAllResponse(response.data)
    }

    useImperativeHandle(ref, () => ({
        fetchcategory
    }));

    useEffect(() => {
        fetchAllProducts(); // Initial load
    }, []);

    return (
        <div className="pGridView">
            <div className="productGrid p-2">
                {
                    allresponse.map((item, index) => (
                        <ProductCard
                            imgsrc={item.mainImage}
                            prodName={item.name}
                            prodPrice={item.price}
                            key={index}
                            origdata={item}
                            onFunc={() => props.onFuncme(item)}
                        />
                    ))
                }
            </div>
        </div>
    );
});

export default BrowseListProducts