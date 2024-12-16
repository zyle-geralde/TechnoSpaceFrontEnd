import "../styles/loginsignup.css"

function ChangeLocComp(props) {
    return <>
        <div className="changeLoc">
            {props.message} <a href={props.changelink} className="changeLocurl hover:text-red-950 transition-all">{ props.indic}</a>
        </div>
    </>
}
export default ChangeLocComp

