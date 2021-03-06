import React, {Component} from 'react';
import Navigation from '../components/nav'
import PasswordChangeModal from '../components/passwordchangemodal'


export default class PasswordChange extends Component{
    
    render(){
        return(
            <div>
                <Navigation isAdmin={this.props.isAdmin}/>
                <PasswordChangeModal username={this.props.username}/>
            </div>
        )}
}