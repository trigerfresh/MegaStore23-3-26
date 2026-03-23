import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import defaultImg from './12.jpg'

const Custom_Containers = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  // const [slide1, setSlide1] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/special')
        const data = await res.json()

        // --- SHUFFLE LOGIC START ---
        // Hum data ko copy karke shuffle karenge taaki original data mutate na ho
        const shuffled = [...data].sort(() => 0.5 - Math.random())

        // Shuffle ke baad sirf pehle 4 products lenge
        const limitedProducts = shuffled.slice(0, 4)
        // --- SHUFFLE LOGIC END ---

        setProducts(limitedProducts)
        console.log(limitedProducts)
        if (limitedProducts.length > 0) setSelectedProduct(limitedProducts[0])
      } catch (err) {
        console.error('Error fetching special products:', err)
      }
    }

    fetchProducts()
  }, [])

  const thumbSettings = {
    dots: false,
    infinite: true,
    vertical: true, // Images ko upar-neeche chalane ke liye
    verticalSwiping: true,
    slidesToShow: 3, // Ek baar mein sirf 3 dikhengi
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
  }

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section>
      <div className="custom-container ">
        <div className="row hot-4">
          <div className="col-md-2 pr-lg-0  ">
            <div className="media-banner banner-inverse b-g-white1 border-0 media-banner-2">
              <div className="media-banner-box">
                <div className="media-heading">
                  <h5>on sale</h5>{' '}
                </div>
              </div>

              <div className="media-banner-box">
                <div className="media">
                  <a href="product-page(left-sidebar).html" tabIndex="0">
                    {' '}
                    <img
                      src={selectedProduct?.image1 || defaultImg}
                      className="img-fluid  "
                      alt="banner"
                      onError={(e) => {
                        e.currentTarget.src = defaultImg
                      }}
                    />{' '}
                  </a>
                  <div className="media-body">
                    <div className="media-contant">
                      <div>
                        <div className="product-detail">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <a
                            href="product-page(left-sidebar).html"
                            tabIndex="0"
                          >
                            <p> {selectedProduct?.title}</p>
                          </a>
                          <h6>${selectedProduct?.price || 30.0}</h6>{' '}
                        </div>
                        <div className="cart-info">
                          <button
                            className="tooltip-top"
                            data-tippy-content="Add to cart"
                            onclick="openCart()"
                          >
                            {' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-shopping-cart"
                            >
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>{' '}
                          </button>{' '}
                          <a
                            href="#"
                            className="add-to-wish tooltip-top"
                            data-tippy-content="Add to Wishlist"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-heart add-to-wish"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </a>{' '}
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-top"
                            data-tippy-content="Quick View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>{' '}
                          <a
                            href="compare.html"
                            className="tooltip-top"
                            data-tippy-content="Compare"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-refresh-cw"
                            >
                              <polyline points="23 4 23 10 17 10"></polyline>
                              <polyline points="1 20 1 14 7 14"></polyline>
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="media-banner-box">
                <div className="media">
                  <a href="product-page(left-sidebar).html" tabIndex="0">
                    {' '}
                    <img
                      src={selectedProduct?.image2 || defaultImg}
                      className="img-fluid  "
                      alt="banner"
                      onError={(e) => {
                        e.currentTarget.src = defaultImg
                      }}
                    />{' '}
                  </a>
                  <div className="media-body">
                    <div className="media-contant">
                      <div>
                        <div className="product-detail">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <a
                            href="product-page(left-sidebar).html"
                            tabIndex="0"
                          >
                            <p>{selectedProduct?.title}</p>
                          </a>
                          <h6>${selectedProduct?.price || 35.0}</h6>{' '}
                        </div>
                        <div className="cart-info">
                          <button
                            className="tooltip-top"
                            data-tippy-content="Add to cart"
                            onclick="openCart()"
                          >
                            {' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-shopping-cart"
                            >
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>{' '}
                          </button>{' '}
                          <a
                            href="#"
                            className="add-to-wish tooltip-top"
                            data-tippy-content="Add to Wishlist"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-heart add-to-wish"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </a>{' '}
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-top"
                            data-tippy-content="Quick View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>{' '}
                          <a
                            href="compare.html"
                            className="tooltip-top"
                            data-tippy-content="Compare"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-refresh-cw"
                            >
                              <polyline points="23 4 23 10 17 10"></polyline>
                              <polyline points="1 20 1 14 7 14"></polyline>
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="media-banner-box">
                <div className="media">
                  <a href="product-page(left-sidebar).html" tabIndex="0">
                    {' '}
                    <img
                      src={selectedProduct?.image3 || defaultImg}
                      className="img-fluid  "
                      alt={selectedProduct?.title}
                      onError={(e) => {
                        e.currentTarget.src = defaultImg
                      }}
                    />{' '}
                  </a>
                  <div className="media-body">
                    <div className="media-contant">
                      <div>
                        <div className="product-detail">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <a
                            href="product-page(left-sidebar).html"
                            tabIndex="0"
                          >
                            <p>{selectedProduct?.image3}</p>
                          </a>
                          <h6>${selectedProduct?.price || 60.0}</h6>{' '}
                        </div>
                        <div className="cart-info">
                          <button
                            className="tooltip-top"
                            data-tippy-content="Add to cart"
                            onclick="openCart()"
                          >
                            {' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-shopping-cart"
                            >
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>{' '}
                          </button>{' '}
                          <a
                            href="#"
                            className="add-to-wish tooltip-top"
                            data-tippy-content="Add to Wishlist"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-heart add-to-wish"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </a>{' '}
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-top"
                            data-tippy-content="Quick View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>{' '}
                          <a
                            href="compare.html"
                            className="tooltip-top"
                            data-tippy-content="Compare"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-refresh-cw"
                            >
                              <polyline points="23 4 23 10 17 10"></polyline>
                              <polyline points="1 20 1 14 7 14"></polyline>
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="media-banner-box">
                <div className="media">
                  <a href="product-page(left-sidebar).html" tabIndex="0">
                    {' '}
                    <img
                      src={selectedProduct?.image4 || defaultImg}
                      className="img-fluid  "
                      alt={selectedProduct?.title}
                      onError={(e) => {
                        e.currentTarget.src = defaultImg
                      }}
                    />{' '}
                  </a>
                  <div className="media-body">
                    <div className="media-contant">
                      <div>
                        <div className="product-detail">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <a
                            href="product-page(left-sidebar).html"
                            tabIndex="0"
                          >
                            <p>{selectedProduct?.title}</p>
                          </a>
                          <h6>${selectedProduct?.price || 80.0}</h6>{' '}
                        </div>
                        <div className="cart-info">
                          <button
                            className="tooltip-top"
                            data-tippy-content="Add to cart"
                            onclick="openCart()"
                          >
                            {' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-shopping-cart"
                            >
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>{' '}
                          </button>{' '}
                          <a
                            href="#"
                            className="add-to-wish tooltip-top"
                            data-tippy-content="Add to Wishlist"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-heart add-to-wish"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </a>{' '}
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-top"
                            data-tippy-content="Quick View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>{' '}
                          <a
                            href="compare.html"
                            className="tooltip-top"
                            data-tippy-content="Compare"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-refresh-cw"
                            >
                              <polyline points="23 4 23 10 17 10"></polyline>
                              <polyline points="1 20 1 14 7 14"></polyline>
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="hot-deal layout-4 hotdeal-third">
              <div className="title1 pb-0 text-left ps-5">
                <h4>today's hot deal</h4>
              </div>

              <div className="slide-1 no-arrow">
                <Slider {...mainSliderSettings}>
                  {/* SLIDE START */}
                  <div>
                    <div className="hot-deal-contain deal-abjust b-g-white1">
                      <div className="row hot-deal-subcontain align-items-center">
                        {/* MAIN IMAGE (col-lg-4) */}
                        <div className="col-lg-4 col-md-4">
                          <div className="hotdeal-right-slick border">
                            <div className="img-wrraper">
                              <div
                                className="bg-size"
                                style={{
                                  backgroundImage: `url(${
                                    selectedProduct?.image1 ||
                                    selectedProduct?.image2 ||
                                    selectedProduct?.image3 ||
                                    '../assets/images/layout-2/hot-deal/8.jpg'
                                  })`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  height: '250px',
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* CONTENT (col-lg-6) */}
                        <div className="col-lg-6 col-md-6">
                          <div className="hotdeal-right-slick">
                            <h5>{selectedProduct?.title}</h5>

                            <ul className="rating">
                              {[...Array(5)].map((_, i) => (
                                <li key={i}>
                                  <i className="fa fa-star"></i>
                                </li>
                              ))}
                            </ul>

                            <p>
                              It is a long established fact that a reader...
                            </p>

                            <h6>
                              $45.00 <span>$50.30</span>
                            </h6>

                            <div className="timer">
                              <p>EXPIRED</p>
                            </div>

                            <a href="#" className="btn btn-normal btn-md">
                              shop now
                            </a>
                          </div>
                        </div>

                        {/* RIGHT THUMBS VERTICAL SLIDER (col-md-2) */}
                        <div className="col-md-2">
                          <div
                            className="hotdeal-right-nav"
                            style={{ height: '350px', overflow: 'hidden' }}
                          >
                            <Slider {...thumbSettings}>
                              {products.map((item, index) => {
                                const images = [
                                  item.image1,
                                  item.image2,
                                  item.image3,
                                  item.image4,
                                ].filter(Boolean) // null हटाएगा

                                return images.map((img, i) => (
                                  <div className="p-1" key={index + '-' + i}>
                                    <div className="border">
                                      <img
                                        src={img}
                                        className="img-fluid"
                                        style={{
                                          height: '105px',
                                          width: '100%',
                                          objectFit: 'cover',
                                          cursor: 'pointer',
                                        }}
                                        alt=""
                                        onClick={() => setSelectedProduct(item)}
                                      />
                                    </div>
                                  </div>
                                ))
                              })}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* SLIDE END */}
                </Slider>
              </div>
            </div>
          </div>

          <div className="col-md-2 pr-lg-0  ">
            <div className="media-banner banner-inverse b-g-white1 border-0 media-banner-2">
              <div className="media-banner-box">
                <div className="media-heading">
                  <h5>on sale</h5>{' '}
                </div>
              </div>

              <div className="media-banner-box">
                <div className="media">
                  <a href="product-page(left-sidebar).html" tabIndex="0">
                    {' '}
                    <img
                      src={selectedProduct?.image1 || defaultImg}
                      className="img-fluid  "
                      alt="banner"
                      onError={(e) => {
                        e.currentTarget.src = defaultImg
                      }}
                    />{' '}
                  </a>
                  <div className="media-body">
                    <div className="media-contant">
                      <div>
                        <div className="product-detail">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <a
                            href="product-page(left-sidebar).html"
                            tabIndex="0"
                          >
                            <p> {selectedProduct?.title}</p>
                          </a>
                          <h6>${selectedProduct?.price || 30.0}</h6>{' '}
                        </div>
                        <div className="cart-info">
                          <button
                            className="tooltip-top"
                            data-tippy-content="Add to cart"
                            onclick="openCart()"
                          >
                            {' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-shopping-cart"
                            >
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>{' '}
                          </button>{' '}
                          <a
                            href="#"
                            className="add-to-wish tooltip-top"
                            data-tippy-content="Add to Wishlist"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-heart add-to-wish"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </a>{' '}
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-top"
                            data-tippy-content="Quick View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>{' '}
                          <a
                            href="compare.html"
                            className="tooltip-top"
                            data-tippy-content="Compare"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-refresh-cw"
                            >
                              <polyline points="23 4 23 10 17 10"></polyline>
                              <polyline points="1 20 1 14 7 14"></polyline>
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="media-banner-box">
                <div className="media">
                  <a href="product-page(left-sidebar).html" tabIndex="0">
                    {' '}
                    <img
                      src={selectedProduct?.image2 || defaultImg}
                      className="img-fluid  "
                      alt="banner"
                      onError={(e) => {
                        e.currentTarget.src = defaultImg
                      }}
                    />{' '}
                  </a>
                  <div className="media-body">
                    <div className="media-contant">
                      <div>
                        <div className="product-detail">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <a
                            href="product-page(left-sidebar).html"
                            tabIndex="0"
                          >
                            <p>{selectedProduct?.title}</p>
                          </a>
                          <h6>${selectedProduct?.price || 35.0}</h6>{' '}
                        </div>
                        <div className="cart-info">
                          <button
                            className="tooltip-top"
                            data-tippy-content="Add to cart"
                            onclick="openCart()"
                          >
                            {' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-shopping-cart"
                            >
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>{' '}
                          </button>{' '}
                          <a
                            href="#"
                            className="add-to-wish tooltip-top"
                            data-tippy-content="Add to Wishlist"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-heart add-to-wish"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </a>{' '}
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-top"
                            data-tippy-content="Quick View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>{' '}
                          <a
                            href="compare.html"
                            className="tooltip-top"
                            data-tippy-content="Compare"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-refresh-cw"
                            >
                              <polyline points="23 4 23 10 17 10"></polyline>
                              <polyline points="1 20 1 14 7 14"></polyline>
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="media-banner-box">
                <div className="media">
                  <a href="product-page(left-sidebar).html" tabIndex="0">
                    {' '}
                    <img
                      src={selectedProduct?.image3 || defaultImg}
                      className="img-fluid  "
                      alt={selectedProduct?.title}
                      onError={(e) => {
                        e.currentTarget.src = defaultImg
                      }}
                    />{' '}
                  </a>
                  <div className="media-body">
                    <div className="media-contant">
                      <div>
                        <div className="product-detail">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <a
                            href="product-page(left-sidebar).html"
                            tabIndex="0"
                          >
                            <p>{selectedProduct?.image3}</p>
                          </a>
                          <h6>${selectedProduct?.price || 60.0}</h6>{' '}
                        </div>
                        <div className="cart-info">
                          <button
                            className="tooltip-top"
                            data-tippy-content="Add to cart"
                            onclick="openCart()"
                          >
                            {' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-shopping-cart"
                            >
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>{' '}
                          </button>{' '}
                          <a
                            href="#"
                            className="add-to-wish tooltip-top"
                            data-tippy-content="Add to Wishlist"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-heart add-to-wish"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </a>{' '}
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-top"
                            data-tippy-content="Quick View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>{' '}
                          <a
                            href="compare.html"
                            className="tooltip-top"
                            data-tippy-content="Compare"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-refresh-cw"
                            >
                              <polyline points="23 4 23 10 17 10"></polyline>
                              <polyline points="1 20 1 14 7 14"></polyline>
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="media-banner-box">
                <div className="media">
                  <a href="product-page(left-sidebar).html" tabIndex="0">
                    {' '}
                    <img
                      src={selectedProduct?.image4 || defaultImg}
                      className="img-fluid  "
                      alt={selectedProduct?.title}
                      onError={(e) => {
                        e.currentTarget.src = defaultImg
                      }}
                    />{' '}
                  </a>
                  <div className="media-body">
                    <div className="media-contant">
                      <div>
                        <div className="product-detail">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <a
                            href="product-page(left-sidebar).html"
                            tabIndex="0"
                          >
                            <p>{selectedProduct?.title}</p>
                          </a>
                          <h6>${selectedProduct?.price || 80.0}</h6>{' '}
                        </div>
                        <div className="cart-info">
                          <button
                            className="tooltip-top"
                            data-tippy-content="Add to cart"
                            onclick="openCart()"
                          >
                            {' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-shopping-cart"
                            >
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>{' '}
                          </button>{' '}
                          <a
                            href="#"
                            className="add-to-wish tooltip-top"
                            data-tippy-content="Add to Wishlist"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-heart add-to-wish"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </a>{' '}
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-top"
                            data-tippy-content="Quick View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>{' '}
                          <a
                            href="compare.html"
                            className="tooltip-top"
                            data-tippy-content="Compare"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-refresh-cw"
                            >
                              <polyline points="23 4 23 10 17 10"></polyline>
                              <polyline points="1 20 1 14 7 14"></polyline>
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Custom_Containers
