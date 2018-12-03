import React, {Component} from 'react';
import Navigation from '../components/nav'
import UserCard from '../components/usercard'
import axios from 'axios'


export default class Administration extends Component{
    constructor(props){
        super(props)
    this.state = {
        allUsers: []
    }

    
    }
    getUsers = () =>{
        console.log("Get Users is running from app.js"); 
        axios.get('/users')
        .then(response => {
          console.log("Get Users response")
          console.log(response.data)
         this.setState({
           allUsers: response.data
         });
         console.log("State for all users7")
         const userMap =this.allUsers
         return userMap
        })
      }

    componentDidMount(){
        this.getUsers();
        // console.log('navigation mounted!');
        // console.log("this is the 1st thing", this.props.allUsers)
        // console.log("this is the 2nd thing", this.props.getUsers());
        // this.setState({
        //     allUsers: this.props.allUsers
        // })
        // this.props.getUsers();
        // console.log("this is the allusers state", this.state.allUsers)
        // console.log('this is the state')
        // console.log('this is the 3rd thing',this.state)
        // console.log("can i store the users")
        // console.log(this.props.getUsers())
    }

    
    

render(){
    console.log('in the render', this.state.allUsers)
    // let userMap = this.state.allUsers;
    // console.log(userMap)
//      let userMap =''
//      userMap = {allUsers.map((element, index)
//     <div>

// </div>}

// let userget= '';
// userGet = {this.getUsers.map()}
let userMap = this.state.allUsers;
userMap.map(user => 
    <hi key={this.props.index} user={this.props.username} />)
    return(
        <div>
            userMap.map(user => 
   <UserCard  key={this.props.index} user={this.props.username} />)
       
           
            {/* <Navigation showModal={this.props.showModal} /> */}
            {/* This is the administrator page! */}
            {/* {userMap.map(item => <p key ={item.name}>{item.name}</p>)} */}
            {/* <UserCard allUsers={this.state.allUsers} getUsers ={this.getUsers}/> */}
            
        </div>
    )
}
}