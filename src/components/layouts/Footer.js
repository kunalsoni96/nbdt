import React, {Component} from 'react';
import {BrowserRoute as Router, Route, Link} from 'react-router-dom';


export default class Index extends Component {
  render(){
    return (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-6">
          <Link to="index.html" className="logo">
            <img src="../../assets/images/logo.svg" alt="logo" />
          </Link>
          <p>From logo design to web development expert designers, developers are ready to complete your projects.</p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <ul className="footer-menu">
            <li>
              <Link to="#" className="border-decor">Store</Link>
              <ul>
                <li><Link to="http://localhost/tests/Templates">Landing Pages</Link></li>
                <li><Link to="http://localhost/tests/Templates">PSD Theme</Link></li>
                <li><Link to="works.html">Video &amp; Gif</Link></li>
                <li><Link to="works.html">Site Template</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#" className="border-decor">Info</Link>
              <ul>
                <li><Link to="services.html">Services</Link></li>
                <li><Link to="contact_support.html">Contact</Link></li>
                <li><Link to="pricing.html">Pricing</Link></li>
                <li><Link to="index.html">Blog</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="clearfix hidden-md hidden-lg" />
        <div className="col-md-4 col-sm-12">
          <p>Subscribe to our newsletter to receive news, updates, free stuff and new releases by email.</p>
          <form action="#" method="post">
            <input type="text" className="form-control" placeholder="Email Address" />
            <input type="submit" className="btn btn-small btn-gray" defaultValue="Subscribe" />
          </form>
          <ul className="icons">
            <li><Link to="#"><i className="fa fa-facebook-square" aria-hidden="true" /></Link></li>
            <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link></li>
            <li><Link to="#"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
            <li><Link to="#"><i className="fa fa-dribbble" aria-hidden="true" /></Link></li>
            <li><Link to="#"><i className="fa fa-behance" aria-hidden="true" /></Link></li>
          </ul>
        </div>
        <div className="col-md-12">
          <div className="copyright pull-right">© 2016 azyrusthemes</div>
        </div>
      </div>
    </div>
  </footer>


    );
  }
}
