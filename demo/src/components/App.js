import React, { Component } from 'react';
import router from '../router.js';
import { Route, NavLink, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        {/* TODO Build Routing inside our App */}
        <nav>
          <NavLink exact activeClassName='selected-link' to='/'>Home</NavLink>
          <NavLink activeClassName='selected-link' to='/contact'>Contact Us</NavLink>
          <NavLink activeClassName='selected-link' to='/about'>About Us</NavLink>
          <NavLink activeClassName='selected-link' to='/people'>People</NavLink>

        </nav>
      { router }
      </div>
    );
  }
}

export default App;
