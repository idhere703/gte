import React from 'react';
import Comment from './comment';
import commentsData from '../data/comments';

class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: commentsData.getComments(this.props.postId)
    };

  }

  render() {
    return (
      <div>
        <ul className="comment-section">
          { this.state.comments &&
            this.state.comments.map((comment) => {
              return (<Comment comment={ comment }></Comment>);
            }) }
          <li className="write-new">
            <form>
              <textarea placeholder="Write your comment here" name="comment"></textarea>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </li>
        </ul>
      </div>
      );
  }
}

export default Comments;