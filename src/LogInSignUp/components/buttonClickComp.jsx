import "../styles/loginsignup.css"

function ButtonClickComp(props) {
    return <div className={props.customWidth}>
        <div className={props.classBut} onClick={props.onFunc}>
            {props.titleBut}
        </div>
    </div>
}
export default ButtonClickComp