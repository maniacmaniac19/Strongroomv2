import React from 'react';
import Nav from '../components/nav';
import Modal from '../components/modal'
import SecretCard from '../components/secretcard'

const Landing = props => (
    <div>
    <Nav/>
    <Modal/>
    {/* <PasswordModal/> */}
    {props.secrets.map(element =>(
        <SecretCard key={element._id} name={element.name} password={element.password} URL={element.URL} username={element.username} />
    )
    )}
    <button className="btn btn-primary addVault" type="button" onClick={() => props.showModal()}>Add To Vault</button>
    <button className="btn btn-primary" onClick={props.showVault} > View Vault</button>
    </div>
)
    


export default Landing;