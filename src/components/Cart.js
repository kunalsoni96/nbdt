    import React, {Component} from 'react';
    import {BrowserRoute as Router, Route, Link} from 'react-router-dom';
    import './../index.css';
    import Navbar from './layouts/Navbar.js';
    import Footer from './layouts/Footer.js';


    export default class Cart extends Component {
        

    render(){
        
        return (

            <div>
            
    <Navbar />
    <main className="cart">
  <div className="container">
    <section className="text-block mb-70 text-center">
      <h4>Checkout</h4>
      <p><i className="fa fa-lock" aria-hidden="true" />This page uses 256-bit encryption. Your payment data is never stored locally.</p>
    </section>
    <section className="features border-decor-parent mb-60">
      <i className="btn-close" />
      <div className="row">
        <div className="col-md-4 col-sm-4 text-center">
          <img src="images/eiefy_0056_Product-2.png" alt />
        </div>
        <div className="col-md-8 col-sm-8">
          <div className="features-info">
            <h6 className="border-decor">Geo Shop - Groceries Shopping Website</h6>
            <table className="table">
              <tbody><tr>
                  <td>Support</td>
                  <td>12 Months</td>
                </tr>
                <tr>
                  <td>Updates</td>
                  <td>Free Lifetime</td>
                </tr>
                <tr>
                  <td>Domain Usage</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Included files</td>
                  <td>
                    <div className="tags">
                      <a href="#">psd</a>
                      <a href="#">css</a>
                      <a href="#">php</a>
                      <a href="#">js</a>
                      <a href="#">icons</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Refund Policy</td>
                  <td>30 Days, no-question asked</td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
    </section>
    <h5>Add additional service</h5>
    <section className="offers row mb-30">
      <div className="col-md-3 col-sm-6 col-xs-6">
        <a href="#">
          <div className="hover">
            <i className="btn-close" />
          </div>
          <img src="fonts/eiefy_icons/PSD.svg" alt />
          <p>Design Changes</p>
          <span>$50</span>
        </a>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-6">
        <a href="#">
          <div className="hover">
            <i className="btn-close" />
          </div>
          <img src="fonts/eiefy_icons/wordpress.svg" alt />
          <p>Customization</p>
          <span>$150</span>
        </a>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-6">
        <a href="#">
          <div className="hover">
            <i className="btn-close" />
          </div>
          <img src="fonts/eiefy_icons/Email.svg" alt />
          <p>Email Newsletter</p>
          <span>$60</span>
        </a>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-6">
        <a href="#">
          <div className="hover">
            <i className="btn-close" />
          </div>
          <img src="fonts/eiefy_icons/icon_design.svg" alt />
          <p>Change Icons</p>
          <span>$80</span>
        </a>
      </div>
    </section>
    <section className="cart-block row mb-40">
      <div className="col-md-8">
        <h5>Add additional service</h5>
        <div className="payment mb-30">
          <div className="payment-method">
            <div className="active"><img src="images/eiefy_0019_Payment_01.png" alt /></div>
            <div><img src="images/eiefy_0018_Payment_02.png" alt /></div>
            <div><img src="images/eiefy_0017_Payment_03.png" alt /></div>
          </div>
          <div className="payment-info">
            <label>Name on Card</label>
            <input type="text" className="form-control" />
            <label>Card Number</label>
            <input type="text" className="form-control" />
            <div className="row inline-select">
              <div className="col-md-7">
                <label>Expiry Date</label>
                <select name="expiryD" className="form-control">
                  <option>MM</option>
                  <option>Option #1</option>
                  <option>Option #2</option>
                </select>
                <span>/</span>
                <select name="expiryY" className="form-control">
                  <option>YY</option>
                  <option>Option #1</option>
                  <option>Option #2</option>
                </select>
              </div>
              <div className="col-md-5">
                <label>CVV</label>
                <input type="text" className="form-control" placeholder="Add" />
              </div>
            </div>
            <label className="checkbox-text">
              <label className="checkbox-default">
                <input type="checkbox" />
                <span className="arrow" />
              </label>
              <p>Save card for next time</p>
            </label>
            <table className="table mt-30">
              <tbody><tr className="total">
                  <td>Your Order Total</td>
                  <td>$101.00</td>
                </tr>
              </tbody></table>
            <a href="#" className="btn btn-small">Make Payment</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <h5>Order Summary</h5>
        <table className="table mb-30">
          <tbody><tr>
              <td>Geo shop - groceries ..</td>
              <td>$39.00</td>
            </tr>
            <tr>
              <td>Handling Fee:</td>
              <td>$2.00</td>
            </tr>
            <tr>
              <td>Email Newsletter</td>
              <td>$60.00</td>
            </tr>
            <tr className="total">
              <td>Total:</td>
              <td>$101.00</td>
            </tr>
          </tbody></table>
      </div>
    </section>
  </div>
</main>





    <Footer />
    </div>

        );
    }
    }
