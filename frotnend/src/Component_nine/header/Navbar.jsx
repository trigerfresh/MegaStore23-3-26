import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const menuRef = useRef(null)

  const handleOpenWishList = (e) => {
    e.preventDefault()
    if (typeof window.openWishlist === 'function') {
      window.openWishlist()
    }
  }

  const handleCloseWishlist = (e) => {
    e.preventDefault()
    if (typeof window.closeWishlist === 'function') {
      window.closeWishlist()
    }
  }

  const handleOpenAccount = (e) => {
    e.preventDefault()
    if (typeof window.openAccount === 'function') {
      window.openAccount()
    }
  }

  const handleCloseAccount = (e) => {
    e.preventDefault()
    if (typeof window.closeAccount === 'function') {
      window.closeAccount()
    }
  }

  useEffect(() => {
    const $ = window.$

    if (!$ || !$.fn.smartmenus || !menuRef.current) return

    const $menu = $(menuRef.current)

    // ✅ INIT only if not already initialized
    if (!$menu.data('smartmenus')) {
      $menu.smartmenus()
    }

    $('.sidebar-bar').on('click', function () {
      $menu.toggleClass('open')
    })

    // ✅ CLEANUP on unmount
    return () => {
      if ($menu.data('smartmenus')) {
        $menu.smartmenus('destroy')
      }

      $('.sidebar-bar').off('click')
    }
  }, [])

  useEffect(() => {
    const $ = window.$
    if (!$) return

    // Hide initially
    $('.searchbar-input').hide()

    // Open search
    $('.mobile-search').on('click', function () {
      $('.searchbar-input').fadeIn()
      $('.searchbar-input').addClass('open')
    })

    // Close search
    $('.close-searchbar').on('click', function () {
      $('.searchbar-input').fadeOut()
      $('.searchbar-input').removeClass('open')
    })

    // Cleanup (VERY IMPORTANT)
    return () => {
      $('.mobile-search').off('click')
      $('.close-searchbar').off('click')
    }
  }, [])

  // Hamburger menu
  useEffect(() => {
    const $ = window.$
    if (!$) return

    // 1. Initial State: Ensure the mobile menu starts closed on small screens
    // If the menu is meant to be a popup/sidebar on mobile, remove 'show' via JS if needed
    if ($(window).width() < 991) {
      $('.collapse-category').removeClass('show')
    }

    // --- Search Bar Logic ---
    $('.searchbar-input').hide()
    $('.mobile-search').on('click', function () {
      $('.searchbar-input').fadeIn().addClass('open')
    })
    $('.close-searchbar').on('click', function () {
      $('.searchbar-input').fadeOut().removeClass('open')
    })

    // --- Hamburger Sidebar Logic (Main Navigation) ---
    $('.toggle-nav').on('click', function () {
      $('.sm-horizontal').css('right', '0px')
    })
    $('.mobile-back').on('click', function () {
      $('.sm-horizontal').css('right', '-410px')
    })

    // --- Shop By Category Logic (The Fix) ---
    $('.mobilecat-toggle').on('click', function (e) {
      e.preventDefault()
      e.stopPropagation() // Prevents the click from bubbling up
      $('.collapse-category').addClass('open')
    })

    $('.back-btn').on('click', function (e) {
      e.preventDefault()
      $('.collapse-category').removeClass('open')
    })

    // --- Desktop Category Toggle ---
    $('.category-toggle').on('click', function () {
      // Toggle the slide effect for desktop view
      $('.collapse-category').slideToggle('slow')
    })

    return () => {
      $('.mobile-search').off('click')
      $('.close-searchbar').off('click')
      $('.toggle-nav').off('click')
      $('.mobile-back').off('click')
      $('.mobilecat-toggle').off('click')
      $('.back-btn').off('click')
      $('.category-toggle').off('click')
    }
  }, [])

  return (
    <div className="searchbar-main header7">
      <div className="custom-container">
        <div className="row">
          <div className="col-12">
            <div className="header-contain">
              <div className="logo-block">
                <div className="brand-logo">
                  <a href="index.html">
                    <img
                      src="../assets/images/cosmetic/logo.png"
                      className="img-fluid  "
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="menu-block">
                <nav id="main-nav">
                  <div className="toggle-nav">
                    <i className="fa fa-bars sidebar-bar"></i>
                  </div>
                  <ul
                    id="main-menu"
                    ref={menuRef}
                    className="sm pixelstrap sm-horizontal"
                    data-smartmenus-id="1771928439799911"
                  >
                    <li>
                      <div className="mobile-back text-right">
                        Back
                        <i
                          className="fa fa-angle-right ps-2"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </li>

                    <li>
                      <a
                        className="dark-menu-item has-submenu"
                        href="#"
                        id="sm-1771928439799911-1"
                        aria-haspopup="true"
                        aria-controls="sm-1771928439799911-2"
                        aria-expanded="false"
                      >
                        Home<span className="sub-arrow"></span>
                      </a>
                      <ul
                        id="sm-1771928439799911-2"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-1771928439799911-1"
                        aria-expanded="false"
                        className="sm-nowrap"
                        style={{
                          width: 'auto',
                          minWidth: '10em',
                          display: 'none',
                          maxWidth: '20em',
                          top: 'auto',
                          left: '0px',
                          marginLeft: '0px',
                          marginTop: '0px',
                        }}
                      >
                        {' '}
                        <li>
                          <a href="/">mega store 1</a>
                        </li>
                        <li>
                          <a href="/home_two">mega store 2</a>
                        </li>
                        {/* <li>
                            <a href="layout-3.html">mega store 3</a>
                          </li> */}
                        <li>
                          <a href="/home_four">mega store 4</a>
                        </li>
                        <li>
                          <a href="megastore.html">mega store 5</a>
                        </li>
                        <li>
                          <a href="/home_five">electronics</a>
                        </li>
                        <li>
                          <a href="/home_vegetables">vegetable</a>
                        </li>
                        <li>
                          <a href="/home_eight">furniture</a>
                        </li>
                        <li>
                          <a href="/home_nine">cosmetic</a>
                        </li>
                        <li>
                          <a href="/home_kids">kids</a>
                        </li>
                        <li>
                          <a href="/home_tools">tools</a>
                        </li>
                        <li>
                          <a href="/home_grocery">grocery</a>
                        </li>
                        <li>
                          <a href="/home_pets">pets</a>
                        </li>
                        <li>
                          <a href="/home_farming">farming</a>
                        </li>
                        <li>
                          <a href="/home_digital">digital marketplace</a>
                        </li>
                      </ul>
                      <span
                        className="scroll-up"
                        style={{
                          top: 'auto',
                          left: '0px',
                          marginLeft: '4px',
                          width: '188px',
                          zIndex: 2,
                          marginTop: '-124px',
                          visibility: 'hidden',
                          display: 'none',
                        }}
                      >
                        <span className="scroll-up-arrow"></span>
                      </span>
                      <span
                        className="scroll-down"
                        style={{
                          display: 'none',
                          top: 'auto',
                          left: '0px',
                          marginLeft: '4px',
                          width: '188px',
                          zIndex: 2,
                          marginTop: '407px',
                          visibility: 'hidden',
                        }}
                      >
                        <span className="scroll-down-arrow"></span>
                      </span>
                    </li>
                    {/* <!--HOME-END--> */}
                    {/* <!--SHOP--> */}
                    <li>
                      <a
                        className="dark-menu-item has-submenu"
                        href="#"
                        id="sm-1771928439799911-3"
                        aria-haspopup="true"
                        aria-controls="sm-1771928439799911-4"
                        aria-expanded="false"
                      >
                        shop<span className="sub-arrow"></span>
                      </a>
                      <ul
                        id="sm-1771928439799911-4"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-1771928439799911-3"
                        aria-expanded="false"
                        className="sm-nowrap"
                        style={{
                          width: 'auto',
                          minWidth: '10em',
                          display: 'none',
                          maxWidth: '20em',
                          top: 'auto',
                          left: '0px',
                          marginLeft: '0px',
                          marginTop: '0px',
                        }}
                      >
                        <li>
                          <a href="category-page(left-sidebar).html">
                            left sidebar
                          </a>
                        </li>
                        <li>
                          <a href="category-page(right-sidebar).html">
                            right sidebar
                          </a>
                        </li>
                        <li>
                          <a href="category-page(no-sidebar).html">
                            no sidebar
                          </a>
                        </li>
                        <li>
                          <a href="category-page(sidebar-popup).html">
                            sidebar popup
                          </a>
                        </li>
                        <li>
                          <a href="category-page(metro).html">metro </a>
                        </li>
                        <li>
                          <a href="category-page(full-width).html">
                            full width{' '}
                          </a>
                        </li>
                        <li>
                          <a href="category-page(infinite-scroll).html">
                            infinite scroll
                          </a>
                        </li>
                        <li>
                          <a href="category-page(3-grid).html">3 grid</a>
                        </li>
                        <li>
                          <a href="category-page(6-grid).html">6 grid</a>
                        </li>
                        <li>
                          <a href="category-page(list-view).html">list view</a>
                        </li>
                      </ul>
                    </li>
                    {/* <!--SHOP-END--> */}
                    {/* <!--product-meu start--> */}
                    <li className="mega">
                      <a
                        className="dark-menu-item has-submenu"
                        href="#"
                        id="sm-1771928439799911-5"
                        aria-haspopup="true"
                        aria-controls="sm-1771928439799911-6"
                        aria-expanded="false"
                      >
                        product
                        <span className="sub-arrow"></span>
                      </a>
                      <ul
                        className="mega-menu full-mega-menu "
                        id="sm-1771928439799911-6"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-1771928439799911-5"
                        aria-expanded="false"
                      >
                        <li>
                          <div className="container">
                            <div className="row">
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>sidebar</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="product-page(left-sidebar).html">
                                          left sidebar
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(right-sidebar).html">
                                          right sidebar
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(no-sidebar).html">
                                          non sidebar
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>bonus layout</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="product-page(bundle).html">
                                          bundle
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(image-swatch).html">
                                          image swatch
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(vertical-tab).html">
                                          vertical tab
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(video-thumbnail).html">
                                          video thumbnail
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>product layout </h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="product-page(4-image).html">
                                          4 image{' '}
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(sticky).html">
                                          sticky
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(accordian).html">
                                          accordian
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(360-view).html">
                                          360 view
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>thumbnail image</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="product-page(left-image).html">
                                          left image
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(right-image).html">
                                          right image
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(image-outside).html">
                                          image outside
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>3 column</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="product-page(3-col-left).html">
                                          thumbnail left
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(3-col-right).html">
                                          thumbnail right
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-page(3-column).html">
                                          thubnail bottom
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>product element</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="element-productbox.html">
                                          product box
                                        </a>
                                      </li>
                                      <li>
                                        <a href="element-product-slider.html">
                                          product slider
                                        </a>
                                      </li>
                                      <li>
                                        <a href="element-no_slider.html">
                                          no slider
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row menu-banner">
                              <div className="col-lg-6">
                                <div>
                                  <img
                                    src="../assets/images/cosmetic/menu-banner/1.jpg"
                                    alt="menu-banner"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div>
                                  <img
                                    src="../assets/images/cosmetic/menu-banner/2.jpg"
                                    alt="menu-banner"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    {/* <!--product-meu end--> */}

                    {/* <!--mega-meu start--> */}
                    <li className="mega">
                      <a
                        className="dark-menu-item has-submenu"
                        href="#"
                        id="sm-1771928439799911-7"
                        aria-haspopup="true"
                        aria-controls="sm-1771928439799911-8"
                        aria-expanded="false"
                      >
                        features<span className="sub-arrow"></span>
                      </a>
                      <ul
                        className="mega-menu full-mega-menu ratio_landscape"
                        id="sm-1771928439799911-8"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-1771928439799911-7"
                        aria-expanded="false"
                      >
                        <li>
                          <div className="container">
                            <div className="row">
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>portfolio</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="grid-2-col.html">
                                          portfolio grid 2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="grid-3-col.html">
                                          portfolio grid 3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="grid-4-col.html">
                                          portfolio grid 4
                                        </a>
                                      </li>
                                      <li>
                                        <a href="grid-6-col.html">
                                          portfolio grid 6
                                        </a>
                                      </li>
                                      <li>
                                        <a href="masonary-2-grid.html">
                                          mesonary grid 2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="masonary-3-grid.html">
                                          mesonary grid 3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="masonary-4-grid.html">
                                          mesonary grid 4
                                        </a>
                                      </li>
                                      <li>
                                        <a href="masonary-fullwidth.html">
                                          mesonary full width
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>add to cart</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="layout-5.html">
                                          cart modal popup
                                        </a>
                                      </li>
                                      <li>
                                        <a href="layout-6.html">
                                          qty. counter{' '}
                                        </a>
                                      </li>
                                      <li>
                                        <a href="index.html">cart top</a>
                                      </li>
                                      <li>
                                        <a href="layout-2.html">cart bottom</a>
                                      </li>
                                      <li>
                                        <a href="layout-3.html">cart left</a>
                                      </li>
                                      <li>
                                        <a href="layout-4.html">cart right</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>shortcodes</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="element-title.html">title</a>
                                      </li>
                                      <li>
                                        <a href="element-banner.html">
                                          collection banner
                                        </a>
                                      </li>
                                      <li>
                                        <a href="element-category.html">
                                          category
                                        </a>
                                      </li>
                                      <li>
                                        <a href="element-service.html">
                                          service
                                        </a>
                                      </li>
                                      <li>
                                        <a href="element-image-ratio.html">
                                          image size ratio
                                        </a>
                                      </li>
                                      <li>
                                        <a href="element-tab.html">tab</a>
                                      </li>
                                      <li>
                                        <a href="element-counter.html">
                                          counter
                                        </a>
                                      </li>
                                      <li>
                                        <a href="element-pricingtable.html">
                                          pricing table
                                        </a>
                                      </li>
                                      <li>
                                        <a href="element-team.html">team</a>
                                      </li>
                                      <li>
                                        <a href="element-testimonial.html">
                                          testimonial
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col mega-box">
                                <div className="link-section">
                                  <div className="menu-title">
                                    <h5>email template</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="../email-template/email-order-success.html">
                                          order success
                                        </a>
                                      </li>
                                      <li>
                                        <a href="../email-template/email-order-success-tow.html">
                                          order success 2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="../email-template/email-template.html">
                                          email template
                                        </a>
                                      </li>
                                      <li>
                                        <a href="../email-template/email-template-tow.html">
                                          email template 2
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="menu-title menu-secon-title">
                                    <h5>Easy to use</h5>
                                  </div>
                                  <div className="menu-content">
                                    <ul>
                                      <li>
                                        <a href="button.html">element button</a>
                                      </li>
                                      <li>
                                        <a href="instagram.html">
                                          element instagram
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className="col mega-box product ">
                                <div className="mega-img">
                                  <img
                                    src="../assets/images/cosmetic/menu-banner/3.jpg"
                                    alt="menu-banner"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    {/* mega-meu end--> */}

                    {/* <!--pages meu start--> */}
                    <li>
                      <a
                        className="dark-menu-item has-submenu"
                        href="#"
                        id="sm-1771928439799911-9"
                        aria-haspopup="true"
                        aria-controls="sm-1771928439799911-10"
                        aria-expanded="false"
                      >
                        pages<span className="sub-arrow"></span>
                      </a>
                      <ul
                        id="sm-1771928439799911-10"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-1771928439799911-9"
                        aria-expanded="false"
                      >
                        <li>
                          <a
                            href="#"
                            className="has-submenu"
                            id="sm-1771928439799911-11"
                            aria-haspopup="true"
                            aria-controls="sm-1771928439799911-12"
                            aria-expanded="false"
                          >
                            invoice<span className="new-tag">new</span>
                            <span className="sub-arrow"></span>
                          </a>
                          <ul
                            id="sm-1771928439799911-12"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-1771928439799911-11"
                            aria-expanded="false"
                          >
                            <li>
                              <a href="../invoice-template/element-invoice.html">
                                invoice one
                              </a>
                            </li>
                            <li>
                              <a href="../invoice-template/element-invoice2.html">
                                invoice two
                              </a>
                            </li>
                            <li>
                              <a href="../invoice-template/element-invoice3.html">
                                invoice three
                              </a>
                            </li>
                            <li>
                              <a href="../invoice-template/element-invoice4.html">
                                invoice four
                              </a>
                            </li>
                            <li>
                              <a href="../invoice-template/element-invoice5.html">
                                invoice five
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="has-submenu"
                            id="sm-1771928439799911-13"
                            aria-haspopup="true"
                            aria-controls="sm-1771928439799911-14"
                            aria-expanded="false"
                          >
                            account<span className="sub-arrow"></span>
                          </a>
                          <ul
                            id="sm-1771928439799911-14"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-1771928439799911-13"
                            aria-expanded="false"
                          >
                            <li>
                              <a href="wishlist.html">wishlist</a>
                            </li>
                            <li>
                              <a href="cart.html">cart</a>
                            </li>
                            <li>
                              <a href="dashboard.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="login.html">login</a>
                            </li>
                            <li>
                              <a href="register.html">register</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                            <li>
                              <a href="forget-pwd.html">forget password</a>
                            </li>
                            <li>
                              <a href="profile.html">profile </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="has-submenu"
                                id="sm-1771928439799911-15"
                                aria-haspopup="true"
                                aria-controls="sm-1771928439799911-16"
                                aria-expanded="false"
                              >
                                checkout<span className="sub-arrow"></span>
                              </a>
                              <ul
                                id="sm-1771928439799911-16"
                                role="group"
                                aria-hidden="true"
                                aria-labelledby="sm-1771928439799911-15"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="checkout.html">checkout 1</a>
                                </li>
                                <li>
                                  <a href="checkout2.html">
                                    checkout 2
                                    <span className="new-tag">new</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about-page.html">about us</a>
                        </li>
                        <li>
                          <a href="search.html">search</a>
                        </li>
                        <li>
                          <a href="typography.html">typography </a>
                        </li>
                        <li>
                          <a href="review.html">review </a>
                        </li>
                        <li>
                          <a href="order-success.html">order success</a>
                        </li>
                        <li>
                          <a href="order-history.html">order history</a>
                        </li>
                        <li>
                          <a href="order-tracking.html">order tracking</a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="has-submenu"
                            id="sm-1771928439799911-17"
                            aria-haspopup="true"
                            aria-controls="sm-1771928439799911-18"
                            aria-expanded="false"
                          >
                            compare<span className="sub-arrow"></span>
                          </a>
                          <ul
                            id="sm-1771928439799911-18"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-1771928439799911-17"
                            aria-expanded="false"
                          >
                            <li>
                              <a href="compare.html">compare</a>
                            </li>
                            <li>
                              <a href="compare-2.html">compare-2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="collection.html">collection</a>
                        </li>
                        <li>
                          <a href="look-book.html">lookbook</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">coming soon </a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                      </ul>
                    </li>
                    {/* <!--product-end end--> */}

                    {/* <!--blog-meu start--> */}
                    <li>
                      <a
                        className="dark-menu-item has-submenu"
                        href="#"
                        id="sm-1771928439799911-19"
                        aria-haspopup="true"
                        aria-controls="sm-1771928439799911-20"
                        aria-expanded="false"
                      >
                        blog<span className="sub-arrow"></span>
                      </a>
                      <ul
                        id="sm-1771928439799911-20"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-1771928439799911-19"
                        aria-expanded="false"
                      >
                        <li>
                          <a href="blog(left-sidebar).html">left sidebar</a>
                        </li>
                        <li>
                          <a href="blog(right-sidebar).html">right sidebar</a>
                        </li>
                        <li>
                          <a href="blog(no-sidebar).html">no sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog details</a>
                        </li>
                        <li>
                          <a href="blog-creative(left-sidebar).html">
                            creative left sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* <!--blog-meu end--> */}
                  </ul>
                </nav>
              </div>
              <div className="icon-block">
                <ul className="theme-color">
                  <li
                    className="mobile-search"
                    // onClick="#"
                    style={{ cursor: 'pointer', listStyle: 'none' }}
                  >
                    <svg
                      style={{ enableBackground: 'new 0 0 512.002 512.002' }}
                      viewBox="0 0 512.002 512.002"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="m495.594 416.408-134.086-134.095c14.685-27.49 22.492-58.333 22.492-90.312 0-50.518-19.461-98.217-54.8-134.31-35.283-36.036-82.45-56.505-132.808-57.636-1.46-.033-2.92-.054-4.392-.054-105.869 0-192 86.131-192 192s86.131 192 192 192c1.459 0 2.93-.021 4.377-.054 30.456-.68 59.739-8.444 85.936-22.436l134.085 134.075c10.57 10.584 24.634 16.414 39.601 16.414s29.031-5.83 39.589-16.403c10.584-10.577 16.413-24.639 16.413-39.597s-5.827-29.019-16.407-39.592zm-299.932-64.453c-1.211.027-2.441.046-3.662.046-88.224 0-160-71.776-160-160s71.776-160 160-160c1.229 0 2.449.019 3.671.046 86.2 1.935 156.329 73.69 156.329 159.954 0 86.274-70.133 158.029-156.338 159.954z"></path>
                        <path d="m192 320.001c-70.58 0-128-57.42-128-128s57.42-128 128-128 128 57.42 128 128-57.42 128-128 128z"></path>
                      </g>
                    </svg>
                  </li>

                  {/* Open setting start */}
                  <li className="mobile-setting " onClick={() => openSetting()}>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M500.6,212.6l-59.9-14.7c-3.3-10.5-7.5-20.7-12.6-30.6l30.6-51c3.6-6,2.7-13.5-2.1-18.3L414,55.4
                                      c-4.8-4.8-12.3-5.7-18.3-2.1l-51,30.6c-9.9-5.1-20.1-9.3-30.6-12.6l-14.4-59.9C297.9,4.8,291.9,0,285,0h-60
                                      c-6.9,0-12.9,4.8-14.7,11.4l-14.4,59.9c-10.5,3.3-20.7,7.5-30.6,12.6l-51-30.6c-6-3.6-13.5-2.7-18.3,2.1L53.4,98
                                      c-4.8,4.8-5.7,12.3-2.1,18.3l30.6,51c-5.1,9.9-9.3,20.1-12.6,30.6l-57.9,14.7C4.8,214.1,0,220.1,0,227v60
                                      c0,6.9,4.8,12.9,11.4,14.4l57.9,14.7c3.3,10.5,7.5,20.7,12.6,30.6l-30.6,51c-3.6,6-2.7,13.5,2.1,18.3L96,458.6
                                      c4.8,4.8,12.3,5.7,18.3,2.1l51-30.6c9.9,5.1,20.1,9.3,30.6,12.6l14.4,57.9c1.8,6.6,7.8,11.4,14.7,11.4h60
                                      c6.9,0,12.9-4.8,14.7-11.4l14.4-57.9c10.5-3.3,20.7-7.5,30.6-12.6l51,30.6c6,3.6,13.5,2.7,18.3-2.1l42.6-42.6
                                      c4.8-4.8,5.7-12.3,2.1-18.3l-30.6-51c5.1-9.9,9.3-20.1,12.6-30.6l59.9-14.7c6.6-1.5,11.4-7.5,11.4-14.4v-60
                                      C512,220.1,507.2,214.1,500.6,212.6z M255,332c-41.4,0-75-33.6-75-75c0-41.4,33.6-75,75-75c41.4,0,75,33.6,75,75
                                      C330,298.4,296.4,332,255,332z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </li>

                  {/* Modal for settings icon */}
                  <div id="mySetting" className="add_to_cart right">
                    <Link
                      className="overlay"
                      onClick={() => closeSetting()}
                    ></Link>
                    <div className="cart-inner">
                      <div className="cart_top">
                        <h3>my setting</h3>
                        <div className="close-cart">
                          <Link onClick={() => closeSetting()}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="setting-block">
                        <div className="form-group">
                          <select>
                            <option value="">language</option>
                            <option value="">english</option>
                            <option value="">french</option>
                            <option value="">hindi</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <select>
                            <option value="">currency</option>
                            <option value="">uro</option>
                            <option value="">ruppees</option>
                            <option value="">piund</option>
                            <option value="">doller</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal for setting icon end */}
                  {/* Open setting end */}
                  <li
                    className="mobile-user icon-desk-none"
                    onClick={handleOpenAccount}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path d="M255.999,0c-74.443,0-135,60.557-135,135s60.557,135,135,135s135-60.557,135-135S330.442,0,255.999,0z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M478.48,398.68C438.124,338.138,370.579,302,297.835,302h-83.672c-72.744,0-140.288,36.138-180.644,96.68l-2.52,3.779V512h450h0.001V402.459L478.48,398.68z"></path>
                        </g>
                      </g>
                    </svg>
                  </li>

                  {/* My Account started */}
                  <div id="myAccount" className="add_to_cart right account-bar">
                    <Link
                      className="overlay"
                      onClick={handleCloseAccount}
                    ></Link>
                    <div className="cart-inner">
                      <div className="cart_top">
                        <h3>my account</h3>
                        <div className="close-cart">
                          <Link onClick={handleCloseAccount}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                          </Link>
                        </div>
                      </div>
                      <form className="theme-form">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="review">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="review"
                            placeholder="Enter your password"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <a
                            href="#"
                            className="btn btn-solid btn-md btn-block "
                          >
                            Login
                          </a>
                        </div>
                        <div className="accout-fwd">
                          <a href="forget-pwd.html" className="d-block">
                            <h5>forget password?</h5>
                          </a>
                          <a href="register.html" className="d-block">
                            <h6>
                              you have no account ?<span>signup now</span>
                            </h6>
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- Add to account bar end--> */}

                  <li
                    className="mobile-wishlist icon-desk-none item-count"
                    onClick={() => openWishlist()}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                  c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                  c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                  s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                  C512,93.417,453.532,30,376,30z"
                          ></path>
                        </g>
                      </g>
                    </svg>

                    <div className="item-count-contain inverce">1</div>
                  </li>

                  {/* Cart start*/}
                  <li
                    className="mobile-cart item-count"
                    onClick={() => openCart()}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
                                    C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
                                    c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
                                    C438.793,477.952,444.777,460.096,443.209,442.24z M319.977,128h-128V96c0-35.296,28.704-64,64-64
                                    c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"
                          ></path>
                        </g>
                      </g>
                    </svg>

                    <div className="item-count-contain inverce">2</div>
                  </li>

                  {/* Cart modal start */}

                  {/* Add to cart bar */}

                  {/* Cart end */}
                </ul>
                <div className="toggle-nav">
                  <i className="fa fa-bars sidebar-bar"></i>
                </div>
              </div>
            </div>
          </div>
          <div id="cart_side" className="add_to_cart right">
            <Link className="overlay" onClick={() => closeCart()}></Link>
            <div className="cart-inner">
              <div className="cart_top">
                <h3>my cart</h3>
                <div className="close-cart">
                  <Link onClick={() => closeCart()}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
              {/* Product List */}

              <div className="cart_media">
                <ul className="cart_product">
                  <li>
                    <div className="media">
                      <a href="product-page(left-sidebar).html">
                        <img
                          alt="megastore1"
                          className="me-3"
                          src="../assets/images/layout-5/product/1.jpg"
                        />
                      </a>
                      <div className="media-body">
                        <a href="product-page(left-sidebar).html">
                          <h4>Vacuum Cleaner</h4>
                        </a>
                        <h6>
                          $80.00 <span>$120.00</span>
                        </h6>
                        <div className="addit-box">
                          <div className="qty-box">
                            <div className="input-group">
                              <button className="qty-minus"></button>
                              <input
                                className="qty-adj form-control"
                                type="number"
                                value="1"
                              />
                              <button className="qty-plus"></button>
                            </div>
                          </div>
                          <div className="pro-add">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-product"
                            >
                              <i data-feather="edit"></i>
                            </a>
                            <a href="#">
                              <i data-feather="trash-2"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <a href="product-page(left-sidebar).html">
                        <img
                          alt="megastore1"
                          className="me-3"
                          src="../assets/images/layout-5/product/2.jpg"
                        />
                      </a>
                      <div className="media-body">
                        <a href="product-page(left-sidebar).html">
                          <h4>electronic shaver</h4>
                        </a>
                        <h6>
                          $80.00 <span>$120.00</span>
                        </h6>
                        <div className="addit-box">
                          <div className="qty-box">
                            <div className="input-group">
                              <button className="qty-minus"></button>
                              <input
                                className="qty-adj form-control"
                                type="number"
                                value="1"
                              />
                              <button className="qty-plus"></button>
                            </div>
                          </div>
                          <div className="pro-add">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-product"
                            >
                              <i data-feather="edit"></i>
                            </a>
                            <a href="#">
                              <i data-feather="trash-2"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <a href="product-page(left-sidebar).html">
                        <img
                          alt="megastore1"
                          className="me-3"
                          src="../assets/images/layout-5/product/3.jpg"
                        />
                      </a>
                      <div className="media-body">
                        <a href="product-page(left-sidebar).html">
                          <h4>vivo y30</h4>
                        </a>
                        <h6>
                          $80.00 <span>$120.00</span>
                        </h6>
                        <div className="addit-box">
                          <div className="qty-box">
                            <div className="input-group">
                              <button className="qty-minus"></button>
                              <input
                                className="qty-adj form-control"
                                type="number"
                                value="1"
                              />
                              <button className="qty-plus"></button>
                            </div>
                          </div>
                          <div className="pro-add">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-product"
                            >
                              <i data-feather="edit"></i>
                            </a>
                            <a href="#">
                              <i data-feather="trash-2"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="cart_total">
                  <li>
                    subtotal : <span>$1050.00</span>
                  </li>
                  <li>
                    shpping <span>free</span>
                  </li>
                  <li>
                    taxes <span>$0.00</span>
                  </li>
                  <li>
                    <div className="total">
                      total<span>$1050.00</span>
                    </div>
                  </li>
                  <li>
                    <div className="buttons">
                      <a href="cart.html" className="btn btn-solid btn-sm m-2">
                        view cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-solid btn-sm m-2"
                      >
                        checkout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Cart modal end */}
        </div>
      </div>

      {/* Wishlist code starts */}
      <div id="wishlist_side" className="add_to_cart right ">
        <Link className="overlay" onClick={handleCloseWishlist}></Link>
        <div className="cart-inner">
          <div className="cart_top">
            <h3>my wishlist</h3>
            <div className="close-cart">
              <Link onClick={handleCloseWishlist}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="cart_media">
            <ul className="cart_product">
              <li>
                <div className="media">
                  <a href="product-page(left-sidebar).html">
                    <img
                      alt="megastore1"
                      className="me-3"
                      src="../assets/images/cosmetic/product/1.jpg"
                    />
                  </a>
                  <div className="media-body">
                    <a href="product-page(left-sidebar).html">
                      <h4>redmi not 3</h4>
                    </a>
                    <h6>
                      $80.00 <span>$120.00</span>
                    </h6>
                    <div className="addit-box">
                      <div className="qty-box">
                        <div className="input-group">
                          <button className="qty-minus"></button>
                          <input
                            className="qty-adj form-control"
                            type="number"
                            defaultValue="1"
                          />
                          <button className="qty-plus"></button>
                        </div>
                      </div>
                      <div className="pro-add">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <i data-feather="edit"></i>
                        </a>
                        <a href="#">
                          <i data-feather="trash-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <a href="product-page(left-sidebar).html">
                    <img
                      alt="megastore1"
                      className="me-3"
                      src="../assets/images/cosmetic/product/2.jpg"
                    />
                  </a>
                  <div className="media-body">
                    <a href="product-page(left-sidebar).html">
                      <h4>Double Door Refrigerator</h4>
                    </a>
                    <h6>
                      $80.00 <span>$120.00</span>
                    </h6>
                    <div className="addit-box">
                      <div className="qty-box">
                        <div className="input-group">
                          <button className="qty-minus"></button>
                          <input
                            className="qty-adj form-control"
                            type="number"
                            defaultValue="1"
                          />
                          <button className="qty-plus"></button>
                        </div>
                      </div>
                      <div className="pro-add">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <i data-feather="edit"></i>
                        </a>
                        <a href="#">
                          <i data-feather="trash-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <a href="product-page(left-sidebar).html">
                    <img
                      alt="megastore1"
                      className="me-3"
                      src="../assets/images/cosmetic/product/3.jpg"
                    />
                  </a>
                  <div className="media-body">
                    <a href="product-page(left-sidebar).html">
                      <h4>woman hande bag</h4>
                    </a>
                    <h6>
                      $80.00 <span>$120.00</span>
                    </h6>
                    <div className="addit-box">
                      <div className="qty-box">
                        <div className="input-group">
                          <button className="qty-minus"></button>
                          <input
                            className="qty-adj form-control"
                            type="number"
                            defaultValue="1"
                          />
                          <button className="qty-plus"></button>
                        </div>
                      </div>
                      <div className="pro-add">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <i data-feather="edit"></i>
                        </a>
                        <a href="#">
                          <i data-feather="trash-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="cart_total">
              <li>
                subtotal : <span>$1050.00</span>
              </li>
              <li>
                shpping <span>free</span>
              </li>
              <li>
                taxes <span>$0.00</span>
              </li>
              <li>
                <div className="total">
                  total<span>$1050.00</span>
                </div>
              </li>
              <li>
                <div className="buttons">
                  <a
                    href="wishlist.html"
                    className="btn btn-solid btn-block btn-md"
                  >
                    view wislist
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- wishlist bar bar end--> */}

      <div className="searchbar-input">
        <div className="input-group">
          <span className="input-group-text">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="28.931px"
              height="28.932px"
              viewBox="0 0 28.931 28.932"
              style={{ enableBackground: 'new 0 0 28.931 28.932' }}
              xmlSpace="preserve"
            >
              <g>
                <path d="M28.344,25.518l-6.114-6.115c1.486-2.067,2.303-4.537,2.303-7.137c0-3.275-1.275-6.355-3.594-8.672C18.625,1.278,15.543,0,12.266,0C8.99,0,5.909,1.275,3.593,3.594C1.277,5.909,0.001,8.99,0.001,12.266c0,3.276,1.275,6.356,3.592,8.674c2.316,2.316,5.396,3.594,8.673,3.594c2.599,0,5.067-0.813,7.136-2.303l6.114,6.115c0.392,0.391,0.902,0.586,1.414,0.586c0.513,0,1.024-0.195,1.414-0.586C29.125,27.564,29.125,26.299,28.344,25.518z M6.422,18.111c-1.562-1.562-2.421-3.639-2.421-5.846S4.86,7.983,6.422,6.421c1.561-1.562,3.636-2.422,5.844-2.422s4.284,0.86,5.845,2.422c1.562,1.562,2.422,3.638,2.422,5.845s-0.859,4.283-2.422,5.846c-1.562,1.562-3.636,2.42-5.845,2.42S7.981,19.672,6.422,18.111z"></path>
              </g>
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="search your product"
          />
          <span className="input-group-text close-searchbar">
            <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
