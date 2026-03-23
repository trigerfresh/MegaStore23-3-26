import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './1.jpg'

const Hot_Deals = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [hoveredProductId, setHoveredProductId] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/special')
        const data = await res.json()
        const shuffled = [...data].sort(() => 0.5 - Math.random())
        const limitedProducts = shuffled.slice(0, 8)
        setProducts(limitedProducts)

        // Data fetch hone ke baad hi state set hogi
        if (limitedProducts.length > 0) {
          setSelectedProduct(limitedProducts[0])
        }
      } catch (err) {
        console.error('Error fetching special products:', err)
      }
    }
    fetchProducts()
  }, [])

  // Agar data load nahi hua, toh spinner ya null return karein
  // Yeh guard error ko rok dega
  if (!selectedProduct) {
    return <div className="text-center p-5">Loading...</div>
  }

  const leftSliderSettings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const rightSliderSettings = {
    dots: false,
    infinite: true,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  }

  return (
    <section className="hot-deal section-big-pb-space p-2">
      <style>{`
        .icon-list {
          display: flex;
          gap: 15px;
          align-items: center;
          height: 100%;
          animation: fadeIn 0.3s ease;
        }
        .icon-list i {
          cursor: pointer;
          font-size: 16px;
          transition: transform 0.2s;
        }
        .icon-list i:hover { transform: scale(1.2); }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container-fluid">
        <div className="row align-items-stretch">
          {/* LEFT SIDE (Main Product) */}
          <div className="col-lg-9 d-flex">
            <div
              className="row align-items-center p-1 w-100 h-100"
              style={{ background: '#f2f2f2', margin: 0 }}
            >
              <div className="col-lg-6 text-center pe-4">
                {/* Yahan image1 access safe hai kyunki upar guard laga hai */}
                <img
                  src={selectedProduct.image1 || defaultImg}
                  alt={selectedProduct.title}
                  className="img-fluid"
                  style={{ height: '450px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.src = defaultImg
                  }}
                />
              </div>

              <div className="col-lg-4 d-flex align-items-center">
                <div className="w-100 text-start">
                  <h2 className="mb-3" style={{ color: '#444' }}>
                    {selectedProduct.title}
                  </h2>
                  <ul
                    className="rating d-flex ps-0 mb-2"
                    style={{ listStyle: 'none' }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <i
                          className={`fa ${i < 4 ? 'fa-star' : 'fa-star-o'} text-warning`}
                        ></i>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3">{selectedProduct.productDescription}</p>
                  <button className="btn btn-normal btn-md mt-3">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="col-lg-2">
                <div
                  className="hot-deal-slider-wrapper"
                  style={{ height: '400px' }}
                >
                  <Slider {...leftSliderSettings}>
                    {products.map((product) => (
                      <div key={product.id} className="p-1">
                        <div
                          onClick={() => setSelectedProduct(product)}
                          style={{
                            cursor: 'pointer',
                            padding: '5px',
                            backgroundColor: '#fff',
                            border:
                              selectedProduct.id === product.id
                                ? '2px solid #ff4c3b'
                                : '2px solid transparent',
                          }}
                        >
                          <img
                            src={product.image1 || defaultImg}
                            alt={product.title}
                            className="img-fluid mx-auto"
                            style={{ height: '90px', objectFit: 'contain' }}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (New Products) */}
          <div className="col-lg-3 d-flex">
            <div className="slide-1-section no-arrow w-100 h-100 bg-white p-3 border">
              <div className="media-heading mb-3">
                <h5>New Products</h5>
              </div>

              <Slider {...rightSliderSettings}>
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="media-banner-box mb-3"
                    onMouseEnter={() => setHoveredProductId(item.id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                  >
                    <div
                      className="media d-flex align-items-center"
                      style={{ minHeight: '80px' }}
                    >
                      <a href="#">
                        <img
                          src={item.image1 || defaultImg}
                          className="img-fluid"
                          alt={item.title}
                          style={{
                            width: '70px',
                            height: '70px',
                            objectFit: 'contain',
                          }}
                        />
                      </a>

                      <div className="media-body ms-3 w-100">
                        {hoveredProductId === item.id ? (
                          <div className="icon-list">
                            <i
                              className="fa fa-shopping-cart"
                              title="Add to Cart"
                            ></i>
                            <i className="fa fa-refresh" title="Compare"></i>
                            <i className="fa fa-eye" title="Quick View"></i>
                            <i className="fa fa-heart-o" title="Wishlist"></i>
                          </div>
                        ) : (
                          <div className="product-detail">
                            <ul
                              className="rating d-flex p-0 mb-1"
                              style={{ listStyle: 'none', fontSize: '10px' }}
                            >
                              <li>
                                <i className="fa fa-star text-warning"></i>
                              </li>
                              <li>
                                <i className="fa fa-star text-warning"></i>
                              </li>
                              <li>
                                <i className="fa fa-star text-warning"></i>
                              </li>
                              <li>
                                <i className="fa fa-star text-warning"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o text-warning"></i>
                              </li>
                            </ul>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: '13px',
                                fontWeight: '500',
                                color: '#000',
                              }}
                            >
                              {item.title.substring(0, 18)}...
                            </p>
                            <h6
                              className="mt-1"
                              style={{ fontSize: '14px', color: '#000' }}
                            >
                              ₹{item.price}
                            </h6>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div></div>

              <div className="mt-2">
                <a
                  href="#"
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14px',
                  }}
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hot_Deals
