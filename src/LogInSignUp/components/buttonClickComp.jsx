import "../styles/loginsignup.css"

function ButtonClickComp(props) {
    return <>
        <div className={ props.classBut}>
            {props.titleBut}
        </div>
    </>
}
export default ButtonClickComp