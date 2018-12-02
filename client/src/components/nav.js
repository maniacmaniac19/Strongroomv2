// import React from 'react';
// import '../components/nav.css';

// const Nav2 = props =>(
//     <nav className='navbar bg-primary'>
//     <h1 className = "slogan "><i className="fas fa-chess-rook"></i>Strongroom</h1>
//     <i className="far fa-plus-square" onClick={() => props.showModal()} id="triggerModal" ></i>
    

//     </nav>

// )

// export default Nav2;

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {navigate} from '@reach/router'
import Administration from '../pages/administration'

export default class Navigation extends React.Component {
    state = {
      isOpen: false
    };
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleAdmin = () =>{
      console.log('admin page');
      navigate('/adminstration')
  }
  logout = () => {
      console.log("logging out")
  }
  render() {
    return (
      <div>
        <Navbar className="navbar bg-primary" dark expand="md">
          <NavbarBrand  href="/"><h1 className = "slogan "><i className="fas fa-chess-rook"></i>Strongroom</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Settings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Change Password
                  </DropdownItem>
                  <DropdownItem onClick={() => this.handleAdmin()}>
                    Administration
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() =>this.logout()}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
