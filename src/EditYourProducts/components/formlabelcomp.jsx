import '../styles/editlisting.css'

function FormLabelComp(props) {
    var formshow;

    function chooseFormType() {
        if (props.typeform == "formT") {
            return (
                <input type="text" className="formInputStyle w-full" ></input>
            )
        }
        else if (props.typeform == "formnumT") {
            return (
                <input type="number" className="formInputStyle w-full" min={0}></input>
            )
        }
        else {
            return (
                <textarea className='formTextAreastyle' ></textarea>
            )
        }
    }

    return (
        <div className="w-full">
            <div className='text-sm'>
                {props.formName}
            </div>
            <div>
                {chooseFormType()}
            </div>
        </div>

    )
}

export default FormLabelComp