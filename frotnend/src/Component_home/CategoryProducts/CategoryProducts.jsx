import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import defaultImg from './cat_1.jpg'

const CategoryProducts = () => {
  const [activeTab, setActiveTab] = useState('')
  const [allData, setAllData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        setAllData(data)
        if (data.length > 0) {
          setActiveTab(data[0].name)
        }
      } catch (err) {
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredProducts = allData.filter((item) => item.name === activeTab)

  const chunkedProducts = []
  for (let i = 0; i < filteredProducts.length; i += 4) {
    chunkedProducts.push(filteredProducts.slice(i, i + 4))
  }

  // 1. Category Slider Settings (5 dikhane ke liye)
  const categorySliderSettings = {
    dots: false,
    infinite: allData.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  // 2. Product Slider Settings
  const productSliderSettings = {
    dots: false,
    infinite: chunkedProducts.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <>
      <section className="tab-product-main tab-second">
        <div className="tab-prodcut-contain">
          {/* Category Slider Start */}
          <div className="custom-container">
            <Slider {...categorySliderSettings} className="category-slider">
              {allData.map((category) => (
                <div key={category.id}>
                  <ul
                    className="tabs tab-title"
                    style={{ display: 'block', padding: '0 5px' }}
                  >
                    <li
                      className={activeTab === category.name ? 'current' : ''}
                      style={{ width: '100%' }}
                    >
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault()
                          setActiveTab(category.name)
                        }}
                      >
                        {category.name}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="section-big-py-space">
        <div className="custom-container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="theme-tab product">
                <div className="tab-content-cls">
                  <div
                    className="tab-content active default product-block3"
                    style={{ display: 'block' }}
                  >
                    <div className="col-12">
                      <div className="product-slide-3 no-arrow">
                        {loading ? (
                          <div className="text-center">Loading...</div>
                        ) : chunkedProducts.length > 0 ? (
                          <Slider {...productSliderSettings} key={activeTab}>
                            {chunkedProducts.map((group, index) => (
                              <div key={index}>
                                <div className="row g-4 gy-4">
                                  {group.map((product) => (
                                    <div className="col-md-6" key={product.id}>
                                      <div className="product-box3 mb-2">
                                        <div className="media">
                                          <div className="img-wrapper">
                                            <img
                                              className="img-fluid"
                                              src={product.image}
                                              alt={product.name}
                                              onError={(e) => {
                                                e.target.src = defaultImg
                                              }}
                                              style={{ width: '200px' }}
                                            />
                                          </div>
                                          <div className="media-body ms-3">
                                            <div className="product-detail">
                                              <div className="product-category">
                                                {product.name}
                                              </div>
                                              <h3>{product.name}</h3>
                                              <a
                                                className="btn btn-rounded btn-sm"
                                                href="#"
                                              >
                                                Shop Now
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </Slider>
                        ) : (
                          <div className="text-center">
                            No images found for this category.
                          </div>
                        )}
                      </div>
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

export default CategoryProducts
