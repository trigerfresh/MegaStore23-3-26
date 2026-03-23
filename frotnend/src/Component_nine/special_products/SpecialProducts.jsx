import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './23.jpg'

const productSlide6 = {
  arrows: false,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5, // Shows 5 products on normal screen
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 5 } },
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 576, settings: { slidesToShow: 2 } },
  ],
}

const ProductCard = ({ data }) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="product-box"
      style={{
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid #eee',
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: '#fff',
        height: '400px',
        width: '95%', // Adjusted to 95% so 5 items fit perfectly with spacing
        margin: '0 auto',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="product-imgbox"
        style={{ position: 'relative', height: '280px', overflow: 'hidden' }}
      >
        <div className="product-front" style={{ height: '100%' }}>
          <a href="#">
            <img
              src={data.img || defaultImg}
              alt={data.name}
              onError={(e) => {
                e.currentTarget.src = defaultImg
              }}
            />
          </a>
        </div>

        <div className="product-back">
          <a href="#">
            <img
              src={data.backImg || data.img || defaultImg}
              className="img-fluid"
              alt={data.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = defaultImg
              }}
            />
          </a>
        </div>
      </div>

      <div
        className="product-detail detail-center"
        style={{
          padding: '10px 15px',
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '120px',
        }}
      >
        {!hover ? (
          <div
            className="detail-title"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start', // Added as requested
              width: '100%',
              textAlign: 'left', // Changed to left to align the text and star icons
            }}
          >
            <div className="detail-left" style={{ color: '#f6b352' }}>
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className="fa fa-star"
                  style={{ marginRight: '2px' }}
                ></i>
              ))}
            </div>

            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: '#222',
                fontWeight: '600',
                fontSize: '1rem',
                // marginBottom: '6px',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {data.name}
            </a>

            <div
              className="price"
              style={{
                color: '#e94560',
                fontWeight: '700',
                fontSize: '1rem',
              }}
            >
              {data.description}
            </div>
          </div>
        ) : (
          <div
            className="icon-detail"
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
              // gap: '15px',
            }}
          >
            <a
              href="#"
              style={{
                color: '#333',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={(e) => {
                e.preventDefault()
                alert(`Add ${data.name} to cart`)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </a>
            <a
              href="#"
              style={{ color: '#333' }}
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </a>
            <a
              href="#"
              style={{ color: '#333' }}
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </a>

            <a
              href="#"
              style={{ color: '#333' }}
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-refresh-cw"
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

const CategoryProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/special')
        const data = await res.json()

        const formattedProducts = data.map((p) => ({
          id: p.id,
          name: p.title,
          price: p.price,
          oldPrice: p.oldPrice || null,
          img: p.image1,
          backImg: p.image2,
          description: p.productDescription,
        }))

        setProducts(formattedProducts)
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    }

    fetchProducts()
  }, [])

  return (
    <section className="section-py-space ratio_square product">
      <div className="title8 section-big-my-space">
        <h4>special products</h4>
      </div>

      <div className="custom-container">
        <div className="row">
          <div className="col p-0">
            <div className="theme-tab product">
              <div className="tab-content-cls">
                <div className="tab-box active">
                  <Slider
                    {...productSlide6}
                    className="product-slide-6 product-m no-arrow"
                  >
                    {products.map((p) => (
                      <div key={p.id}>
                        <ProductCard data={p} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryProducts
