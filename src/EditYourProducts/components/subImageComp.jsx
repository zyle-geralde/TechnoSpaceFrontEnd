import '../styles/editlisting.css'
import { useState } from 'react';
import SubImageFitComp from './subimageFitComp';

function SubImageComp() {
    var [defaultImg, setdefaultImg] = useState("./images/defaultImage.png")
    var [showImage,setshowImage] = useState(["./images/defaultImage.png","./images/defaultImage.png","./images/defaultImage.png","./images/defaultImage.png"])
    
    return (
        <div className='flex flex-row justify-center gap-2'>
            {
                showImage.map((item, index) => (
                    <SubImageFitComp defaultImgProp={item} key={ index} />
                ))
            }
        </div>
    )
}

export default SubImageComp;