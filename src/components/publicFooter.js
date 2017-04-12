import React from 'react';
import SocialMediaLinks from './socialMedia';

class PublicFooter extends React.Component {

    render() {
        return (<footer>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <SocialMediaLinks></SocialMediaLinks>
                        <p className="copyright text-muted">Copyright © fake blog 2017</p>
                      </div>
                    </div>
                  </div>
                </footer>);
    }
}

export default PublicFooter;