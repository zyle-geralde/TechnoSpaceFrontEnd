import '../styles/editlisting.css'
import FormLabelComp from './formlabelcomp'
function FormFillComp() {
    return (
        <div style={{"marginLeft":"50px"}}>
            <FormLabelComp formName="Title" typeform = "formT"/>
            <FormLabelComp formName="Project Description" typeform="textT" />
            <FormLabelComp formName="Project Specification" typeform="textT" />
            <FormLabelComp formName="Available Schedule" typeform="textT" />
            <FormLabelComp formName="Location" typeform="formT" />
            <FormLabelComp formName="Price" typeform = "formnumT"/>
        </div>
    )
}

export default FormFillComp