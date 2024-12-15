import "../styles/viewproductstyle.css"
import ReportButton from "../../ReportComponents/ReportButton";
import HeaderComp from "../../YourProduct/components/header";
import BackComp from "../../EditYourProducts/components/backcomp";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";

function ViewProductPage() {
    const modelSell = useRef(null);
    
    const handleShowModalsell = () => {
        if (modelSell.current) {
          window.$(modelSell.current).modal("show");
        }
      };
      const handleCloseModalsell = () => {
        if (modelSell.current) {
          window.$(modelSell.current).modal("hide");
        }
      };
    const navigate = useNavigate();

    function goback() {
        navigate("/BrowseProduct")
    }

    return <>
        <HeaderComp />
        <div style={{"position":"absolute","top":"60px","left":"30px"}}>
            <BackComp onFunc = {goback} />
        </div>

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
                    <div className="buttonGroupClass flex">
                        <div className="messageBut">
                            Message Seller
                        </div>
                        <ReportButton />
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
                    <div className="PurchProd" onClick={handleShowModalsell}>Purchase Product</div>
                </div>
            </div>
        </div>

        <div
        ref={modelSell}
        className="modal fade"
        id="sellModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="sellModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{"display":"flex","flexDirection":"row","justifyContent":"center"}}>
              <h5 className="modal-title" id="sellModalLabel" style={{"fontWeight":"bold","fontSize":"18px"}}>
                Confirm
              </h5>
            </div>
            <div className="modal-body" style={{"display":"flex","flexDirection":"row","justifyContent":"center"}}>Are you sure you want to buy?</div>
            <div className="modal-footer" style={{"display":"flex","flexDirection":"row","justifyContent":"center"}}>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                aria-label="Close" onClick={handleCloseModalsell}
                style={{"backgroundColor":"white","borderStyle":"solid","borderWidth":"1px","borderColor":"black","color":"black"}}        
              >
                Cancel
              </button>
              <button type="button" className="btn" style={{"backgroundColor":"#800000c4","color":"white"}}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default ViewProductPage;