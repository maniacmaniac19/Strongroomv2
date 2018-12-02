import React from 'react';
import Navigation from '../components/nav';
import Modal from '../components/modal'
import SecretCard from '../components/secretcard'

const Landing = props => (
    <div>
    <Navigation showModal={props.showModal}/>
    <Modal/>
    {/* <PasswordModal/> */}
    {props.secrets.map((element, index) =>(
        <SecretCard toggler={`secret${index}`} renderVault={props.showVault} key={element._id} name={element.name} password={element.password} URL={element.URL} username={element.username} owner={props.owner}/>
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

    <div className="block " id="stmt">
            <h4>In a time where compromises are everywhere and other kingdoms threaten your existence. Shield yourself by using better password techniques.</h4>
            <ul>
                    <li className="text-success animated fadeInLeft">
                            Longer passwords are better. An 8-character password can be cracked in about 5 hours whereas a 10-character password takes about 4 months. 
                    </li>
                    <li className="text-primary animated fadeInRight">
                            Avoid using birthdays or family members names as they could be harvested from social media accounts. 
                    </li>
                    <li className="text-success animated fadeInLeft">
                            Consider using multiple words to create a longer, more memorable passphrase. 
                    </li>
                    <li className="text-primary animated fadeInRight">
                            Use different passwords for each login. Don't repeat passwords especially in financial applications. 
                    </li>
                        <li className="text-success animated fadeInLeft">
                            Use multifactor authentication where available. 
                    </li>
            </ul>
    </div>


</div>
    </div>
)
    


export default Landing;