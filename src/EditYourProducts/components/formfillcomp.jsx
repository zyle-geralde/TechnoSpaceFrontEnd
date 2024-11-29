import '../styles/editlisting.css'
import FormLabelComp from './formlabelcomp'
import EditFormButton from './editformButton'
function FormFillComp(props) {

    function checkFromEdit() {
        if (props.fromEdit === "Yes") {
            return (
                <div className='flex flex-row w-full gap-2'>
                    <EditFormButton classIndic={"cancelBut"} ButtonName={"Delete"} />
                    <EditFormButton classIndic={"doneBut"} ButtonName={"Save"} />
                </ div>
            )
        }
        else {
            return (
                <div className='flex flex-row w-full gap-2'>
                    <EditFormButton classIndic={"cancelButsend"} ButtonName={"Cancel"} />
                    <EditFormButton classIndic={"doneButsend"} ButtonName={"Upload"} />
                </div>
            )
        }
    }
    return (
        <div className='w-1/2 flex flex-col gap-2'>
            <FormLabelComp formName="Title" typeform="formT" />
            <FormLabelComp formName="Project Description" typeform="textT" />
            <FormLabelComp formName="Project Specification" typeform="textT" />
            <FormLabelComp formName="Available Schedule" typeform="textT" />
            <FormLabelComp formName="Location" typeform="formT" />
            <FormLabelComp formName="Price" typeform="formnumT" />
            <div className='flex flex-row w-full'>
                {checkFromEdit()}
            </div>

        </div>
    )
}

export default FormFillComp