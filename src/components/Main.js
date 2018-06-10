import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contacts}/>
        </Switch>
      </main>
    );
  }
}

export default Main;