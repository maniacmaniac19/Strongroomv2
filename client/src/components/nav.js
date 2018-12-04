

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
import './nav.css';
// import Administration from '../pages/administration'

export default class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      isAdmin: this.props.isAdmin
    };
  }
  
  // componentDidMount()(
  //  if {this.props.isAdmin} ? console.log("true"): console.log('false')
  // )

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  changePassword = () => {
      console.log('change password')
      navigate('/password')
  }
  handleAdmin = () =>{
      console.log('admin page');
      navigate('/administration')
  }
  logout = () => {
      console.log("logging out")
      navigate('/')
  }
  render() {
    let administrationItem;
    console.log('in the navbar', this.props.isAdmin)
    if(this.props.isAdmin){
      administrationItem =
      <DropdownItem onClick={() => this.handleAdmin()}>Administration</DropdownItem>
    }else{
      administrationItem =
      <DropdownItem disabled onClick={() => this.handleAdmin()}>
        Administration
      </DropdownItem>
    }



      
      
    return (
      <div>
        <Navbar className="navbar bg-primary" dark expand="md">
          <NavbarBrand  href="/home"><h1 className = "slogan "><i className="fas fa-chess-rook"></i>Strongroom</h1></NavbarBrand>
          <i className="far fa-plus-square" onClick={() => this.props.showModal()} id="triggerModal" ></i>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Settings
                </DropdownToggle>
                <DropdownMenu className='dropdownMenu' left>
                  <DropdownItem onClick={() => this.changePassword()}>
                    Change Password
                  </DropdownItem>
                {administrationItem}
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
