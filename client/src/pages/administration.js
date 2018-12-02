import React, {Component} from 'react';
import Navigation from '../components/nav'
import UserCard from '../components/usercard'


export default class Administration extends Component{
    constructor(props){
        super(props)
    this.state = {}
    }
    componentDidMount(){
        console.log('navigation mounted!');
        console.log(this.props.getUsers)
        this.props.getUsers();
        console.log("can i store the users")
        console.log(this.props.getUsers)
    }
    

render(){
    return(
        <div>
            <Navigation showModal={this.props.showModal} />
            This is the administrator page!
            
            <UserCard />
            
        </div>
    )
}
}