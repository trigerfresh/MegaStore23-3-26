import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faHeart,
  faEye,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons'
import defaultImg from './3.jpg'

const CategoryProduct = () => {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [hovered, setHovered] = useState(false)

  const categorySliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // Agar categories ke naam bade hain toh variableWidth true kar sakte hain
    variableWidth: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        if (data && data.length > 0) {
          setCategories(data)
          setActiveCategory(data[0])
        }
      } catch (err) {
        console.error('Error fetching categories:', err)
      }
    }
    fetchCategories()
  }, [])

  return (
    <section style={{ background: '#fff', padding: '30px 0' }}>
      {/* 1. CATEGORY NAME SLIDER */}
      <div style={{ marginBottom: '40px', padding: '0 20px' }}>
        {categories.length > 0 ? (
          <Slider {...categorySliderSettings}>
            {categories.map((cat) => (
              /* ZAROORI: Is outer div mein padding hone se buttons kabhi nahi chipkenge */
              <div
                key={cat.id}
                style={{ padding: '0 15px', boxSizing: 'border-box' }}
              >
                <div
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    cursor: 'pointer',
                    padding: '15px 10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px', // Screenshot ke mutabiq thoda kam round
                    backgroundColor:
                      activeCategory?.name === cat.name ? '#c46d61' : '#fff',
                    color: activeCategory?.name === cat.name ? '#fff' : '#333',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    // Text handling
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'block',
                  }}
                >
                  {cat.name}
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p style={{ textAlign: 'center' }}>Loading Categories...</p>
        )}
      </div>

      {/* 2. SELECTED CATEGORY IMAGE DISPLAY (As per your design) */}
      {activeCategory && (
        <div style={{ padding: '0 35px' }}>
          <div
            style={{
              background: '#f3f3f3',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: '320px',
              borderRadius: '8px',
              position: 'relative',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* White box for Image */}
            <div
              style={{
                width: '85px',
                height: '85px',
                background: '#fff',
                padding: '10px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={activeCategory.image || defaultImg}
                alt={activeCategory.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                onError={(e) => {
                  e.currentTarget.src = defaultImg // fallback if image fails to load
                }}
              />
            </div>

            {/* Info Section / Hover Icons */}
            <div style={{ marginLeft: '20px', flex: 1 }}>
              {!hovered ? (
                <>
                  <div
                    style={{
                      color: '#ffc107',
                      fontSize: '12px',
                      marginBottom: '4px',
                    }}
                  >
                    ★★★★★
                  </div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '15px',
                      fontWeight: 'bold',
                      color: '#333',
                    }}
                  >
                    {activeCategory.name}
                  </p>
                </>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    gap: '15px',
                    fontSize: '18px',
                    color: '#444',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={{ cursor: 'pointer' }}
                  />
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ cursor: 'pointer' }}
                  />
                  <FontAwesomeIcon icon={faEye} style={{ cursor: 'pointer' }} />
                  <FontAwesomeIcon
                    icon={faSyncAlt}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CategoryProduct
