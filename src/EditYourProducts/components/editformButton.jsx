import '../styles/editlisting.css'
import React, { useRef } from "react";


function EditFormButton(props) {
  const modalRef = useRef(null);
  const modelSell = useRef(null);

    const handleShowModal = () => {
        if (modalRef.current) {
          window.$(modalRef.current).modal("show");
        }
    };
    const handleCloseModal = () => {
        if (modalRef.current) {
          window.$(modalRef.current).modal("hide");
        }
  };
  

    const handleShowModalsell = () => {
      if (modelSell.current) {
        window.$(modelSell.current).modal("show");
      }
    };
    const handleCloseModalsell = () => {
      if (modelSell.current) {
        window.$(modelSell.current).modal("hide");
      }
    };
  
    function chooseButton() {
        if (props.ButtonName === "Delete") {
            return(<div className='bg-red-500 text-center text-white w-full rounded-sm p-2' data-toggle="modal" data-target="#exampleModal" onClick={handleShowModal}>
                {props.ButtonName}
            </div>)
        }
        else if (props.ButtonName === "Cancel") {
            return(<div className='bg-red-500 text-center text-white w-full rounded-sm p-2'>
              {props.ButtonName}
            </div>)
        }
        else if (props.ButtonName === "Upload") {
            return(<div className='bg-green-800 text-center text-white w-full rounded-sm p-2' data-toggle="modal" data-target="#sellModal" onClick={handleShowModalsell}>
              {props.ButtonName}
            </div>)
        }
        else if (props.ButtonName === "Done") {
            return(<div className="bg-green-800 text-center text-white w-full rounded-sm p-2">
              {props.ButtonName}
            </div>)
        }
        else {
            return(<div className="bg-green-800 text-center text-white w-full rounded-sm p-2">
                {props.ButtonName}
            </div>)
        }
    }
    return (
        <>
        <div className='w-full'>
          {chooseButton()}
        </div>
            
            <div
        ref={modelSell}
        className="modal fade"
        id="sellModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="sellModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{"display":"flex","flexDirection":"row","justifyContent":"center"}}>
              <h5 className="modal-title" id="sellModalLabel" style={{"fontWeight":"bold","fontSize":"18px"}}>
                Sell
              </h5>
            </div>
            <div className="modal-body" style={{"display":"flex","flexDirection":"row","justifyContent":"center"}}>Are the information correct?</div>
            <div className="modal-footer" style={{"display":"flex","flexDirection":"row","justifyContent":"center"}}>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                aria-label="Close" onClick={handleCloseModalsell}
                style={{"backgroundColor":"white","borderStyle":"solid","borderWidth":"1px","borderColor":"black","color":"black"}}        
              >
                Cancel
              </button>
              <button type="button" className="btn" style={{"backgroundColor":"#800000c4","color":"white"}}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>


            <div
        ref={modalRef}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{"display":"flex","flexDirection":"row","justifyContent":"center"}}>
              <h5 className="modal-title" id="exampleModalLabel" style={{"fontWeight":"bold","fontSize":"18px"}}>
                Delete
              </h5>
            </div>
            <div className="modal-body">Are you sure you want to delete?</div>
            <div className="p-3 w-full flex gap-2">
              <button
                type="button"
                className="btn btn-secondary w-1/2  text-sm"
                data-dismiss="modal"
                aria-label="Close" onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-success w-1/2 text-sm">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

            
        </>
    )
}

export default EditFormButton;