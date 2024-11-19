import '../styles/editlisting.css'

function SubImageFitComp(props) {
    return (
        <div className='subImageFit'>
            <img src={props.defaultImgProp} className='subImage'></img>
        </div>
    )
}
export default SubImageFitComp;