import "../styles/loginsignup.css"

function InputLogComp(props) {
    return <>
        <div className="forInpCont">
            <div className="form-floating mb-3">
                <input type={props.type} className={`form-control ${props.classinp}`} id="floatingInput" placeholder="xxx@xxx.com" />
                <label htmlFor="floatingInput">{ props.labelInp}</label>
            </div>
        </div>
    </>
}

export default InputLogComp