import '../styles/editlisting.css'
import React, { useRef } from "react";


function EditFormButton(props) {
    const modalRef = useRef(null);

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
                Delete
              </h5>
            </div>
            <div className="modal-body">Are you sure you want to delete?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                aria-label="Close" onClick={handleCloseModal}
                                
              >
                No
              </button>
              <button type="button" className="btn btn-primary">
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