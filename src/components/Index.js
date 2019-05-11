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
  <form action="http://localhost/tests/logout" method="post" id="logoutt">
    <input type="hidden" name="_token" defaultValue="1jQ9a9AHMa28R8O6AfjCLTrPUHjLfHPEQgdZDram" />
  </form>
  <main className="browse">
    <div className="container">
      <section className="text-block border-decor bd-130 bd-center">
        <h4 className="text-center">Landing Pages In Bootstrap </h4>
        <p className="text-center">Highly customizable and responsive WordPress themes yo build your portfolio, blog or site. They're perfect for photographers, designers, agencies, and businesses.</p>
      </section>
      <ul className="list-inline list-menu navigation-isotope">
        <li className="button" data-filter="*"><Link href="http://localhost/tests/DemoPage">All themes</Link></li>
        <li className="button" data-filter=".blog"><Link href="http://localhost/tests/DemoPage">Education</Link></li>
        <li className="button" data-filter=".photography"><Link href="http://localhost/tests/DemoPage">Real Estate</Link></li>
        <li className="button" data-filter=".business"><Link href="http://localhost/tests/DemoPage">Business</Link></li>
        <li className="button" data-filter=".portfolio"><Link href="http://localhost/tests/DemoPage">Finance</Link></li>
        <li className="button" data-filter=".magazine"><Link href="http://localhost/tests/DemoPage">Magazine</Link></li>
        <li className="button" data-filter=".others"><Link href="http://localhost/tests/DemoPage">Others</Link></li>
      </ul>
      <section className="preview row isotope">
        <div className="col-md-4 col-sm-6 col-xs-6 block blog business">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Bloggr.png" />
            <span className="name">Bloggr</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block business magazine">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/circle.png" />
            <span className="name">Circle</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block blog portfolio others">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Forum.png" />
            <span className="name">Forum</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block photography magazine">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Funding.png" />
            <span className="name">Funding</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block business portfolio">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Geo-Shop.png" />
            <span className="name">Geo Shop</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block blog photography others">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/iPictures.png" />
            <span className="name">iPictures</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block photography magazine">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/News_Central.png" />
            <span className="name">News Central</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block business portfolio">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Sharehub.png" />
            <span className="name">Sharehub</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block blog portfolio others">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Shopilicious.png" />
            <span className="name">Shopilicious</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block photography magazine">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Shoppr.png" />
            <span className="name">Shoppr</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block blog business others">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Square.png" />
            <span className="name">Square</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block photography magazine">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Uri.png" />
            <span className="name">Uri</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block blog photography others">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/West_Side.png" />
            <span className="name">West Side</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block blog photography others">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/WooCommerce.png" />
            <span className="name">WooCommerce</span>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6 block blog photography others">
          <Link href="http://localhost/tests/DemoPage"><img src="../../assets/images/Youtuber.png" />
            <span className="name">Youtuber</span>
          </Link>
        </div>
      </section>
      <Link href="http://localhost/tests/DemoPage" className="btn btn-small btn-gray btn-center btn-next">Next</Link>
    </div>
  </main>
  <Footer />
</div>

    );
  }
}
