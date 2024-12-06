import "../styles/loginsignup.css"

function ButtonClickComp(props) {
    return <>
        <div className={ props.classBut} onClick={props.onFunc}>
            {props.titleBut}
        </div>
    </>
}
export default ButtonClickComp