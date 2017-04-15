import React from 'react';
import BlogPosts from './blogPosts';


class LandingPage extends React.Component {
    render() {
        return (
            <div>
              <header className="intro-header header-image">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="site-heading">
                        <h1>Blog</h1>
                        <hr className="small" />
                        <span className="subheading">Blogging is fun!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <BlogPosts></BlogPosts>
                    <ul className="pager">
                      <li className="next">
                        <a href="#">Older Posts →</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr/>
            </div>
            );
    }
}

export default LandingPage;