import HeaderComp from "../../YourProduct/components/header";
import "../style/yourcustomer.css"
import { useState } from "react";
function YourCustomerPage() {
    function showProd() {
        const productList = [];

        // Loop to generate product divs
        for (let ll = 0; ll < 20; ll++) {
            productList.push(
                <div key={ll} className="SorderCont">
                    <div className="firstHalf">
                        <div className="ImageProdCont">
                            <img src="../../../images/sampleProduct.png" className="productcImage" alt="Product" />
                        </div>
                        <div className="TextOverflow">
                            <div style={{ fontSize: "25px", fontWeight: "bold" }} className="f1t">
                                Bond Paper jkandsfjksnkjdfnsajkndfkjasdnfkjsndfkjsndkjfnsadkjfdnksjdnfkjasndfkjdanskfjnasdkjfnsakjfns
                            </div>
                            <div style={{ color: "gray", overflow: "hidden" }} className="f2t">
                                Ben alfred jkandsfjksnkjdfnsajkndfkjasdnfkjsndfkjsndkjfnsadkjfdnksjdnfkjasndfkjdanskfjnasdkjfnsakjfnsanskfjnasdkjfnsakjfnsanskfjnasdkjfnsakjfnsanskfjnasdkjfnsakjfns
                            </div>
                            <div style={{ fontWeight: "bold", overflow: "hidden" }} className="f3t">
                                benalfred@ddd.com jkandsfjksnkjdfnsajkndfkjasdnfkjsndfkjsndkjfnsadkjfdnksjdnfkjasndfkjdanskfjnasdkjfnsakjfns
                            </div>
                        </div>
                    </div>

                    <div className="secondHalf">
                        <div className="CheckMarkPurch">
                            ✓
                        </div>
                        <div className="RemoveMarkPurch">
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
            <div style={{
                "color": "#800000", "marginTop": "100px", "fontWeight": "bold", "fontSize": "30px", "display": "flex", 
                "flexDirection": "row", "justifyContent": "center","textAlign":"center"
            }}>
                Customer Purchase List
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center","marginBottom":"30px"}}>
                {showProd()}
            </div>
        </>
    )

}

export default YourCustomerPage;