import '../styles/editlisting.css'

function FormLabelComp(props) {
    var formshow;

    function chooseFormType() {
        if (props.typeform == "formT") {
            return (
                <input type="text" className="formInputStyle"></input>
            )
        }
        else if (props.typeform == "formnumT") {
            return (
                <input type="number" className="formInputStyle" min={0}></input>
            )
        }
        else {
            return (
                <textarea className='formTextAreastyle'></textarea>
            )
        }
    }

    return (
        <div className = "formContMarg">
            <div className='formNamestyle'>
                {props.formName}
            </div>
            <div>
                {chooseFormType()}
                
            </div>
        </div>

    )
}

export default FormLabelComp