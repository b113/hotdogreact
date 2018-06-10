import React, {Component} from 'react';
import logo from '../img/instagram.png';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__overlay"></div>
        <a href="" className="instagram-logo">
          <img className="instagram-logo__image" src={logo} alt="Instagram"/>
          <span className="instagram-logo__hashtag">#hotdogs</span>
        </a>
        <div className="instagram-feed">
          <div className="instagram-feed__item instagram-feed__item--photo-1"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-2"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-3"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-4"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-5"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-6"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-7"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-8"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-9"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-10"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-11"></div>
          <div className="instagram-feed__item instagram-feed__item--photo-12"></div>
        </div>
        <nav className="nav-top">
          <a className="nav-top__item" href="">menu</a>
          <a className="nav-top__item" href="">catering</a>
          <a className="nav-top__item" href="">about us</a>
          <Link className="nav-top__item" to='/contact'>contact</Link>
        </nav>
      </header>
    );
  }
}

export default Header;