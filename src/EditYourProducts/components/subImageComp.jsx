import '../styles/editlisting.css'
import { useState } from 'react';
import SubImageFitComp from './subimageFitComp';

function SubImageComp() {
    var [defaultImg, setdefaultImg] = useState("./images/defaultImage.png")
    
    return (
        <div style={{ "display": "flex", "flexDirection":"column","alignItems":"center"}}>
            <div className='subImageCont'>
                <SubImageFitComp defaultImgProp={defaultImg} />
                <SubImageFitComp defaultImgProp={defaultImg}/>
                <SubImageFitComp defaultImgProp={defaultImg}/>
                <SubImageFitComp defaultImgProp={defaultImg}/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SubImageComp;