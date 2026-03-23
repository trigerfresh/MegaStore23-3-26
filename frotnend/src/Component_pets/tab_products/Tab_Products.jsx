import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'
import defaultImg from './2.jpg'

const Tab_Products = () => {
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
        console.error('Error fetching categories: ', err)
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
      {/* Tabs */}
      <section className="section-pb-space b-g-white">
        <div className="tab-product-main tab-four">
          <div className="tab-prodcut-contain">
            <ul className="tabs tab-title">
              <Slider {...tabSliderSettings}>
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className={activeCategoryId === cat.id ? 'current' : ''}
                    // style={{ marginTop: '15px' }}
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        handleCategoryClick(cat)
                      }}
                      style={{
                        display: 'inline-block',
                        padding: '8px 12px',
                        marginTop: '20px',
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

      {/* Display selected category image */}
      <section className="our-gallery section-big-py-space b-g-white">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <Slider {...settings} className="gallery-slide no-arrow">
                <div>
                  <div style={{ width: '', display: 'inline-block' }}>
                    <div className="gallery-box">
                      <a className="spotlight" href="#">
                        <img
                          src={activeCategoryImage || defaultImg}
                          alt="category"
                          className="img-fluid"
                          style={{ height: '300px', objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.src = defaultImg
                          }}
                        />
                        <div className="gallery-contain">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tab_Products
