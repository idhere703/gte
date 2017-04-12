import React from 'react';
import './App.css';
import BlogPosts from './components/blogPosts';
import PublicFooter from './components/publicFooter';
import navigationInit from './data/navigationInit';
// import {   BrowserRouter as Router,   Route,   Link } from
// 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    navigationInit();
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span> Menu
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">GTE</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="post.html">Sample Post</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
        <PublicFooter></PublicFooter>
      </div>
      );
  }
}

export default App;
