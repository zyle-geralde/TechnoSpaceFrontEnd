
import HeaderComp from "../../YourProduct/components/header";
import ImageHolders from "../components/imageholders";
import '../styles/editlisting.css'
import FormFillComp from "../components/formfillcomp";
import BackComp from "../components/backcomp";
function EditLearningResourcesPage() {
    return (
        <>
            <HeaderComp />
            <div style={{ "paddingTop": "90px" }}>
                <div style={{"marginLeft":"5%"}}>
                    <BackComp />
                </div>
                <div className="EditLrContainer">
                    <ImageHolders />
                    <FormFillComp />
                </div>
            </div>
        </>
    )
}

export default EditLearningResourcesPage;