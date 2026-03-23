import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './10.jpg'

const New_Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/featured')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Error while fetching data : ', err)
      }
    }
    fetchProducts()
  }, [])

  // Slider configuration jo aapki CSS layout (product-slide-5) se match karti hai
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Yeh automatic slick-prev/next classes use karega
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 991,
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
      <div className="title4">
        <h4>
          new <span>products</span>
        </h4>
      </div>

      <section className="section-big-pb-space ratio_square product">
        <div className="custom-container">
          <div className="row">
            <div className="col pr-0">
              {/* React Slider component with your original classes */}
              <Slider
                {...settings}
                className="product-slide-5 product-m no-arrow"
              >
                {/* Product Item 1 */}
                {products.map((product) => (
                  <div className="slick-slide">
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <div className="product-box product-box2">
                          <div className="product-imgbox">
                            <div className="product-front">
                              <a href="#" tabIndex="-1">
                                <img
                                  src={product.image1 || defaultImg}
                                  className="img-fluid"
                                  alt={product.title}
                                  onError={(e) => {
                                    e.target.src = defaultImg // fallback to default image if load fails
                                  }}
                                />
                              </a>
                            </div>
                            <div className="product-back">
                              <a
                                href="product-page(left-sidebar).html"
                                tabIndex="-1"
                              >
                                <img
                                  src={product.image2 || defaultImg}
                                  className="img-fluid  "
                                  alt={product.title}
                                />
                              </a>
                            </div>
                            <div className="product-icon  icon-inline ">
                              <button
                                className="tooltip-top add-cartnoty"
                                data-tippy-content="Add to cart"
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
                                  <circle cx="12" cy="12" r="3"></circle>
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
                            <div className="new-label1">
                              <div>new</div>
                            </div>
                            <div className="on-sale1">on sale</div>
                          </div>
                          <div className="product-detail product-detail2 ">
                            <ul>
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
                            <a href="#-page(left-sidebar).html" tabIndex="-1">
                              <h3>{product.title}</h3>
                            </a>
                            <h5>
                              $90
                              <span>$110</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Aap isi tarah aur product slides add kar sakte hain */}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default New_Products
