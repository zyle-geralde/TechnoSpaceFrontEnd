import '../../YourProduct/style/yourProductlist.css'

function BackComp(props) {
    return (
        <img src="./images/back.png" className='backButton' onClick={props.onFunc}></img>
    )
}
export default BackComp