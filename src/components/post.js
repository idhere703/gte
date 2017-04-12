import React from 'react';

class Post extends React.Component {
  render() {
    return (<div>
              <header className="intro-header" style={ { backgroundImage: `url(${this.props.imgPath})` } }>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="post-heading">
                        <h1>{ this.props.headingTitle }</h1>
                        <h2 className="subheading">{ this.props.subheadingTitle }</h2>
                        <span className="meta">Posted by <a href="#">{ this.props.postedBy }</a> on { this.props.postedDate }</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <article>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      { this.props.postContent }
                    </div>
                  </div>
                </div>
              </article>
            </div>);
  }
}

export default Post;