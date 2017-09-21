import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
