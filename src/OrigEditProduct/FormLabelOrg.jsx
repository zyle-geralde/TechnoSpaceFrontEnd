import '../EditYourProducts/styles/editlisting.css'

function FormLabelOrg(props) {
    var formshow;

    const handleChange = (event) => {
        props.onfunc(event.target.value);
    };

    function chooseFormType() {
        if (props.typeform == "formT") {
            return (
                <input type="text" className="formInputStyle w-full formText" onChange={handleChange} value={props.defaultword}></input>
            )
        }
        else if (props.typeform == "formnumT") {
            return (
                <input type="number" className="formInputStyle w-full formText" min={0} onChange={handleChange} value={props.defaultword}></input>
            )
        }
        else {
            return (
                <textarea className='formTextAreastyle formText' onChange={handleChange} value={props.defaultword}></textarea>
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

export default FormLabelOrg