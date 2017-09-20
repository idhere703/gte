import React from 'react';
import moment from 'moment';
import Comment from './comment';
import commentsData from '../data/comments';

class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: commentsData.getComments(this.props.postId),
      commentVal: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCommentAdd = this.handleCommentAdd.bind(this);
  }
  handleChange(event) {
    this.setState({
      commentVal: event.target.value
    });
  }
  handleCommentAdd(comment) {
    if (comment.content === 'I made some comments!') {
      const cs = this.state.comments;
      cs.push(comment);
      cs.push(commentsData.getRandomComment(cs, this.props.postId));
      this.setState({
        comments: cs,
        commentVal: ''
      });
    } else {
      const cs = this.state.comments;
      cs.push(comment);
      this.setState({
        comments: cs,
        commentVal: ''
      });
    }

  }

  render() {
    return (
      <div>
        <ul className="comment-section">
          { this.state.comments &&
            this.state.comments.map((comment, index) => {
              return (<Comment key={ `comment-${index}` } comment={ comment }></Comment>);
            }) }
          <li className="write-new">
            <textarea placeholder="Write your comment here" name="comment" value={ this.state.commentVal } onChange={ this.handleChange }></textarea>
            <div>
              <button onClick={ () => this.handleCommentAdd({
                                  postedAt: commentsData.formatCommentDate(moment()),
                                  postedBy: 'Anonymous',
                                  content: this.state.commentVal,
                                  postId: this.props.postId,
                                  commentId: this.state.comments.length
                                }) }>Submit</button>
            </div>
          </li>
        </ul>
      </div>
      );
  }
}

export default Comments;