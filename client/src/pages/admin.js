import React from 'react';
import Navigation from '../components/nav';
import Modal from '../components/modal'
import SecretCard from '../components/secretcard'
import UserCard from '../components/usercard'






const Admin = props => (
    <div>
    <Navigation showModal={props.showModal} isAdmin={props.isAdmin}/>
    <Modal/>
    {/* <PasswordModal/> */}
    {/* {props.secrets.map((element, index) =>(
        <SecretCard toggler={`secret${index}`} renderVault={props.showVault} key={element._id} name={element.name} password={element.password} URL={element.URL} username={element.username} owner={props.owner}/>
    )
    )} */}
    {props.allUsers.map((element, index) =>(
        <div>User!
        <UserCard name={element.username} renderUsers={props.getUsers} />
        </div>
    )
        )} 

    </div>
)
    


export default Admin;