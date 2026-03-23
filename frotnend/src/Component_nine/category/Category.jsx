import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './cat_1.jpg'

const Category = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        setCategories(data)
      } catch (err) {
        console.error('Error fetching categories:', err)
      }
    }
    fetchCategories()
  }, [])

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  return (
    <section className="category2 section-pt-space">
      <div className="custom-container">
        <div className="row">
          <div className="col-12 pr-0">
            <div className="category-slide6 no-arrow">
              <Slider {...settings}>
                {categories.map((cat) => (
                  <div key={cat.id} className="slick-slide">
                    <div
                      style={{
                        width: '100%',
                        display: 'inline-block',
                        padding: '0 5px',
                      }}
                    >
                      <a
                        href={`category-page(left-sidebar).html`}
                        style={{ textDecoration: 'none' }}
                      >
                        <div
                          className="category-box"
                          style={{
                            /* Fix: Uniform height and alignment */
                            height: '220px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            // border: '1px solid #f9f9f9',
                            backgroundColor: '#fff',
                          }}
                        >
                          <div>
                            <div className="icon-wrapper">
                              <img
                                src={cat.image || defaultImg}
                                alt={cat.name}
                                style={{
                                  width: '128px',
                                  height: '128px',
                                  objectFit: 'contain',
                                  marginBottom: '15px',
                                }}
                                onError={(e) => {
                                  e.currentTarget.src = defaultImg // fallback if image fails to load
                                }}
                              />
                            </div>
                            <div className="category-details">
                              <h6
                                style={{
                                  margin: 0,
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {cat.name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </a>
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

export default Category
