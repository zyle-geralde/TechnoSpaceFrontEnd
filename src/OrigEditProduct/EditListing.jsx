
import HeaderComp from "../YourProduct/components/header";
import '../EditYourProducts/styles/editlisting.css'
import BackComp from "../EditYourProducts/components/backcomp.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../../firebaseconf.js";
import { useState } from 'react'
import FormLabelOrg from "./FormLabelOrg.jsx";
import EditButtonOrg from "./EditButtonOrg.jsx";

function EditListing() {
    const navigate = useNavigate();

    const location = useLocation();
    const category = location.state.category;
    const allrep = location.state.resdata
    const [mainImage, setMainImage] = useState(allrep.mainImage)
    const [mainImageFile, setMainImageFile] = useState(null)
    const [nameProd, setNameprod] = useState(allrep.name)
    const [descriptionProd, setDescriptionprod] = useState(allrep.description)
    const [specializationProd, setSpecializationprod] = useState(allrep.specialization)
    const [scheduleProd, setScheduleprod] = useState(allrep.schedule)
    const [locationProd, setLocatinprod] = useState(allrep.location)
    const [priceProd, setPricprod] = useState(allrep.price)
    const [creatorProd, setCreatorprod] = useState(localStorage.getItem('email'))

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
    console.log(category)
    console.log("allrep", allrep)


    function navtoLearningResources() {
        if (category == "G") {
            navigate("/Gadgetsview")
        }
        else if (category == "SS") {
            navigate("/Schoolsuppliesview")
        }
        else if (category == "LR") {
            navigate("/Learningresourcesview")
        }
        else if (category == "O") {
            navigate("/Othersview")
        }
    }

    const handleDivClick = () => {
        document.getElementById("fileInput").click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            mainImagefunc(file, URL.createObjectURL(file))
        }
    };


    const editProduct = async (id, updatedProductData) => {
        try {
            const response = await axios.put(`https://localhost:7016/api/Products/${id}`, updatedProductData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error editing product:", error);
            throw error;
        }
    };

    const deleteProduct = async (productId) => {
        try {
          const response = await axios.delete(`https://localhost:7016/api/Products/${productId}`);
          console.log('Product deleted:', response.data);
        } catch (error) {
          console.error('There was an error deleting the product:', error);
        }
    };
    
    async function clickDel() {
        await deleteProduct(allrep.id)
        navtoLearningResources()
        window.location.reload()
    }

    async function clickSave() {
        console.log("clicked save")
        let downloadURL = mainImage;
        if (mainImage =="" || nameProd == "" || descriptionProd == "" || specializationProd == "" || scheduleProd == "" ||locationProd == "" || priceProd == "" || creatorProd == "") {
            alert("Invalid credentails")
            return
        }
        if (mainImageFile) {
            const storageRef = ref(storage, `images/${Date.now()}_${mainImageFile.name}`);

            await uploadBytes(storageRef, mainImageFile);
      
            downloadURL = await getDownloadURL(storageRef);
        }
        else {

        }
        var formData = {
            name: nameProd,
            description: descriptionProd,
            specialization: specializationProd,
            schedule: scheduleProd,
            location: locationProd,
            price: priceProd,
            creator: creatorProd,
            mainImage: downloadURL,
            category: allrep.category
        }
        try {
            const result = await editProduct(allrep.id, formData);
            navtoLearningResources()
            window.location.reload()
        } catch (error) {
            alert("Failed to update product. Check console for details.");
        }
    }

    return (
        <div className="h-screen">
            <HeaderComp />
            <div className="sm:px-10 md:px-20 lg:px-30 xl:px-40 pt-2 flex flex-col gap-2">
                <div className="p-2">
                    <BackComp onFunc={navtoLearningResources} />
                </div>
                <div className="EditLrContainer gap-2 flex flex-col xs:flex-row ">
                    <div className="w-full md:w-1/2 self-center">
                        <div className="flex flex-col gap-2 w-11/12 m-auto justify-center " onClick={handleDivClick}>
                            <img src={mainImage} />
                        </div>

                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className='w-1/2 flex flex-col gap-2'>
                        <FormLabelOrg formName="Title" typeform="formT" onfunc={nameProdfunc} defaultword={nameProd} />
                        <FormLabelOrg formName="Project Description" typeform="textT" onfunc={descriptionProdfunc} defaultword={descriptionProd} />
                        <FormLabelOrg formName="Project Specification" typeform="textT" onfunc={specializationProdfunc} defaultword={specializationProd} />
                        <FormLabelOrg formName="Available Schedule" typeform="textT" onfunc={scheduleProdfunc} defaultword={scheduleProd} />
                        <FormLabelOrg formName="Location" typeform="formT" onfunc={locationfunc} defaultword={locationProd} />
                        <FormLabelOrg formName="Price" typeform="formnumT" onfunc={pricefunc} defaultword={priceProd} />
                        <div className='flex flex-row w-full'>
                            <div className='flex flex-row w-full gap-2'>
                                <EditButtonOrg classIndic={"cancelBut"} ButtonName={"Delete"} clickedSave={clickDel} />
                                <EditButtonOrg classIndic={"doneBut"} ButtonName={"Save"} clickedSave={clickSave} />
                            </ div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditListing;