import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import fallbackImg from './7.jpg'

const Special_Products = () => {
  const [products, setProducts] = useState([])
  const [hoveredCard, setHoveredCard] = useState(null)
  const [hoverBtn, setHoverBtn] = useState(null)
  const [activeImage, setActiveImage] = useState({})

  useEffect(() => {
    fetch('http://localhost:4000/api/products/featured')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)

        const initialImages = {}
        data.forEach((p) => {
          initialImages[p.id] = p.image1 || fallbackImg
        })

        setActiveImage(initialImages)
      })
      .catch((err) => console.error(err))
  }, [])

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  }

  const getImage = (img) => {
    return img ? img : fallbackImg
  }

  return (
    <>
      <div className="title8 section-big-my-space">
        <h4>New Arrival Product</h4>
      </div>

      <section>
        <div
          style={{
            maxWidth: '1500px',
            margin: '0 auto',
            padding: '0 10px',
          }}
        >
          <Slider {...settings}>
            {products.map((item, index) => (
              <div key={item.id}>
                <div
                  style={{
                    margin: '10px',
                    border: '1px solid #eee',
                    padding: '15px',
                    background: '#fff',
                  }}
                >
                  {/* IMAGE */}
                  <div
                    style={{ position: 'relative', overflow: 'hidden' }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <img
                      src={getImage(activeImage[item.id])}
                      alt={item.title}
                      onError={(e) => {
                        e.target.src = fallbackImg
                      }}
                      style={{ width: '100%', display: 'block' }}
                    />

                    {/* HOVER ICONS */}
                    <div
                      style={{
                        position: 'absolute',
                        right: '0',
                        bottom: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        opacity: hoveredCard === index ? 1 : 0,
                        transition: '0.3s',
                      }}
                    >
                      {['eye', 'shopping-cart', 'heart'].map((icon, i) => (
                        <button
                          key={i}
                          style={{
                            width: '55px',
                            height: '45px',
                            background: '#fff',
                            border: '1px solid #eee',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          <i className={`fa fa-${icon}`}></i>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div style={{ textAlign: 'center', marginTop: '15px' }}>
                    {/* COLOR DOTS */}
                    <div style={{ marginBottom: '6px' }}>
                      <span
                        style={dot('#ffc107')}
                        onClick={() =>
                          setActiveImage({
                            ...activeImage,
                            [item.id]: getImage(item.image1),
                          })
                        }
                      />

                      <span
                        style={dot('#000')}
                        onClick={() =>
                          setActiveImage({
                            ...activeImage,
                            [item.id]: getImage(item.image2),
                          })
                        }
                      />

                      <span
                        style={dot('#dc3545')}
                        onClick={() =>
                          setActiveImage({
                            ...activeImage,
                            [item.id]: getImage(item.image3),
                          })
                        }
                      />

                      <span
                        style={dot('#007bff')}
                        onClick={() =>
                          setActiveImage({
                            ...activeImage,
                            [item.id]: getImage(item.image4),
                          })
                        }
                      />
                    </div>

                    <h6
                      style={{
                        margin: '5px 0',
                        color: '#000',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.title}
                    </h6>

                    <h4 style={{ color: '#35a7b1', margin: '5px 0' }}>
                      {item.productDescription}
                      <span
                        style={{
                          textDecoration: 'line-through',
                          color: 'black',
                          marginLeft: '8px',
                          fontSize: '14px',
                        }}
                      >
                        {item.price}
                      </span>
                    </h4>

                    {/* ADD TO CART */}
                    <button
                      onMouseEnter={() => setHoverBtn(index)}
                      onMouseLeave={() => setHoverBtn(null)}
                      style={buttonStyle('#35a7b1', hoverBtn === index)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

const dot = (color) => ({
  height: '8px',
  width: '8px',
  borderRadius: '50%',
  display: 'inline-block',
  margin: '0 3px',
  background: color,
  cursor: 'pointer',
})

const buttonStyle = (color = '#35a7b1', isHover = false) => ({
  border: `1px solid ${color}`,
  background: isHover ? 'transparent' : color,
  color: isHover ? color : '#ffffff',
  padding: '10px 20px',
  lineHeight: 1,
  fontWeight: 600,
  borderRadius: '5px',
  marginTop: '10px',
  transition: 'all 0.5s ease',
  letterSpacing: '0.05em',
  cursor: 'pointer',
})

export default Special_Products
