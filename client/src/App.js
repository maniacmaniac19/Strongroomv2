import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Login from './pages/login';
import Landing from './pages/landing';
import { Router } from "@reach/router";
import Modal from './components/modal';
import Vault from './pages/vault';
import { Animation } from "mdbreact";
import PasswordChange from './pages/passwordchange'
import Administration from './pages/administration'
import Admin from './pages/admin'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: '',
      isLoggedIn: false,
      firstLogin: true,
      isAdmin: false,
      user: {},
      show: false,
      secrets: [],
      username: '',
      allUsers: []
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
     username: user.username,
     firstLogin: user.firstLogin,
    isAdmin: user.isAdmin
   });
   console.log(this.state)
 }

 getUsers = () =>{
  console.log("Get Users is running from app.js"); 
  axios.get('/users')
  .then(response => {
    console.log("Get Users response")
    console.log(response.data)
   this.setState({
     allUsers: response.data
   });
   console.log(this.state.allUsers)
  })
}


 showVault = (user) =>{
  console.log('USER IN APP.JS ', user)
 axios.post('/owner/secrets', {owner:user})
 .then(response =>{
  this.setState({
    secrets: response.data
  });
  //  
 })
}

hideContent = () =>{
  console.log('hiding content');
  document.getElementById('main-body').style.display = 'none'
}
 

  render() {

    let route;

    if (this.state.isLoggedIn && this.state.firstLogin) {
      route = <PasswordChange path='/' username={this.state.username} isAdmin={this.state.isAdmin}/>

    } else if(this.state.isLoggedIn && !this.state.firstLogin) {
      route = <Landing path='/' isAdmin={this.state.isAdmin} showModal={this.showModal} hideContent={this.hideContent} showVault={this.showVault} secrets={this.state.secrets} owner={this.state.username}/>;
    }
    else if(!this.state.isLoggedIn && this.state.firstLogin){
      route = <Login path = '/' onLogin={this.onLogin } isAdmin={this.state.isAdmin}/>
    }

    return (
      <div className="App">
      <Animation type="bounceInDown">
        <Modal show={this.state.show} handleClose={this.hideModal} hideContent={this.hideContent} username={this.state.username} togglePassword={this.showhidepassword} handleAdd={this.vaultAdd} showVault={this.showVault} owner={this.state.username}>
        
        </Modal>
        </Animation> 
        <Router>
          <Vault path='/secrets' showModal={this.showModal} showVault={this.showVault} isAdmin={this.state.isAdmin} secrets={this.state.secrets}/>
          <Admin path='/administration' showModal={this.showModal} getUsers={this.getUsers} isAdmin={this.state.isAdmin} allUsers={this.state.allUsers}
          secrets={this.state.secrets} showVault={this.showVault} hideContent={this.hideContent}
          />
          <PasswordChange path='/password' isAdmin={this.state.isAdmin} username={this.state.username}/>
          <Landing path='/home'secrets={this.state.secrets} showVault={this.showVault} isAdmin={this.state.isAdmin} showModal={this.showModal} hideContent={this.hideContent}  />
          {/* <Redirect from ='/' to ='/login'/> */}
          {route}
        </Router>

      </div>
    );
  }
}

export default App;
