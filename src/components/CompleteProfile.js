import React, {Component} from 'react';
import {BrowserRoute as Router, Route, Link} from 'react-router-dom';
import './../index.css';
import Navbar from './layouts/Navbar.js';
import Footer from './layouts/Footer.js';


export default class ComponentProfile extends Component {
    

  render(){
      
    return (

         <div>
           
  <Navbar />
  <main className="contact-support">
  <div className="container">
    <section className="form-section mb-70">
      <h4 className="text-center">Please Complete Your Profile</h4><br />
      <form action="#" method="post">
        <div className="row">
          <div className="col-md-12">
            <label>Your fullname*</label>
            <input type="text" name="name" id defaultValue="kunal soni" className="form-control" placeholder="Add here" required />
          </div>
          <div className="col-md-12">
            <label>Your email</label>
            <input type="email" name="email" defaultValue="kunal1071996@gmail.com" id className="form-control" placeholder="Add here" />
          </div>
        </div><br /><br />
        <button type="submit" className="btn btn-center btn-info btn-large mb-70">Continue</button>
      </form>
    </section>
  </div>
</main>



  <Footer />
</div>

    );
  }
}
