import '../styles/editlisting.css'
import FormLabelComp from './formlabelcomp'
import EditFormButton from './editformButton'
import { useState } from 'react'
import ImageHolders from './imageholders'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../../../firebaseconf.js";

function FormFillComp(props) {
    const navigate = useNavigate();
    const [mainImage, setMainImage] = useState("")
    const [mainImageFile,setMainImageFile]= useState(null)
    const [nameProd, setNameprod] = useState("")
    const [descriptionProd, setDescriptionprod] = useState("")
    const [specializationProd, setSpecializationprod] = useState("")
    const [scheduleProd, setScheduleprod] = useState("")
    const [locationProd, setLocatinprod] = useState("")
    const [priceProd, setPricprod] = useState("")
    const [creatorProd, setCreatorprod] = useState(localStorage.getItem('email'))
    const location = useLocation();
    const category = location.state.category;

    function backtoListing() {
        navigate("/SellListingView")
        window.location.reload()
    }

    
    function mainImagefunc(file, src) {
        setMainImageFile(file)
        setMainImage(src)
    }
    function nameProdfunc(string) {
        setNameprod(string)
    }
    function descriptionProdfunc(string) {
        setDescriptionprod(string)
    }
    function specializationProdfunc(string) {
        setSpecializationprod(string)
    }
    function scheduleProdfunc(string) {
        setScheduleprod(string)
    }
    function locationfunc(string) {
        setLocatinprod(string)
    }
    function pricefunc(string) {
        setPricprod(string)
    }

    console.log(mainImageFile)

    console.log(nameProd)
    console.log(descriptionProd)

    console.log(specializationProd)
    console.log(scheduleProd)

    console.log(locationProd)
    console.log(priceProd)
    console.log(creatorProd)


    async function submitme() {
        if (!mainImageFile || nameProd == "" || descriptionProd == "" || specializationProd == "" || scheduleProd == "" ||locationProd == "" || priceProd == "" || creatorProd == "") {
            alert("Invalid credentails")
        }
        else {
            
            try {

                const storageRef = ref(storage, `images/${Date.now()}_${mainImageFile.name}`);

                await uploadBytes(storageRef, mainImageFile);
          
                const downloadURL = await getDownloadURL(storageRef);
                setMainImage(downloadURL);

                const payload = {
                    "Name": nameProd,
                    "Description": descriptionProd,
                    "Specialization": specializationProd,
                    "Schedule": scheduleProd,
                    "Location": locationProd,
                    "Price": priceProd,
                    "Creator": creatorProd,
                    "MainImage": `${downloadURL}`,
                    "Category":category
                }
                const res = await axios.post("https://localhost:7016/api/Products", payload);
                console.log(res)
                backtoListing()

            }
            catch (error) {
                console.error("Error uploading product:", error);
                alert("Failed to upload product.");
            }
        }
    }

    

    function checkFromEdit() {
        if (props.fromEdit === "Yes") {
            return (
                <div className='flex flex-row w-full gap-2'>
                    <EditFormButton classIndic={"cancelBut"} ButtonName={"Delete"} />
                    <EditFormButton classIndic={"doneBut"} ButtonName={"Save"} />
                </ div>
            )
        }
        else {
            return (
                <div className='flex flex-row w-full gap-2'>
                    <EditFormButton classIndic={"cancelButsend"} ButtonName={"Cancel"} />
                    <EditFormButton classIndic={"doneButsend"} ButtonName={"Upload"} onclickme={submitme} />
                </div>
            )
        }
    }
    return (
        <>
        <div className="w-full md:w-1/2 self-center">
                <ImageHolders onSave={ mainImagefunc} />
        </div>
        <div className='w-1/2 flex flex-col gap-2'>
            <FormLabelComp formName="Title" typeform="formT" onfunc={ nameProdfunc} />
            <FormLabelComp formName="Project Description" typeform="textT" onfunc={descriptionProdfunc}/>
            <FormLabelComp formName="Project Specification" typeform="textT" onfunc={specializationProdfunc}/>
            <FormLabelComp formName="Available Schedule" typeform="textT" onfunc={scheduleProdfunc} />
            <FormLabelComp formName="Location" typeform="formT" onfunc={locationfunc} />
            <FormLabelComp formName="Price" typeform="formnumT" onfunc={pricefunc} />
            <div className='flex flex-row w-full'>
                {checkFromEdit()}
            </div>

        </div>
        </>
    )
}

export default FormFillComp