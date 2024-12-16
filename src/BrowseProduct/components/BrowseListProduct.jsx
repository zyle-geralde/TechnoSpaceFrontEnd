import ProductCard from '../../YourProduct/components/productCard';
import "../styles/browseProd.css"
import { useNavigate } from "react-router-dom";
import { useState,useRef,forwardRef, useImperativeHandle} from "react";
import { useEffect } from 'react';
import axios from 'axios';

const BrowseListProducts = forwardRef((props, ref) => {
    const [allresponse, setAllResponse] = useState([]);
    var [holdAllresp, setholdAllresp] = useState([]);

    async function fetchAllProducts() {
        try {
            const response = await axios.get("https://localhost:7016/api/Products/all");
            console.log(response.data);
            setAllResponse(response.data);
            setholdAllresp(response.data)
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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                console.log("repme",allresponse)
                console.log(props.wordS);
                var cont = props.wordS
                if (cont == "") {
                    setAllResponse(holdAllresp);
                    return
                }

                var filteredResp = holdAllresp.filter(item => item.name.toLowerCase().includes(cont.toLowerCase()));
                if (filteredResp.length == 0) {
                    setAllResponse(holdAllresp);
                    return
                }

                setAllResponse(filteredResp)
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [props.wordS]);

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