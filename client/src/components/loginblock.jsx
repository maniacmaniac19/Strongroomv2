import React, {Component} from 'react';
import axios from 'axios';




export default class LoginBlock extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
        }
    }

    passwordGrab(event) {
        console.log(event.target.value)
        this.setState({password: event.target.value})
    }

    usernameGrab(event) {
        console.log(event.target.value)
        this.setState({username: event.target.value})
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log('Step 1')
        axios.post('/login', (req, res) => {
            console.log("this is happening")
            console.log(req.body)
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({
            username: this.state.username,
            password: this.state.password
        });   
        console.log(this.state.username);
        console.log(this.state.password)
        
    }
    render(){
        return(
            <div>

                <form>
                    <label>Username:</label><br/>
                    <input type="username" value={this.state.username} onChange={(event) => this.usernameGrab(event)} /><br/><br/>
                    <label>Password:  </label><br/>
                    <input type="password" value={this.state.password} onChange={(event) => this.passwordGrab(event)} /><br/><br/>
                    <button onClick={(event)=>this.handleLogin(event)}>Login</button>
                </form>
            </div>
        )
    }
}

// (

// <div>
//     <form>
//     <label>Username:</label>
//     <input value = {props.loginName} changeHandler = {this.changelogin}type="name" className="userName"></input><br /><br />
//     <label>Password:</label>
//     <input type="password" className="password" changeHandler = {this.changePassword}></input>   <br /> <br />
//     <button onClick={props.clickHandler} >Log In</button>
//   </form>
//   </div>
// )
