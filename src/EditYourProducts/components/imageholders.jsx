import MainImageComp from "./mainimageComp";
import SubImageComp from "./subImageComp";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ImageHolders(props) {
    const location = useLocation();
    const allrep = location.state.resdata
    var [defaultImg, setdefaultImg] = useState("./images/defaultImage.png")
    const [selectedFile, setSelectedFile] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setdefaultImg(URL.createObjectURL(file))
            props.onSave(file,URL.createObjectURL(file))
        }
    };

    if (allrep) {
        setdefaultImg(allrep.mainImage)
    }

    const handleDivClick = () => {
        document.getElementById("fileInput").click();
    };
    return (
        <>
            <div className="flex flex-col gap-2 w-11/12 m-auto justify-center " onClick={handleDivClick}>
                <img src={defaultImg} />
            </div>

            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageChange}
            />
        </>
    )
}
export default ImageHolders;