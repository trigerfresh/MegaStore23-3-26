import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './2.jpg'

const Tab_Product = () => {
  const [categories, setCategories] = useState([])
  const [activeCategoryId, setActiveCategoryId] = useState(null)

  const tabSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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

  const categoryDisplaySettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/categories')

        const apiData = response.data?.data || response.data || []

        const fixedData = apiData.map((cat) => {
          let cleanImage = cat.image
            ?.replace(/\\/g, '/')
            .replace(/\/\/+/g, '/')
            .replace('http:/', 'http://')

          if (!cleanImage || !cleanImage.includes('/assets/img/')) {
            cleanImage = 'http://localhost:4000/assets/img/no-image.png'
          }

          return {
            ...cat,
            id: cat.id || cat._id,
            image: cleanImage,
          }
        })

        setCategories(fixedData)

        if (fixedData.length > 0) {
          setActiveCategoryId(fixedData[0].id?.toString())
        }
      } catch (err) {
        console.error('Error fetching categories:', err)
      }
    }

    fetchCategories()
  }, [])

  // ✅ selected category
  const selectedCategory = categories.find(
    (cat) => cat.id?.toString() === activeCategoryId?.toString(),
  )

  return (
    <>
      {/* CATEGORY TABS */}
      <section className="section-big-py-space b-g-white ">
        <div className="tab-product-main tab-four">
          <div className="tab-prodcut-contain">
            <div className="custom-container">
              {/* FIRST 4 (NORMAL UI) */}

              <ul className="tabs tab-title">
                <Slider {...tabSliderSettings}>
                  {categories.map((cat) => {
                    const catId = cat.id?.toString()

                    return (
                      <li
                        key={catId}
                        className={activeCategoryId === catId ? 'current' : ''}
                      >
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            setActiveCategoryId(catId)
                          }}
                          style={{ margin: '30px 30px' }}
                        >
                          {cat.name}
                        </a>
                      </li>
                    )
                  })}
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE DISPLAY */}
      <section className="our-gallery b-g-white section-big-pb-space">
        <div className="custom-container text-center">
          {selectedCategory ? (
            <Slider
              key={activeCategoryId}
              {...categoryDisplaySettings}
              slidesToShow={4} // 👈 important
            >
              <div>
                <div className="digipro-box">
                  <div className="img-wrraper">
                    <img
                      src={selectedCategory.image || defaultImg}
                      alt={selectedCategory.name}
                      className="img-fluid"
                      style={{ maxHeight: '300px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.src = defaultImg
                      }}
                    />
                  </div>

                  <div className="product-detail">
                    <h4>Bigdeal - eCommerce HTML + Admin Template</h4>
                    <h5>by PixelStrap in Shopping</h5>

                    <div className="sale-box">
                      <div className="rating-box">
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
                        <h4 className="price">$17</h4>
                      </div>

                      <div className="pro-sale">
                        <h4>426 sale</h4>
                      </div>
                    </div>

                    <div className="pro-btn">
                      <button className="btn btn-normal btn-sm">
                        Live Demo
                      </button>
                      <button className="btn btn-normal btn-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          ) : (
            <p>Loading Image...</p>
          )}
        </div>
      </section>
    </>
  )
}

export default Tab_Product
