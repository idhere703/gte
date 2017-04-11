import React from 'react';
import blogData from '../data/blogposts';


class BlogPosts extends React.Component {

    render() {
        return (
          <div>
            {blogData.map((post, index) => {
                return (
                <div key={`blogpreview-${index}`}>
                  <div className="post-preview">
                    <a href="post.html">
                      <h2 className="post-title">
                        {post.title}
                      </h2>
                      <h3 className="post-subtitle">
                        {post.subtitle}
                      </h3>
                    </a>
                    <p className="post-meta">Posted by
                      <a href="#">{post.postedBy}</a>
                      {post.postedAt}
                    </p>
                  </div>
                  <hr/>
                </div>
                );
            })}
          </div>
        );
    }
}

export default BlogPosts;
