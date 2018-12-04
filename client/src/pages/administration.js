import React, {Component} from 'react';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import './admin.css';
import Navigation from '../components/nav';
import { navigate } from '@reach/router/lib/history';


export default class Administration extends Component{
    state = {
        allUsers: [],
        modal: false,
        newUser: '',
        newPassword: ''
    }
    componentDidMount(){
        this.getUsers();
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
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
    
    addUser = () =>{
        console.log("adding user");
        let userData={
            username: this.state.newUser,
            password: this.state.newPassword
        }
        axios.post('/users', userData)
        .then(res =>{
            this.setState({
                newUser: '',
                newPassword: ''
            })
            this.toggle();
        } )
    }

    handleInputChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
            
        });
    
    }

    deleteUser = () => {
        console.log("deleting user");
        
        axios.delete(`/users/${this.state.allUsers.username}`)
        .then(response =>{
            navigate('/adminstration')
        }).catch(err =>{
            console.log(err)
        });
    }
    renderUsers = () => {
            return this.state.allUsers.map((user,index)=>{
                return(
                    <div className="block">            

                        
                        <td>{user.username}</td>
                        <td><button className="btn btn-primary" onClick={()=>this.deleteUser()}>Delete</button></td>
                    
                        
                     </div>   
                
                )
            })
    }
    render(){
        return(
            <div>
            <Navigation showModal={this.props.showModal}/>
            <button className='btn btn-primary' onClick={() => this.toggle()}>Add User</button>
            <table className="table">
                    <th>Username:</th>
                    <th>Delete:</th>
                    <tr>
            <div >{this.renderUsers()}</div>

                    </tr>
            
            </table>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add New User.</ModalHeader>
          <ModalBody>
          
                
              <form>
                  <label>New User:</label><br/>
                  <input name='newUser' type='text' className="form-control form-control-sm" onChange={this.handleInputChange} value={this.state.newUser}></input><br/><br/>
                  <label>Enter password:</label><br/>
                  <input name='newPassword' type='text' className="form-control form-control-sm" onChange={this.handleInputChange} value={this.state.newPassword}></input>
              </form>
              
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addUser}>Submit</Button>{' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
            </div>
        )
    }
}