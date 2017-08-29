import React from 'react';


class About extends React.Component {

  render() {
    return (<div>
              <header className="intro-header about-header-image">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="page-heading">
                        <h1>About Me</h1>
                        <hr className="small" />
                        <span className="subheading">This is what I do... I wonder what that man is staring at.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <p>Hi there! I'm Brandon, a "full stack" developer (as if that means anything anymore) with about 5 years of experience in the field of software development.
                      Native to SC living in Charleston for my entire life.</p>
                    <p>In my free time you can find me outside exploring the world (pro tip, bring bug spray and sunscreen), hanging out with close friends and generally living
                      a very fulfilling and well rounded life... I'm not a crazy person, I swear. <i>Said every crazy person ever.</i></p>
                    <p>If you would like to contact me, please use the contact page. Or you could shout... I might hear you.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  </div>
                </div>
              </div>
            </div>);
  }
}

export default About;