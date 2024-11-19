import '../styles/editlisting.css'

function MainImageComp() {
    return (
        <div style={{ "display": "flex", "flexDirection":"column","alignItems":"center"}}>
            <div className="MainimageFit">
                <img src = "./images/sampleProduct.png" className='mainImage'></img>
            </div>
            <div className='addMainPhotoBut'>
                + Add Main Photo
            </div>
        </div>
    )
}

export default MainImageComp