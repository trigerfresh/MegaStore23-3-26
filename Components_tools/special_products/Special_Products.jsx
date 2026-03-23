import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './3.jpg'

const SpecialProducts = () => {
  const [hoveredId, setHoveredId] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/special')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.log('Error while fetching data : ', err)
      }
    }
    fetchProducts()
  }, [])

  // --- Slider Settings ---
  const settings = {
    dots: false,
    infinite: products.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  // --- Original Styles Maintained ---
  const cardStyle = {
    width: '100%', // Changed from 19% to 100% for slider compatibility
    height: '370px',
    background: '#ffffff',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid #whitesmoke',
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
    position: 'absolute',
    top: 0,
    left: 0,
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
    padding: '6px',
    cursor: 'pointer',
    width: '85%',
  }

  const iconColumn = {
    position: 'absolute',
    right: '10px',
    top: '15px',
    display: 'flex',
    flexDirection: 'column',
  }

  const iconBox = {
    width: '35px',
    height: '35px',
    background: '#ffffff',
    border: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  return (
    <>
      <div className="title8 section-big-pt-space">
        <h4>Special Products</h4>
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          marginBottom: '30px',
          padding: '0 10px',
        }}
      >
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} style={{ padding: '0 5px' }}>
              {' '}
              {/* Wrapper for spacing between slides */}
              <div
                style={cardStyle}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div style={imageWrapper}>
                  <img
                    src={product.image1 || defaultImg}
                    alt=""
                    style={{
                      ...imageStyle,
                      opacity: hoveredId === product.id ? 0 : 1,
                    }}
                  />

                  <img
                    src={product.image2 || defaultImg}
                    alt=""
                    style={{
                      ...imageStyle,
                      opacity: hoveredId === product.id ? 1 : 0,
                    }}
                  />

                  {hoveredId === product.id && (
                    <>
                      <div style={iconColumn}>
                        <div style={iconBox}>
                          <i className="fa fa-heart"></i>
                        </div>
                        <div style={iconBox}>
                          <i className="fa fa-eye"></i>
                        </div>
                      </div>
                      <button style={buttonStyle}>Add To Cart</button>
                    </>
                  )}
                </div>

                <div style={{ color: '#ffb400', fontSize: '18px' }}>
                  ★ ★ ★ ★ ★
                </div>
                <div style={{ fontWeight: '600' }}>{product.title}</div>

                <div style={{ marginTop: '5px' }}>
                  <span style={{ color: '#ff6a00', fontWeight: 'bold' }}>
                    {product.price}
                  </span>
                  <span style={{ marginLeft: '5px' }}>
                    {product.productDescription}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default SpecialProducts
