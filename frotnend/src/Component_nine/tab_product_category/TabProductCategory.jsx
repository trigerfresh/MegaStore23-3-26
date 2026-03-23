import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './23.jpg'

// Category Slider Settings
const categoryTabSettings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
  arrows: false,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
  ],
}

// Product Slider Settings
const productSlide6 = {
  arrows: false,
  dots: false,
  infinite: false, // Strict Left alignment ke liye false zaroori hai
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 5 } },
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 576, settings: { slidesToShow: 2 } },
  ],
}

const ProductCard = ({ data, categoryImg }) => {
  const [hover, setHover] = useState(false)
  const displayImg = categoryImg || defaultImg

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
        width: '95%',
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
          <img
            src={displayImg}
            alt={data.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => (e.currentTarget.src = defaultImg)}
          />
        </div>
        <div className="product-back" style={{ height: '100%' }}>
          <img
            src={displayImg}
            alt={data.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => (e.currentTarget.src = defaultImg)}
          />
        </div>
      </div>

      <div
        className="product-detail detail-center"
        style={{
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
              width: '100%',
              textAlign: 'left',
              padding: '0 10px',
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
              href="#!"
              style={{
                textDecoration: 'none',
                color: '#222',
                fontWeight: '600',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {data.name}
            </a>
            <div
              style={{
                color: '#e94560',
                fontWeight: '700',
                fontSize: '1rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
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
            }}
          >
            {/* Icons logic remains same */}
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
  const [categories, setCategories] = useState([])
  const [activeTab, setActiveTab] = useState('')
  const [activeImage, setActiveImage] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        setCategories(data)
        if (data.length > 0) {
          setActiveTab(data[0].name)
          setActiveImage(data[0].image)
        }
      } catch (err) {
        console.error('Error fetching categories:', err)
      }
    }
    fetchCats()
  }, [])

  useEffect(() => {
    if (!activeTab) return
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/featured')
        const data = await res.json()

        const seenImages = new Set()
        const uniqueProducts = []

        for (const p of data) {
          if (!seenImages.has(p.category_image) && uniqueProducts.length < 5) {
            seenImages.add(p.category_image)
            uniqueProducts.push({
              id: p.id || Math.random(),
              name: p.title || 'Product',
              description: p.productDescription || 'Description',
              specificImg: p.category_image,
            })
          }
        }
        setProducts(uniqueProducts)
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    }
    fetchProducts()
  }, [activeTab])

  return (
    <>
      {/* Category Selection Section */}
      <section className="section-pt-space">
        <div className="tab-product-main tab-third">
          <div className="custom-container">
            <Slider {...categoryTabSettings}>
              {categories.map((cat) => (
                <div key={cat.id}>
                  <div
                    onClick={() => {
                      setActiveTab(cat.name)
                      setActiveImage(cat.image)
                    }}
                    style={{
                      cursor: 'pointer',
                      padding: '20px',
                      textAlign: 'center',
                      fontWeight: activeTab === cat.name ? 'bold' : 'bold',
                      color: activeTab === cat.name ? '#f78195' : '#f78195',
                      borderBottom:
                        activeTab === cat.name ? '2px solid #f78195' : 'none',
                    }}
                  >
                    {cat.name}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Product Slider Section */}
      <section
        className="section-py-space product"
        style={{ marginTop: '20px' }}
      >
        <div className="custom-container">
          <div className="slick-left-align-wrapper">
            <Slider {...productSlide6}>
              {products.length > 0 ? (
                products.map((p) => (
                  <div key={`${activeTab}-${p.id}`}>
                    <ProductCard
                      data={p}
                      categoryImg={p.specificImg || activeImage}
                    />
                  </div>
                ))
              ) : (
                <div>
                  <ProductCard
                    data={{
                      name: activeTab,
                      description: 'No Image Available',
                    }}
                    categoryImg={activeImage}
                  />
                </div>
              )}
            </Slider>
          </div>
        </div>
      </section>

      {/* CSS to force Left Alignment when items < 5 */}
      <style>{`
        .slick-left-align-wrapper .slick-track {
          margin-left: 0 !important;
          display: flex !important;
          flex-direction: row !important;
          justify-content: flex-start !important;
        }
        .slick-left-align-wrapper .slick-slide {
          height: auto !important;
        }
      `}</style>
    </>
  )
}

export default CategoryProducts
