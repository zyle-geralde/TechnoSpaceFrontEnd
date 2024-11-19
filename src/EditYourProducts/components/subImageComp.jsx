import '../styles/editlisting.css'
import { useState } from 'react';
import SubImageFitComp from './subimageFitComp';

function SubImageComp() {
    var [defaultImg, setdefaultImg] = useState("./images/defaultImage.png")
    var [showImage,setshowImage] = useState(["./images/defaultImage.png","./images/defaultImage.png","./images/defaultImage.png","./images/defaultImage.png"])
    
    return (
        <div style={{ "display": "flex", "flexDirection":"column","alignItems":"center"}}>
            <div className='subImageCont'>
                {
                    showImage.map((item, index) => (
                        <SubImageFitComp defaultImgProp={item} key={ index} />
                    ))
                }
            </div>
            <div>

            </div>
        </div>
    )
}

export default SubImageComp;