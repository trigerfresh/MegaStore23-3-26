import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Category_Products = () => {
  const [categories, setCategories] = useState([])
  const [activeCategoryId, setActiveCategoryId] = useState(null)
  const [activeCategoryImage, setActiveCategoryImage] = useState(
    'http://localhost:4000/assets/img/cat_1.jpg',
  )

  const tabSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
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
    slidesToShow: 5,
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
          const firstCat = [0]
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
      <section className="section-big-pb-space ratio_40 pb-10">
        <section className="section-py-space">
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

        <div className="custom-container product">
          <div className="row">
            <div className="col pr-0">
              <div className="theme-tab product tab-abjust">
                <div className="tab-content-cls">
                  <div
                    id="tab-1"
                    className="tab-content active default"
                    style={{ display: 'block' }}
                  >
                    <div className="product-slide-6 product-m no-arrow slick-initialized slick-slider">
                      <Slider {...productSliderSettings}>
                        <div>
                          <div
                            style={{
                              width: '100%',
                              display: 'inline-block',
                            }}
                          >
                            <div className="product-box">
                              <div className="product-imgbox">
                                <div className="product-front">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabIndex="-1"
                                  >
                                    <img
                                      src={
                                        activeCategoryImage ||
                                        'http://localhost:4000/assets/img/cat_1.jpg'
                                      }
                                      className="img-fluid  "
                                      alt="product"
                                      onError={(e) => {
                                        e.currentTarget.src =
                                          'http://localhost:4000/assets/img/cat_1.jpg'
                                      }}
                                    />
                                  </a>
                                </div>
                                {/* <div className="product-back">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabIndex="-1"
                                  >
                                    <img
                                      src={
                                        activeCategoryImage ||
                                        'http://localhost:4000/assets/img/cat_1.jpg'
                                      }
                                      className="img-fluid  "
                                      alt="product"
                                      onError={(e) => {
                                        e.currentTarget.src =
                                          'http://localhost:4000/assets/img/cat_1.jpg'
                                      }}
                                    />
                                  </a>
                                </div> */}
                                <div className="product-icon">
                                  <button
                                    onclick="openCart()"
                                    className="tooltip-left"
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
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="feather feather-shopping-cart"
                                    >
                                      <circle cx="9" cy="21" r="1"></circle>
                                      <circle cx="20" cy="21" r="1"></circle>
                                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                  </button>
                                  <a
                                    href="#"
                                    className="add-to-wish tooltip-left"
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
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
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
                                    tabIndex="-1"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="feather feather-eye"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </a>
                                  <a
                                    href="compare.html"
                                    className="tooltip-left"
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
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="feather feather-refresh-cw"
                                    >
                                      <polyline points="23 4 23 10 17 10"></polyline>
                                      <polyline points="1 20 1 14 7 14"></polyline>
                                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <div className="product-detail">
                                <div className="detail-title">
                                  <div className="detail-left">
                                    <div className="rating-star">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                    </div>
                                    <a
                                      href="product-page(left-sidebar).html"
                                      tabIndex="-1"
                                    >
                                      <h6 className="price-title">
                                        high bass Speaker
                                      </h6>
                                    </a>
                                  </div>
                                  <div className="detail-right">
                                    <div className="check-price">$ 150.21</div>
                                    <div className="price">
                                      <div className="price">$ 90.05</div>
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
        </div>
      </section>
    </>
  )
}

export default Category_Products
