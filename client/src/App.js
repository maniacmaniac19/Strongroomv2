import React, {Component} from 'react';
import './App.css';
// import axios from 'axios';
import Login from './pages/login';
import Landing from './pages/landing';
import { Router, Link, Redirect } from "@reach/router";


// const App = () => (
//   <div> 
    
//     <Router>
//           <Landing path="/landing" />
//           <Login path="/login" />
//         </Router>
//   </div>
// );
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: '',
      isLoggedIn: false,
      user: {}
    };
    this.onLogin = this.onLogin.bind(this);
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

  render() {

    let route;

    if (this.state.isLoggedIn) {
      route = <Landing path='/' />;

    } else {
      route = <Login path = '/' onLogin={this.onLogin} />
    }
    return (
      <div className="App">
        {/* <Login /> */}
        
        <Router>
          {/* <Redirect from ='/' to ='/login'/> */}
          {route}
        </Router>

      </div>
    );
  }
}

export default App;
