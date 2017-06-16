import React from 'react';
import BlogPosts from '../data/blogposts';
import Comments from './comments';
console.log('Comments', Comments);

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.getDbProps(props.match.params.id)
    };
  }

  getDbProps(postId) {
    const pId = postId.toString();
    return BlogPosts.getPost(pId);
  }

  render() {
    return (<div>
              <header className={ `intro-header ${this.state.imgClass}` }>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="post-heading">
                        <h1>{ this.state.title }</h1>
                        <h2 className="subheading">{ this.state.subtitle }</h2>
                        <span className="meta">Posted by <a href="#">{ this.state.postedBy }</a> on { this.state.postedAt }</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <article>
                <div className="container">
                  <div className="row">
                    <div dangerouslySetInnerHTML={ { __html: this.state.content } } className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    </div>
                  </div>
                </div>
              </article>
              <Comments postId={ this.state.postId }></Comments>
            </div>);
  }
}

export default Post;