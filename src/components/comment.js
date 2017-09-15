import React from 'react';

class Comment extends React.Component {

  render() {
    return (
      <li className="comment user-comment">
        <div className="info">
          <a href="#">
            { this.props.comment.postedBy }
          </a>
          <span>{ this.props.comment.postedAt }</span>
        </div>
        <p>
          { this.props.comment.content }
        </p>
      </li>
      );
  }
}

export default Comment;