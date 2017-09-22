import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Fuel from './components/Fuel';
import Parts from './components/Parts';
import Cleanup from './components/Cleanup'

import registerServiceWorker from './registerServiceWorker';

// const renderArrayMap = (path, arr) => {
//   arr.map(item => {
//     return (
//       <div key={item.id} className='card p-3 m-3'>
//         <div className='card-'>
//           <h4 className='card-title'>{item.name}</h4>
//           <h5 className='card-title'>{item.price}</h5>
//           <p className='card-text'>{item.desc}</p>
//           <Link to={`${path}/${item.id}`}>More info</Link>
//         </div>
//       </div>
//     )
//   })
// }
// <Route path='/fuel' component={() => <Fuel func={renderArrayMap}/>}/>


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' test='Test' component={Home}/>
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
