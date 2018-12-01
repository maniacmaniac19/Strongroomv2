import React from 'react';
import Nav from '../components/nav';
import Modal from '../components/modal'
import SecretCard from '../components/secretcard'

const Vault = props => (
    <div>
    <Nav/>
    <Modal/>
    {props.secrets.map((element, index) =>(
        <SecretCard toggler={`secret${index}`} renderVault={props.showVault} key={element._id} name={element.name} password={element.password} URL={element.URL} username={element.username} />
    )
    )}

    </div>

)

export default Vault;