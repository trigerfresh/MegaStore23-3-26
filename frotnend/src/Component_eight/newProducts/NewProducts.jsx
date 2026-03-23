import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './3.jpg' // Your imported default image

const NewProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/featured')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.log('Error while fetching data : ', err)
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
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  }

  const imageStyle = {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    display: 'block',
  }

  // Helper function to handle broken image links
  const handleImageError = (e) => {
    e.target.src = defaultImg
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
                {products.map((product) => (
                  <div key={product.id}>
                    <div style={{ padding: '0 10px' }}>
                      <div className="product-box product-box2">
                        <div
                          className="product-imgbox"
                          style={{ overflow: 'hidden' }}
                        >
                          {/* FRONT IMAGE */}
                          <div className="product-front">
                            <a href="#">
                              <img
                                src={product.image1 || defaultImg} // Logic for null/empty strings
                                onError={handleImageError} // Logic for broken links
                                className="img-fluid"
                                alt={product.title}
                                style={imageStyle}
                              />
                            </a>
                          </div>

                          {/* BACK IMAGE */}
                          <div className="product-back">
                            <a href="#">
                              <img
                                src={product.image2 || defaultImg} // Logic for null/empty strings
                                onError={handleImageError} // Logic for broken links
                                className="img-fluid"
                                alt={product.title}
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
                        </div>

                        <div
                          className="product-detail product-detail2"
                          style={{ minHeight: '120px' }}
                        >
                          <div className="rating">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className="fa fa-star"
                                style={{
                                  color: '#ffa200',
                                  fontSize: '14px',
                                  marginRight: '2px',
                                }}
                              ></i>
                            ))}
                          </div>

                          <a href="#">
                            <h3
                              style={{
                                fontSize: '16px',
                                textTransform: 'capitalize',
                                marginTop: '5px',
                              }}
                            >
                              {product.title}
                            </h3>
                          </a>
                          <h5>
                            {product.productDescription}{' '}
                            <span
                              style={{
                                color: '#999',
                                textDecoration: 'line-through',
                                marginLeft: '10px',
                              }}
                            >
                              {product.oldPrice}
                            </span>
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

export default NewProducts
