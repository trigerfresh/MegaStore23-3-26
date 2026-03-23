import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './1.jpg'
import defaultImg1 from './2.jpg'

const NewProduct = () => {
  const [productData, setProductData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/special')

        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await res.json()
        setProductData(data)
      } catch (err) {
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
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
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  }

  // Common styling for images to ensure they are the same size
  const imageStyle = {
    width: '100%',
    height: '280px', // Set a fixed height that fits your design
    objectFit: 'cover', // This crops the image to fill the area without stretching
    display: 'block',
  }

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading products...</p>
  }

  return (
    <>
      <div className="title8 section-big-pt-space">
        <h4>new product</h4>
      </div>

      <section className="section-big-mb-space ratio_square product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pr-0">
              <Slider
                {...settings}
                className="product-slide-5 product-m no-arrow"
              >
                {productData.map((product) => (
                  <div key={product.id}>
                    <div style={{ padding: '0px 0px' }}>
                      {' '}
                      {/* Adds spacing between slides */}
                      <div className="product-box product-box2">
                        <div
                          className="product-imgbox"
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="product-front">
                            <a href="#">
                              <img
                                src={product.image1 || defaultImg}
                                className="img-fluid"
                                alt={product.image1}
                                style={imageStyle}
                              />
                            </a>
                          </div>
                          <div className="product-back">
                            <a href="#">
                              <img
                                src={product.image2 || defaultImg1}
                                className="img-fluid"
                                alt={product.image2}
                                style={imageStyle}
                              />
                            </a>
                          </div>

                          <div className="product-icon icon-inline">
                            <button
                              className="tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-shopping-cart"
                              >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                              </svg>
                            </button>
                            <a
                              href="#"
                              className="add-to-wish tooltip-top"
                              data-tippy-content="Add to Wishlist"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-heart"
                              >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                              </svg>
                            </a>
                            <a
                              href="#"
                              className="tooltip-top"
                              data-tippy-content="Quick View"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                          </div>
                          <div className="new-label1">
                            <div>new</div>
                          </div>
                          <div className="on-sale1">on sale</div>
                        </div>

                        {/* Fixed height for details ensures boxes align even if text lengths differ */}
                        <div
                          className="product-detail product-detail2"
                          style={{ minHeight: '100px' }}
                        >
                          <a href="#">
                            <h3
                              style={{
                                fontSize: '16px',
                                textTransform: 'capitalize',
                              }}
                            >
                              {product.title}
                            </h3>
                          </a>
                          <h5>
                            {product.productDescription}{' '}
                            <span>{product.oldPrice}</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewProduct
