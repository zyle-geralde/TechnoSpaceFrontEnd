
import HeaderComp from "../../YourProduct/components/header";
import ImageHolders from "../components/imageholders";
import '../styles/editlisting.css'
import FormFillComp from "../components/formfillcomp";
function EditLearningResourcesPage() {
    return (
        <>
            <div style={{ "height": "100vh", "overflowY":"hidden"}}>
                <HeaderComp />

                <div style={{"display":"flex","flexDirection":"column", "alignItems":"center"}}>
                    <div className="EditLrContainer">
                        <ImageHolders />
                        <FormFillComp/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditLearningResourcesPage;