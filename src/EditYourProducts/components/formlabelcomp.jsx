import '../styles/editlisting.css'

function FormLabelComp(props) {
    return (
        <div>
            <div className='formNamestyle'>
                {props.formName}
            </div>
            <div>
                <input type="text" className="formInputStyle"></input>
            </div>
        </div>

    )
}

export default FormLabelComp