import React from 'react';

class Comment extends React.Component {

    render() {
        return (
            <div>
              <li className="comment user-comment">
                <div className="info">
                  <a href="#">this.props.comment.postedBy</a>
                  <span>{ this.props.comment.postedAt }</span>
                </div>
                <a className="avatar" href="#">
                  <img src={ this.props.comment.profilePicture } width="35" alt="Profile Avatar" title={ this.props.comment.postedBy } />
                </a>
                <p>this.props.comment.content</p>
              </li>
            </div>
            );
    }
}

export default Comment;