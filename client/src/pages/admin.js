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
    
    
<div id="main-body">
<div className="row justify-content-around">
            <div className="col-4 block">
                    <button className="btn btn-primary btn-lg btn-block addVault" onClick={() => props.showModal()}>Add to Vault</button>
            </div>
            <div className="col-4 block">
                   <button className="btn btn-primary btn-lg btn-block" id="showVault" onClick={(event)=>{event.preventDefault(); props.showVault(props.owner);props.hideContent()}}>View Vault</button>
            </div>
    </div>

    


</div>
    </div>
)
    


export default Admin;