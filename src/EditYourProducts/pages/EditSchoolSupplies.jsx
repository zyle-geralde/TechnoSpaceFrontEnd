
import HeaderComp from "../../YourProduct/components/header";
import ImageHolders from "../components/imageholders";
import '../styles/editlisting.css'
import FormFillComp from "../components/formfillcomp";
import BackComp from "../components/backcomp";
import { useNavigate } from "react-router-dom";
function EditSchoolSuplliesPage() {
    const navigate = useNavigate();
    function navtoBack() {
        navigate("/Schoolsuppliesview")
    }
    return (
        <>
            <HeaderComp />
            <div style={{ "paddingTop": "90px" }}>
                <div style={{"marginLeft":"5%"}}>
                    <BackComp onFunc={navtoBack} />
                </div>
                <div className="EditLrContainer">
                    <ImageHolders />
                    <FormFillComp />
                </div>
            </div>
        </>
    )
}

export default EditSchoolSuplliesPage;