import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './10.jpg'
import defaultImg1 from './11.jpg'

const Special_Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/special')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Error while fetching data : ', err)
      }
    }
    fetchProducts()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 },
      },
    ],
  }


  return (
    <>
      <div className="title1 section-my-space">
        <h4>Special Products</h4>
      </div>

      <section className="product section-pb-space">
        <div className="custom-container">
          <div className="row">
            <div className="col pr-0">
              <div className="product-slide-6 no-arrow">
                <Slider {...settings}>
                  {products.map((product) => (
                    <div key={product.id}>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <div className="product-box">
                          <div className="product-imgbox">
                            <div className="product-front">
                              <a href="product-page(left-sidebar).html">
                                <img
                                  src={product.image1 || defaultImg}
                                  className="img-fluid"
                                  alt="product"
                                  onError={(e) => {
                                    e.currentTarget.src = defaultImg // fallback if image fails to load
                                  }}
                                />
                              </a>
                            </div>
                            <div className="product-back">
                              <a href="product-page(left-sidebar).html">
                                <img
                                  src={product.image2 || defaultImg1}
                                  className="img-fluid"
                                  alt="product"
                                  onError={(e) => {
                                    e.currentTarget.src = defaultImg1 // fallback if image fails to load
                                  }}
                                />
                              </a>
                            </div>
                            <div className="new-label3">
                              <div>new</div>
                            </div>
                            <div className="on-sale3">on sale</div>
                          </div>
                          <div className="product-detail detail-center detail-inverse">
                            <div className="detail-title">
                              <div className="detail-left">
                                <div className="rating-star">
                                  <i className="fa fa-star"></i>{' '}
                                  <i className="fa fa-star"></i>{' '}
                                  <i className="fa fa-star"></i>{' '}
                                  <i className="fa fa-star"></i>{' '}
                                  <i className="fa fa-star"></i>
                                </div>
                                <a href="product-page(left-sidebar).html">
                                  <h6 className="price-title">
                                    {product.title}
                                  </h6>
                                </a>
                              </div>
                              <div className="detail-right">
                                <div className="check-price">
                                  ${product.oldPrice || 90}
                                </div>
                                <div className="price">
                                  <div className="price">
                                    ${product.price || 100}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="icon-detail">
                              <button
                                className="tooltip-top"
                                data-tippy-content="Add to cart"
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
                                  className="feather feather-shopping-cart"
                                >
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                              </button>
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
                                  className="feather feather-heart"
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
                              </a>
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
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Special_Products
