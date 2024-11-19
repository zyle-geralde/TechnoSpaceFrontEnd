import '../styles/editlisting.css'
import React, { useRef } from "react";


function EditFormButton(props) {
    const modalRef = useRef(null);

    const handleShowModal = () => {
        if (modalRef.current) {
          // Use Bootstrap's modal method to show the modal
          window.$(modalRef.current).modal("show");
        }
      };

    
    function chooseButton() {
        if (props.ButtonName === "Delete") {
            return(<div className={props.classIndic} data-toggle="modal" data-target="#exampleModal" onClick={handleShowModal}>
                {props.ButtonName}
            </div>)
        }
        else {
            return(<div className={props.classIndic}>
                {props.ButtonName}
            </div>)
        }
    }
    return (
        <>
            {chooseButton()}

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
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">This is a dynamically triggered modal.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

            
        </>
    )
}

export default EditFormButton;