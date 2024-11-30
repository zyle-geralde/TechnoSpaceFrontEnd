
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
            <div  className="sm:px-10 md:px-20 lg:px-30 xl:px-40 pt-2 flex flex-col gap-2">
                <div className="p-2">
                    <BackComp onFunc={navtoBack} />
                </div>
                <div className="EditLrContainer gap-2 flex flex-col xs:flex-row">
                    <div className="w-full md:w-1/2 self-center">
                        <ImageHolders />
                    </div>
                    <FormFillComp fromEdit = "Yes" />
                </div>
            </div>
        </>
    )
}

export default EditSchoolSuplliesPage;