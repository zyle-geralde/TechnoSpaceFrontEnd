import "../styles/viewproductstyle.css"
import HeaderComp from "../../YourProduct/components/header";

function ViewProductPage() {
    return <>
        <HeaderComp />
        <div className="divmain">
            <div className="contianmainProd">
                <div className="firstHalfprod">
                    <div className="mainImageCont">
                        <img src="./images/defaultImage.png" className="mainImage"></img>
                    </div>
                    <div className="subImageCont">
                        <div className="subImagesubCont">
                            <img src="./images/defaultImage.png" className="subImage"></img>
                        </div>
                        <div className="subImagesubCont">
                            <img src="./images/defaultImage.png" className="subImage"></img>
                        </div>
                        <div className="subImagesubCont">
                            <img src="./images/defaultImage.png" className="subImage"></img>
                        </div>
                        <div className="subImagesubCont">
                            <img src="./images/defaultImage.png" className="subImage"></img>
                        </div>
                    </div>
                </div>
                <div className="secondHalfprod">
                    <div className="prodTitle">
                        Long bond paper good product
                    </div>
                    <div className="prodPrice">
                        PHP 150
                    </div>
                    <div className="buttonGroupClass">
                        <div className="messageBut">
                            Message Seller
                        </div>
                        <div className="reportBut">
                            Report
                        </div>
                    </div>
                    <div className="containInfo">
                        <div style={{"fontWeight":"bold","marginTop":"10px"}}>Product Description</div>
                        <div className="ProdDesc">
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf


                        </div>
                        <div style={{"fontWeight":"bold","marginTop":"10px"}}>Product Specification</div>
                        <div className="ProdSpecification">
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf


                        </div>
                        <div style={{"fontWeight":"bold","marginTop":"10px"}}>Available Schedule</div>
                        <div className="AveSched">
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajfasjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnksajf

                        </div>
                        <div style={{"fontWeight":"bold","marginTop":"10px"}}>Location</div>
                        <div className="LocProd">
                            asjkdfnjksanfkjsndfkjsandkfjnasdkjfnasdjkfndaskjnk
                        </div>
                    </div>
                    <div className="PurchProd">Purchase Prodcut</div>
                </div>
            </div>
        </div>
    </>
}

export default ViewProductPage;