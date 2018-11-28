import React from 'react';
import Nav from '../components/nav';
import Modal from '../components/modal'


const Landing = props => (
    <div>
    <Nav/>
    <Modal/>
    {/* <PasswordModal/> */}
    <button className="btn btn-primary addVault" type="button" onClick={() => props.showModal()}>Add To Vault</button>
    <button className="btn btn-primary"> View Vault</button>
    </div>
)
    


export default Landing;