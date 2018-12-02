import React, {Component} from 'react';
import './secretcard.css'
import { UncontrolledCollapse, Card, CardBody } from 'reactstrap';
// import axios from 'axios';

export default class UserCard extends Component{
    constructor(props){
        super(props)
        this.state={
            userInput:''
        }
    }
    componentDidMount(){
        console.log('usercard mounted')
        this.setState({
            usernameforCard:this.props.username,
            
        })
    this.props.renderUsers()}
    render(){
        return(
            <div>
                <p>blahblahblah</p>
                <Card className="card">
            {this.usernameforCard}
            </Card>
            </div>
        )
    }
}
