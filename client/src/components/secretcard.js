import React, {Component} from 'react';
import './secretcard.css'
import { UncontrolledCollapse, Card, CardBody } from 'reactstrap';
import axios from 'axios';

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
        console.log(this.toggle);
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

    deleteEntry = () =>{
        console.log('delete button clicked');
        axios.delete(`/secrets/${this.props.name}`)
        .then(response =>{
    this.renderVault()
        }).catch(err =>{
            console.log(err)
        });
    }

    updateEntry = () =>{
        console.log('event button clicked')
        // TouchList
        let data = {
            name: this.props.name,
            password: this.state.passwordInput ? this.state.passwordInput : this.props.password,
            username: this.state.usernameInput ? this.state.usernameInput : this.props.username,
            URL: this.state.urlInput ? this.state.urlInput : this.props.URL
        }

        console.log(data)
        axios.put(`/secrets/${this.props.name}`, data)
        .then(() => {
            this.renderVault()
        }).catch(err =>{
            console.log(err)
        })
    }
    showhidepassword = (event) => {
        event.preventDefault();
        this.setState({
            showhidepassword:!this.state.showhidepassword
        })
      }

      renderVault = () =>{
          console.log('rendering');

        //   window.location.reload();
          this.props.renderVault();
          
      }

        render(){
            return(
                
                <div >
                
                <Card className="card">
        <div className="card-header"><h4  onClick={this.toggle} id={this.props.toggler} className="panel-title">{this.props.name}</h4></div>
        <UncontrolledCollapse toggler={this.props.toggler}>
        <CardBody className="card-body">
        <div >

            <div className="form-group">
                <label className="col-form-label col-form-label-sm" for="inputSmall">URL:</label>
                <input name="urlInput" className="form-control form-control-sm" onChange={this.handleInputChange} value={this.state.value} type="text"defaultValue={this.props.URL}></input>
            </div>

            <div className="form-group">
                <label className="col-form-label col-form-label-sm" for="inputSmall">Username</label>
                <input name="usernameInput" className="form-control form-control-sm inputSmall "type="text" value={this.state.value} onChange={this.handleInputChange} defaultValue={this.props.username}></input>
            </div>
            <div className="form-group pwdToggle">
                <label className="col-form-label col-form-label-sm" for="inputSmall">Password</label><br/>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="far fa-eye showPwd" onClick={this.showhidepassword}><br/></i></span>
                        <input name="passwordInput" className="form-control form-control-sm pwd" value={this.state.value} type={this.state.showhidepassword ? "text" : "password"} onChange={this.handleInputChange} defaultValue={this.props.password}></input>
        
                    </div>
                    </div>
                </div>
                </div>       
        
                <div className="row">
                    <div className="col-1">
                        <button className="btn btn-primary updatePwd" onClick={(event) => this.updateEntry()}>Update</button>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-primary deletePwd" onClick={(event) => this.deleteEntry()}>Delete</button>
                    </div>
                </div>
            
            </CardBody>
            </UncontrolledCollapse>
        
                </Card>
    </div>
    
            )
        }

    }