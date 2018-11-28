import React from "react";
import ReactDOM from "react-dom";
import '../components/modal.css';



const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main modal-body">
        <h5>Add new entry</h5>
        <hr/>
                <div className="form-group">
                    <label className="col-form-label col-form-label-sm" for="nameInput">Name:</label>
                    <input type="text" className="form-control form-control-sm nameInput" placeholder="Name"></input>
                </div>
                <div className="form-group">
                    <label className="col-form-label col-form-label-sm" for="urlInput">URL:</label>
                    <input type="text" className="form-control form-control-sm urlInput" placeholder=""></input>
                </div>

                <div className="form-group pwdToggle">
                    <label className="col-form-label col-form-label-sm" for="inputSmall">Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="far fa-eye showPwd"></i></span>
                            <input className="form-control form-control-sm pwd" id="entryPassword" placeholder="Password" type="password"></input>
                        </div>
                    </div>
                </div>
                <div className='form-group'>             
            <input type="button" value="Generate" className="btn btn-primary btn-sm" id="generate"></input>
            </div> 
            <hr/>

          <button className= "btn btn-primary addbtn modalbtn"
        //    onClick={handleAdd}
           >Save Changes</button>
          <button className= "btn btn-primary closebtn modalbtn" onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  };

export default Modal;
