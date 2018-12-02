import React, {Component} from "react";
import '../components/modal.css';
import axios from "axios";


export default class Modal extends Component{
        state = {
            nameInput: '',
            urlInput: '',
            usernameInput: '',
            passwordInput: ''
        }

    handleInputChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
            
        });
    
    }

    generateNumber = event =>{
        event.preventDefault();
        this.setState({
          passwordInput:(Math.random().toString(36).slice(-10))
        })
       //  document.querySelector('#entryPassword').value = (Math.random().toString(36).slice(-10));
         
      }

    storeModalValues = () =>{
        console.log(this.props.username)
        let secretData ={
            name: this.state.nameInput,
            password: this.state.passwordInput,
            username: this.state.usernameInput,
            URL: this.state.urlInput,
            owner: this.props.username
        } 
        console.log(secretData)
        axios.post('/secrets', secretData)
    .then(res => {console.log(res);
        this.setState({
            nameInput: '',
            urlInput: '',
            usernameInput: '',
            passwordInput: ''
        }) 
        this.props.handleClose();
        this.props.hideContent();
        // navigate('/secrets')
        this.props.showVault(this.props.owner)
    })
        .catch(err => console.log(err));
    }




    
   render(){
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
        
        
        
        <div className={showHideClassName}>
          <section className="modal-main modal-body">
          <h5>Add new entry</h5>
          <hr/>
                  <div className="form-group">
                      <label className="col-form-label col-form-label-sm" >Name:</label>
                      <input type="text" name="nameInput" onChange={this.handleInputChange} className="form-control form-control-sm nameInput" value={this.state.nameInput} placeholder="Name"></input>
                  </div>
                  <div className="form-group">
                      <label className="col-form-label col-form-label-sm" >URL:</label>
                      <input type="text" name="urlInput" onChange={this.handleInputChange} className="form-control form-control-sm urlInput" value={this.state.urlInput} placeholder="URL"></input>
                  </div>
  
                  <div className="form-group">
                      <label className="col-form-label col-form-label-sm">Username:</label>
                      <input type="text" name="usernameInput" onChange={this.handleInputChange} className="form-control form-control-sm usernameInput" value={this.state.usernameInput} placeholder="Username"></input>
                  </div>
  
                  <div className="form-group pwdToggle">
                      <label className="col-form-label col-form-label-sm">Password</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="far fa-eye showPwd" onClick={this.props.togglePassword}></i></span>
                              <input className="form-control form-control-sm pwd" onChange={this.handleInputChange} name="passwordInput" id="entryPassword" value={this.state.passwordInput} placeholder="Password" type="password"></input>
                          </div>
                      </div>
                  </div>
                  <div className='form-group'>             
              <input type="button" value="Generate" className="btn btn-primary btn-sm" onClick={this.generateNumber} id="generate"></input>
              </div> 
              <hr/>
  
            <button className= "btn btn-primary addbtn modalbtn"
            //  onClick={this.props.handleAdd}
             onClick={this.storeModalValues}
             >Save Changes</button>
            <button className= "btn btn-primary closebtn modalbtn" onClick={this.props.handleClose}>Close</button>
          </section>
        </div>
     
       
      );
}}