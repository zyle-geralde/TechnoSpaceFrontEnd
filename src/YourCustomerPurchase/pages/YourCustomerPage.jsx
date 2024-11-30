import HeaderComp from "../../YourProduct/components/header";
import "../style/yourcustomer.css"
import { useState } from "react";
function YourCustomerPage() {
    function showProd() {
        const productList = [];

        // Loop to generate product divs
        for (let ll = 0; ll < 20; ll++) {
            productList.push(
                <div key={ll} className="flex flex-row border-2 w-full p-1">
                    <div className="w-4/5 flex flex-row gap-2">
                        <div className="ImageProdCont my-auto ml-1">
                            <img src="../../../images/sampleProduct.png" className="productcImage" alt="Product" />
                        </div>
                        <div className="flex flex-col h-full gap-2 justify-between">
                            <div className="f1t font-bold self-start">
                                Bond Paper jkandsfjksnkjdfnsajkndfkjasdnfkjsndfkjsndkjfnsadkjfdnksjdnfkjasndfkjdanskfjnasdkjfnsakjfns
                            </div>
                            <div className="flex flex-col self-end">
                                <div className="f2t text-xs">
                                    Ben alfred jkandsfjksnkjdfnsajkndfkjasdnfkjsndfkjsndkjfnsadkjfdnksjdnfkjasndfkjdanskfjnasdkjfnsakjfnsanskfjnasdkjfnsakjfnsanskfjnasdkjfnsakjfnsanskfjnasdkjfnsakjfns
                                </div>
                                <div className="text-sm f3t">
                                    benalfred@ddd.com jkandsfjksnkjdfnsajkndfkjasdnfkjsndfkjsndkjfnsadkjfdnksjdnfkjasndfkjdanskfjnasdkjfnsakjfns
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/5 flex flex-row gap-2 text-white p-2">
                        <div className="w-1/2 text-center text-3xl flex flex-col justify-center bg-green-700">
                            ✓
                        </div>
                        <div className="w-1/2 text-center text-3xl flex flex-col justify-center bg-red-700">
                            x
                        </div>
                    </div>
                </div>
            );
        }
        return productList;
    }
    return (
        <>
            <HeaderComp />
                    <div className="rounded-sm text-center bg-primary-color w-full text-white text-lg p-2 mx-auto md:w-2/3 lg:w-1/2 m-2">Customer Purchase List</div>
            <div className="flex flex-col w-full  sm:px-10 md:px-20 lg:px-30 xl:px-40 gap-2 poppins pb-4">
                {showProd()}
            </div>
        </>
    )

}

export default YourCustomerPage;