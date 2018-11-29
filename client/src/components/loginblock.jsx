import React, {Component} from 'react';
import axios from 'axios'





export default class LoginBlock extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleLogin = (event) => {
        event.preventDefault();
        
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post('/login', userData)
        .then(res => {
            this.props.onLogin(res.data);
        })
        .catch(err => console.log(err));
         
    }
    render(){
        return(
            <div>

                <form>
                    <label>Username:</label><br/>
                    <input type="text" name="username" value={this.state.username} onChange={this.onChange} /><br/><br/>
                    <label>Password:  </label><br/>
                    <input type="password" name="password" value={this.state.password} onChange={this.onChange} /><br/><br/>
                    <button className =" btn btn-primary" onClick={(event)=>this.handleLogin(event)}>Login</button>
                </form>
            </div>
        )
    }

}

// (

// <div>
//     <form>
//     <label>Username:</label>
//     <input value = {props.loginName} changeHandler = {this.changelogin}type="name" className="userName"></input><br /><br />
//     <label>Password:</label>
//     <input type="password" className="password" changeHandler = {this.changePassword}></input>   <br /> <br />
//     <button onClick={props.clickHandler} >Log In</button>
//   </form>
//   </div>
// )
