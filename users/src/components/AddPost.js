import React, { Component } from 'react'

export default class AddPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id : null,
            text : ''
        }

    }

    input = (e) => {
        console.log('input triggered');
        this.setState({
            [e.target.name] : e.target.value
        })

    }

  render() {
    return (
      <form>
        <input name='id' type='number' placeholder='User ID' value={this.state.id} onChange={this.input} /><br/>
        <textarea name='text'type='text' rows="4" cols="30" value={this.state.text} placeholder='Post Text' onChange={this.input} />
      </form>
    )
  }
}
