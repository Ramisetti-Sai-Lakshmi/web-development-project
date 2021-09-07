import React from 'react'
import { Link } from 'react-router-dom';

export default function img13() {
    return (

   <div>
    <div>
  {/* Breadcrumb Area start */}
  <section className="breadcrumb-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-hrading">Single Product Page</h1>
            <ul className="breadcrumb-links">
              <li><a href="index.html">Home</a></li>
              <li>Single Product</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Area End */}
  {/* Shop details Area start */}
  <section className="product-details-area mtb-60px">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12">
          <div className="product-details-img product-details-tab">
            <div className="zoompro-wrap zoompro-2">
              <div className="zoompro-border zoompro-span">
                <img className="zoompro" src="assets/images/product-image/electronic/5.jpg" data-zoom-image="assets/images/product-image/electronic/zoom/5.jpg" alt />
              </div>
            </div>
           {/*} <div id="gallery" className="product-dec-slider-2">
              <a className="active" data-image="assets/images/img.jpg" data-zoom-image="assets/images/zoom/1.jpg">
                <img src="assets/images/img.jpg" alt />
              </a>
              <a data-image="assets/images/img1.jpg" data-zoom-image="assets/images/zoom/2.jpg">
                <img src="assets/images/img1.jpg" alt />
              </a>
              <a data-image="assets/images/img2.jpg" data-zoom-image="assets/images/zoom/3.jpg">
                <img src="assets/images/img2.jpg" alt />
              </a>
              <a data-image="assets/images/product-image/organic/product-19.jpg" data-zoom-image="assets/images/product-image/organic/zoom/4.jpg">
                <img src="assets/images/product-image/organic/product-19.jpg" alt />
              </a>
    </div>*/}
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12">
          <div className="product-details-content">
            <h2>Fujitsu UH-X 11th Gen Intel Core i5 13.3” (33.78cm)</h2>
            <p className="reference">Reference:<span> demo_17</span></p>
            <div className="pro-details-rating-wrap">
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star-outline" />
              </div>
              <span className="read-review"><a className="reviews" href="#">Read reviews (1)</a></span>
            </div>
            <div className="pricing-meta">
              <ul>
                <li className="old-price not-cut">Rs.88,990</li>
              </ul>
            </div>
            <p>Fujitsu UH-X 11th Gen Intel Core i5 13.3” (33.78cm) FHD IPS 400Nits 2-in1 Touch Convertible Laptop (8GB/512GB SSD/Win10/Office/Iris Xe Graphics/Backlit Kb/Black/997gms), 4ZR1D71992
            </p>
            <div className="pro-details-list">
              <ul>
                <li>-Processor: 11th Gen Intel Tiger Lake Core i5-1135G7 | Speed: 2.4 GHz (Base) - 4.2 GHz (Max) | 4 Cores | 8MB Cache</li>
                <li>- Operating System:Pre-Loaded Windows 10 Home with Lifetime Validity</li>
              </ul>
            </div>
            <div className="pro-details-quality mt-0px">
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
            <div className="pro-details-policy">
              <ul>
                <li><img src="assets/images/icons/policy.png" alt /><span>Security Policy (Edit With Customer Reassurance Module)</span></li>
                <li><img src="assets/images/icons/policy-2.png" alt /><span>Delivery Policy (Edit With Customer Reassurance Module)</span></li>
                <li><img src="assets/images/icons/policy-3.png" alt /><span>Return Policy (Edit With Customer Reassurance Module)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shop details Area End */}
  {/* product details description area start */}
  <div className="description-review-area mb-60px">
    <div className="container">
      <div className="description-review-wrapper">
        <div className="description-review-topbar nav">
          <a data-toggle="tab" href="#des-details1">Description</a>
          <a className="active" data-toggle="tab" href="#des-details2">Product Details</a>
          <a data-toggle="tab" href="#des-details3">Reviews (2)</a>
        </div>
        <div className="tab-content description-review-bottom">
          <div id="des-details2" className="tab-pane active">
            <div className="product-anotherinfo-wrapper">
              <ul>
                <li><span>Weight</span> 997 g</li>
                <li><span>Dimensions</span>30.9 x 21.5 x 1.7 cm</li>
                {/*<li><span>Materials</span> 60% cotton, 40% polyester</li>
                <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>*/}
              </ul>
            </div>
          </div>
          <div id="des-details1" className="tab-pane">
            <div className="product-description-wrapper">
              <p>Lenovo(India) Private Limited, RBD Icon, Level 2, Doddenakundi Village, Marathahalli Outer Ring Road, K. R. Puram Hobli, Bangalore 560037, Karnataka, India
              </p>
            </div>
          </div>
          <div id="des-details3" className="tab-pane">
            <div className="row">
              <div className="col-lg-7">
                <div className="review-wrapper">
                  <div className="single-review">
                    <div className="review-img">
                      <img src="assets/images/testimonial-image/1.png" alt />
                    </div>
                    <div className="review-content">
                      <div className="review-top-wrap">
                        <div className="review-left">
                          <div className="review-name">
                            <h4>White Lewis</h4>
                          </div>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                          </div>
                        </div>
                        <div className="review-left">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                      <div className="review-bottom">
                        <p>
                          Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-review child-review">
                    <div className="review-img">
                      <img src="assets/images/testimonial-image/2.png" alt />
                    </div>
                    <div className="review-content">
                      <div className="review-top-wrap">
                        <div className="review-left">
                          <div className="review-name">
                            <h4>White Lewis</h4>
                          </div>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                          </div>
                        </div>
                        <div className="review-left">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                      <div className="review-bottom">
                        <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper euismod vehicula.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="ratting-form-wrapper pl-50">
                  <h3>Add a Review</h3>
                  <div className="ratting-form">
                    <form action="#">
                      <div className="star-box">
                        <span>Your rating:</span>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="rating-form-style mb-10">
                            <input placeholder="Name" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="rating-form-style mb-10">
                            <input placeholder="Email" type="email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="rating-form-style form-submit">
                            <textarea name="Your Review" placeholder="Message" defaultValue={""} />
                            <input type="submit" defaultValue="Submit" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* product details description area end */}
  {/* Recent Add Product Area Start */}
  <section className="recent-add-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>You Might Also Like</h2>
            <p>Add Related products to weekly line up</p>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Recent Product slider Start */}
      <div className="recent-product-slider owl-carousel owl-nav-style">
        {/* Single Item */}
        <article className="list-product">
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
        {/* Single Item */}
        <article className="list-product">
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
        {/* Single Item */}
        <article className="list-product">
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
        {/* Single Item */}
        <article className="list-product">
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
        {/* Single Item */}
        <article className="list-product">
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
        {/* Single Item */}
        <article className="list-product">
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
      {/* Recent product slider end */}
    </div>
  </section>
  {/* Recent product area end */}
  {/* Recent Add Product Area Start */}
  <section className="recent-add-area mt-30 mb-30px">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>Electronics</h2>
            <p>6 other products:</p>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Recent Product slider Start */}
      <div className="recent-product-slider owl-carousel owl-nav-style">
        {/* Single Item */}
        <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/organic/product-15.jpg" alt />
              <img className="second-img" src="assets/images/product-image/organic/product-15.jpg" alt />
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
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/organic/product-14.jpg" alt />
              <img className="second-img" src="assets/images/product-image/organic/product-14.jpg" alt />
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
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/organic/product-22.jpg" alt />
              <img className="second-img" src="assets/images/product-image/organic/product-23.jpg" alt />
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
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/organic/product-9.jpg" alt />
              <img className="second-img" src="assets/images/product-image/organic/product-9.jpg" alt />
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
              <img src="assets/images/img4.jpg" /><br />
              <h2><a href="single-product.html" className="product-link"> OnePlus Nord CE 5G (Charcoal Ink, 6GB RAM, 128GB Storage</a></h2>
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
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/organic/product-18.jpg" alt />
              <img className="second-img" src="assets/images/product-image/organic/product-18.jpg" alt />
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
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/organic/product-7.jpg" alt />
              <img className="second-img" src="assets/images/product-image/organic/product-8.jpg" alt />
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
       {/* <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/organic/product-17.jpg" alt />
              <img className="second-img" src="assets/images/product-image/organic/product-16.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link">Trans-Weight Hooded...</a></h2>
            <div className="rating-product">
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
            </div>
            <div className="pricing-meta">
              <ul>
                <li className="old-price not-cut">€11.90</li>
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
              </article>*/}
        {/* Single Item */}
       {/* <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/organic/product-9.jpg" alt />
              <img className="second-img" src="assets/images/product-image/organic/product-9.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link">Water and Wind Resist...</a></h2>
            <div className="rating-product">
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
            </div>
            <div className="pricing-meta">
              <ul>
                <li className="old-price not-cut">€11.90</li>
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
            </article>*/}
        {/* Single Item */}
      </div>
      {/* Recent product slider end */}
    </div>
  </section>
  {/* Recent product area end */}
</div>


            </div>

      
  

    )
}