import React, { useEffect, useState } from 'react'
import defaultImg from './11.jpg'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Tab_Products = () => {
  const [categories, setCategories] = useState([])
  const [activeCategoryId, setActiveCategoryId] = useState(null)
  const [activeCategoryImage, setActiveCategoryImage] = useState(defaultImg)

  const tabSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // single image per slide
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
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
          setActiveCategoryImage(firstCat.image) // ✅ first image show
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
      <section className="section-pt-space">
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

      <section className="section-py-space ratio_square product">
        <div className="custom-container">
          <div className="row">
            <div className="col pr-0">
              <div className="theme-tab product no-arrow">
                <div className="tab-content-cls ">
                  {/* Slider start */}
                  <Slider {...settings}>
                    <div>
                      <div style={{ display: 'inline-block' }}>
                        <div className="product-box">
                          <div className="product-imgbox">
                            <div className="product-front">
                              <a href="#">
                                <img
                                  src={activeCategoryImage}
                                  className="img-fluid"
                                  alt="category"
                                  style={{ width: '300px', height: '300px' }}
                                />
                              </a>
                            </div>
                            <div className="product-back">
                              <a href="#">
                                <img
                                  src={activeCategoryImage}
                                  className="img-fluid"
                                  alt="category"
                                  style={{ width: '300px', height: '300px' }}
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
                                    {activeCategoryImage.title}
                                  </h6>
                                </a>
                              </div>
                              <div className="detail-right">
                                <div className="check-price">
                                  ${activeCategoryImage.oldPrice || 90}
                                </div>
                                <div className="price">
                                  <div className="price">
                                    ${activeCategoryImage.price || 100}
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
                  </Slider>
                  {/* Slider end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tab_Products
