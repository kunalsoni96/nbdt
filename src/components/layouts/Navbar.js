import React, {Component} from 'react';
import {BrowserRoute as Router, Route, Link} from 'react-router-dom';
import './../../index.css';


export default class Index extends Component {
    

  render(){
      
    return (
  <header>
    <div className="container">
      <Link to="/" className="logo pull-left">
        <img src="../../assets/images/logo.svg" alt="logo" />
      </Link>
      <nav>
        <div className="dropdown pull-left">
          <Link data-toggle="dropdown" to="#">Landing Page <span><b className="caret" /></span></Link>
          <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><Link to="/Templates">Landing Page In Bootstrap</Link></li>
            <li><Link to="/Templates">Landing Page In React Js</Link></li>
            <li><Link to="/Templates">Landing Page In Vue Js</Link></li>
          </ul>
        </div>
        <div className="dropdown pull-left">
          <Link data-toggle="dropdown" to="#">Graphics <span><b className="caret" /></span></Link>
          <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><Link to="/Templates">Design In PSD</Link></li>
            <li><Link to="/Templates">Design In Illustrator</Link></li>
            <li><Link to="/Templates">Design In Animate</Link></li>
          </ul>
        </div>
        <div className="dropdown pull-left">
          <Link data-toggle="dropdown" to="#">Videos <span><b className="caret" /></span></Link>
          <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><Link to="/Templates">Video In Pr</Link></li>
            <li><Link to="/Templates">Video In Cs6</Link></li>
          </ul>
        </div>
        <div className="dropdown pull-left">
          <Link data-toggle="dropdown" to="#">Others <span><b className="caret" /></span></Link>
          <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><Link to="index.html">Vue JS</Link></li>
            <li><Link to="browse.html">Browse Page</Link></li>
            <li><Link to="single_item.html">Single Item Page</Link></li>
            <li><Link to="single_item_themeforest_affiliate.html">Single Item Themeforest Affiliate Page</Link></li>
          </ul>
        </div>
        <div className="dropdown pull-right">
          <Link data-toggle="dropdown" to="#">
            <img src="../../assets/images/eiefy_0041_User_1.png" className="img-circle" style={{width: 30}} />
          </Link>
          <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel" style={{width: 200}}>
            <li><Link to="/Profile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-user" /> &nbsp;&nbsp; My Profile</Link></li>
            <li><Link to="/My-Downloads">&nbsp;&nbsp;&nbsp;&nbsp; <i className="fa fa-download" /> &nbsp; My Downloads</Link></li>
            <li><Link to="/Cart"> &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Cart</Link></li>
            <li><Link to="#">&nbsp;&nbsp;&nbsp;&nbsp; <i className="fa fa-sign-out" />&nbsp; Logout</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>


    );
  }
}
