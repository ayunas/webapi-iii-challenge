import React, { Component } from 'react'
import axios from 'axios';

export default class Users extends Component {

  constructor(props) {
      super(props);

      this.state = {
          users : [],
          showUsers : false
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

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Show Users</button>
        {this.state.showUsers && this.state.users.map( user => <p>{user.name}</p>)}
      </div>
    )
  }
}
