import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
  render() {
    return (
      <div>
        <ul className="comment-section">
          { this.state.comments && this.state.comments.length &&
            this.state.comments.map((comment) => {
              return (<Comment comment={ comment }></Comment>);
            }) }
          <li className="write-new">
            <form>
              <textarea placeholder="Write your comment here" name="comment"></textarea>
              <div>
                <img src="../img/avatar_user_2.jpg" width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
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