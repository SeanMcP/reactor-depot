import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Fuel from './components/Fuel';
import Parts from './components/Parts';
import Cleanup from './components/Cleanup'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>
        <Route path='/fuel' component={Fuel}/>
        <Route path='/parts' component={Parts}/>
        <Route path='/cleanup' component={Cleanup}/>
      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
