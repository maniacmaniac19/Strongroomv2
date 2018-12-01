import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Login from './pages/login';
import Landing from './pages/landing';
import { Router } from "@reach/router";
import Modal from './components/modal';
import Vault from './pages/vault';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: '',
      isLoggedIn: false,
      user: {},
      show: false,
      secrets: [],
      username: ''
    };
    this.onLogin = this.onLogin.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  vaultAdd = (props) => {
    console.log('Vault Add function works!')
  }

  showhidepassword = () => {
    console.log('show/hide password')
    let pwd = document.getElementById('entryPassword').type
    if (pwd === ('password')){
      document.getElementById('entryPassword').type = 'text'
    } else{
      document.getElementById('entryPassword').type = 'password'
    }
  }

  onChange(event){
    this.setState({
        [event.target.name]: event.target.value
    });
}

 changelogin = event => {
   event.preventDefault()
   console.log(this.state.loginName)
   this.setState({ loginName: event.target.value })
 }

 onLogin(user) {
   this.setState({
     isLoggedIn: true,
     username: user.username
   });
   console.log(this.state)
 }


 showVault = () =>{
  axios.get('/secrets')
  .then(response =>{
    this.setState({
      secrets: response.data
    })
  })
 }
 

  render() {

    let route;

    if (this.state.isLoggedIn) {
      route = <Landing path='/' showModal={this.showModal} showVault={this.showVault} secrets={this.state.secrets}/>;

    } else {
      route = <Login path = '/' onLogin={this.onLogin} />
    }
    return (
      <div className="App">
        <Modal show={this.state.show} handleClose={this.hideModal} username={this.state.username} togglePassword={this.showhidepassword} handleAdd={this.vaultAdd} showVault={this.showVault}>
        </Modal>
        <Router>
          <Vault path='/secrets' showModal={this.showModal} showVault={this.showVault} secrets={this.state.secrets}/>
          {/* <Landing/> */}
          {/* <Redirect from ='/' to ='/login'/> */}
          {route}
        </Router>

      </div>
    );
  }
}

export default App;
