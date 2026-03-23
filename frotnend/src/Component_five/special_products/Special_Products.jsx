import React, { useEffect, useState } from 'react'
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
        console.log(data)
      } catch (err) {
        console.error('Error while fetching data : ', err)
      }
    }
    fetchProducts()
  }, [])

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <>
      <div className="title1 section-my-space mt-0">
        <h4 className="text-uppercase fw-bold">Special Products</h4>
      </div>

      <section className="py-4 bg-white ">
        <div className="container-fluid px-4">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <div
                  className="card border-0 shadow-sm h-100 p-3"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Section */}
                  <div
                    className="position-relative d-flex align-items-center justify-content-center mb-3"
                    style={{ height: '250px' }}
                  >
                    <img
                      src={
                        hoveredId === product.id
                          ? product.image2 || defaultImg
                          : product.image1 || defaultImg
                      }
                      alt={product.name}
                      className="img-fluid"
                      style={{
                        minHeight: '240px',
                        objectFit: 'contain',
                        transition: '0.3s ease',
                      }}
                    />

                    {/* Icons - Show only when hovered */}
                    {hoveredId === product.id && (
                      <div
                        className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-2"
                        style={{ transition: '0.3s ease' }}
                      >
                        <div
                          className="bg-white shadow d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </div>

                        <div
                          className="bg-white shadow d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <i className="fa fa-eye"></i>
                        </div>

                        <div
                          className="bg-white shadow d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <i className="fa fa-heart"></i>
                        </div>

                        <div
                          className="bg-white shadow d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <i className="fa fa-heart"></i>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Info */}
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="fw-semibold mb-1">{product.title}</h6>

                      <div className="text-warning small">
                        {[...Array(4)].map((_, i) => (
                          <i key={i} className="fa fa-star me-1"></i>
                        ))}
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>

                    <div className="text-end">
                      <div className="text-muted text-decoration-line-through small">
                        {product.oldPrice}
                      </div>
                      <div className="text-danger fw-bold fs-5">
                        {product.price}
                      </div>
                    </div>
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

export default SpecialProducts
