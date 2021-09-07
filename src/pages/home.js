import React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component{
    render(){
        return(
            <div>
            <div>
  {/* <div id="preloader">
  <div class="preloader">
      <span></span>
      <span></span>
  </div>
    </div> */}
 
    {/* Slider Arae Start */}
    <div className="slider-area">
      <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
        {/* Slider Single Item Start */}
        <div className="slider-height-9 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-16.jpg)'}}>
          <div className="container">
            <div className="slider-content-5 slider-animated-1 text-left">
              <span className="animated">SOUNLINK SPEAKERS</span>
              <h1 className="animated">
                <strong> WIN Nedmi PULSE </strong> <br />
                Bluetooth Speakers
              </h1>
              <p className="animated">Big Sound. Portable Size.</p>
              <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
            </div>
          </div>
        </div>
        {/* Slider Single Item End */}
        {/* Slider Single Item Start */}
        <div className="slider-height-9 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-17.jpg)'}}>
          <div className="container">
            <div className="slider-content-5 slider-animated-1 text-left">
              <span className="animated">NEW FROM MANASONIC</span>
              <h1 className="animated">
                <strong>KUMIX EC-45</strong> <br />
                Camera Seminar
              </h1>
              <p className="animated">Super Smooth 4k / Manasonic Sensor</p>
              <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
            </div>
          </div>
        </div>
        {/* Slider Single Item End */}
      </div>
    </div>
    {/* Slider Arae End */}
    {/* Banner Area Start */}
    <div className="banner-3-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30 mb-res-sm-30">
            <div className="banner-wrapper">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/23.jpg" alt /></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="banner-wrapper mb-30px">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/24.jpg" alt /></a>
            </div>
            <div className="banner-wrapper">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/25.jpg" alt /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Banner Area End */}
    {/* Static Area Start */}
    <section className="static-area">
      <div className="container">
        <div className="static-area-wrap">
          <div className="row">
            {/* Static Single Item Start */}
            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
              <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0">
                <img src="assets/images/icons/static-icons-1.png" alt className="img-responsive" />
                <div className="single-static-meta">
                  <h4>Free Shipping</h4>
                  <p>On all orders over $75.00</p>
                </div>
              </div>
            </div>
            {/* Static Single Item End */}
            {/* Static Single Item Start */}
            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
              <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0 pt-res-xs-20">
                <img src="assets/images/icons/static-icons-2.png" alt className="img-responsive" />
                <div className="single-static-meta">
                  <h4>Free Returns</h4>
                  <p>Returns are free within 9 days</p>
                </div>
              </div>
            </div>
            {/* Static Single Item End */}
            {/* Static Single Item Start */}
            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
              <div className="single-static pt-res-md-30 pb-res-sm-30 pb-res-xs-0 pt-res-xs-20">
                <img src="assets/images/icons/static-icons-3.png" alt className="img-responsive" />
                <div className="single-static-meta">
                  <h4>100% Payment Secure</h4>
                  <p>Your payment are safe with us.</p>
                </div>
              </div>
            </div>
            {/* Static Single Item End */}
            {/* Static Single Item Start */}
            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
              <div className="single-static pt-res-md-30 pb-res-sm-30 pt-res-xs-20">
                <img src="assets/images/icons/static-icons-4.png" alt className="img-responsive" />
                <div className="single-static-meta">
                  <h4>Support 24/7</h4>
                  <p>Contact us 24 hours a day</p>
                </div>
              </div>
            </div>
            {/* Static Single Item End */}
          </div>
        </div>
      </div>
    </section>
    {/* Static Area End */}
    {/* Best Sells Area Start */}
    <section className="best-sells-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h2>Best Sellers</h2>
              <p>Add bestselling products to weekly line up</p>
            </div>
            {/* Section Title Start */}
          </div>
        </div>
        {/* Best Sell Slider Carousel Start */}
        <div className="best-sell-slider owl-carousel owl-nav-style">
          {/* Single Item */}
          <article className="list-product">
            {/*div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/electronic/1.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/electronic/1.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div*/}
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <img src="assets/images/img.jpg" /><br />
              <h2><Link to="/img" className="product-link">oneplus nord 2 5g blue haze (8gb ram 128gb storage)</Link></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  {/*li class="old-price">€18.90</li*/}
                  <li className="current-price">Rs.29,999</li>
                  {/*li class="discount-price">-5%</li*/}
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            {/*div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/electronic/2.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/electronic/2.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div*/}
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <img src="assets/images/img1.jpg" /><br />
              <h2><Link to="/img1" className="product-link">Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage) </Link></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star-half" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">Rs.22,999</li>
                  <li className="current-price">Rs.15,499</li>
                  <li className="discount-price">-33%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            {/*div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/electronic/3.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/electronic/4.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div*/}
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
              <img src="assets/images/img2.jpg" /><br />
              <h2><Link to="/img2" className="product-link">Redmi 9A (Sea Blue 2GB RAM 32GB Storage) |2GHz Octa-core Helio G25 ..</Link></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star-outline" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">Rs.8,499</li>
                  <li className="current-price">Rs.6,799</li>
                  <li className="discount-price">-20%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            {/*div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/electronic/5.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/electronic/6.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div*/}
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
              <img src="assets/images/img3.jpg" /><br />
              <h2><Link to="/img3" className="product-link">Redmi 9 (Carbon Black, 4GB RAM, 64GB Storage)2.3GHz Mediatek..</Link></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star-outline" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">Rs.10,999</li>
                  <li className="current-price">Rs.8,999</li>
                  <li className="discount-price">-18%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            {/*div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/electronic/7.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/electronic/8.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div*/}
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <img src="assets/images/img4.jpg" /><br />
              <h2><Link to="/img12" className="product-link"> OnePlus Nord CE 5G (Charcoal Ink, 6GB RAM, 128GB Storage</Link></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star-outline" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="current-price">Rs.22,999</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            {/*div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/electronic/9.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/electronic/10.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div*/}
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNAR</span></a>
              <img src="assets/images/img5.jpg" /><br />
              <h2><a href="single-product.html" className="product-link">realme C11 (2021) (Cool Grey, 2GB RAM, 32GB Storage)</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star-outline" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">Rs.7,999</li>
                  <li className="current-price">Rs.6,699</li>
                  <li className="discount-price">-16%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            {/*div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/electronic/11.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/electronic/11.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div*/}
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <img src="assets/images/img6.jpg" /><br />
              <h2><a href="single-product.html" className="product-link">Redmi Note 10 Pro Max (Glacial Blue, 6GB RAM, 128GB Storage)</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star-outline" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">Rs.22,999</li>
                  <li className="current-price">Rs.19,999</li>
                  <li className="discount-price">-13%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
        </div>
        {/* Best Sell Slider Carousel End */}
      </div>
    </section>
    {/* Best Sell Area End */}
    {/* Category Area Start */}
    <section className="categorie-area mb-60px mt-30">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title */}
            <div className="section-title mt-res-sx-30px mt-res-md-30px">
              <h2>Popular Categories</h2>
              <p>Add Popular Categories to weekly line up</p>
            </div>
            {/* Section Title */}
          </div>
        </div>
        {/* Category Slider Start */}
        <div className="category-slider owl-carousel owl-nav-style">
          {/* Single item */}
          <div className="category-item">
            <div className="category-list mb-30px">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronics/thumb-1.jpg" alt />
                  <center>Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                </a>
              </div>
              {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Laptops</h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
            </div>
            <div className="category-list">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronics/thumb-2.jpg" alt />
                  <center>Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                </a>
              </div>
              {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Headphones & Speakers
                                  </h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
            </div>
          </div>
          {/* Single item */}
          <div className="category-item">
            <div className="category-list mb-30px">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronics/thumb-3.jpg" alt /><br />
                  <center>Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                </a>
              </div>
              {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Tablets/h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
            </div>
            <div className="category-list">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronics/thumb-4.jpg" alt />
                  <center>Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                </a>
              </div>
              {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Baking & Cooking</h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
            </div>
          </div>
          {/* Single item */}
          <div className="category-item">
            <div className="category-list mb-30px">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronics/thumb-5.jpg" alt />
                  <center>Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                </a>
              </div>
              {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Digital Camaras</h4>
                                  <center>Shop Now <i class="ion-android-arrow-dropright-circle"></i></center>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
            </div>
            <div className="category-list">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronics/thumb-6.jpg" alt />
                  <center>Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                </a>
              </div>
              {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Mobiles</h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
            </div>
          </div>
          {/* Single item */}
          <div className="category-item">
            <div className="category-list mb-30px">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronics/thumb-7.jpg" alt />
                  <center>Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                </a>
              </div>
              {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Television</h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
            </div>
            <div className="category-list">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronics/thumb-8.jpg" alt />
                  <center>Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                </a>
              </div>
              {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Bluetooth and earphones</h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
            </div>
          </div>
          {/* Single item */}
        </div>
      </div>
    </section>
    {/* Category Area End  */}
    {/* Hot deal area Start */}
    <section className="hot-deal-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title */}
            <div className="section-title">
              <h2>Hot Deals</h2>
              <p>Add hot products to weekly line up</p>
            </div>
            {/* Section Title */}
          </div>
        </div>
        {/* Hot Deal Slider 2 Start */}
        <div className="hot-deal-2 owl-carousel owl-nav-style">
          {/* Single Item */}
          <article className="list-product">
            <div className="hot-item-inner">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronics/8.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronics/8.jpg" alt />
                </a>
                <div className="quick-view">
                  <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                    <i className="ion-ios-search-strong" />
                  </a>
                </div>
              </div>
              <ul className="product-flag">
                <li className="new">New</li>
              </ul>
            </div>
            <div className="product-wrapper">
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">
                    Redmi Note 10 (Aqua Green, 4GB RAM, 64GB Storage) -Amoled Dot Display | 48MP Sony Sensor IMX582 | Snapdragon 678 Processor</a></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star-outline" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.15,999</li>
                    <li className="current-price">Rs.12,999</li>
                    <li className="discount-price">-19%</li>
                  </ul>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>Available In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="hot-item-inner">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronics/4.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronics/4.jpg" alt />
                </a>
                <div className="quick-view">
                  <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                    <i className="ion-ios-search-strong" />
                  </a>
                </div>
              </div>
              <ul className="product-flag">
                <li className="new">New</li>
              </ul>
            </div>
            <div className="product-wrapper">
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">Zebronics ZEB-KM2100 Multimedia USB Keyboard Comes with 114 Keys Including 12 Dedicated Multimedia Keys</a></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star-half" />
                  <i className="ion-android-star-outline" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.399</li>
                    <li className="current-price">Rs.299</li>
                    <li className="discount-price">-25%</li>
                  </ul>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>Available In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="hot-item-inner">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronics/1.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronics/1.jpg" alt />
                </a>
                <div className="quick-view">
                  <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                    <i className="ion-ios-search-strong" />
                  </a>
                </div>
              </div>
              <ul className="product-flag">
                <li className="new">New</li>
              </ul>
            </div>
            <div className="product-wrapper">
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">Zebronics Zeb-Alex Wired USB Optical Mouse with 3 Buttons</a></h2><br /><br />
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star-outline" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.229</li>
                    <li className="current-price">Rs.129</li>
                    <li className="discount-price">-44%</li>
                  </ul>
                </div>
                <div className="add-to-link">
                  <ul>
                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>Available In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </div>
          </article>
          {/* Single Item */}
        </div>
        {/* Hot Deal Slider 2 Start */}
      </div>
    </section>
    {/* Hot Deal Area End */}
    {/* Category Tab Area Start */}
    <section className="category-tab-area sub-category-owl-nav mt-30">
      <div className="container">
        <div className="section-title">
          <h2>Smart Electronics</h2>
          {/* Nav tabs */}
          <ul className="nav nav-tabs sub-category mb-30px">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#feature">Wearable Devices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#onsale">Smart Home Appliances</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bestseller">Smart Remote Controls</a>
            </li>
          </ul>
        </div>
        {/* Tab panes */}
        <div className="tab-content">
          {/* 1st tab start */}
          <div id="feature" className="tab-pane active">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/26.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Lenovo™ 300 FHD Webcam..</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            {/*li class="old-price">€23.90</li*/}
                            <li className="current-price">Rs.2,649</li>
                            {/*li class="discount-price">-10%</li*/}
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/10.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/10.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                        <h2><a href="single-product.html" className="product-link">Logitech G PRO Wireless..</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-half" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price not-cut">Rs.10,995</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">CORSAIR K55 RGB PRO - Dynamic RGB Backlighting </a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-half" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.6,700</li>
                            <li className="current-price">Rs.3,599</li>
                            <li className="discount-price">-46%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                </div>
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 1st tab end */}
          {/* 2nd tab start */}
          <div id="onsale" className="tab-pane fade">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/26.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/16.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/16.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Amazon Echo (4th Gen)
                          </a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-half" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">$99.99</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/17.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/17.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                        <h2><a href="single-product.html" className="product-link">Google Home Max</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price not-cut">$399</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/18.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/18.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Sonos One (Gen 2)</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">$199.00</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/19.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/19.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">ConnectSense Smart Outlet 2</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">$59.95</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                </div>
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 2nd tab end */}
          {/* 3rd tab start */}
          <div id="bestseller" className="tab-pane fade">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/26.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/20.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/20.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">E remote in electronics DRS Compatible Remotes for Samsung Smart 4K Ultra HD</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-half" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.499</li>
                            <li className="current-price">Rs.270</li>
                            <li className="discount-price">-46%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/21.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/21.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                        <h2><a href="single-product.html" className="product-link">Microware C120 2.4GHz..</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price not-cut">Rs.799</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/22.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/22.jpg" alt />
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">AUSHA® 1 Air Mouse or Remote Control 2.4GHz</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.1,999</li>
                            <li className="current-price">Rs.998</li>
                            <li className="discount-price">-50%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                </div>
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 3rd tab end */}
        </div>
      </div>
    </section>
    {/* Category Tab Area end */}
    {/* Category Tab Area Start */}
    <section className="category-tab-area sub-category-owl-nav mt-30">
      <div className="container">
        <div className="section-title">
          <h2>Portable Audio &amp; Video</h2>
          {/* Nav tabs */}
          <ul className="nav nav-tabs sub-category mb-30px">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#feature-2">Headphones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#onsale-2">Speakers</a>
            </li>
            <li className="nav-item">
              {/*a class="nav-link" data-toggle="tab" href="#bestseller-2">MP3 Players</a*/}
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bestseller-3">Microphones</a>
            </li>
          </ul>
        </div>
        {/* Tab panes */}
        <div className="tab-content">
          {/* 1st tab start */}
          <div id="feature-2" className="tab-pane active">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/13.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/13.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">JBL Quantum 100 by Harman, Wired Over Ear Gaming Headphones with Detachable Mic for PC, Mobile, Laptop, PS4, Xbox, Nintendo Switch, VR (Black)</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.3,999</li>
                            <li className="current-price">Rs.2,499</li>
                            <li className="discount-price">-38%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/12.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/12.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                        <h2><a href="single-product.html" className="product-link">Cosmic Byte G2050 RGB 7.1 Surround Sound USB Gaming Headphone for PS5, PC with Software and Gel Microphone (Blue)</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">Rs.1,599</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/8.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/8.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Cosmic Byte GS430 Gaming Headphone, 7 Color RGB LED and Microphone for PC, PS5, Xbox, Mobiles, Tablets, Laptops (Black)</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.1,399</li>
                            <li className="current-price">Rs.849</li>
                            <li className="discount-price">-39%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/4.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/4.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Redgear Cloak Wired RGB Gaming Headphones with Microphone for PC</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.1,799</li>
                            <li className="current-price">Rs.839</li>
                            <li className="discount-price">-53%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/14.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/2.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">ZEBRONICS Zeb-Grace Headphone with Mic with Dual 3.5mm Connectors, for PC/Laptops, Adjustable Headband &amp; Mic, Cushion Earcups, LED Indicators, Multifunction Control Pod, Black</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-half" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">Rs.499</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/15.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/15.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">LAPCARE Stereo Headset LWS-004 Headphone with Flexible Mic for PC, Mobiles, Play Station, Xbox, Tablets</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">Rs.569</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/15.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/15.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Klikk Rock On 101 Wireless Headphone with Mic, 30 Hours Playtime and 6 Months on Standby/Foldable &amp; Rotatable Compact Design with Google/Siri Voice Assistance (Blue)</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">Rs.2,999</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 1st tab end */}
          {/* 2nd tab start */}
          <div id="onsale-2" className="tab-pane fade">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/13.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/13.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Artis Mini 2.0 USB Multimedia Speakers (Red)</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.699</li>
                            <li className="current-price">Rs.399</li>
                            <li className="discount-price">-43%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/12.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/12.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                        <h2><a href="single-product.html" className="product-link">Zebronics Zeb Wonderbar 10 USB Powered 2.0 Computer Speaker with RGB Lights</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">Rs.799</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/8.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/8.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Zebronics Zeb-Warrior 2.0 Multimedia Speaker with Aux Connectivity,USB Powered and Volume Control</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.1,199</li>
                            <li className="current-price">Rs.559</li>
                            <li className="discount-price">-53%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/4.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/4.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">iBall Heavy Bass Thunder 2.1 Multimedia Speakers (Black)</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.4,999</li>
                            <li className="current-price">Rs.1,999</li>
                            <li className="discount-price">-60%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/14.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/2.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Zinq Technologies Beast Portable Laptop/Desktop USB 2.0 Powered Multimedia Speaker with AUX Input, deep bass, LED Lights, 3.5mm Audio Input (Black)</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">Rs.399</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd tab end */}
          {/* 4rd tab start */}
          <div id="bestseller-3" className="tab-pane fade">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/13.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/13.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Redgear Shadow Vox Gaming Microphone</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-half" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.3,499</li>
                            <li className="current-price">Rs.2,499</li>
                            <li className="discount-price">-29%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/12.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/12.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                        <h2><a href="single-product.html" className="product-link">Maono AU-100 Condenser Clip On Lavalier Microphone with 6 Meters Audio Cable</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.2,499</li>
                            <li className="current-price">Rs.649</li>
                            <li className="discount-price">-74%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/8.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/8.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">MAGBOT XT Advance Handheld Wireless Singing Mike Multi-function Bluetooth Karaoke Mic with Microphone</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-half" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.2,999</li>
                            <li className="current-price">Rs.599</li>
                            <li className="discount-price">-80%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/4.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/4.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">AKG Lyra Ultra-HD, Four Capsule, Multi-Capture Mode, USB-C Condenser Microphone for Calling, Recording and..</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-half" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="old-price">Rs.19,199</li>
                            <li className="current-price">Rs.6,999</li>
                            <li className="discount-price">-64%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          {/*img class="first-img" src="assets/images/product-image/electronic/14.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/2.jpg" alt="" /*/}
                        </a>
                        <div className="quick-view">
                          <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                            <i className="ion-ios-search-strong" />
                          </a>
                        </div>
                      </div>
                      <ul className="product-flag">
                        <li className="new">New</li>
                      </ul>
                      <div className="product-decs">
                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                        <h2><a href="single-product.html" className="product-link">Powerpak BM 800 Blue Professional Condenser Microphone with Metal Shock Mount</a></h2>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star-outline" />
                        </div>
                        <div className="pricing-meta">
                          <ul>
                            <li className="current-price">Rs.1,199</li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-to-link">
                        <ul>
                          <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                          <li>
                            <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                          </li>
                          <li>
                            <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 4rd tab end */}
        </div>
      </div>
    </section>
    {/* Category Tab Area end */}
    {/* Blog area Start */}
    <section className="blog-area mb-30px mt-30">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section title */}
            <div className="section-title">
              <h2>Latest Blogs</h2>
              <p>Present posts in a best way to highlight interesting moments of your blog.</p>
            </div>
            {/* Section title */}
          </div>
        </div>
        {/* Blog Slider Start */}
        <div className="blog-slider-active owl-carousel owl-nav-style">
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="assets/images/blog-image/blog-5.jpg" alt />
              </div>
            </div>
            <div className="blog-post-content d-flex">
              <div className="blog-post-content-cell">
                <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
                <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is First Post For Electronics For You</a></h4>
                <p className="blog-text">
                  Electronics For You is the digital avatar of Electronics For You magazine. It was launched in 1969, and is counted amongst the leading publications..
                </p>
                <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="assets/images/blog-image/blog-6.jpg" alt />
              </div>
            </div>
            <div className="blog-post-content d-flex">
              <div className="blog-post-content-cell">
                <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
                <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Secound Post For All about circiuts</a></h4>
                <p className="blog-text">
                  All About Circuits is an international, web-based community of electrical engineers and designers seeking ideas, education,..
                </p>
                <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="assets/images/blog-image/blog-7.jpg" alt />
              </div>
            </div>
            <div className="blog-post-content d-flex">
              <div className="blog-post-content-cell">
                <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
                <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Thrid Post For Electronic Design</a></h4>
                <p className="blog-text">
                  Electronic Design is the trusted resource for more than 50 years, the Penton Electronics Group is the electronic design engineer's source..
                </p>
                <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="assets/images/blog-image/blog-8.jpg" alt />
              </div>
            </div>
            <div className="blog-post-content">
              <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
              <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Foruth Post For EDN Network</a></h4>
              <p className="blog-text">
                The EDN Network is an electronics community for engineers, by engineers, with the information, tools, courses, and professional connections..
              </p>
              <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </article>
          {/* single item */}
        </div>
        {/* Blog Slider Start */}
      </div>
    </section>
    {/* Blog Area End */}
    {/* Brand area start */}
    <div className="brand-area">
      <div className="container">
        <div className="brand-slider owl-carousel owl-nav-style owl-nav-style-2">
          <div className="brand-slider-item">
            <a href="#"><img src="assets/images/brand-logo/1.jpg" alt /></a>
          </div>
          <div className="brand-slider-item">
            <a href="#"><img src="assets/images/brand-logo/2.jpg" alt /></a>
          </div>
          <div className="brand-slider-item">
            <a href="#"><img src="assets/images/brand-logo/3.jpg" alt /></a>
          </div>
          <div className="brand-slider-item">
            <a href="#"><img src="assets/images/brand-logo/4.jpg" alt /></a>
          </div>
          <div className="brand-slider-item">
            <a href="#"><img src="assets/images/brand-logo/5.jpg" alt /></a>
          </div>
          <div className="brand-slider-item">
            <a href="#"><img src="assets/images/brand-logo/1.jpg" alt /></a>
          </div>
          <div className="brand-slider-item">
            <a href="#"><img src="assets/images/brand-logo/2.jpg" alt /></a>
          </div>
        </div>
      </div>
    </div>
    {/* Brand area end */}

  </div>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="tab-content quickview-big-img">
                <div id="pro-1" className="tab-pane fade show active">
                  <img src="assets/images/product-image/electronic/1.jpg" alt />
                </div>
                <div id="pro-2" className="tab-pane fade">
                  <img src="assets/images/product-image/electronic/2.jpg" alt />
                </div>
                <div id="pro-3" className="tab-pane fade">
                  <img src="assets/images/product-image/electronic/3.jpg" alt />
                </div>
                <div id="pro-4" className="tab-pane fade">
                  <img src="assets/images/product-image/electronic/4.jpg" alt />
                </div>
              </div>
              {/* Thumbnail Large Image End */}
              {/* Thumbnail Image End */}
              <div className="quickview-wrap mt-15">
                <div className="quickview-slide-active owl-carousel nav owl-nav-style owl-nav-style-2" role="tablist">
                  <a className="active" data-toggle="tab" href="#pro-1"><img src="assets/images/product-image/electronic/1.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-2"><img src="assets/images/product-image/electronic/2.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-3"><img src="assets/images/product-image/electronic/3.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-4"><img src="assets/images/product-image/electronic/4.jpg" alt /></a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>Originals Kaval Windbr</h2>
                <p className="reference">Reference:<span> demo_17</span></p>
                <div className="pro-details-rating-wrap">
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <span className="read-review"><a className="reviews" href="#">Read reviews (1)</a></span>
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price not-cut">€18.90</li>
                  </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                <div className="pro-details-size-color">
                  <div className="pro-details-color-wrap">
                    <span>Color</span>
                    <div className="pro-details-color-content">
                      <ul>
                        <li className="blue" />
                        <li className="maroon active" />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                  </div>
                  <div className="pro-details-cart btn-hover">
                    <a href="#"> + Add To Cart</a>
                  </div>
                </div>
                <div className="pro-details-wish-com">
                  <div className="pro-details-wishlist">
                    <a href="#"><i className="ion-android-favorite-outline" />Add to wishlist</a>
                  </div>
                  <div className="pro-details-compare">
                    <a href="#"><i className="ion-ios-shuffle-strong" />Add to compare</a>
                  </div>
                </div>
                <div className="pro-details-social-info">
                  <span>Share</span>
                  <div className="social-info">
                    <ul>
                      <li>
                        <a href="#"><i className="ion-social-facebook" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="ion-social-twitter" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="ion-social-google" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="ion-social-instagram" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal end */}
  {/* Scripts to be loaded  */}
  {/* JS
============================================ */}
  {/*====== Vendors js ======*/}
  <script src="assets/js/vendor/jquery-3.5.1.min.js"></script>
  <script src="assets/js/vendor/modernizr-3.7.1.min.js"></script>
  {/*====== Plugins js ======*/}
  {/*<script src="assets/js/plugins/bootstrap.min.js"></script>
        <script src="assets/js/plugins/popper.min.js"></script>
        <script src="assets/js/plugins/meanmenu.js"></script>
        <script src="assets/js/plugins/owl-carousel.js"></script>
        <script src="assets/js/plugins/jquery.nice-select.js"></script>
        <script src="assets/js/plugins/countdown.js"></script>
        <script src="assets/js/plugins/elevateZoom.js"></script>
        <script src="assets/js/plugins/jquery-ui.min.js"></script>
        <script src="assets/js/plugins/slick.js"></script>
        <script src="assets/js/plugins/scrollup.js"></script>
        <script src="assets/js/plugins/range-script.js"></script> 
   */}
  {/*====== Use the minified version files listed below for better performance and remove the files listed above ======*/}
  <script src="assets/js/plugins.min.js"></script>
  {/* Main Activation JS */}
  <script src="assets/js/main.js"></script>
</div>

        
        )
    }
}
export default Home;