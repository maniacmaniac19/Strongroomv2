import React from 'react';
import '../components/nav.css';

// const Nav2 = props =>(
//     <nav className='navbar bg-primary'>
//     <h1 className = "slogan "><i className="fas fa-chess-rook"></i>Strongroom</h1>
//     
    

//     </nav>

// )

// export default Nav2;
import { Navbar, NavbarBrand, } from 'reactstrap';
import {navigate} from '@reach/router'
// import Administration from '../pages/administration'

export default class Nav2 extends React.Component {
    state = {
      isOpen: false
    };
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  changePassword = () => {
      console.log('change password')
  }
  handleAdmin = () =>{
      console.log('admin page');
      navigate('/administration')
  }
  logout = () => {
      console.log("logging out")
  }
  render() {
    return (
      <div>
        <Navbar className="navbar bg-primary" dark expand="md">
          <NavbarBrand><h1 className = "slogan "><i className="fas fa-chess-rook"></i>Strongroom</h1></NavbarBrand>
          
              
          
        </Navbar>
      </div>
    );
  }
}