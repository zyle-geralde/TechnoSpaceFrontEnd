import { use } from "react";
import HeaderComp from "../../YourProduct/components/header";
import "../style/yourcustomer.css"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function YourCustomerPage() {
    var [prodList, setProdList] = useState([]);
    const localemial = localStorage.getItem("email")

    const getAllPurchaseProducts = async () => {
        try {
            const response = await axios.get("https://localhost:7016/api/Purchaseproducts/all");
            console.log("Purchased Products:", response.data);
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error("Error Response:", error.response.data);
                console.error("Status Code:", error.response.status);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error:", error.message);
            }
        }
    };

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const data = await getAllPurchaseProducts();
                const filteredData = data.filter(
                    (product) => product.seller === localemial  && product.status === "Pending"
                );
                setProdList(filteredData);
            } catch (err) {
                setError("Failed to fetch purchased products.");
            }
        };

        fetchPurchases();
    }, []);


    const updatePurchasedProduct = async (id, updatedProduct) => {
        try {
          const response = await axios.put(
            `https://localhost:7016/api/Purchaseproducts/update/${id}`,
            updatedProduct
          );
            console.log("Update successful:", response.data);
            window.location.reload()
        } catch (error) {
          if (error.response) {
            console.error("Error response:", error.response.data);
          } else if (error.request) {
            console.error("No response received:", error.request);
          } else {
            console.error("Error:", error.message);
          }
        }
      };
    return (
        <>
            <HeaderComp />
            <div className="rounded-sm text-center bg-primary-color w-full text-white text-lg p-2 mx-auto md:w-2/3 lg:w-1/2 m-2">Customer Purchase List</div>
            <div className="flex flex-col w-full  sm:px-10 md:px-20 lg:px-30 xl:px-40 gap-2 poppins pb-4">
                {prodList.map((product, index) => (
                    <div key={index} className="flex flex-row border-2 w-full p-1">
                        <div className="w-4/5 flex flex-row gap-2">
                            <div className="ImageProdCont my-auto ml-1">
                                <img src={product.prodImage} className="productcImage" alt="Product" />
                            </div>
                            <div className="flex flex-col h-full gap-2 justify-between">
                                <div className="f1t font-bold self-start">
                                    {product.prodName}
                                </div>
                                <div className="flex flex-col self-end">
                                    <div className="f2t text-xs">
                                        {product.buyer}
                                    </div>
                                    <div className="text-sm f3t">
                                        {product.prodPrice}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/5 flex flex-row gap-2 text-white p-2">
                            <div className="w-1/2 text-center text-3xl flex flex-col justify-center bg-green-700" onClick={function () {
                                const updatedProduct = {
                                    buyer: product.buyer,
                                    seller: product.seller,
                                    status: "Done",
                                    prodName: product.prodName,
                                    prodPrice: product.prodPrice,
                                    prodImage: product.prodImage,
                                };
                                console.log(updatedProduct)
                                console.log(product.id)
                                updatePurchasedProduct(product.id, updatedProduct)
                                
                            }}>
                                ✓
                            </div>
                            <div className="w-1/2 text-center text-3xl flex flex-col justify-center bg-red-700">
                                x
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default YourCustomerPage;