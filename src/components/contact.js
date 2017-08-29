
import React from 'react';


class Contact extends React.Component {

  render() {
    return (<div>
              <header className="intro-header contact-header-image">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="page-heading">
                        <h1>Contact Me</h1>
                        <hr className="small" />
                        <span className="subheading">Have questions? I have answers (maybe).</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="row">
                      <div className="col-xs-12 contactMe-container">
                        <button onClick={ () => window.location.href = 'mailto:brandonunderwood92@gmail.com' } type="submit" className="btn btn-lg btn-success center">Contact me</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>);
  }
}

export default Contact;












