import React, {Component} from 'react';
import Nav from '../components/nav';


const Login = props => (
    <div>
    <Nav/>
    <form>
        <label>Username:</label>
        <input type="name" className="userName"></input><br/><br/>
        <label>Password:</label>
        <input type="password" className ="password"></input>   <br/> <br/>
        <button>Log In</button>
    </form>
    </div>
)
    


export default Login;