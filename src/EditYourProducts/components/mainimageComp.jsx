import '../styles/editlisting.css'
import { useState } from 'react'

function MainImageComp() {

    var [defaultImg,setdefaultImg] = useState("./images/defaultImage.png")
    return (
        <img src={defaultImg} />
    )
}

export default MainImageComp