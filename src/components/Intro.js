import React, {Component} from 'react';
import hotdog from '../img/hotdog.png';
import {Link} from 'react-router-dom';


class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <img src={hotdog} alt="Hot Dog" className="intro__logo"/>
        <p className="intro__text">
          Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.
        </p>
        <Link to='/' className="intro__link">More Dogs ‘n Make Em Hot</Link>
      </section>
    );
  }
}

export default Intro;