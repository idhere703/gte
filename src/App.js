import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';
import SocialMediaLinks from './components/socialMedia';
import BlogPosts from './components/blogPosts';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

// TODO: Put this in. Do it, do it now.
// // Floating label headings for the contact form
// $(function() {
//     $("body").on("input propertychange", ".floating-label-form-group", function(e) {
//         $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
//     }).on("focus", ".floating-label-form-group", function() {
//         $(this).addClass("floating-label-form-group-with-focus");
//     }).on("blur", ".floating-label-form-group", function() {
//         $(this).removeClass("floating-label-form-group-with-focus");
//     });
// });
//
// // Navigation Scripts to Show Header on Scroll-Up
// $(document).ready(function($) {
//     var MQL = 1170;
//
//     //primary navigation slide-in effect
//     if ($(window).width() > MQL) {
//         var headerHeight = $('.navbar-custom').height();
//         $(window).on('scroll', {
//                 previousTop: 0
//             },
//             function() {
//                 var currentTop = $(window).scrollTop();
//                 //check if user is scrolling up
//                 if (currentTop < this.previousTop) {
//                     //if scrolling up...
//                     if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
//                         $('.navbar-custom').addClass('is-visible');
//                     } else {
//                         $('.navbar-custom').removeClass('is-visible is-fixed');
//                     }
//                 } else if (currentTop > this.previousTop) {
//                     //if scrolling down...
//                     $('.navbar-custom').removeClass('is-visible');
//                     if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
//                 }
//                 this.previousTop = currentTop;
//             });
//     }
// });

class App extends Component {

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                Menu
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html"></a>
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
                  <h1>Clean Blog</h1>
                  <hr className="small"/>
                  <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
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
                  <a href="#">Older Posts &rarr;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr/>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <SocialMediaLinks>
                </SocialMediaLinks>
                <p className="copyright text-muted">Copyright &copy; Your Website 2016</p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;


