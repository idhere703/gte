import React from 'react';
import blogData from '../data/blogposts';
import { Link } from 'react-router-dom';


class BlogPosts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blogData: blogData.getPosts()
    };

  }



  render() {
    return (
      <div>
        { this.state.blogData && this.state.blogData.length && this.state.blogData.map((post, index) => {
            return (
              <div key={ `blogpreview-${index}` }>
                <div className="post-preview">
                  <Link to={ `/post/${post.postId}` }>
                  <h2 className="post-title">{ post.title }</h2>
                  <h3 className="post-subtitle">{ post.subtitle }</h3>
                  </Link>
                  <p className="post-meta">Posted by
                    <Link to="#">
                    { post.postedBy }
                    </Link>
                    { post.postedAt }
                  </p>
                </div>
                <hr/>
              </div>
              );
          }) }
      </div>
      );
  }
}

export default BlogPosts;
