import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Menu from './components/Menu';
import ExpressMenu from './components/ExpressMenu';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={HomePage} exact/>
        <Route path='/menu' component={Menu}/>
        <Route path='/express-menu' component={ExpressMenu}/>
        <Route path='/contact' component={Contact}/>
      </BrowserRouter>
    );
  }
}

export default App;
