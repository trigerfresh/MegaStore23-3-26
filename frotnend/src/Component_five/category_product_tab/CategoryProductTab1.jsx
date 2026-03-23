import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import defaultImg from './2.jpg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CategoryProductTab1 = () => {
  const [activeTabId, setActiveTabId] = useState(null)
  const [categories, setCategories] = useState([])
  // const [loading, setLoading] = useState(true)
  const [hoveredId, setHoveredId] = useState(null)

  // 1. Fetch Categories/Products from Backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        setCategories(data)

        if (data.length > 0) {
          setActiveTabId(data[0].id)
        }
      } catch (err) {
        console.error('Error fetching categories:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  const settings = {
    arrows: false,
    dots: false,
    infinite: categories.length > 5,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  }

  // Active category data finder
  const activeCategoryData = categories.find((cat) => cat.id === activeTabId)

  return (
    <>
      {/* Tabs Section */}
      <section className="section-pt-space">
        <div className="tab-product-main">
          <div className="tab-prodcut-contain">
            <Slider
              arrows={false}
              dots={false}
              slidesToShow={6}
              infinite={categories.length > 6}
              {...settings}
            >
              {categories.map((item) => (
                <div key={item.id}>
                  <ul className="tabs tab-title">
                    <li
                      className={activeTabId === item.id ? 'current' : ''}
                      onClick={() => setActiveTabId(item.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        {item.name}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-4">
        <div className="container-fluid p-2">
          <div className="row g-3">
            {/* LEFT SIDE: Same CSS as Right Side Card, showing Active Category Data */}
            <div className="col-xl-3 col-lg-4">
              {activeCategoryData ? (
                <div
                  className="card border-0 shadow-sm h-80 p-1"
                  onMouseEnter={() => setHoveredId(activeCategoryData.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className="position-relative d-flex align-items-center justify-content-center mb-2"
                    style={{ height: '250px' }}
                  >
                    <img
                      src={
                        hoveredId === activeCategoryData.id &&
                        activeCategoryData.image2
                          ? activeCategoryData.image2
                          : activeCategoryData.image
                      }
                      alt={activeCategoryData.name}
                      className="img-fluid"
                      style={{
                        minHeight: '240px',
                        objectFit: 'contain',
                        transition: '0.3s ease',
                      }}
                      onError={(e) => {
                        e.target.src = defaultImg
                      }}
                    />

                    {hoveredId === activeCategoryData.id && (
                      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-2">
                        <div
                          className="bg-white shadow d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </div>
                        <div
                          className="bg-white shadow d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <i className="fa fa-eye"></i>
                        </div>
                        <div
                          className="bg-white shadow d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <i className="fa fa-heart"></i>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="fw-semibold mb-1">
                        {activeCategoryData.name}
                      </h6>
                      <div className="text-warning small">
                        {[...Array(4)].map((_, i) => (
                          <i key={i} className="fa fa-star me-1"></i>
                        ))}
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                    <div className="text-end">
                      <div className="text-muted text-decoration-line-through small">
                        {activeCategoryData.oldPrice || '$120.00'}
                      </div>
                      <div className="text-danger fw-bold fs-5">
                        {activeCategoryData.newPrice || '$90.00'}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-5">Loading Category...</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryProductTab1
