import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './components/Index.js';
import Login from './components/Login.js';
import MyDownloads from './components/MyDownloads';
import Profile from './components/Profile.js';
import CompleteProfile from './components/CompleteProfile';
import Templates from './components/Templates.js';
import Cart from './components/Cart.js';

export default class App extends Component {
  render(){
    return (
      <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route  path="/Login" component={Login} />
                <Route  path="/My-Downloads" component={MyDownloads} />
                <Route  path="/Profile" component={Profile} />
                <Route  path="/CompleteProfile" component={CompleteProfile} />
                <Route  path="/Templates" component={Templates} />
                <Route  path="/Cart" component={Cart} />
              </Switch>
          </div>
        </Router>
    );
  }
}
