import React, {Component} from 'react';
import {BrowserRoute as Router, Route, Link} from 'react-router-dom';
import './../index.css';
import Navbar from './layouts/Navbar.js';
import Footer from './layouts/Footer.js';


export default class Templates extends Component {
    

  render(){
      
    return (

         <div>
           
  <Navbar />
<main className="browse">
  <div className="container">
    <section className="text-block border-decor bd-130 bd-center">
      <h4 className="text-center">Landing Pages In Bootstrap </h4>
      <p className="text-center">Highly customizable and responsive WordPress themes yo build your portfolio, blog or site. They're perfect for photographers, designers, agencies, and businesses.</p>
    </section>
    <ul className="list-inline list-menu navigation-isotope">
      <li className="button" data-filter="*"><a href="#">All themes</a></li>
      <li className="button" data-filter=".blog"><a href="#">Education</a></li>
      <li className="button" data-filter=".photography"><a href="#">Real Estate</a></li>
      <li className="button" data-filter=".business"><a href="#">Business</a></li>
      <li className="button" data-filter=".portfolio"><a href="#">Finance</a></li>
      <li className="button" data-filter=".magazine"><a href="#">Magazine</a></li>
      <li className="button" data-filter=".others"><a href="#">Others</a></li>
    </ul>
    <section className="preview row isotope">
      <div className="col-md-4 col-sm-6 col-xs-6 block blog business">
        <a href="#"><img src="../../assets/images/Bloggr.png" />
          <span className="name">Bloggr</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block business magazine">
        <a href="#"><img src="../../assets/images/circle.png" />
          <span className="name">Circle</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block blog portfolio others">
        <a href="#"><img src="../../assets/images/Forum.png" />
          <span className="name">Forum</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block photography magazine">
        <a href="#"><img src="../../assets/images/Funding.png" />
          <span className="name">Funding</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block business portfolio">
        <a href="#"><img src="../../assets/images/Geo-Shop.png" />
          <span className="name">Geo Shop</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block blog photography others">
        <a href="#"><img src="../../assets/images/iPictures.png" />
          <span className="name">iPictures</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block photography magazine">
        <a href="#"><img src="../../assets/images/News_Central.png" />
          <span className="name">News Central</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block business portfolio">
        <a href="#"><img src="../../assets/images/Sharehub.png" />
          <span className="name">Sharehub</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block blog portfolio others">
        <a href="#"><img src="../../assets/images/Shopilicious.png" />
          <span className="name">Shopilicious</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block photography magazine">
        <a href="#"><img src="../../assets/images/Shoppr.png" />
          <span className="name">Shoppr</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block blog business others">
        <a href="#"><img src="../../assets/images/Square.png" />
          <span className="name">Square</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block photography magazine">
        <a href="#"><img src="../../assets/images/Uri.png" />
          <span className="name">Uri</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block blog photography others">
        <a href="#"><img src="../../assets/images/West_Side.png" />
          <span className="name">West Side</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block blog photography others">
        <a href="#"><img src="../../assets/images/WooCommerce.png" />
          <span className="name">WooCommerce</span>
        </a>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6 block blog photography others">
        <a href="#"><img src="../../assets/images/Youtuber.png" />
          <span className="name">Youtuber</span>
        </a>
      </div>
    </section>
    <a href="#" className="btn btn-small btn-gray btn-center btn-next">Next</a>
  </div>
</main>


  <Footer />
</div>

    );
  }
}
