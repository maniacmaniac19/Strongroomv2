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
        this.setState({
            userInput:this.props.username,
            
        })
    this.props.renderUsers()}
    render(){
        return(
            <div>
                <Card className="card">
            {this.userInput}
            </Card>
            </div>
        )
    }
}
