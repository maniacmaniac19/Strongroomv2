import React from 'react';
import Navigation from '../components/nav';
import LoginBlock from '../components/loginblock'
import Nav2 from '../components/nav2'


const Login = props => (
    <div>
      <Nav2 />
    <Navigation/>
    <div className='block'>
    <LoginBlock onLogin={props.onLogin} />
    </div>
  </div>
)

export default Login;