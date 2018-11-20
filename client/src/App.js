import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import Nav from './components/nav';
import Login from './pages/login';

class App extends Component {
  state = {
    loginName : '',
    isLoggedIn : false
  }

  // axios.post('/user', {
  //   username: req.body.username,
  //   password: req.body.password
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
 
  render() {
    return (
      <div className="App">
      <Login/>
        
      </div>
    );
  }
}

export default App;
