import '../styles/editlisting.css'
import { useState } from 'react';

function SubImageComp() {
    var [defaultImg, setdefaultImg] = useState("./images/defaultImage.png")
    
    return (
        <div style={{ "display": "flex", "flexDirection":"column","alignItems":"center"}}>
            <div className='subImageCont'>
                <div>
                    <img src = ""></img>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SubImageComp;