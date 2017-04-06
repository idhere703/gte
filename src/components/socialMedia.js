import React, {Component} from 'react';
import socialMedia from '../data/socialMediaLinks';

class SocialMediaLinks extends Component {

  render() {
    return (
      <div>
        <ul className="list-inline text-center">
          {socialMedia.map((social) => {
            return (
              <li>
                <a href={social.siteLink}>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className={social.classInfo + ' fa-stack-1x fa-inverse'}></i>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SocialMediaLinks;
