import React, {Component} from 'react';
import hotdog from '../img/hotdog.png';

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <img src={hotdog} alt="Hot Dog" className="intro__logo"/>
        <p className="intro__text">
          Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.
        </p>
        <a href="" className="intro__link">More Dogs ‘n Make Em Hot</a>
      </section>
    );
  }
}

export default Intro;