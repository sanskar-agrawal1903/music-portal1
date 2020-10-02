import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
    //we can also make use of another property supported by modal like
    //onRequestClose which closes the model whenever the esc key is pressed or whenever the user clicks outside the modal
    //we need to pass the function for making it working
    return(
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="selectedOption"
            onRequestClose={props.clearSelectedOption}
            closeTimeoutMS={200}
            //this attribute is for styling the inner html of the modal
            className="modal"
        >
            <h2 className="modal__title">Selected Option</h2>
            <p className="modal__body">{props.selectedOption}</p>
            <button className="button" onClick={props.clearSelectedOption}>Close it</button>
        </Modal>
    )
}

export default OptionModal;