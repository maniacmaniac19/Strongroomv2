import React from 'react';
import Navigation from '../components/nav';
import LoginBlock from '../components/loginblock'


const Login = props => (
    <div>
    <Navigation/>
    <div className='block'>
    <LoginBlock onLogin={props.onLogin} />
    </div>
  </div>
)

export default Login;