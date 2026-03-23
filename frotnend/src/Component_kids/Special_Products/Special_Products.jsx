import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Special_Products = () => {
  const [products, setProducts] = useState([])
  const [hoveredCard, setHoveredCard] = useState(null)
  const [hoverBtn, setHoverBtn] = useState(null)
  const [activeImage, setActiveImage] = useState({}) // Track current image per product

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  }

  useEffect(() => {
    fetch('http://localhost:4000/api/products/special')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (p) => p.image1 && p.image1 !== 'http://localhost:4000',
        )
        setProducts(filtered)

        // Initialize active image index for each product
        const initialActive = {}
        filtered.forEach((p) => {
          initialActive[p.id] = 1 // default to image1
        })
        setActiveImage(initialActive)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <div className="title8 section-big-my-space">
        <h4>Special Products</h4>
      </div>

      <section>
        <div
          style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 10px' }}
        >
          <Slider {...settings}>
            {products.map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    margin: '10px',
                    border: '1px solid #eee',
                    padding: '15px',
                    background: '#fff',
                  }}
                >
                  {/* IMAGE SECTION */}
                  <div
                    style={{ position: 'relative', overflow: 'hidden' }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <img
                      src={
                        activeImage[item.id] === 1
                          ? item.image1
                          : activeImage[item.id] === 2
                            ? item.image2
                            : item.image3
                      }
                      alt={item.title}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = '../assets/images/kids/product/7.jpg'
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
                      {[1, 2, 3].map((imgIndex) => {
                        // Only show dot if image exists
                        const imgExists =
                          (imgIndex === 1 && item.image1) ||
                          (imgIndex === 2 && item.image2) ||
                          (imgIndex === 3 && item.image3)
                        if (!imgExists) return null

                        return (
                          <span
                            key={imgIndex}
                            style={{
                              ...dot(
                                imgIndex === 1
                                  ? '#ffc107'
                                  : imgIndex === 2
                                    ? '#000'
                                    : '#dc3545',
                              ),
                              cursor: 'pointer',
                              border:
                                activeImage[item.id] === imgIndex
                                  ? '2px solid #35a7b1'
                                  : 'none',
                            }}
                            onClick={() =>
                              setActiveImage({
                                ...activeImage,
                                [item.id]: imgIndex,
                              })
                            }
                          />
                        )
                      })}
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
                        {item.oldPrice}
                      </span>
                    </h4>

                    {/* ADD TO CART BUTTON */}
                    <button
                      onMouseEnter={() => setHoverBtn(index)}
                      onMouseLeave={() => setHoverBtn(null)}
                      onMouseDown={() => setHoverBtn(index)}
                      onMouseUp={() => setHoverBtn(null)}
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
})

const buttonStyle = (color = '#35a7b1', isHover = false) => ({
  border: `1px solid ${color}`,
  background: isHover ? 'transparent' : color,
  color: isHover ? color : '#ffffff',
  outline: 'none',
  textTransform: 'capitalize',
  paddingTop: 'calc(8px + (12 - 8) * ((100vw - 320px) / (1920 - 320)))',
  paddingBottom: 'calc(8px + (12 - 8) * ((100vw - 320px) / (1920 - 320)))',
  paddingLeft: 'calc(12px + (20 - 12) * ((100vw - 320px) / (1920 - 320)))',
  paddingRight: 'calc(12px + (20 - 12) * ((100vw - 320px) / (1920 - 320)))',
  lineHeight: 1,
  fontWeight: 600,
  borderRadius: '5px',
  marginTop: '10px',
  transition: 'all 0.5s ease',
  letterSpacing: '0.05em',
  cursor: 'pointer',
})

export default Special_Products
