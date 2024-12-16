import ProductCard from "./productCard";
import '../style/yourProductlist.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ListProducts(props) {
    var [loadedProductImage, setloadedProductImage] = useState([])
    var [loadedProductName, setloadedProductName] = useState([])
    var [loadedProductPrice, setloadedProductPrice] = useState([])


    var [allresponse, setAllResponse] = useState([])
    var [holdAllresp, setholdAllresp] = useState([])


    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("https://localhost:7016/api/Products/category", {
                    params: { category: props.categ },
                });
                console.log(response.data);

                var holdimage = []
                var holdname = []
                var holdprice = []
                var allresp = []
                for (var elem of response.data) {
                    console.log(localStorage.getItem("email"))
                    console.log(elem.creator)
                    console.log(localStorage.getItem("email") != elem.creator)
                    if (localStorage.getItem("email") == elem.creator) {
                        allresp.push(elem)
                    }
                }
                setAllResponse(allresp)
                setholdAllresp(allresp)
                for (var elem of response.data) {
                    console.log(localStorage.getItem("email"))
                    console.log(elem.creator)
                    console.log(localStorage.getItem("email") != elem.creator)
                    if (localStorage.getItem("email") == elem.creator) {
                        holdimage.push(elem.mainImage)
                        holdname.push(elem.name)
                        holdprice.push(elem.price)
                    }
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


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                console.log("repme",allresponse)
                console.log(props.wrodS);
                var cont = props.wrodS
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
    }, [props.wrodS]);

    return (
        <>
            <div className="sm:px-10 md:px-20 lg:px-30 xl:px-40">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 px-2">
                    {
                        allresponse.map((item, index) => (
                            <ProductCard imgsrc={item.mainImage}
                                prodName={item.name}
                                prodPrice={item.price}
                                key={index}
                                origdata={item}
                                onFunc={props.onFuncme} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ListProducts;
