import React, {Component} from 'react';
import './secretcard.css'
import { UncontrolledCollapse, Card, CardBody } from 'reactstrap';
// import axios from 'axios';

export default class UserCard extends Component{
    constructor(props){
        super(props);
        this.state={
            
            
        }
    }
    render(){
        return(
            <div><Card>{this.props.renderUsers()}</Card></div>
        )
    }
    }
    


