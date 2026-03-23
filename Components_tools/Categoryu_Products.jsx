import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './cat_1.jpg'

const Categoryu_Products = () => {
  const [hoveredId, setHoveredId] = useState(null)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        setCategories(data)
        if (data.length > 0) {
          setActiveCategory(data[0])
        }
      } catch (err) {
        console.error('Error fetching categories:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  // --- Responsive Slider Settings ---
  const categorySettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(categories.length, 6),
    slidesToScroll: 1,
    arrows: categories.length > 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  const displaySlots = activeCategory
    ? [activeCategory, ...Array(4).fill(null)]
    : Array(5).fill(null)

  // --- Styles ---
  const cardStyle = {
    height: '370px',
    background: '#ffffff',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '10px',
    border: '1px solid #f0f0f0',
  }

  const imageWrapper = {
    position: 'relative',
    width: '100%',
    height: '250px',
    marginBottom: '10px',
  }

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'opacity 0.4s ease',
  }

  const buttonStyle = {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#ff6a00',
    color: '#fff',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    width: '85%',
    zIndex: 2,
  }

  return (
    <div style={{ backgroundColor: '#ffffff', paddingBottom: '50px' }}>
      {/* CATEGORY TABS */}
      <section
        style={{
          width: '95%',
          margin: '0 auto',
          borderBottom: '1px solid #eee',
        }}
      >
        <Slider {...categorySettings}>
          {categories.map((cat) => (
            <div
              key={cat.id || cat._id}
              onClick={() => setActiveCategory(cat)}
              style={{ outline: 'none' }}
            >
              <div
                style={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '20px 5px',
                  fontWeight: 'bold',
                  fontSize: 'clamp(12px, 2vw, 15px)', // Font size screen ke hisab se adjust hoga
                  color: activeCategory?.id === cat.id ? '#ff6a00' : '#333',
                  borderBottom:
                    activeCategory?.id === cat.id
                      ? '3px solid #ff6a00'
                      : '3px solid transparent',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                }}
              >
                {cat.name}
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* PRODUCTS GRID */}
      <div style={{ width: '95%', margin: '20px auto' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Auto responsive columns
              gap: '15px',
            }}
          >
            {displaySlots.map((item, index) => (
              <div
                key={index}
                style={{ visibility: item ? 'visible' : 'hidden' }}
              >
                {item && (
                  <div
                    style={cardStyle}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div style={imageWrapper}>
                      <img
                        src={item.image || defaultImg}
                        alt={item.name}
                        style={{
                          ...imageStyle,
                          opacity: hoveredId === item.id ? 0.7 : 1,
                        }}
                        onError={(e) => {
                          e.currentTarget.src = defaultImg // fallback if image fails to load
                        }}
                      />
                      {hoveredId === item.id && (
                        <>
                          <div
                            style={{
                              position: 'absolute',
                              right: '10px',
                              top: '15px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '5px',
                            }}
                          >
                            <div
                              style={{
                                width: '35px',
                                height: '35px',
                                background: '#fff',
                                border: '1px solid #eee',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <i className="fa fa-heart"></i>
                            </div>
                            <div
                              style={{
                                width: '35px',
                                height: '35px',
                                background: '#fff',
                                border: '1px solid #eee',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <i className="fa fa-eye"></i>
                            </div>
                          </div>
                          <button style={buttonStyle}>Add to Cart</button>
                        </>
                      )}
                    </div>
                    <div style={{ fontWeight: '600', marginTop: '10px' }}>
                      {item.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Categoryu_Products
