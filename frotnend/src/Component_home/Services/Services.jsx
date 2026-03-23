import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './cat_1.jpg'

const Services = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        setCategories(data)
      } catch (err) {
        console.error('Error fetching categories : ', err)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading products...</p>
  }

  // Slider configuration matching your existing layout
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        breakpoint: 420,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <section className="services2 section-pt-space">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 pr-0">
            {/* Initializing the actual Slider component */}
            <div className="services-slide6">
              <Slider {...settings}>
                {/* Slide 1: Festival Discount */}
                {categories.map((cat) => (
                  <div>
                    <div className="services-box">
                      <a
                        href="#"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          textDecoration: 'none',
                        }}
                      >
                        <img
                          src={cat.image || defaultImg}
                          alt={cat.name}
                          style={{
                            width: '40px',
                            height: '30px',
                            objectFit: 'cover',
                            flexShrink: 0,
                          }}
                          onError={(e) => {
                            e.currentTarget.src = defaultImg
                          }}
                        />
                        <span
                          style={{
                            fontSize: '12px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {cat.name}
                        </span>
                      </a>
                      {/* festivel discount */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
