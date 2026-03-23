import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faHeart,
  faEye,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons'
import defaultImg from './3.jpg'

const MediaBannerTab = () => {
  const [hovered, setHovered] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [categories, setCategories] = useState([])

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

  return (
    <section style={{ background: '#fff', padding: '30px 0' }}>
      {/* 1. CATEGORY NAME SLIDER */}
      <div style={{ marginBottom: '40px', padding: '0 20px' }}>
        {categories.length > 0 ? (
          <Slider {...categorySliderSettings}>
            {categories.map((cat) => (
              <div
                key={cat.id}
                style={{ padding: '0 15px', boxSizing: 'border-box' }}
              >
                <div
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    paddingTop: '10px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: '#333',
                    // Agar ye category active hai, toh 4px black line dikhegi
                    borderTop:
                      activeCategory?.id === cat.id
                        ? '4px solid #333'
                        : '4px solid transparent',
                    transition: 'all 0.3s ease',
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
                width: '50px',
                height: '50px',
                background: '#fff',
                padding: '5px',
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

const iconStyle = {
  background: '#fff',
  padding: '6px',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '13px',
}

export default MediaBannerTab
