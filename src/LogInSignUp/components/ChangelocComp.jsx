import "../styles/loginsignup.css"

function ChangeLocComp(props) {
    return <>
        <div className="changeLoc">
            {props.message} <a href={props.changelink} className="changeLocurl">{ props.indic}</a>
        </div>
    </>
}
export default ChangeLocComp

