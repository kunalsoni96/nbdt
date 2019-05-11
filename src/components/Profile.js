import React, {Component} from 'react';
import {BrowserRoute as Router, Route, Link} from 'react-router-dom';
import './../index.css';
import Navbar from './layouts/Navbar.js';
import Footer from './layouts/Footer.js';


export default class Profile extends Component {
    

  render(){
      
    return (

         <div>
           
  <Navbar />
  <main className="contact-support">
  <div className="container">
    <section className="text-block mb-70">
      <h4 className="text-center">Send us a support request</h4>
      <p className="text-center">Please describe more about your project here. Feel free to message us if you want more things done for the app outside what we offer.</p>
    </section>
    <section className="form-section mb-70">
      <form action="http://localhost/tests/UpdateProfile" method="post">
        <input type="hidden" name="_token" defaultValue="m40qYlBsJX0Tu4KLhaYx2uFzCpJu2QjbAP6mCQwr" />
        <div className="row">
          <div className="col-md-12">
            <label>Your name</label>
            <input type="text" name="name" id className="form-control" defaultValue="kunal soni" placeholder="Add here" required />
          </div>
          <div className="col-md-12">
            <label>Your email</label>
            <input type="email" name="email" id defaultValue="kunal1071996@gmail.com" className="form-control" placeholder="Add here" disabled />
          </div>
          <div className="col-md-12">
            <label>Your mobile</label>
            <input type="text" defaultValue={8085264230} maxLength={10} minLength={10} name="Mobile" id className="form-control" placeholder="Add here" required />
          </div>
          <div className="col-md-12">
            <label>Enter Your Bio*</label>
            <textarea name="Description" id className="form-control" placeholder="Add here" required defaultValue={"kunal"} />
          </div>
          {/* <div class="col-md-12">
                          <label>Upload additional files</label>
                          <div class="btn-group btn-group-lg btn-group-upload">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4">
                                      <input type="button" class="btn btn-primary" value="File1">
                                  </div>
                                  <div class="col-md-4 col-sm-4">
                                      <input type="button" class="btn btn-primary" value="File2">
                                  </div>
                                  <div class="col-md-4 col-sm-4">
                                      <input type="button" class="btn btn-primary" value="File3">
                                  </div>
                              </div>
                          </div>
                      </div> */}
        </div>
      </form></section>
    {/*  <p class="text-center mb-40">You will hear from us within 1-2 business days.</p> */}
    <button type="submit" className="btn btn-center btn-large mb-70">Update Profile
    </button></div>
</main>


  <Footer />
</div>

    );
  }
}
