import React, {Component} from 'react';
import {BrowserRoute as Router, Route, Link} from 'react-router-dom';
import './../index.css';
import Navbar from './layouts/Navbar.js';
import Footer from './layouts/Footer.js';


export default class MyDownloads extends Component {
    

  render(){
      
    return (

         <div>
           
  <Navbar />
<main className="downloads">
  <div className="container">
    <section className="text-block border-decor bd-130 bd-center mb-70">
      <h4 className="text-center">Downloads</h4>
    </section>
    <ul className="list-inline list-menu navigation-isotope mb-30">
      <li className="button" data-filter="*"><Link to="#">All themes</Link></li>
      <li className="button" data-filter=".blog"><Link to="#">Blog</Link></li>
      <li className="button" data-filter=".photography"><Link to="#">Photography</Link></li>
      <li className="button" data-filter=".business"><Link to="#">Business</Link></li>
      <li className="button" data-filter=".portfolio"><Link to="#">Portfolio</Link></li>
      <li className="button" data-filter=".magazine"><Link to="#">Magazine</Link></li>
      <li className="button" data-filter=".others"><Link to="#">Others</Link></li>
    </ul>
    <div className="border-block" />
    <section className="product-list row isotope mb-70">
      <div className="block portfolio business">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6">
            <Link to="#"><img src="../../assets/images/Bloggr.png" /></Link>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="features-info">
              <h6 className="border-decor">Bloggr</h6>
              <table className="table">
                <tbody><tr>
                    <td>Support</td>
                    <td>12 Months</td>
                  </tr>
                  <tr>
                    <td>License</td>
                    <td>Regular</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className="col-md-2 col-sm-5 col-xs-6 col-md-offset-1 text-center">
            <Link to="#" className="btn btn-small btn-gray btn-service">Order Custom Service</Link>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-4 col-md-offset-0 col-sm-offset-1 col-xs-offset-2 pull-right text-center">
            <Link to="#" className="btn btn-small btn-gray btn-download">Download</Link>
            <span className="stars">
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
      <div className="block photography others">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6">
            <Link to="#"><img src="../../assets/images/Circle.png" /></Link>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="features-info">
              <h6 className="border-decor">Circle</h6>
              <table className="table">
                <tbody><tr>
                    <td>Support</td>
                    <td>8 Months</td>
                  </tr>
                  <tr>
                    <td>License</td>
                    <td>Regular</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className="col-md-2 col-sm-5 col-xs-6 col-md-offset-1 text-center">
            <Link to="#" className="btn btn-small btn-gray btn-service">Order Custom Service</Link>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-4 col-md-offset-0 col-sm-offset-1 col-xs-offset-2 pull-right text-center">
            <Link to="#" className="btn btn-small btn-gray btn-download">Download</Link>
            <span className="stars">
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
      <div className="block blog magazine">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6">
            <Link to="#"><img src="../../assets/images/Forum.png" /></Link>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="features-info">
              <h6 className="border-decor">Forum</h6>
              <table className="table">
                <tbody><tr>
                    <td>Support</td>
                    <td>8 Months</td>
                  </tr>
                  <tr>
                    <td>License</td>
                    <td>Regular</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className="col-md-2 col-sm-5 col-xs-6 col-md-offset-1 text-center">
            <Link to="#" className="btn btn-small btn-gray btn-service">Order Custom Service</Link>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-4 col-md-offset-0 col-sm-offset-1 col-xs-offset-2 pull-right text-center">
            <Link to="#" className="btn btn-small btn-gray btn-download">Download</Link>
            <span className="stars">
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
      <div className="block blog portfolio">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6">
            <Link to="#"><img src="../../assets/images/Funding.png" /></Link>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="features-info">
              <h6 className="border-decor">Funding</h6>
              <table className="table">
                <tbody><tr>
                    <td>Support</td>
                    <td>8 Months</td>
                  </tr>
                  <tr>
                    <td>License</td>
                    <td>Regular</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className="col-md-2 col-sm-5 col-xs-6 col-md-offset-1 text-center">
            <Link to="#" className="btn btn-small btn-gray btn-service">Order Custom Service</Link>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-4 col-md-offset-0 col-sm-offset-1 col-xs-offset-2 pull-right text-center">
            <Link to="#" className="btn btn-small btn-gray btn-download">Download</Link>
            <span className="stars">
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
      <div className="block photography magazine">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6">
            <Link to="#"><img src="../../assets/images/Geo_Shop.png" /></Link>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="features-info">
              <h6 className="border-decor">Geo Shop</h6>
              <table className="table">
                <tbody><tr>
                    <td>Support</td>
                    <td>8 Months</td>
                  </tr>
                  <tr>
                    <td>License</td>
                    <td>Regular</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className="col-md-2 col-sm-5 col-xs-6 col-md-offset-1 text-center">
            <Link to="#" className="btn btn-small btn-gray btn-service">Order Custom Service</Link>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-4 col-md-offset-0 col-sm-offset-1 col-xs-offset-2 pull-right text-center">
            <Link to="#" className="btn btn-small btn-gray btn-download">Download</Link>
            <span className="stars">
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
      <div className="block portfolio others">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6">
            <Link to="#"><img src="../../assets/images/Shoppr.png" /></Link>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="features-info">
              <h6 className="border-decor">Shoppr</h6>
              <table className="table">
                <tbody><tr>
                    <td>Support</td>
                    <td>8 Months</td>
                  </tr>
                  <tr>
                    <td>License</td>
                    <td>Regular</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className="col-md-2 col-sm-5 col-xs-6 col-md-offset-1 text-center">
            <Link to="#" className="btn btn-small btn-gray btn-service">Order Custom Service</Link>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-4 col-md-offset-0 col-sm-offset-1 col-xs-offset-2 pull-right text-center">
            <Link to="#" className="btn btn-small btn-gray btn-download">Download</Link>
            <span className="stars">
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
      <div className="block blog magazine">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6">
            <Link to="#"><img src="../../assets/images/WooCommerce.png" /></Link>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="features-info">
              <h6 className="border-decor">WooCommerce</h6>
              <table className="table">
                <tbody><tr>
                    <td>Support</td>
                    <td>8 Months</td>
                  </tr>
                  <tr>
                    <td>License</td>
                    <td>Regular</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className="col-md-2 col-sm-5 col-xs-6 col-md-offset-1 text-center">
            <Link to="#" className="btn btn-small btn-gray btn-service">Order Custom Service</Link>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-4 col-md-offset-0 col-sm-offset-1 col-xs-offset-2 pull-right text-center">
            <Link to="#" className="btn btn-small btn-gray btn-download">Download</Link>
            <span className="stars">
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
      <div className="block photography business">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6">
            <Link to="#"><img src="../../assets/images/Youtuber.png" /></Link>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="features-info">
              <h6 className="border-decor">Youtuber</h6>
              <table className="table">
                <tbody><tr>
                    <td>Support</td>
                    <td>8 Months</td>
                  </tr>
                  <tr>
                    <td>License</td>
                    <td>Regular</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className="col-md-2 col-sm-5 col-xs-6 col-md-offset-1 text-center">
            <Link to="#" className="btn btn-small btn-gray btn-service">Order Custom Service</Link>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-4 col-md-offset-0 col-sm-offset-1 col-xs-offset-2 pull-right text-center">
            <Link to="#" className="btn btn-small btn-gray btn-download">Download</Link>
            <span className="stars">
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star active" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </section>
    <Link to="#" className="btn btn-small btn-gray mb-70 btn-next">Next</Link>
    <section className="row mb-40">
      <div className="col-md-6">
        <div className="block-icon">
          <img src="fonts/eiefy_icons/support.svg" />
          <div className="text-block">
            <h4 className="text-center border-decor">Customer support.</h4>
            <p className="text-center">Our solution experts are here to answer your questions, help you troubleshoot issues, &amp; increase satisfaction with our solutions.</p>
          </div>
          <Link to="#" className="btn btn-small btn-center">Support Centre</Link>
        </div>
      </div>
      <div className="col-md-6">
        <div className="block-icon">
          <img src="fonts/eiefy_icons/wordpress.svg" />
          <div className="text-block">
            <h4 className="text-center border-decor">Want custom WordPress Theme?</h4>
            <p className="text-center">Let’s face it: a theme’s price tag matters a lot. Custom designs, which in the WordPress world are usually custom themes.</p>
          </div>
          <Link to="#" className="btn btn-small btn-center">Order Service</Link>
        </div>
      </div>
    </section>
  </div>
</main>


  <Footer />
</div>

    );
  }
}
