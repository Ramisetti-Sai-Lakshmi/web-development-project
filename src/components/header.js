
import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    render(){
        return(
            <div>
                 {/*====== PRELOADER PART ENDS ======*/}
  <div id="main">
    {/* Header Start */}
    <header className="main-header">
      {/* Header Top Start */}
      <div className="header-top-nav">
        <div className="container">
          <div className="row">
            {/*Left Start*/}
            <div className="col-lg-4 col-md-4">
              <div className="left-text">
                <p>Welcome you to Ecolife store!</p>
              </div>
            </div>
            {/*Left End*/}
            {/*Right Start*/}
            <div className="col-lg-8 col-md-8 text-right">
              <div className="header-right-nav">
                <div className="dropdown-navs">
                  <ul>
                    {/* Settings Start */}
                    <li className="dropdown after-n">
                      <a className="angle-icon" href="#">Settings</a>
                      <ul className="dropdown-nav">
                        <li><a href="my-account.html">My Account</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="login.html">Login</a></li>
                      </ul>
                    </li>
                    {/* Settings End */}
                    {/* Currency Start */}
                    <li className="top-10px first-child">
                      <select>
                        <option value={1}>USD $</option>
                        <option value={2}>EUR €</option>
                      </select>
                    </li>
                    {/* Currency End */}
                    {/* Language Start */}
                    <li className="top-10px mr-15px">
                      <select>
                        <option value={1}>English</option>
                        <option value={2}>France</option>
                      </select>
                    </li>
                    {/* Language End */}
                  </ul>
                </div>
              </div>
            </div>
            {/*Right End*/}
          </div>
        </div>
      </div>
      {/* Header Top End */}
      {/* Header Buttom Start */}
      <div className="header-navigation d-lg-block d-none">
        <div className="container">
          <div className="row">
            {/* Logo Start */}
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo-electronic.jpg" alt /></a>
              </div>
            </div>
            {/* Logo End */}
            <div className="col-md-10 col-sm-10">
              {/*Header Bottom Account Start */}
              <div className="header_account_area">
                {/*Seach Area Start */}
                <div className="header_account_list search_list">
                  <a href="javascript:void(0)"><i className="ion-ios-search-strong" /></a>
                  <div className="dropdown_search">
                    <form action="#">
                      <input placeholder="Search entire store here ..." type="text" />
                      <div className="search-category">
                        <select className="bootstrap-select" name="poscats">
                          <option value={0}>All categories</option>
                          <option value={68}>
                            Electronics
                          </option>
                          <option value={69}>
                            - - Accessories &amp; Parts
                          </option>
                          <option value={75}>
                            - - - - Cables &amp; Adapters
                          </option>
                          <option value={76}>
                            - - - - Batteries
                          </option>
                          <option value={77}>
                            - - - - Chargers
                          </option>
                          <option value={78}>
                            - - - - Bags &amp; Cases
                          </option>
                          <option value={79}>
                            - - - - Electronic Cigarettes
                          </option>
                          <option value={70}>
                            - - Audio &amp; Video
                          </option>
                          <option value={80}>
                            - - - - Televisions
                          </option>
                          <option value={81}>
                            - - - - TV Receivers
                          </option>
                          <option value={82}>
                            - - - - Projectors
                          </option>
                          <option value={83}>
                            - - - - Audio Amplifier Boards
                          </option>
                          <option value={84}>
                            - - - - TV Sticks
                          </option>
                          <option value={71}>
                            - - Camera &amp; Photo
                          </option>
                          <option value={85}>
                            - - - - Digital Cameras
                          </option>
                          <option value={86}>
                            - - - - Camcorders
                          </option>
                          <option value={87}>
                            - - - - Camera Drones
                          </option>
                          <option value={88}>
                            - - - - Action Cameras
                          </option>
                          <option value={89}>
                            - - - - Photo Studio Supplies
                          </option>
                          <option value={72}>
                            - - Portable Audio &amp; Video
                          </option>
                          <option value={90}>
                            - - - - Headphones
                          </option>
                          <option value={91}>
                            - - - - Speakers
                          </option>
                          <option value={92}>
                            - - - - MP3 Players
                          </option>
                          <option value={93}>
                            - - - - VR/AR Devices
                          </option>
                          <option value={94}>
                            - - - - Microphones
                          </option>
                          <option value={73}>
                            - - Smart Electronics
                          </option>
                          <option value={95}>
                            - - - - Wearable Devices
                          </option>
                          <option value={96}>
                            - - - - Smart Home Appliances
                          </option>
                          <option value={97}>
                            - - - - Smart Remote Controls
                          </option>
                          <option value={98}>
                            - - - - Smart Watches
                          </option>
                          <option value={99}>
                            - - - - Smart Wristbands
                          </option>
                          <option value={74}>
                            - - Video Games
                          </option>
                          <option value={100}>
                            - - - - Handheld Game Players
                          </option>
                          <option value={101}>
                            - - - - Game Controllers
                          </option>
                          <option value={102}>
                            - - - - Joysticks
                          </option>
                          <option value={103}>
                            - - - - Stickers
                          </option>
                        </select>
                      </div>
                      <button type="submit"><i className="ion-ios-search-strong" /></button>
                    </form>
                  </div>
                </div>
                {/*Seach Area End */}
                {/*Contact info Start */}
                <div className="contact-link-wrap">
                  <div className="contact-link">
                    <div className="phone">
                      <p>Call us:</p>
                      <a href="tel:(+800)345678">(+800)345678</a>
                    </div>
                  </div>
                  {/*Contact info End */}
                  {/*Cart info Start */}
                  <div className="cart-info d-flex">
                    <a href="compare.html" className="count-cart random" />
                    <a href="wishlist.html" className="count-cart heart" />
                    <div className="mini-cart-warp">
                      <a href="#" className="count-cart"><span>$20.00</span></a>
                      <div className="mini-cart-content">
                        <ul>
                          <li className="single-shopping-cart">
                            <div className="shopping-cart-img">
                              <a href="single-product.html"><img alt src="assets/images/product-image/mini-cart/1.jpg" /></a>
                              <span className="product-quantity">1x</span>
                            </div>
                            <div className="shopping-cart-title">
                              <h4><a href="single-product.html">Juicy Couture...</a></h4>
                              <span>$9.00</span>
                              <div className="shopping-cart-delete">
                                <a href="#"><i className="ion-android-cancel" /></a>
                              </div>
                            </div>
                          </li>
                          <li className="single-shopping-cart">
                            <div className="shopping-cart-img">
                              <a href="single-product.html"><img alt src="assets/images/product-image/mini-cart/2.jpg" /></a>
                              <span className="product-quantity">1x</span>
                            </div>
                            <div className="shopping-cart-title">
                              <h4><a href="single-product.html">Water and Wind...</a></h4>
                              <span>$11.00</span>
                              <div className="shopping-cart-delete">
                                <a href="#"><i className="ion-android-cancel" /></a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-total">
                          <h4>Subtotal : <span>$20.00</span></h4>
                          <h4>Shipping : <span>$7.00</span></h4>
                          <h4>Taxes : <span>$0.00</span></h4>
                          <h4 className="shop-total">Total : <span>$27.00</span></h4>
                        </div>
                        <div className="shopping-cart-btn text-center">
                          <a className="default-btn" href="checkout.html">checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Cart info End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header Bottom Account End */}
      {/* Menu Content Start */}
      <div className="header-buttom-nav sticky-nav">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left d-none d-lg-block">
              <div className="d-flex align-items-start justify-content-start">
                {/* Beauty Category */}
                <div className="beauty-category vertical-menu home-9">
                  <h3 className="vertical-menu-heading vertical-menu-toggle">All Categories</h3>
                  <ul className="vertical-menu-wrap open-menu-toggle">
                    <li className="menu-dropdown">
                      <a href="#">Electronics<i className="ion-ios-arrow-down" /></a>
                      <ul className="mega-menu-wrap">
                        <li>
                          <ul className="mb-20px">
                            <li className="mega-menu-title"><a href="#">Accessories &amp; Parts</a></li>
                            <li><a href="#">Cables &amp; Adapters</a></li>
                            <li><a href="#">Batteries</a></li>
                            <li><a href="#">Chargers</a></li>
                            <li><a href="#">Bags &amp; Cases</a></li>
                            <li><a href="#">Electronic Cigarettes</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul className="mb-20px">
                            <li className="mega-menu-title"><a href="#">Camera &amp; Photo</a></li>
                            <li><a href="#">Digital Cameras</a></li>
                            <li><a href="#">Camcorders</a></li>
                            <li><a href="#">Camera Drones</a></li>
                            <li><a href="#">Action Cameras</a></li>
                            <li><a href="#">Photo Studio Supplies</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul className="mb-20px">
                            <li className="mega-menu-title"><a href="#">Smart Electronics</a></li>
                            <li><a href="#">Wearable Devices</a></li>
                            <li><a href="#">Smart Home Appliances</a></li>
                            <li><a href="#">Smart Remote Controls</a></li>
                            <li><a href="#">Smart Watches</a></li>
                            <li><a href="#">Smart Wristbands</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Audio &amp; Video</a></li>
                            <li><a href="#">Televisions</a></li>
                            <li><a href="#">TV Receivers</a></li>
                            <li><a href="#">Projectors</a></li>
                            <li><a href="#">Audio Amplifier Boards</a></li>
                            <li><a href="#">TV Sticks</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Portable Audio &amp; Video</a></li>
                            <li><a href="#">Headphones</a></li>
                            <li><a href="#">Speakers</a></li>
                            <li><a href="#">MP3 Players</a></li>
                            <li><a href="#">VR/AR Devices</a></li>
                            <li><a href="#">Microphones</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">Video Game<i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li><a href="#">Handheld Game Players</a></li>
                        <li><a href="#">Game Controllers</a></li>
                        <li><a href="#">Joysticks</a></li>
                        <li><a href="#">Stickers</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Televisions</a></li>
                    <li><a href="#">Digital Cameras</a></li>
                    <li><a href="#">Headphones</a></li>
                    <li><a href="#">Wearable Devices</a></li>
                    <li><a href="#">Smart Watches</a></li>
                    <li><a href="#">Game Controllers</a></li>
                    <li><a href="#"> Smart Home Appliances</a></li>
                    <li className="hidden"><a href="#">Projectors</a></li>
                    <li>
                      <a href="#" id="more-btn"><i className="ion-ios-plus-empty" aria-hidden="true" /> More Categories</a>
                    </li>
                  </ul>
                </div>
                {/* Beauty Category */}
                {/*Main Navigation Start */}
                <div className="main-navigation d-none d-lg-block">
                  <ul>
                    <li className="menu-dropdown">
                      <a href="#">Home <i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Organic <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="index.html">Organic 1</a></li>
                            <li><a href="index-2.html">Organic 2</a></li>
                            <li><a href="index-3.html">Organic 3</a></li>
                            <li><a href="index-4.html">Organic 4</a></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Cosmetic <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="index-5.html">Cosmetic 1</a></li>
                            <li><a href="index-6.html">Cosmetic 2</a></li>
                            <li><a href="index-7.html">Cosmetic 3</a></li>
                            <li><a href="index-8.html">Cosmetic 4</a></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Digital <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                          <li><Link to='/'>Mobiles</Link></li>
                              <li><Link to='/index-10'>Laptops</Link></li>
                              <li><Link to='/index-11'>PC Accessories</Link></li>
                              <li><Link to='/index-12'>Digital Camaras</Link></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Furniture <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="index-13.html">Furniture 1</a></li>
                            <li><a href="index-14.html">Furniture 2</a></li>
                            <li><a href="index-15.html">Furniture 3</a></li>
                            <li><a href="index-16.html">Furniture 4</a></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Medical <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="index-17.html">Medical 1</a></li>
                            <li><a href="index-18.html">Medical 2</a></li>
                            <li><a href="index-19.html">Medical 3</a></li>
                            <li><a href="index-20.html">Medical 4</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">Shop <i className="ion-ios-arrow-down" /></a>
                      <ul className="mega-menu-wrap">
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Shop Grid</a></li>
                            <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                            <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Shop List</a></li>
                            <li><a href="shop-list.html">Shop List</a></li>
                            <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                            <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                            <li><a href="single-product.html">Shop Single</a></li>
                            <li><a href="single-product-variable.html">Shop Variable</a></li>
                            <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                            <li><a href="single-product-group.html">Shop Group</a></li>
                            <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                            <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                            <li><a href="single-product-slider.html">Shop Slider</a></li>
                            <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                            <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                            <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                            <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                          </ul>
                        </li>
                        <li className="w-100">
                          <ul className="banner-megamenu-wrapper d-flex">
                            <li className="banner-wrapper mr-30px">
                              <a href="single-product.html"><img src="assets/images/banner-image/banner-menu-3.jpg" alt /></a>
                            </li>
                            <li className="banner-wrapper">
                              <a href="single-product.html"><img src="assets/images/banner-image/banner-menu-4.jpg" alt /></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">Pages <i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li><a href="about.html">About Page</a></li>
                        <li><a href="cart.html">Cart Page</a></li>
                        <li><a href="checkout.html">Checkout Page</a></li>
                        <li><a href="compare.html">Compare Page</a></li>
                        <li><a href="login.html">Login &amp; Regiter Page</a></li>
                        <li><a href="my-account.html">Account Page</a></li>
                        <li><a href="wishlist.html">Wishlist Page</a></li>
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">Blog <i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li className="menu-dropdown position-static">
                          <a href="#">Blog Grid <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                            <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Blog List <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                            <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Blog Single <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                            <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
                {/*Main Navigation End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Content End */}
      {/* Header Buttom Start */}
      <div className="header-navigation sticky-nav d-lg-none">
        <div className="container position-relative">
          <div className="row">
            {/* Logo Start */}
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo-electronic.jpg" alt /></a>
              </div>
            </div>
            {/* Logo End */}
            {/* Navigation Start */}
            <div className="col-md-10 col-sm-10">
              {/*Header Bottom Account Start */}
              <div className="header_account_area">
                {/*Seach Area Start */}
                <div className="header_account_list search_list">
                  <a href="javascript:void(0)"><i className="ion-ios-search-strong" /></a>
                  <div className="dropdown_search">
                    <form action="#">
                      <input placeholder="Search entire store here ..." type="text" />
                      <div className="search-category">
                        <select className="bootstrap-select" name="poscats">
                          <option value={0}>All categories</option>
                          <option value={68}>
                            Electronics
                          </option>
                          <option value={69}>
                            - - Accessories &amp; Parts
                          </option>
                          <option value={75}>
                            - - - - Cables &amp; Adapters
                          </option>
                          <option value={76}>
                            - - - - Batteries
                          </option>
                          <option value={77}>
                            - - - - Chargers
                          </option>
                          <option value={78}>
                            - - - - Bags &amp; Cases
                          </option>
                          <option value={79}>
                            - - - - Electronic Cigarettes
                          </option>
                          <option value={70}>
                            - - Audio &amp; Video
                          </option>
                          <option value={80}>
                            - - - - Televisions
                          </option>
                          <option value={81}>
                            - - - - TV Receivers
                          </option>
                          <option value={82}>
                            - - - - Projectors
                          </option>
                          <option value={83}>
                            - - - - Audio Amplifier Boards
                          </option>
                          <option value={84}>
                            - - - - TV Sticks
                          </option>
                          <option value={71}>
                            - - Camera &amp; Photo
                          </option>
                          <option value={85}>
                            - - - - Digital Cameras
                          </option>
                          <option value={86}>
                            - - - - Camcorders
                          </option>
                          <option value={87}>
                            - - - - Camera Drones
                          </option>
                          <option value={88}>
                            - - - - Action Cameras
                          </option>
                          <option value={89}>
                            - - - - Photo Studio Supplies
                          </option>
                          <option value={72}>
                            - - Portable Audio &amp; Video
                          </option>
                          <option value={90}>
                            - - - - Headphones
                          </option>
                          <option value={91}>
                            - - - - Speakers
                          </option>
                          <option value={92}>
                            - - - - MP3 Players
                          </option>
                          <option value={93}>
                            - - - - VR/AR Devices
                          </option>
                          <option value={94}>
                            - - - - Microphones
                          </option>
                          <option value={73}>
                            - - Smart Electronics
                          </option>
                          <option value={95}>
                            - - - - Wearable Devices
                          </option>
                          <option value={96}>
                            - - - - Smart Home Appliances
                          </option>
                          <option value={97}>
                            - - - - Smart Remote Controls
                          </option>
                          <option value={98}>
                            - - - - Smart Watches
                          </option>
                          <option value={99}>
                            - - - - Smart Wristbands
                          </option>
                          <option value={74}>
                            - - Video Games
                          </option>
                          <option value={100}>
                            - - - - Handheld Game Players
                          </option>
                          <option value={101}>
                            - - - - Game Controllers
                          </option>
                          <option value={102}>
                            - - - - Joysticks
                          </option>
                          <option value={103}>
                            - - - - Stickers
                          </option>
                        </select>
                      </div>
                      <button type="submit"><i className="ion-ios-search-strong" /></button>
                    </form>
                  </div>
                </div>
                {/*Seach Area End */}
                {/*Contact info Start */}
                <div className="contact-link">
                  <div className="phone">
                    <p>Call us:</p>
                    <a href="tel:(+800)345678">(+800)345678</a>
                  </div>
                </div>
                {/*Contact info End */}
                {/*Cart info Start */}
                <div className="cart-info d-flex">
                  <a href="compare.html" className="count-cart random d-xs-none" />
                  <a href="wishlist.html" className="count-cart heart d-xs-none" />
                  <div className="mini-cart-warp">
                    <a href="#" className="count-cart"><span>$20.00</span></a>
                    <div className="mini-cart-content">
                      <ul>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="single-product.html"><img alt src="assets/images/product-image/mini-cart/1.jpg" /></a>
                            <span className="product-quantity">1x</span>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="single-product.html">Juicy Couture...</a></h4>
                            <span>$9.00</span>
                            <div className="shopping-cart-delete">
                              <a href="#"><i className="ion-android-cancel" /></a>
                            </div>
                          </div>
                        </li>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="single-product.html"><img alt src="assets/images/product-image/mini-cart/2.jpg" /></a>
                            <span className="product-quantity">1x</span>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="single-product.html">Water and Wind...</a></h4>
                            <span>$11.00</span>
                            <div className="shopping-cart-delete">
                              <a href="#"><i className="ion-android-cancel" /></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-total">
                        <h4>Subtotal : <span>$20.00</span></h4>
                        <h4>Shipping : <span>$7.00</span></h4>
                        <h4>Taxes : <span>$0.00</span></h4>
                        <h4 className="shop-total">Total : <span>$27.00</span></h4>
                      </div>
                      <div className="shopping-cart-btn text-center">
                        <a className="default-btn" href="checkout.html">checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Cart info End */}
            </div>
          </div>
          {/* mobile menu */}
          <div className="mobile-menu-area">
            <div className="mobile-menu">
              <nav id="mobile-menu-active">
                <ul className="menu-overflow">
                  <li>
                    <a href="index.html">HOME</a>
                    <ul>
                      <li>
                        <a href="#">Home Organic</a>
                        <ul>
                          <li><a href="index.html">Organic 1</a></li>
                          <li><a href="index-2.html">Organic 2</a></li>
                          <li><a href="index-3.html">Organic 3</a></li>
                          <li><a href="index-4.html">Organic 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Cosmetic</a>
                        <ul>
                          <li><a href="index-5.html">Cosmetic 1</a></li>
                          <li><a href="index-6.html">Cosmetic 2</a></li>
                          <li><a href="index-7.html">Cosmetic 3</a></li>
                          <li><a href="index-8.html">Cosmetic 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Digital</a>
                        <ul>
                          <li><a href="index-9.html">Mobiles</a></li>
                          <li><a href="index-10.html">Laptops</a></li>
                          <li><a href="index-11.html">Digital 3</a></li>
                          <li><a href="index-12.html">Digital 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Furniture</a>
                        <ul>
                          <li><a href="index-13.html">Furniture 1</a></li>
                          <li><a href="index-14.html">Furniture 2</a></li>
                          <li><a href="index-15.html">Furniture 3</a></li>
                          <li><a href="index-16.html">Furniture 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Medical</a>
                        <ul>
                          <li><a href="index-17.html">Medical 1</a></li>
                          <li><a href="index-18.html">Medical 2</a></li>
                          <li><a href="index-19.html">Medical 3</a></li>
                          <li><a href="index-20.html">Medical 4</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                    <ul>
                      <li>
                        <a href="#">Shop Grid</a>
                        <ul>
                          <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                          <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                          <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                          <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Shop List</a>
                        <ul>
                          <li><a href="shop-list.html">Shop List</a></li>
                          <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                          <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Single Shop</a>
                        <ul>
                          <li><a href="single-product.html">Shop Single</a></li>
                          <li><a href="single-product-variable.html">Shop Variable</a></li>
                          <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                          <li><a href="single-product-group.html">Shop Group</a></li>
                          <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                          <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Single Shop</a>
                        <ul>
                          <li><a href="single-product-slider.html">Shop Slider</a></li>
                          <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                          <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                          <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                          <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li><a href="about.html">About Page</a></li>
                      <li><a href="cart.html">Cart Page</a></li>
                      <li><a href="checkout.html">Checkout Page</a></li>
                      <li><a href="compare.html">Compare Page</a></li>
                      <li><a href="login.html">Login &amp; Regiter Page</a></li>
                      <li><a href="my-account.html">Account Page</a></li>
                      <li><a href="wishlist.html">Wishlist Page</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                    <ul>
                      <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                      <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                      <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                      <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                      <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                      <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </div>
          {/* mobile menu end*/}
        </div>
      </div>
      {/*Header Bottom Account End */}
      {/* Beauty Category */}
      <div className="container d-lg-none">
        {/*=======  category menu  =======*/}
        <div className="hero-side-category">
          {/* Category Toggle Wrap */}
          <div className="category-toggle-wrap">
            {/* Category Toggle */}
            <button className="category-toggle"><i className="fa fa-bars" /> All Categories</button>
          </div>
          {/* Category Menu */}
          <nav className="category-menu">
            <ul>
              <li className="menu-item-has-children menu-item-has-children-1">
                <a href="#">Accessories &amp; Parts<i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-1">
                  <li><a href="#">Cables &amp; Adapters</a></li>
                  <li><a href="#">Batteries</a></li>
                  <li><a href="#">Chargers</a></li>
                  <li><a href="#">Bags &amp; Cases</a></li>
                  <li><a href="#">Electronic Cigarettes</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-2">
                <a href="#">Camera &amp; Photo<i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-2">
                  <li><a href="#">Digital Cameras</a></li>
                  <li><a href="#">Camcorders</a></li>
                  <li><a href="#">Camera Drones</a></li>
                  <li><a href="#">Action Cameras</a></li>
                  <li><a href="#">Photo Studio Supplies</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-3">
                <a href="#">Smart Electronics <i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-3">
                  <li><a href="#">Wearable Devices</a></li>
                  <li><a href="#">Smart Home Appliances</a></li>
                  <li><a href="#">Smart Remote Controls</a></li>
                  <li><a href="#">Smart Watches</a></li>
                  <li><a href="#">Smart Wristbands</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-4">
                <a href="#">Audio &amp; Video <i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-4">
                  <li><a href="#">Televisions</a></li>
                  <li><a href="#">TV Receivers</a></li>
                  <li><a href="#">Projectors</a></li>
                  <li><a href="#">Audio Amplifier Boards</a></li>
                  <li><a href="#">TV Sticks</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-5">
                <a href="#">Portable Audio &amp; Video <i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-5">
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Speakers</a></li>
                  <li><a href="#">MP3 Players</a></li>
                  <li><a href="#">VR/AR Devices</a></li>
                  <li><a href="#">Microphones</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-6">
                <a href="#">Video Game <i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-6">
                  <li><a href="#">Handheld Game Players</a></li>
                  <li><a href="#">Game Controllers</a></li>
                  <li><a href="#">Joysticks</a></li>
                  <li><a href="#">Stickers</a></li>
                </ul>
              </li>
              <li><a href="#">Televisions</a></li>
              <li><a href="#">Digital Cameras</a></li>
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Wearable Devices</a></li>
              <li><a href="#">Smart Watches</a></li>
              <li><a href="#">Game Controllers</a></li>
              <li><a href="#"> Smart Home Appliances</a></li>
              <li className="hidden"><a href="#">Projectors</a></li>
              <li>
                <a href="#" id="more-btn"><i className="ion-ios-plus-empty" aria-hidden="true" /> More Categories</a>
              </li>
            </ul>
          </nav>
        </div>
        {/*=======  End of category menu =======*/}
      </div>
      {/* Beauty Category */}
    </header>
    {/* Header End */}
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
                  <img src="assets/images/product-image/organic/product-11.jpg" alt="" />
                </div>
                <div id="pro-2" className="tab-pane fade">
                  <img src="assets/images/product-image/organic/product-9.jpg" alt="" />
                </div>
                <div id="pro-3" className="tab-pane fade">
                  <img src="assets/images/product-image/organic/product-20.jpg" alt="" />
                </div>
                <div id="pro-4" className="tab-pane fade">
                  <img src="assets/images/product-image/organic/product-19.jpg" alt="" />
                </div>
              </div>
              {/* Thumbnail Large Image End */}
              {/* Thumbnail Image End */}
              <div className="quickview-wrap mt-15">
                <div className="quickview-slide-active owl-carousel nav owl-nav-style owl-nav-style-2" role="tablist">
                  <a className="active" data-toggle="tab" href="#pro-1"><img src="assets/images/product-image/organic/product-11.jpg" alt="" /></a>
                  <a data-toggle="tab" href="#pro-2"><img src="assets/images/product-image/organic/product-9.jpg" alt="" /></a>
                  <a data-toggle="tab" href="#pro-3"><img src="assets/images/product-image/organic/product-20.jpg" alt="" /></a>
                  <a data-toggle="tab" href="#pro-4"><img src="assets/images/product-image/organic/product-19.jpg" alt="" /></a>
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
                  <span className="read-review"><a className="reviews" href=" ">Read reviews (1)</a></span>
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
                    <a href=" "> + Add To Cart</a>
                  </div>
                </div>
                <div className="pro-details-wish-com">
                  <div className="pro-details-wishlist">
                    <a href=" "><i className="ion-android-favorite-outline" />Add to wishlist</a>
                  </div>
                  <div className="pro-details-compare">
                    <a href=" "><i className="ion-ios-shuffle-strong" />Add to compare</a>
                  </div>
                </div>
                <div className="pro-details-social-info">
                  <span>Share</span>
                  <div className="social-info">
                    <ul>
                      <li>
                        <a href=" "><i className="ion-social-facebook" /></a>
                      </li>
                      <li>
                        <a href=" "><i className="ion-social-twitter" /></a>
                      </li>
                      <li>
                        <a href=" "><i className="ion-social-google" /></a>
                      </li>
                      <li>
                        <a href=" "><i className="ion-social-instagram" /></a>
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
   </div>
        )
    }
}

export default Header;