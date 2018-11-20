import React, {Component} from 'react';
import Nav from '../components/nav';


const Login = props => (
    <div>
    <Nav/>
    <form>
      <label>Username:</label>
      <input value = {props.loginName} changeHandler = {this.changelogin}type="name" className="userName"></input><br /><br />
      <label>Password:</label>
      <input type="password" className="password" changeHandler = {this.changePassword}></input>   <br /> <br />
      <button onClick={props.clickHandler} >Log In</button>
    </form>
  </div>
)

export default Login;