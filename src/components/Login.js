import React, {Component} from 'react';
import {BrowserRoute as Router, Route, Link} from 'react-router-dom';
import './../index.css';
import Navbar from './layouts/Navbar.js';
import Footer from './layouts/Footer.js';


export default class Index extends Component {
    

  render(){
      
    return (

         <div>
           
  <Navbar />
<main className="signup">
  <div className="container">
    <section className="text-block mb-90">
      <h4 className="text-center">Login to your <span className="color-theme">eiefy</span> account</h4>
      <p className="text-center border-decor bd-center" style={{paddingTop: 20}}>{/* Use code <span>BLACKFRIDAY16</span> on your next purchase to save 20%. */}</p>
    </section>
    <section className="login-form text-center">
      <div className="row" style={{marginTop: '-100px', marginBottom: 20}}>
        <div className="col-md-1 col-sm-1" />
        <div className="col-md-5 col-sm-5">
          <a href="http://localhost/tests/redirect">
            <div className="g-sign-in-button">
              <div className="content-wrapper">
                <div className="logo-wrapper">  
                  <img src="https://developers.google.com/identity/images/g-logo.png" />
                </div>  
                <span className="text-container"> 
                  <span>Sign in with Google</span>
                </span>
              </div>
            </div> </a>                         </div>
        <div className="col-md-5 col-sm-5">
          <a href="http://localhost/tests/fbredirect">
            <div className="g-sign-in-button" style={{background: '#3B5894'}}>
              <div className="content-wrapper">
                <div className="logo-wrapper">  
                  <img src="http://localhost/tests/public/assets/images/facebook.png" />
                </div>  
                <span className="text-container"> 
                  <span>Sign in with Facebook</span>
                </span>
              </div>  
            </div></a>
        </div>
        <div className="col-md-1 col-sm-1" />
      </div>
    </section>
  </div>
</main>


  <Footer />
</div>

    );
  }
}
