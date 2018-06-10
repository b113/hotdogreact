import React, {Component} from 'react';
import Header from './Header';
import Intro from "./Intro";
import HotdogTypes from "./HotdogTypes";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header/>
        <Intro/>
        <HotdogTypes/>
        <Footer/>
      </div>
    );
  }
}

export default Home;

