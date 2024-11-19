import '../styles/editlisting.css'
import FormLabelComp from './formlabelcomp'
import EditFormButton from './editformButton'
function FormFillComp() {
    return (
        <div style={{"marginLeft":"50px"}}>
            <FormLabelComp formName="Title" typeform = "formT"/>
            <FormLabelComp formName="Project Description" typeform="textT" />
            <FormLabelComp formName="Project Specification" typeform="textT" />
            <FormLabelComp formName="Available Schedule" typeform="textT" />
            <FormLabelComp formName="Location" typeform="formT" />
            <FormLabelComp formName="Price" typeform="formnumT" />
            <div style={{ "display": "flex", "flexDirection": "row","marginTop":"20px"}}>
                <EditFormButton classIndic={"cancelBut"} ButtonName={"Cancel"} />
                <EditFormButton classIndic={"doneBut"} ButtonName={"Done"}/>
            </div>
        </div>
    )
}

export default FormFillComp