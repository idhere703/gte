import React from 'react';
import commentsData from '../data/comments';

class Comment extends React.Component {

  render() {
    return (
      <li className="comment user-comment">
        <div className="info">
          <a href="#">
            { this.props.comment.postedBy }
          </a>
          <span>{ `${commentsData.formatCommentDate(this.props.comment.postedAt)}` }</span>
        </div>
        <p>
          { this.props.comment.content }
        </p>
      </li>
      );
  }
}

export default Comment;