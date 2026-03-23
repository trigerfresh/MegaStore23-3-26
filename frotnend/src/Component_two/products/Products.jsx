import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Products = () => {
  const [specialProducts, setSpecialProducts] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])

  // ✅ FETCH BOTH APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [specialRes, featuredRes] = await Promise.all([
          fetch('http://localhost:4000/api/products/special'),
          fetch('http://localhost:4000/api/products/featured'),
        ])

        const specialData = await specialRes.json()
        const featuredData = await featuredRes.json()

        setSpecialProducts(specialData)
        setFeaturedProducts(featuredData)
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    }

    fetchData()
  }, [])

  // ✅ MAIN SLIDER (COLUMNS SLIDER)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // 👈 Tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576, // 👈 Mobile
        settings: {
          slidesToShow: 1, // ✅ ONLY 1 COLUMN
          slidesToScroll: 1,
          arrows: false, // 👈 optional (mobile clean UI)
          dots: true, // 👈 optional (indicator dots)
        },
      },
    ],
  }

  // ✅ SINGLE COLUMN UI (ONLY 2 PRODUCTS)
  const renderProducts = (title, products) => (
    <div style={{ padding: '0 5px' }}>
      <div className="media-banner">
        {/* Heading */}
        <div className="media-banner-box">
          <div className="media-heading">
            <h5>{title}</h5>
          </div>
        </div>

        {/* ONLY 2 PRODUCTS */}
        {products.slice(0, 2).map((product) => (
          <div className="media-banner-box" key={product.id}>
            <div className="media" style={{ alignItems: 'center' }}>
              {/* IMAGE */}
              <a href="#">
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={
                      product.image1 ||
                      '../assets/images/layout-1/media-banner/3.jpg'
                    }
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.currentTarget.src =
                        '../assets/images/layout-2/hot-deal/8.jpg'
                    }}
                  />
                </div>
              </a>

              {/* CONTENT */}
              <div className="media-body">
                <div className="media-contant">
                  <div>
                    <div className="product-detail">
                      <ul className="rating">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-o"></i>
                        </li>
                      </ul>
                      <p>{product.title}</p>
                      <h6>${product.price || '0.00'}</h6>
                    </div>

                    <div className="cart-info">
                      <button className="tooltip-top">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* VIEW MORE */}
        <div className="media-banner-box">
          <div className="media-view">
            <h5>View More</h5>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="section-big-py-space b-g-white">
      <div className="container p-0">
        {/* ✅ SLIDER START */}
        <Slider {...settings}>
          {renderProducts('Special Offer', specialProducts)}
          {renderProducts('Featured Products', featuredProducts)}
          {renderProducts('Special Offer', specialProducts)}
          {renderProducts('Featured Products', featuredProducts)}
        </Slider>
      </div>
    </section>
  )
}

export default Products
