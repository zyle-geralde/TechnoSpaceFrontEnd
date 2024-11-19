
import HeaderComp from "../../YourProduct/components/header";
import ImageHolders from "../components/imageholders";
import '../styles/editlisting.css'
function EditLearningResourcesPage() {
    return (
        <>
            <div style={{ "height": "100vh", "overflowY":"hidden"}}>
                <HeaderComp />

                <div className="EditLrContainer">
                    <ImageHolders/>
                </div>
            </div>
        </>
    )
}

export default EditLearningResourcesPage;