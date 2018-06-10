import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import './styles/style.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
