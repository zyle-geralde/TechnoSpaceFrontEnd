import '../styles/editlisting.css'

function SubImageFitComp(props) {
    return (
        <div style={{"display":"flex","flexDirection":"column","alignItems":"center"}}>
            <div className='subImageFit'>
                <img src={props.defaultImgProp} className='subImage'></img>
            </div>
            <div className='addsubImage'>
                +
            </div>
        </div>
    )
}
export default SubImageFitComp;