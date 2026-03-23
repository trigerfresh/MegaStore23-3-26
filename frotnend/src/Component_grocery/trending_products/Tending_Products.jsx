import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './3.jpg'

const TendingProducts = () => {
  const [hoveredId, setHoveredId] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/special')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.log('Error while fetching data', err)
      }
    }
    fetchProducts()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <>
      <div className="title8 section-big-pt-space">
        <h4>Trending Products</h4>
      </div>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} style={{ padding: '10px' }}>
            <div
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                height: '380px',
                background: '#fff',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #eee',
                borderRadius: '10px',
                margin: '5px',
                transition: 'all 0.3s ease',
                boxShadow:
                  hoveredId === product.id
                    ? '0 10px 25px rgba(0,0,0,0.15)'
                    : '0 5px 15px rgba(0,0,0,0.05)',
              }}
            >
              {/* 🔥 NEW LABEL */}
              {product.tag && (
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: '#ffff',
                    color: '#2fbb2f',
                    padding: '5px 10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    zIndex: 2,
                  }}
                >
                  {product.tag}
                </div>
              )}

              {/* Image Section */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '250px',
                  marginBottom: '10px',
                }}
              >
                <img
                  src={product.image1 || defaultImg}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease',
                    transform:
                      hoveredId === product.id ? 'scale(1.08)' : 'scale(1)',
                  }}
                />

                {/* Hover Icons */}
                {hoveredId === product.id && (
                  <>
                    <div
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '15px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <div style={iconStyle}>
                        <i className="fa fa-heart"></i>
                      </div>
                      <div style={iconStyle}>
                        <i className="fa fa-eye"></i>
                      </div>
                    </div>

                    <button style={buttonStyle}>Add To Cart</button>
                  </>
                )}
              </div>

              {/* Rating */}
              <div style={{ color: '#ffb400', fontSize: '18px' }}>
                ★ ★ ★ ★ ★
              </div>

              {/* Name */}
              <div
                style={{
                  fontWeight: 'bold',
                  padding: '0 10px',
                  color: '#000',
                }}
              >
                {product.title}
              </div>

              {/* Price */}
              <div style={{ marginTop: '5px' }}>
                <span
                  style={{
                    fontWeight: 'bold',
                    color: '#ff6a00',
                  }}
                >
                  {product.productDescription}
                </span>
                <span
                  style={{
                    textDecoration: 'line-through',
                    color: '#999',
                    marginLeft: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  {/* ${product.productDescription} */}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

const buttonStyle = {
  position: 'absolute',
  bottom: '5px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#ff6a00',
  color: '#fff',
  border: 'none',
  padding: '8px',
  cursor: 'pointer',
  width: '100%',
  borderRadius: '6px',
}

const iconStyle = {
  width: '35px',
  height: '35px',
  background: '#ffffff',
  border: '1px solid #eee',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '6px',
}

export default TendingProducts
