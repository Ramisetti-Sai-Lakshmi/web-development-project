
  import React from 'react';
import { Link } from 'react-router-dom';
  class Home1 extends React.Component{
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
          <div className="slider-height-10 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-18.jpg)'}}>
            <div className="container">
              <div className="slider-content-5 slider-animated-1 text-left">
                <span className="animated">OFFICIAL Nedmi NOTE 5</span>
                <h1 className="animated">
                  <strong> Nedmi NOTE 5 PRO </strong><br />
                  India’s Camera Beast
                </h1>
                <p className="animated">The New Super Powerful Note Pre-Oder Starts From 2PM</p>
                <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
              </div>
            </div>
          </div>
          {/* Slider Single Item End */}
          {/* Slider Single Item Start */}
          <div className="slider-height-10 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-19.jpg)'}}>
            <div className="container">
              <div className="slider-content-5 slider-animated-1 text-left">
                <span className="animated">EXPLORE MORE</span>
                <h1 className="animated">
                  <strong>THE BIG OFFER</strong><br />
                  Extra 30% Off
                </h1>
                <p className="animated">On Select Electronics</p>
                <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
              </div>
            </div>
          </div>
          {/* Slider Single Item End */}
        </div>
      </div>
      {/* Slider Arae End */}
      {/* Static Area Start */}
      <section className="static-area home-10">
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
      {/* Banner Area Start */}
      <div className="banner-3-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="banner-wrapper mb-30px">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/24.jpg" alt /></a>
              </div>
              <div className="banner-wrapper mb-res-sm-30">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/25.jpg" alt /></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/23.jpg" alt /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Area End */}
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
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/1.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/1.jpg" alt />
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
                <h2><Link to="/img4" className="product-link">Fujitsu UH-X 11th Gen Intel Core i5 ..</Link></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star-outline" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.1,07,190</li>
                    <li className="current-price">Rs.80,990</li>
                    <li className="discount-price">-24%</li>
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
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/2.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                <br />
                <h2><Link to="/img5" className="product-link">ASUS VivoBook 15 (2020) Intel Core i3</Link></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star-half" />
                  <i className="ion-android-star-outline" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.50,990</li>
                    <li className="current-price">Rs.39,990</li>
                    <li className="discount-price">-22%</li>
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
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/3.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/3.jpg" alt />
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
                <br />
                <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                <br />
                <h2><Link to="/img6" className="product-link">Lenovo IdeaPad Slim 5..</Link></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star-outline" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.82,490</li>
                    <li className="current-price">Rs.57,990</li>
                    <li className="discount-price">-30%</li>
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
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                <h2><Link to="/img7" className="product-link">Victus by HP Ryzen 5 5600H 16.1-inch(40.9 cm)..</Link></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star-half" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.76,021</li>
                    <li className="current-price">Rs.66,990</li>
                    <li className="discount-price">-12%</li>
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
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/5.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/5.jpg" alt />
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
                <h2><Link to='/img13' className="product-link">Fujitsu UH-X 11th Gen Intel Core i5 13.3” (33.78cm)</Link></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star-half" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.1,15,090</li>
                    <li className="current-price">Rs.86,990</li>
                    <li className="discount-price">-24%</li>
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
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/6.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/6.jpg" alt />
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
                <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNAR</span></a>
                <h2><a href="single-product.html" className="product-link">ASUS ZenBook Flip 13 (2021) OLED, 13.3-inch (33.78 cms)</a></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star-half" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.1,33,990</li>
                    <li className="current-price">Rs.92,990</li>
                    <li className="discount-price">-31%</li>
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
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/7.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/7.jpg" alt />
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
                <h2><a href="single-product.html" className="product-link">Lenovo IdeaPad S540 11th Gen Intel Core i7 13.3" ..</a></h2>
                <div className="rating-product">
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                  <i className="ion-android-star" />
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price">Rs.1,11,890</li>
                    <li className="current-price">Rs.77,990</li>
                    <li className="discount-price">-30%</li>
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
                    <center> Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                  </a>
                </div>
                {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4></h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
              </div>
              <div className="category-list">
                <div className="category-thumb">
                  <a href="shop-4-column.html">
                    <img src="assets/images/product-image/electronics/thumb-2.jpg" alt />
                    <center> Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                  </a>
                </div>
                {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Fresh Salad & Dips</h4>
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
                    <img src="assets/images/product-image/electronics/thumb-3.jpg" alt />
                    <center> Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                  </a>
                </div>
                {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Fresh Fruit</h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
              </div>
              <div className="category-list">
                <div className="category-thumb">
                  <a href="shop-4-column.html">
                    <img src="assets/images/product-image/electronics/thumb-4.jpg" alt />
                    <center> Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
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
                    <center> Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                  </a>
                </div>
                {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Fresh Cream & Custard</h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
              </div>
              <div className="category-list">
                <div className="category-thumb">
                  <a href="shop-4-column.html">
                    <img src="assets/images/product-image/electronics/thumb-6.jpg" alt />
                    <center> Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                  </a>
                </div>
                {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Milk, Butter & Eggs</h4>
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
                    <center> Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                  </a>
                </div>
                {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Spreads & Margarine</h4>
                              </div>
                              <span class="number_product">17 Products</span>
                              <a href="shop-4-column.html"> Shop Now <i class="ion-android-arrow-dropright-circle"></i></a>
                          </div*/}
              </div>
              <div className="category-list">
                <div className="category-thumb">
                  <a href="shop-4-column.html">
                    <img src="assets/images/product-image/electronics/thumb-8.jpg" alt />
                    <center> Shop Now <i className="ion-android-arrow-dropright-circle" /></center>
                  </a>
                </div>
                {/*div class="desc-listcategoreis">
                              <div class="name_categories">
                                  <h4>Fresh Vegetables</h4>
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
      {/* Recent Add Product Area Start */}
      <section className="recent-add-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Section Title */}
              <div className="section-title">
                <h2>New Arrivals</h2>
                <p>Add new products to weekly line up</p>
              </div>
              {/* Section Title */}
            </div>
          </div>
          {/* Recent Product slider Start */}
          <div className="recent-product-slider owl-carousel owl-nav-style">
            <div className="product-inner-item">
              {/* Single Item */}
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img1.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/img1.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">Hitachi 1.5 Ton 5 Star Inverter Split AC (Copper RSOG518HDEA Gold)</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star-outline" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">Rs.60,080</li>
                      <li className="current-price">Rs.40,990</li>
                      <li className="discount-price">-32%</li>
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
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img2.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/1img2.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">Microware New Arrival 2.4Ghz Wireless Remote Control Flying Air Mouse USB Laser Pointer Mouse and Keyboard</a></h2>
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
                      <li className="current-price">Rs.1,599</li>
                      <li className="discount-price">-47%</li>
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
            {/* Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img3.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/img3.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">T Tinxy Device 1 Node 7A Smart Switch. Compatible with Alexa and Google Home</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="current-price">Rs.599</li>
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
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img4.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/img4.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">Waterproof Door Bell, Electronic Safety Door Bell Kit Wireless Door Bell with Flashing Light Indicator for..</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star-outline" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">Rs.7,1,79</li>
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
            {/* Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img5.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/img5.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">Lokza Wireless Doorbell ..</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star-outline" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">Rs.2,599</li>
                      <li className="current-price">Rs.1,099</li>
                      <li className="discount-price">-58%</li>
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
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img6.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/img6.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">DOTT PET Braided Unbreakable USB Type C Cable..</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">Rs.449</li>
                      <li className="current-price">Rs.429</li>
                      <li className="discount-price">-4%</li>
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
            {/* Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img7.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/img7.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">Crybaby Adjustable Aluminum Portable Laptop Rack</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star-outline" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">Rs.1,299</li>
                      <li className="current-price">Rs.799</li>
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
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img8.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/img8.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">HomeMate® Wi-Fi Smart Fan Regulator Touch Switch</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star-outline" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="current-price">Rs.2,590</li>
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
            {/* Single Item */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img9.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/img9.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">boAt Bassheads 100: Made in India in Ear Wired Earphones with Mic </a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star-outline" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="not-cut">Rs.349</li>
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
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/electronics/img10.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/electronics/img10.jpg" alt />
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
                  <h2><a href="single-product.html" className="product-link">boAt Bassheads 242 in Ear Wired Earphones with Mic(Neon Green)</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star-outline" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">Rs.1,490</li>
                      <li className="current-price">Rs.399</li>
                      <li className="discount-price">-73%</li>
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
            {/* Single Item */}
          </div>
          {/* Recent Area Slider End */}
        </div>
      </section>
      {/* Recent product area end */}
      {/* Banner Area 2 Start */}
      <div className="banner-area-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-inner">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/28.jpg" alt /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Area 2 End */}
      {/* Category Product  Area start*/}
      <section className="category-product-area home-10">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-12 col-xl-9">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-4">
                  {/* Section Title */}
                  <div className="section-title">
                    <h2>Audio &amp; Video</h2>
                  </div>
                  {/* Section Title */}
                  <div className="category-product-slider owl-carousel responsive-owl-nav-style owl-nav-style">
                    {/* Single Item */}
                    <div className="feature-slider-item">
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/1.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/1.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">AmazonBasics Component Video Cable with Audio - 15 Feet</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-half" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="current-price">Rs.1,149</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/2.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/14.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">garima electronics Spy Pen Camera Full HD Hidden Camera Quality Video/Audio Home Security Recording, HD Sound Clarity Camera with Memory Card Inserting Facility</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price">Rs.2,200</li>
                              <li className="current-price">Rs.999</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/3.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/4.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Technoview Spy Cameras Portable Mini Keychain Video Audio Recorder Camera, 2021 New Version HD Small Security DVR Hidden Camera Mini Recording Device Security</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="current-price">Rs.670</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Single Item */}
                    <div className="feature-slider-item">
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/5.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/6.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">spy Pen Camera 16GB Full HD Pen Wired Camera Audio.Video. Updated Model 2020 Everything is Updated and Best Performance Ever Special Customer Service (Gold)</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="current-price">Rs.850</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/7.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/8.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Spy Camera m mhb HD Spy Pen Camera Video/ Audio Hidden Recording,HD Sound Clearity Pen Wired Camera Updated Model Series-1 with Built in Memory. Everything..</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price not-cut">Rs.1,499</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/9.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/10.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">TECHNOVIEW Spy USB Pen Drive Shape Camera Hidden Small Lens HD Mini Camera, Spy Cam Pendrive with Video and Audio Recording Feature, Pen Drive U8 Spport Up to 32GB SD Card(Black)</a></h2>
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
                              <li className="current-price">Rs.899</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Single Item */}
                    {/* Single Item */}
                  </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-4">
                  {/* Section Title */}
                  <div className="section-title mt-res-sx-30px mt-res-md-30px">
                    <h2>Camera &amp; Photo</h2>
                  </div>
                  {/* Section Title */}
                  <div className="category-product-slider owl-carousel responsive-owl-nav-style owl-nav-style">
                    {/* Single Item */}
                    <div className="feature-slider-item">
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/5.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/6.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Canon Store Canon IVY CLIQ 2 Instant Camera Printer, Mini Photo Printer, Petal Pink (Matte)</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-half" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price">Rs.25,999</li>
                              <li className="current-price">Rs.14,028</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/7.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/8.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Ring Light with Tripod Stand - 12" Inches Big Professional LED Ring Light with Stand for Photo and Video with 7 Feet Stand Compatible with Camera and Smartphones for</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="current-price">Rs.949</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/9.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/10.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Right Plus 10" LED Ring Light with Tripod Stand for YouTube Photo-Shoot Video Shoot Live Stream | Instagram | Selfie | Photography | vlogging | Makeup | iPhone | Android</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="current-price">Rs.899</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Single Item */}
                    <div className="feature-slider-item">
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/1.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/1.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">
                              CAMSIR Fujifilm Instax Mini 8/Mini 8+/Mini 9 Crystal Case Crystal Camera Case With Adjustable Rainbow Shoulder Strap for Fujifilm Instax Mini 8/Mini 8+/Mini 9 Instant</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-half" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price">Rs.2,990</li>
                              <li className="current-price">Rs.699</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/2.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/14.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">SYGA 1 Piece Orange Coloured DSLR Camera Shoulder Strap</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price not-cut">Rs.199</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/3.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/4.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">
                              VTS Video/Still Photography Studio Wall Ceiling Mount Arm Stand Boom Overhead with 1/4" Thread for Camera Photo Studio Video Strobe Light, Flash, Ring Light</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-half" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price">Rs.1,500</li>
                              <li className="current-price">Rs.750</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Single Item */}
                    {/* Single Item */}
                  </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-4">
                  {/* Section Title */}
                  <div className="section-title mt-res-sx-30px mt-res-md-30px">
                    <h2>Smart Electronics</h2>
                  </div>
                  {/* Section Title */}
                  <div className="category-product-slider owl-carousel responsive-owl-nav-style owl-nav-style">
                    {/* Single Item */}
                    <div className="feature-slider-item">
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/12.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/13.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Zebronics Zeb-IR Blaster Smart WiFi Universal Remote with Built in Alexa, for TV/AC/Speaker/DTH (Black)</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="current-price">Rs.941</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/11.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/11.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">QAWACHH® Bluetooth Smart Sensor Electronic Fingerprint Lock,Heavy Gauge(Black)</a></h2>
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
                              <li className="current-price">Rs.3,199</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/1.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/1.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">
                              LAVNA Smart Digital Lock L-A28 with Bluetooth Mobile App, Fingerprint, PIN, OTP, RFID Card and Manual Key</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="current-price">Rs.7,800</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Single Item */}
                    <div className="feature-slider-item">
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/5.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/6.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Smart Electronic Lock, Automatic Pop-Up Safe and Durable Waterproof Induction Lock, for Pedicure Spas, Large</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="current-price">Rs.1,309</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/7.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/8.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">
                              HomeMate® Wi-Fi Smart IR Control Hub (Pack of 1) | Smart Air Conditioner Remote | Compatible With Alexa, Google Home | All...
                            </a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="current-price">Rs.1,099</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            {/*img class="first-img" src="assets/images/product-image/electronic/9.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/electronic/10.jpg" alt="" /*/}
                          </a>
                          <div className="quick-view">
                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                              <i className="ion-ios-search-strong" />
                            </a>
                          </div>
                        </div>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Vantro Smart Digital Electronic Safe with Fingerprint Scanner for Home, Office &amp; Hotel (16 Liter)</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star-outline" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price">Rs.11,999</li>
                              <li className="current-price">Rs.7,999</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Single Item */}
                    {/* Single Item */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-12 col-lg-12 d-lg-none d-xl-block col-xl-3 mtb-res-sm-30 mtb-res-md-30">
              <div className="banner-inner">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/29.jpg" alt className="img-responsive" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category Product  Area end*/}
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
    {/*====== Plugins js ======*/}
    {/* 
  
  
  
  
  
  
  
  
  
   */}
    {/*====== Use the minified version files listed below for better performance and remove the files listed above ======*/}
    {/* Main Activation JS */}
    </div>
  </div>
      )
     }
   }
export default Home1;

