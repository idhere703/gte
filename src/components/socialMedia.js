import React from 'react';
import socialMedia from '../data/socialMediaLinks';

class SocialMediaLinks extends React.Component {

    render() {
        return (
          <div>
            <ul className="list-inline text-center">
              {socialMedia.map((social, index) => {
                  return (
                  <li key={`social-${index}`}>
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
