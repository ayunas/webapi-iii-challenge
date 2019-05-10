import React, { Component } from 'react'
import axios from 'axios';

import AddPost from './AddPost';

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : [],
            showPosts : false,
            add : false
        }
    }

  getPosts = () => {
      console.log('getPosts triggered');
      this.setState({showPosts : !this.state.showPosts});

      axios.get('http://localhost:5000/posts')
      .then( res => {
          console.log(res);
          this.setState({
              posts : res.data
          })
      })
      .catch( err => {
          console.log(err);
      })
  }

  addPost = () => {
      console.log('addPost triggered');
      this.setState({
          add : !this.state.add
      })

  }

  render() {
    return (
      <div>
        {!this.state.showPosts ? <button onClick={this.getPosts}>Show Posts</button> : 
        <button onClick={this.getPosts}>Hide Posts</button> }
        {this.state.showPosts && this.state.posts.map( post => 
        <div>
            <article>{post.text}</article>
            <button>Delete Post</button>
        </div>
        )}
        <button onClick={this.addPost}>Add Post</button>
        {this.state.add && <AddPost/>}
      </div>
    )
  }
}
