import React, { Component } from 'react'
import axios from 'axios';
import AddUser from './AddUser';


export default class Users extends Component {

  constructor(props) {
      super(props);

      this.state = {
          users : [],
          showUsers : false,
          add : false
      }
  }

  getUsers = () => {
      console.log('getUsers triggered');
      this.setState({showUsers : !this.state.showUsers});
      axios.get('http://localhost:5000/users')
      .then( res => {
          console.log('successful response', res)
          this.setState({users : res.data})
      })
      .catch( err => {
          console.log('error', err);
      })
  }  

  addUser = () => {

    this.setState({
        add : !this.state.add
    })




  }

  render() {
    return (
      <div>
        {!this.state.showUsers ? <button onClick={this.getUsers}>Show Users</button> : 
        <button onClick={this.getUsers}>Hide Users</button> }
        {this.state.showUsers && this.state.users.map( user => <div>
            <p>{user.name}</p>
            <button>delete user</button>
            </div>)}
        <button onClick={this.addUser}>Add User</button>
        {this.state.add && <AddUser/> }
      </div>
    )
  }
}
