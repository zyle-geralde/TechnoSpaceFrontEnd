import "../styles/viewproductstyle.css"
import HeaderComp from "../../YourProduct/components/header";

function ViewProductPage() {
    return <>
        <div className="divmain">
            <HeaderComp/>
            <div className="contianmainProd">
                <div className="firstHalfprod">
                    <div className="mainImageCont">
                        <img src = "./images/defaultImage.png" className="mainImage"></img>
                    </div>
                    <div className="subImageCont">
                        <div className="subImagesubCont">
                            <img src = "./images/defaultImage.png" className="subImage"></img>
                        </div>
                        <div className="subImagesubCont">
                            <img src = "./images/defaultImage.png" className="subImage"></img>
                        </div>
                        <div className="subImagesubCont">
                            <img src = "./images/defaultImage.png" className="subImage"></img>
                        </div>
                        <div className="subImagesubCont">
                            <img src = "./images/defaultImage.png" className="subImage"></img>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </>
}

export default ViewProductPage;