import '../styles/editlisting.css'

function SubImageFitComp(props) {
    return (
        <div className='flex flex-col'>
            <img src={props.defaultImgProp} className='rounded-sm'/>
        </div>
    )
}
export default SubImageFitComp;