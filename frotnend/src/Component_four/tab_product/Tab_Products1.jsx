import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './cat_1.jpg'
import axios from 'axios'

const Tab_Products1 = () => {
  const [categories, setCategories] = useState([])
  const [activeCategoryId, setActiveCategoryId] = useState(null)
  const [activeCategoryImage, setActiveCategoryImage] = useState(defaultImg)

  const tabSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  }

  const productSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/categories')
        const data = res.data?.data || res.data || []
        setCategories(data)

        if (data.length > 0) {
          const firstCat = data[0]
          setActiveCategoryId(firstCat.id)
          setActiveCategoryImage(firstCat.image)
        }
      } catch (err) {
        console.error(err)
      }
    }
    fetchCategories()
  }, [])

  const handleCategoryClick = (cat) => {
    setActiveCategoryId(cat.id)
    setActiveCategoryImage(cat.image) // ✅ click pe image change
  }

  return (
    <>
      {/* 🔥 FIRST SECTION SLIDER */}
      <section className="section-pb-space">
        <div className="tab-product-main">
          <div className="tab-prodcut-contain">
            <ul className="tabs tab-title">
              <Slider {...tabSliderSettings}>
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className={activeCategoryId === cat.id ? 'current' : ''}
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        handleCategoryClick(cat)
                      }}
                    >
                      {cat.name}
                    </a>
                  </li>
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔥 SECOND SECTION SLIDER */}
      <section className="section-pb-space">
        <div className="custom-container">
          <div className="row ">
            <div className="col-12">
              <div className="theme-tab">
                <div className="tab-content-cls">
                  <div
                    id="tab-7"
                    className="tab-content active default "
                    style={{ display: 'block' }}
                  >
                    <Slider
                      {...productSliderSettings}
                      className="slide-5 no-arrow"
                    >
                      {/* 🔁 SAME ITEM REPEATED (no structure change) */}

                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="media-banner b-g-white1 border-0">
                            <div className="media-banner-box">
                              <div className="media">
                                <a href="product-page(left-sidebar).html">
                                  <img
                                    src={activeCategoryImage || defaultImg}
                                    className="img-fluid"
                                    alt="banner"
                                    onError={(e) => {
                                      e.currentTarget.src = defaultImg
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
                                        <a href="product-page(left-sidebar).html">
                                          <p> Maroon dresh</p>
                                        </a>
                                        <h6>$80.00</h6>
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
                                            <circle
                                              cx="9"
                                              cy="21"
                                              r="1"
                                            ></circle>
                                            <circle
                                              cx="20"
                                              cy="21"
                                              r="1"
                                            ></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                          </svg>{' '}
                                        </button>{' '}
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
                                        </a>{' '}
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
                                        </a>{' '}
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
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tab_Products1
