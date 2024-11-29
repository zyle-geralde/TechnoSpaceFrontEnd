
import HeaderComp from "../../YourProduct/components/header";
import ImageHolders from "../../EditYourProducts/components/imageholders";
import '../../EditYourProducts/styles/editlisting.css'
import FormFillComp from "../../EditYourProducts/components/formfillcomp";
import BackComp from "../../EditYourProducts//components/backcomp";
import { useNavigate } from "react-router-dom";
function SellProductsInListing() {
    const navigate = useNavigate();
    function navtoBack() {
        navigate("/SellListingView")
    }
    return (
        <>
            <HeaderComp />
            <div className="ContadjustTop">
                <div style={{"marginLeft":"5%"}}>
                    <BackComp onFunc={navtoBack} />
                </div>
                <div className="EditLrContainer">
                    <ImageHolders />
                    <FormFillComp fromEdit={"No"} />
                </div>
            </div>
        </>
    )
}

export default SellProductsInListing;