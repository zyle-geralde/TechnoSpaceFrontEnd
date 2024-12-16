import { use } from "react";
import HeaderComp from "../YourProduct/components/header";
import "../YourCustomerPurchase/style/yourcustomer.css"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function PurchaseHistoryPage() {
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
                    (product) => product.buyer === localemial);
                setProdList(filteredData);
            } catch (err) {
                setError("Failed to fetch purchased products.");
            }
        };

        fetchPurchases();
    }, []);

    function transactionLabel(label) {
        if (label == "Pending") {
            return <div style={{ "color": "rgb(173, 173, 0)", "fontSize": "13px" }}>
                Transaction Pending
            </div>
        }
        else if (label == "Done") {
            return <div style={{ "color": "green", "fontSize": "13px" }}>
                Transaction Complete
            </div>
        }
        else {
            return <div style={{ "color": "red", "fontSize": "13px" }}>
                Transaction Cancelled
            </div>
        }
    }

    return (
        <>
            <HeaderComp />
            <div className="rounded-sm text-center bg-primary-color w-full text-white text-lg p-2 mx-auto md:w-2/3 lg:w-1/2 m-2">Purchase History</div>
            <div className="flex flex-col w-full  sm:px-10 md:px-20 lg:px-30 xl:px-40 gap-2 poppins pb-4">
                {prodList.map((product, index) => (
                    <div key={index} className="flex flex-row border-2 w-full p-1" style={{"justifyContent":"space-between"}}>
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
                                        Seller: {product.seller}
                                    </div>
                                    <div className="text-sm f3t">
                                        P{product.prodPrice}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                            {transactionLabel(product.status)}
                            <div style={{"backgroundColor":"green","padding":"5px 10px","borderRadius":"5px","color":"white","fontSize":"13px","textAlign":"center","width":"146.83px"}}>
                                Rate
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default PurchaseHistoryPage;