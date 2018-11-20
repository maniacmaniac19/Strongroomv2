import React, {Component} from 'react';
import './App.css';
// import axios from 'axios';
import Login from './pages/login';
import Landing from './pages/landing';
import { Router, Link } from "@reach/router";


// const App = () => (
//   <div> 
    
//     <Router>
//           <Landing path="/landing" />
//           <Login path="/login" />
//         </Router>
//   </div>
// );
class App extends Component {
  state = {
    loginName: '',
    isLoggedIn: false
  }

 changelogin = event => {
   event.preventDefault()
   console.log(this.state.loginName)
   this.setState({ loginName: event.target.value })

 }

  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        
        <Router>
          <Landing path="/landing" />
          <Login path="/login" />
        </Router>

      </div>
    );
  }
}

export default App;
