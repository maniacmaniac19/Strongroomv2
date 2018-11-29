import React, {Component} from 'react';
import './App.css';
// import axios from 'axios';
import Login from './pages/login';
import Landing from './pages/landing';
import { Router, Link, Redirect } from "@reach/router";
import Modal from './components/modal';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: '',
      isLoggedIn: false,
      user: {},
      // modal: false,
      show: false
    };
    this.onLogin = this.onLogin.bind(this);
    this.showModal = this.showModal.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
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
 }

 generateNumber = event =>{
   event.preventDefault();
   console.log(Math.random().toString(36).slice(-10));
 }
 

  render() {

    let route;

    if (this.state.isLoggedIn) {
      route = <Landing path='/' showModal={this.showModal}/>;

    } else {
      route = <Login path = '/' onLogin={this.onLogin} />
    }
    return (
      <div className="App">
        {/* <Login /> */}
        <button type="button" onClick={this.showModal}>
          open
        </button>
        <Modal show={this.state.show} handleClose={this.hideModal} handleRandom={this.generateNumber} handleAdd={this.vaultAdd}>
        </Modal>
        <Router>
          {/* <Landing/> */}
          {/* <Redirect from ='/' to ='/login'/> */}
          {route}
        </Router>

      </div>
    );
  }
}

export default App;
