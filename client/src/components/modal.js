import React from "react";
import ReactDOM from "react-dom";
import '../components/modal.css';



const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
        <label>TEST!:</label>
        <input name="name"></input>
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default Modal;
