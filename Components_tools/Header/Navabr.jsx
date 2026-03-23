import React, { useEffect, useRef, useState } from 'react'
import defaultImg from './cat_1.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const menuRef = useRef(null)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        setCategories(data)
      } catch (err) {
        console.error('Error fetching categories:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
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
    <div className="category-header7">
      <div className="custom-container">
        <div className="row">
          <div className="col-12">
            <div className="category-contain">
              <div className="category-left">
                {/* Shop by category started */}
                <div className="header-category3">
                  <a className="category-toggle" style={{ cursor: 'pointer' }}>
                    <i className="ti-layout-grid2-alt"></i>Shop by category
                  </a>
                  <div className="category-heandle">
                    <div className="heandle-left">
                      <div className="point"></div>
                    </div>
                    <div className="heandle-right">
                      <div className="point"></div>
                    </div>
                  </div>
                  <ul className="collapse-category">
                    <li className="back-btn" style={{ cursor: 'pointer' }}>
                      <i className="fa fa-angle-left "></i> back
                    </li>
                    {loading ? (
                      <li className="p-2 text-center">Loading...</li>
                    ) : (
                      categories.map((cat) => (
                        <li key={cat.id}>
                          <a href={`/category/${cat.id}`}>
                            {/* Agar image icon ki tarah dikhani ho toh: */}
                            <img
                              src={cat.image}
                              alt=""
                              style={{
                                width: '40px',
                                height: '30px',
                                objectFit: 'cover',
                                flexShrink: 0,
                              }}
                              onError={(e) => {
                                e.currentTarget.src = defaultImg // fallback if image fails to load
                              }}
                            />
                            <span
                              style={{
                                fontSize: '10px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                padding: '2px',
                              }}
                            >
                              {cat.name}
                            </span>
                          </a>
                        </li>
                      ))
                    )}

                    <li className="p-2">No categories found</li>
                  </ul>
                </div>
                {/* Shop by category ended */}
                <div className="logo-block">
                  <div className="mobilecat-toggle ">
                    {' '}
                    <i className="fa fa-bars sidebar-bar"></i>{' '}
                  </div>
                  <div className="brand-logo logo-sm-center">
                    <a href="index.html ">
                      <img
                        src="../assets/images/tools/logo.png"
                        className="img-fluid  "
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="category-right">
                <div className="menu-block">
                  <nav id="main-nav">
                    <div className="toggle-nav">
                      <i className="fa fa-bars sidebar-bar"></i>
                    </div>
                    <ul
                      id="main-menu"
                      ref={menuRef}
                      className="sm pixelstrap sm-horizontal"
                      data-smartmenus-id="17722772121344563"
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
                      {/* <!--HOME--> */}
                      <li>
                        <a
                          className="dark-menu-item has-submenu"
                          href="#"
                          id="sm-17722772121344563-1"
                          aria-haspopup="true"
                          aria-controls="sm-17722772121344563-2"
                          aria-expanded="false"
                        >
                          Home<span className="sub-arrow"></span>
                        </a>
                        <ul
                          id="sm-17722772121344563-2"
                          role="group"
                          aria-hidden="true"
                          aria-labelledby="sm-17722772121344563-1"
                          aria-expanded="false"
                          className="sm-nowrap"
                          style={{
                            width: 'auto',
                            display: 'none',
                            top: 'auto',
                            left: '0px',
                            marginLeft: '0px',
                            marginTop: '0px',
                            minWidth: '10em',
                            maxWidth: '20em',
                          }}
                        >
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
                          {/* <li>
                            <a href="megastore.html">mega store 5</a>
                          </li> */}
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
                            marginTop: '-150.667px',
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
                            marginTop: '380.333px',
                            visibility: 'hidden',
                          }}
                        >
                          <span className="scroll-down-arrow"></span>
                        </span>
                      </li>
                      {/* <!--HOME-END-->
                  <!--SHOP--> */}
                      <li>
                        <a
                          className="dark-menu-item has-submenu"
                          href="#"
                          id="sm-17722772121344563-3"
                          aria-haspopup="true"
                          aria-controls="sm-17722772121344563-4"
                          aria-expanded="false"
                        >
                          shop<span className="sub-arrow"></span>
                        </a>
                        <ul
                          id="sm-17722772121344563-4"
                          role="group"
                          aria-hidden="true"
                          aria-labelledby="sm-17722772121344563-3"
                          aria-expanded="false"
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
                            <a href="category-page(list-view).html">
                              list view
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* <!--SHOP-END-->
                  <!--product-meu start--> */}
                      <li className="mega">
                        <a
                          className="dark-menu-item has-submenu"
                          href="#"
                          id="sm-17722772121344563-5"
                          aria-haspopup="true"
                          aria-controls="sm-17722772121344563-6"
                          aria-expanded="false"
                        >
                          product
                          <span className="sub-arrow"></span>
                        </a>
                        <ul
                          className="mega-menu full-mega-menu "
                          id="sm-17722772121344563-6"
                          role="group"
                          aria-hidden="true"
                          aria-labelledby="sm-17722772121344563-5"
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
                                      src="../assets/images/tools/menu-banner/1.jpg"
                                      alt="menu-banner"
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div>
                                    <img
                                      src="../assets/images/tools/menu-banner/2.jpg"
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
                      {/* <!--product-meu end-->

                  <!--mega-meu start--> */}
                      <li className="mega">
                        <a
                          className="dark-menu-item has-submenu"
                          href="#"
                          id="sm-17722772121344563-7"
                          aria-haspopup="true"
                          aria-controls="sm-17722772121344563-8"
                          aria-expanded="false"
                        >
                          features<span className="sub-arrow"></span>
                        </a>
                        <ul
                          className="mega-menu full-mega-menu ratio_landscape"
                          id="sm-17722772121344563-8"
                          role="group"
                          aria-hidden="true"
                          aria-labelledby="sm-17722772121344563-7"
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
                                          <a href="layout-2.html">
                                            cart bottom
                                          </a>
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
                                          <a href="button.html">
                                            element button
                                          </a>
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
                                      src="../assets/images/tools/menu-banner/3.jpg"
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
                      {/* <!--mega-meu end-->

                  <!--pages meu start--> */}
                      <li>
                        <a
                          className="dark-menu-item has-submenu"
                          href="#"
                          id="sm-17722772121344563-9"
                          aria-haspopup="true"
                          aria-controls="sm-17722772121344563-10"
                          aria-expanded="false"
                        >
                          pages<span className="sub-arrow"></span>
                        </a>
                        <ul
                          id="sm-17722772121344563-10"
                          role="group"
                          aria-hidden="true"
                          aria-labelledby="sm-17722772121344563-9"
                          aria-expanded="false"
                        >
                          <li>
                            <a
                              href="#"
                              className="has-submenu"
                              id="sm-17722772121344563-11"
                              aria-haspopup="true"
                              aria-controls="sm-17722772121344563-12"
                              aria-expanded="false"
                            >
                              invoice<span className="new-tag">new</span>
                              <span className="sub-arrow"></span>
                            </a>
                            <ul
                              id="sm-17722772121344563-12"
                              role="group"
                              aria-hidden="true"
                              aria-labelledby="sm-17722772121344563-11"
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
                              id="sm-17722772121344563-13"
                              aria-haspopup="true"
                              aria-controls="sm-17722772121344563-14"
                              aria-expanded="false"
                            >
                              account<span className="sub-arrow"></span>
                            </a>
                            <ul
                              id="sm-17722772121344563-14"
                              role="group"
                              aria-hidden="true"
                              aria-labelledby="sm-17722772121344563-13"
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
                                  id="sm-17722772121344563-15"
                                  aria-haspopup="true"
                                  aria-controls="sm-17722772121344563-16"
                                  aria-expanded="false"
                                >
                                  checkout<span className="sub-arrow"></span>
                                </a>
                                <ul
                                  id="sm-17722772121344563-16"
                                  role="group"
                                  aria-hidden="true"
                                  aria-labelledby="sm-17722772121344563-15"
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
                              id="sm-17722772121344563-17"
                              aria-haspopup="true"
                              aria-controls="sm-17722772121344563-18"
                              aria-expanded="false"
                            >
                              compare<span className="sub-arrow"></span>
                            </a>
                            <ul
                              id="sm-17722772121344563-18"
                              role="group"
                              aria-hidden="true"
                              aria-labelledby="sm-17722772121344563-17"
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
                      {/* <!--product-end end-->

                  <!--blog-meu start--> */}
                      <li>
                        <a
                          className="dark-menu-item has-submenu"
                          href="#"
                          id="sm-17722772121344563-19"
                          aria-haspopup="true"
                          aria-controls="sm-17722772121344563-20"
                          aria-expanded="false"
                        >
                          blog<span className="sub-arrow"></span>
                        </a>
                        <ul
                          id="sm-17722772121344563-20"
                          role="group"
                          aria-hidden="true"
                          aria-labelledby="sm-17722772121344563-19"
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
              </div>
              <div className="icon-block">
                <ul className="theme-color">
                  <li className="mobile-search icon-md-block m-1">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 612.01 612.01"
                      style={{ enableBackground: 'new 0 0 612.01 612.01' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g id="_x34__4_">
                          <g>
                            <path
                              d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
                                  C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
                                  l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
                                  c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
                                  S377.82,467.8,257.493,467.8z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                  <li
                    className="mobile-user icon-desk-none  m-1"
                    onClick={() => openAccount()}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 480 480"
                      style={{ enableBackground: 'new 0 0 480 480' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M386.816,323.456l-69.984-14.016c-7.424-1.472-12.832-8.064-12.832-15.68v-16.064c4.608-6.4,8.928-14.944,13.408-23.872
                                c3.424-6.752,8.576-16.928,10.88-19.328c13.568-13.28,28.032-29.76,32.448-51.232c4-19.456,0-29.568-4.64-37.568
                                c0-15.648,0-44.288-5.44-64.928c-0.544-24.928-5.12-39.008-16.608-51.552c-8.128-8.768-20.096-10.816-29.696-12.448
                                c-3.808-0.64-9.024-1.536-10.848-2.528C276.896,5.056,260.032,0.512,239.392,0c-42.24,1.6-94.08,28.384-111.424,76.544
                                c-5.28,14.624-4.768,38.624-4.384,57.92l-0.448,11.232c-4.064,8-8.064,18.112-4.032,37.536
                                c4.416,21.568,18.88,38.016,32.384,51.232c2.336,2.432,7.552,12.672,11.008,19.424c4.544,8.896,8.896,17.44,13.504,23.84v16.032
                                c0,7.616-5.408,14.208-12.864,15.68l-69.984,14.016C48.448,332.384,16,371.968,16,417.568V448c0,17.632,14.368,32,32,32h384
                                c17.632,0,32-14.368,32-32v-30.432C464,371.968,431.552,332.384,386.816,323.456z M432,448H48v-30.432
                                c0-30.4,21.632-56.8,51.456-62.752l69.952-14.016C191.776,336.384,208,316.576,208,293.76V272c0-4.288-1.728-8.416-4.768-11.392
                                c-2.752-2.688-8.672-14.336-12.224-21.28c-6.016-11.776-11.2-21.952-17.12-27.712c-10.624-10.368-20.768-21.76-23.456-34.816
                                c-2.08-10.112-0.64-12.96,1.216-16.576c1.632-3.2,4.064-8,4.064-14.528l-0.16-11.872c-0.288-13.984-0.768-37.408,2.496-46.432
                                C170.464,52.96,209.856,33.152,239.584,32c14.656,0.384,26.176,3.424,38.4,10.24c6.592,3.648,14.272,4.928,21.024,6.08
                                c3.808,0.64,10.176,1.728,11.488,2.56c4.32,4.704,7.904,10.368,8.16,32.384c0,1.44,0.224,2.88,0.64,4.288
                                c4.768,16.352,4.768,44.576,4.768,58.144c0,6.528,2.464,11.328,4.064,14.528c1.856,3.616,3.296,6.464,1.216,16.608
                                c-2.656,12.992-12.864,24.416-23.456,34.784c-5.952,5.824-11.104,16-17.056,27.808c-3.456,6.912-9.312,18.496-12.032,21.152
                                c-3.072,3.008-4.8,7.136-4.8,11.424v21.76c0,22.816,16.224,42.624,38.592,47.072l69.984,14.016
                                c29.792,5.92,51.424,32.32,51.424,62.72V448z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </li>
                  <li
                    className="mobile-setting  m-1"
                    onClick={() => openSetting()}
                  >
                    <svg
                      enable-background="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"></path>
                      <path d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"></path>
                    </svg>
                  </li>

                  {/* Open setting start */}
                  <div id="mySetting" className="add_to_cart right">
                    <Link
                      href="#"
                      className="overlay"
                      onClick={() => closeSetting()}
                    ></Link>
                    <div className="cart-inner">
                      <div className="cart_top">
                        <h3>my setting</h3>
                        <div className="close-cart">
                          <Link href="#" onClick={() => closeSetting()}>
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
                  {/* OPen setting close */}

                  <li
                    className="mobile-wishlist item-count icon-desk-none  m-1"
                    onClick={(e) => {
                      e.preventDefault()
                      openWishlist()
                    }}
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
                            d="M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25
                                c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25
                                c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7
                                c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574
                                c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431
                                c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351
                                C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646
                                c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245
                                C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659
                                c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66
                                c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351
                                C482,254.358,413.255,312.939,309.193,401.614z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <div className="item-count-contain inverce"> 1 </div>
                  </li>

                  {/* Wishlist sidebar open */}
                  <div id="wishlist_side" className="add_to_cart right ">
                    <Link
                      className="overlay"
                      onClick={(e) => {
                        e.preventDefault()
                        closeWishlist()
                      }}
                    ></Link>
                    <div className="cart-inner">
                      <div className="cart_top">
                        <h3>my wishlist</h3>
                        <div className="close-cart">
                          <Link
                            onClick={(e) => {
                              e.preventDefault()
                              closeWishlist()
                            }}
                          >
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
                                  src="../assets/images/tools/product/1.jpg"
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
                                  src="../assets/images/tools/product/2.jpg"
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
                                  src="../assets/images/tools/product/3.jpg"
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
                  {/* Wishlist sidebar close */}

                  <li
                    className="mobile-cart item-count  m-1"
                    onClick={() => openCart()}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 511.999 511.999"
                      style={{ enableBackground: 'new 0 0 511.999 511.999' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M435.099,29.815h-71.361V0H148.262v29.814H76.901L40.464,181.549H0.008v103.359h30.969l34.508,227.091h381.029
                                    l34.509-227.091h30.968V181.55h-40.456L435.099,29.815z M178.261,29.999h155.477v29.629H178.261V29.999z M100.549,59.813h47.714
                                    v29.814h215.475V59.813h47.714l29.233,121.736H71.316L100.549,59.813z M420.73,482.001H91.27L61.32,284.909h389.36L420.73,482.001
                                    z M481.993,254.91H30.007v-43.361h451.986V254.91z"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            x="241.002"
                            y="326.38"
                            width="29.999"
                            height="114.156"
                          ></rect>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            x="143.436"
                            y="326.38"
                            width="29.999"
                            height="114.156"
                          ></rect>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            x="338.559"
                            y="326.38"
                            width="29.999"
                            height="114.156"
                          ></rect>
                        </g>
                      </g>
                    </svg>
                    <div className="item-count-contain inverce"> 3 </div>
                  </li>
                </ul>

                <div className="toggle-nav">
                  <i className="fa fa-bars sidebar-bar"></i>
                </div>
              </div>
              <div className="store-locator">
                <select>
                  <option value="">store locations</option>
                  <option value="store1">new delhi</option>
                  <option value="store2">mumbai</option>
                  <option value="store3">ludhiyana</option>
                  <option value="store4">kolkata</option>
                  <option value="store5">pune</option>
                  <option value="store6">hariyana</option>
                  <option value="store7">pondicheri</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchbar-input ajax-search the-basics">
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
          <span
            className="twitter-typeahead"
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <input
              type="search"
              className="form-control typeahead tt-hint"
              readonly=""
              autocomplete="off"
              spellcheck="false"
              tabIndex="-1"
              dir="ltr"
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                borderColor: 'transparent',
                boxShadow: 'none',
                opacity: 1,
                background:
                  'none 0% 0% / auto repeat scroll padding-box padding-box rgb(255, 255, 255)',
              }}
            />
            <input
              type="search"
              className="form-control typeahead tt-input"
              placeholder="Search a Product"
              autocomplete="off"
              spellcheck="false"
              dir="auto"
              style={{
                position: 'relative',
                verticalAlign: 'top',
                backgroundColor: 'transparent',
              }}
            />
            <pre
              aria-hidden="true"
              style={{
                position: 'absolute',
                visibility: 'hidden',
                whiteSpace: 'pre',
                fontFamily: '"PT Sans", sans-serif',
                fontSize: '15.2px',
                fontStyle: 'normal',
                fontVariant: 'normal',
                fontWeight: 400,
                wordSpacing: '0px',
                letterSpacing: '0.76px',
                textIndent: '0px',
                textRendering: 'auto',
                textTransform: 'capitalize',
              }}
            ></pre>
            <div
              className="tt-menu"
              style={{
                position: 'absolute',
                top: '100%',
                left: '0px',
                zIndex: 100,
                display: 'none',
              }}
            >
              <div className="tt-dataset tt-dataset-states"></div>
            </div>
          </span>
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
