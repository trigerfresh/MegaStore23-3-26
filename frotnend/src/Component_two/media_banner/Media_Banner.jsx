import React, { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import axios from 'axios'

const Media_Banner = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const thumbSettings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000, // ✅ important for autoplay
    speed: 500,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  // For on sale
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // ek column ek slide
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          width: '100%',
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

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

  // For 2 products
  useEffect(() => {
    const fetchSpecialProducts = async () => {
      try {
        const res = await axios.get(
          'http://localhost:4000/api/products/special',
        )
        setProducts(res.data)
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    }
    fetchSpecialProducts()
  }, [])

  const groupedProducts = []
  for (let i = 0; i < products.length; i += 2) {
    groupedProducts.push(products.slice(i, i + 2))
  }
  return (
    <section className=" b-g-white section-big-pt-space">
      <div className="container">
        <div className="row hot-1 ">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="slide-1 no-arrow">
              <Slider {...settings}>
                {groupedProducts.map((group, index) => (
                  <div key={index}>
                    <div style={{ width: '', display: 'inline-block' }}>
                      <div className="media-banner">
                        <div className="media-banner-box">
                          <div className="media-heading">
                            <h5>on sale</h5>
                          </div>
                        </div>

                        {/* Grouped products map (2 items per slide) */}
                        {group.map((product) => (
                          <div
                            className="media-banner-box"
                            key={product.id}
                            style={{ height: '115px', width: '500px' }}
                          >
                            <div className="media">
                              <a href="#" tabIndex="0">
                                <img
                                  src={
                                    product.image1 ||
                                    '../assets/images/layout-1/media-banner/3.jpg'
                                  }
                                  className="img-fluid"
                                  alt={product.title}
                                  onError={(e) => {
                                    e.target.src =
                                      '../assets/images/layout-1/media-banner/3.jpg'
                                  }}
                                  style={{
                                    height: '100px', // 🔥 same height for all
                                    width: '100%',
                                    objectFit: 'cover', // 🔥 image crop hogi but stretch nahi hogi
                                  }}
                                />
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
                                      <a href="#" tabIndex="0">
                                        <p>{product.title}</p>
                                      </a>
                                      <h6>${product.price || '0.00'}</h6>
                                    </div>

                                    <div className="cart-info">
                                      <button
                                        className="tooltip-top"
                                        data-tippy-content="Add to cart"
                                        onclick="openCart()"
                                        tabIndex="-1"
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
                                          <circle
                                            cx="20"
                                            cy="21"
                                            r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>{' '}
                                      </button>
                                      <a
                                        href="#"
                                        className="add-to-wish tooltip-top"
                                        data-tippy-content="Add to Wishlist"
                                        tabIndex="-1"
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
                                      </a>
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick-view"
                                        className="tooltip-top"
                                        data-tippy-content="Quick View"
                                        tabIndex="-1"
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
                                          <circle
                                            cx="12"
                                            cy="12"
                                            r="3"
                                          ></circle>
                                        </svg>
                                      </a>
                                      <a
                                        href="compare.html"
                                        className="tooltip-top"
                                        data-tippy-content="Compare"
                                        tabIndex="-1"
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
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="media-banner-box">
                          <div className="media-view">
                            <h5>View More</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6  col-12">
            <a href="product-page(left-sidebar).html">
              <div
                className="Jewellery-banner bg-size"
                style={{
                  backgroundImage:
                    'url("../assets/images/layout-1/collection-banner/6.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  display: 'block',
                }}
              >
                <img
                  src="../assets/images/layout-1/collection-banner/6.jpg"
                  alt="collection-banner"
                  className="img-fluid bg-img"
                  style={{ display: 'none' }}
                />
                <div className="Jewellery-banner-contian">
                  <h5>save 30% off</h5>
                  <h6>Jewellery</h6>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-7  col-sm-12 col-12  ">
            <div className="hot-deal hotdeal-two">
              <div className="hot-deal-box">
                <div className="slide-1 slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <div className="hot-deal-contain  hot-deal-contain1 hot-deal-banner-1">
                          <div className="hot-deal-heading">
                            <h3>today’s hot deal</h3>
                          </div>
                          <div className="row hot-deal-subcontain">
                            <div className="col-lg-4 col-sm-4 col-12">
                              <div className="hotdeal-right-slick-1 no-arrow slick-initialized slick-slider">
                                <Slider {...mainSliderSettings}>
                                  <div className="">
                                    <div>
                                      <a
                                        href="product-page(left-sidebar).html"
                                        tabIndex="0"
                                        style={{
                                          width: '100%',
                                          display: 'inline-block',
                                        }}
                                      >
                                        <div className="right-slick-img img-wrraper">
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
                                          >
                                            <img
                                              src={
                                                selectedProduct?.image1 ||
                                                selectedProduct?.image2 ||
                                                selectedProduct?.image3 ||
                                                '../assets/images/layout-2/hot-deal/8.jpg'
                                              }
                                              alt="hot-deal"
                                              className="img-fluid bg-img "
                                              style={{ display: 'none' }}
                                              onError={(e) => {
                                                e.currentTarget.src =
                                                  '../assets/images/layout-2/hot-deal/8.jpg'
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </Slider>
                              </div>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                              <div className="hotdeal-right-slick-1 no-arrow slick-initialized slick-slider">
                                <div className="slick-list draggable">
                                  <div
                                    className="slick-track"
                                    style={{
                                      opacity: '1',
                                      width: '1140px',
                                    }}
                                  >
                                    <div>
                                      <div
                                        style={{
                                          width: '',
                                          display: 'inline-block',
                                        }}
                                      >
                                        <div>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabIndex="0"
                                          >
                                            <h5>{selectedProduct?.title}</h5>
                                          </a>

                                          <ul className="rating">
                                            {[...Array(5)].map((_, i) => (
                                              <li key={i}>
                                                <i className="fa fa-star"></i>
                                              </li>
                                            ))}
                                          </ul>

                                          <h6>
                                            ${selectedProduct?.price || 45.3}{' '}
                                            <span>
                                              ${selectedProduct?.price || 60.0}
                                            </span>
                                          </h6>
                                          <p>
                                            {selectedProduct?.productDescription ||
                                              '                              It is a long established fact that a reader...'}
                                          </p>
                                          <div className="timer">
                                            <p id="demo" className="demo1">
                                              EXPIRED
                                            </p>
                                          </div>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            className="btn btn-normal btn-md "
                                            tabIndex="0"
                                          >
                                            shop now
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-sm-2 p-l-md-0">
                              <div className="">
                                <div className="" style={{ height: '280px' }}>
                                  <div>
                                    <div
                                      style={{
                                        width: '100%',
                                        display: 'inline-block',
                                      }}
                                    >
                                      <Slider
                                        {...thumbSettings}
                                        className="slick-vertical"
                                      >
                                        {products.map((item, index) => {
                                          const images = [
                                            item.image1,
                                            item.image2,
                                            item.image3,
                                            item.image4,
                                            '../assets/images/layout-2/hot-deal/8.jpg',
                                          ].filter(Boolean)

                                          return images.map((img, i) => (
                                            <div
                                              className="p-1"
                                              key={index + '-' + i}
                                            >
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
                                                  onClick={() =>
                                                    setSelectedProduct(item)
                                                  }
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
      </div>
    </section>
  )
}

export default Media_Banner
//Slider added to the 3 images layout 2
