import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogposts';

class PublicHeader extends React.Component {
  render() {
    return (<div>
              <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container-fluid">
                  <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span> Menu
                      <i className="fa fa-bars"></i>
                    </button>
                    <Link className="navbar-brand" to="/">GTE</Link>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to={ `/post/${blogData.getMostRecentPost().postId}` }>Latest Post</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>);
  }
}

export default PublicHeader;