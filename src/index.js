import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './components/Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Contact name="Sara" avatar="https://randomuser.me/api/portraits/men/57.jpg"/>
    <Contact name="Paul"  avatar="https://randomuser.me/api/portraits/men/54.jpg" isOnline/>
    <Contact name="Djamila"  avatar="https://randomuser.me/api/portraits/men/52.jpg"/>
    <Contact name="Bruno"  avatar="https://randomuser.me/api/portraits/men/51.jpg" isOnline/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
