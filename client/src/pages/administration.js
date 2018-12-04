import React, {Component} from 'react';
import UserCard from '../components/usercard'
import axios from 'axios'
import Navigation from '../components/nav';


export default class Administration extends Component{
    state = {
        allUsers: []
    }
    componentDidMount(){
        this.getUsers();
    }
    getUsers = () =>{
        axios.get('/users')
        .then(response => {
            console.log(response.data);
            this.setState({
                allUsers:response.data
            })
        })
      }
    
    renderUsers = () => {
            return this.state.allUsers.map((user,index)=>{
                return(
                    <div>{user.username}</div>
                )
            })
    }
    render(){
        return(
            <div>
            <Navigation showModal={this.props.showModal}/>
            <div>{this.renderUsers()}</div>
            </div>
        )
    }
}