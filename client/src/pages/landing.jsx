import React from 'react';
import Nav from '../components/nav';
import Modal from '../components/modal'


const Landing = props => (
    <div>
    <Nav/>
    {/* <PasswordModal/> */}
    <button className="btn btn-primary addVault" type="button" onClick={this.showModal}>Add To Vault</button>
    <button className="btn btn-primary"> View Vault</button>
    </div>
)
    


export default Landing;