import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'
import defaultImg from './cat_1.jpg'

const Category_Products = () => {
  const [categories, setCategories] = useState([])
  const [activeCategoryId, setActiveCategoryId] = useState(null)
  const [activeCategoryImage, setActiveCategoryImage] = useState(defaultImg)

  const tabSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
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
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/categories')
        const apiData = response.data?.data || response.data || []
        setCategories(apiData)

        if (apiData.length > 0) {
          const firstCat = apiData[0]
          setActiveCategoryId(firstCat.id)
          setActiveCategoryImage(firstCat.image || defaultImg)
        }
      } catch (err) {
        console.error('Error fetching categories : ', err)
      }
    }
    fetchCategories()
  }, [])

  const handleCategoryClick = (cat) => {
    setActiveCategoryId(cat.id)
    setActiveCategoryImage(cat.image || defaultImg)
  }

  return (
    <>
      <section className="section-py-space">
        <div className="tab-product-main">
          <div className="tab-prod  cut-contain">
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
                      style={{
                        display: 'inline-block',
                        padding: '20px 50px',
                        marginTop: '20px',
                        color: '#1e9a05',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        borderTop:
                          activeCategoryId === cat.id
                            ? '5px solid #1e9a05'
                            : '5px solid transparent',
                        transition: 'all 0.3s ease', // Smooth effect ke liye
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

      <section className=" ratio_asos product  section-big-pb-space">
        <div className="custom-container  addtocart_count ">
          <div className="row">
            <div className="col pr-0">
              <div className="theme-tab product ">
                <div className="tab-content-cls">
                  <div
                    id="tab-1"
                    className="tab-content active default"
                    style={{ display: 'block' }}
                  >
                    <Slider
                      {...settings}
                      className="product-slide-5 product-m no-arrow slick-initialized slick-slider"
                    >
                      <div className="">
                        <div
                          className=""
                          style={{
                            opacity: 1,
                            width: '1210px',
                            transform: 'translate3d(0px, 0px, 0px)',
                          }}
                        >
                          <div
                            className=""
                            data-slick-index="0"
                            aria-hidden="false"
                            style={{ width: '242px' }}
                          >
                            <div>
                              <div
                                style={{
                                  width: '100%',
                                  display: 'inline-block',
                                }}
                              >
                                <div className="product-box ">
                                  <div className="product-imgbox">
                                    <div className="product-front">
                                      <a
                                        href="product-page(left-sidebar).html"
                                        tabIndex="0"
                                      >
                                        <img
                                          src={
                                            activeCategoryImage || defaultImg
                                          }
                                          className="img-fluid"
                                          alt="category"
                                          onError={(e) => {
                                            e.target.src = defaultImg
                                          }}
                                        />
                                      </a>
                                    </div>
                                    <div className="product-back">
                                      <a
                                        href="product-page(left-sidebar).html"
                                        tabIndex="0"
                                      >
                                        <img
                                          src="../assets/images/farming/product/6.jpg"
                                          className="img-fluid"
                                          alt="product"
                                        />
                                      </a>
                                    </div>
                                    <div className="product-icon">
                                      <a
                                        href="#"
                                        className="add-to-wish tooltip-left"
                                        data-tippy-content="Add to Wishlist"
                                        tabIndex="0"
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
                                        className="tooltip-left"
                                        data-tippy-content="Quick View"
                                        tabIndex="0"
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
                                        className="tooltip-left"
                                        data-tippy-content="Compare"
                                        tabIndex="0"
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
                                    <div className="on-sale4">on sale</div>
                                    <div className="new-label1">50%</div>
                                  </div>
                                  <div className="product-detail detail-center1">
                                    <ul className="rating-star">
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
                                        <i className="fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <a
                                      href="product-page(left-sidebar).html"
                                      tabIndex="0"
                                    >
                                      <h6>fresh papaya</h6>
                                    </a>
                                    <span className="detail-price">
                                      $60.21<span>$55.00</span>
                                    </span>
                                  </div>
                                  <div className="addtocart_btn">
                                    <button
                                      className="add-button add_cart tooltip-top"
                                      data-tippy-content="Add to cart"
                                      tabIndex="0"
                                    >
                                      add to cart
                                    </button>
                                    <div className="qty-box cart_qty ">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="btn quantity-left-minus"
                                          data-type="minus"
                                          data-field=""
                                          tabIndex="0"
                                        >
                                          <i
                                            className="fa fa-minus"
                                            aria-hidden="true"
                                          ></i>
                                        </button>
                                        <input
                                          type="text"
                                          name="quantity"
                                          className="form-control input-number qty-input"
                                          defaultValue="1"
                                          tabIndex="0"
                                        />
                                        <button
                                          type="button"
                                          className="btn quantity-right-plus"
                                          data-type="plus"
                                          data-field=""
                                          tabIndex="0"
                                        >
                                          <i
                                            className="fa fa-plus"
                                            aria-hidden="true"
                                          ></i>
                                        </button>
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

export default Category_Products
