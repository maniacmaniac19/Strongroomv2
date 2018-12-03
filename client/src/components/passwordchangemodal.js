import React, {Component} from 'react';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import { navigate } from "@reach/router"

export default class PasswordChangeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newPassword: '',
      confirmPassword: '',
      username: this.props.username,
      firstLogin: true
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    this.setState({
        modal: !this.state.modal
    });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange(event){
    this.setState({
        [event.target.name]: event.target.value
    });
}

changePassword = () =>{
    console.log('this is the username that is coming through in props')
    console.log(this.props.username)
    console.log('is username here');
    console.log(this.state)
    this.setState({
        newPassword: this.state.value,
        confirmPassword: this.state.value,
        username: this.props.username
        
    })
    console.log('username should be present')
    console.log(this.state);
    console.log(this.state.confirmPassword);
    if (this.state.newPassword === this.state.confirmPassword){
        
        let data = {
            password: this.state.newPassword,
            username: this.state.username,
            firstLogin: false
        }
        console.log("this is data")
        console.log(data)
        axios.put(`/password/${this.username}`, data)
        .then((res) => {
            this.setState({
                firstLogin: false
            })
            
            console.log("this is the state")
            console.log(this.state)
            this.toggle();
            // alert(res.status)
            navigate(`/home`)
        }).catch(err =>{
            console.log(err)
        })
    
        
    }else{
        console.log("no banana");
        document.getElementById('passwordAlert').style.display = 'block';
    }
}
    


  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Please change your password.</ModalHeader>
          <ModalBody>
          <Alert id='passwordAlert' className='warning' style={{display: 'none'}} color="warning">
        Passwords must match!
                </Alert>
                <Alert id='passwordlengthAlert' className='warning' style={{display: 'none'}} color="warning">
        Please enter a longer password.
                </Alert>
              <form>
                  <label>New password:</label><br/>
                  <input name='newPassword' type='text' className="form-control form-control-sm" onChange={this.onChange} value={this.state.newPassword}></input><br/><br/>
                  <label>Confirm password:</label><br/>
                  <input name='confirmPassword' type='text' className="form-control form-control-sm" onChange={this.onChange} value={this.state.confirmPassword}></input>
              </form>
              
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.changePassword}>Submit</Button>{' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


