import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="trademark">&reg; 2016 Dirty Dogs all rights reserved</div>
        <div className="footer-contacts">
          <ul className="footer-contacts__wrapper">
            <li className="footer-contacts__item">274 Marconi Blvd. Columbus, Ohio 43215</li>
            <li className="footer-contacts__item">614.538.0095</li>
            <li className="footer-contacts__item">Contact Us</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;