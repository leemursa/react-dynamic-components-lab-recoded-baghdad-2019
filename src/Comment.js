<<<<<<< HEAD

=======
>>>>>>> c7ed00aabd37f5175bb65cbe00520feae49570ba
import React, { Component } from 'react';

export default class Comment extends Component {
  render(){
    return (
      <div className="comment">
      {this.props.commentText}
      </div>
    )
  }
}
