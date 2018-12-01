import React from 'react';
import Nav from '../components/nav';
import LoginBlock from '../components/loginblock'


const Login = props => (
    <div>
    <Nav/>
    <LoginBlock onLogin={props.onLogin} />
  </div>
)

export default Login;