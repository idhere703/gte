import React from 'react';
import SocialMediaLinks from './socialMedia';

// NOTE: LinkTo won't work here since this needs to be the last element on the page. This is also a hack.

class PublicFooter extends React.Component {

  render() {
    return (<footer>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <SocialMediaLinks></SocialMediaLinks>
                    <p className="copyright text-muted">Copyright © Brandon Underwood 2017</p>
                  </div>
                </div>
              </div>
            </footer>);
  }
}

export default PublicFooter;