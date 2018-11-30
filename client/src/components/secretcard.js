import React, {Component} from 'react';
import './secretcard.css'
import { UncontrolledCollapse, Card, CardBody } from 'reactstrap';

export default class SecretCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameInput: '',
            urlInput: '',
            usernameInput: '',
            passwordInput: '',
            collapse: false
        }
        
    }
    toggle = (event) => {
        event.preventDefault()
        console.log('toggling')
        this.setState({ collapse: !this.state.collapse });
    }

    handleInputChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
            
        });
        console.log(this.state)
    }

    updateEntry = (event) =>{
        event.preventDefault();
        console.log('event button clicked')
    }
    showhidepassword = (event) => {
        event.preventDefault();
        console.log('show/hide password')
        let pwd = document.getElementById('entryPassword').type
        if (pwd === ('password')){
          document.querySelector('.pwd').type = 'text'
        } else{
          document.querySelector('.pwd').type = 'password'
        }
      }

        render(){
            return(
                
                <div >
                
                <Card className="card">
        {/* <Panel> */}
        <div className="card-header"><h4  onClick={this.toggle} id={this.props._id} className="panel-title">{this.props.name}</h4></div>
        <UncontrolledCollapse toggler={this.props._id}>
        <CardBody className="card-body">
        <div >

            <div className="form-group">
                <label className="col-form-label col-form-label-sm" for="inputSmall">URL:</label>
                <input name={this.state.urlInput}class="form-control form-control-sm" onChange={this.handleInputChange} type="text" value={this.props.URL}></input>
            </div>

            <div className="form-group">
                <label className="col-form-label col-form-label-sm" for="inputSmall">Username</label>
                <input name={this.state.usernameInput} className="form-control form-control-sm inputSmall "type="text" onChange={this.handleInputChange} value={this.props.username}></input>
            </div>
            <div className="form-group pwdToggle">
                <label className="col-form-label col-form-label-sm" for="inputSmall">Password</label><br/>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="far fa-eye showPwd" onClick={this.showhidepassword}><br/></i></span>
                        <input name={this.state.passwordInput} className="form-control form-control-sm pwd"  type="password" onChange={this.handleInputChange} value={this.props.password}></input>
        
                    </div>
                    </div>
                </div>
                </div>       
        
                <div className="row">
                    <div className="col-1">
                        <button className="btn btn-primary updatePwd" onClick={(event) => this.updateEntry}>Update</button>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-primary deletePwd" >Delete</button>
                    </div>
                </div>
            
            </CardBody>
            </UncontrolledCollapse>
        
                </Card>
        {/* </Panel> */}
    </div>
    
            )
        }

    }