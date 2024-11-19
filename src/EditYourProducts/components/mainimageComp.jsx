import '../styles/editlisting.css'
import { useState } from 'react'

function MainImageComp() {

    var [defaultImg,setdefaultImg] = useState("./images/defaultImage.png")
    return (
        <div style={{ "display": "flex", "flexDirection":"column","alignItems":"center"}}>
            <div className="MainimageFit">
                <img src={defaultImg} className='mainImage'></img>
            </div>
            <div className='addMainPhotoBut'>
                + Add Main Photo
            </div>
        </div>
    )
}

export default MainImageComp