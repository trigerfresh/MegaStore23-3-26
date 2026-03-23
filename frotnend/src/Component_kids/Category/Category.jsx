import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import defaultImg from './2.jpg'

const Category = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        setCategories(data)
      } catch (err) {
        console.error('Error fetching categories', err)
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
    <section className="category2 section-py-space">
      <div className="custom-container">
        <div className="row">
          <div className="col-12 pr-0">
            <div className="category-slide6 no-arrow">
              <Slider {...settings}>
                {categories.map((cat) => (
                  <div className="px-2" key={cat.id}>
                    <a href="#">
                      <div
                        className="category-box"
                        style={{
                          height: '150px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <div>
                          <div
                            className="icon-wrapper"
                            style={{
                              height: '70px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              src={cat.image}
                              alt={cat.name}
                              style={{
                                width: '60px',
                                height: '60px',
                                objectFit: 'contain',
                                borderRadius: '30px',
                              }}
                              onError={(e) => {
                                e.currentTarget.src = defaultImg // fallback if image fails to load
                              }}
                            />
                          </div>

                          <div className="category-details">
                            <h6 style={{ marginTop: '8px', fontSize: '10px' }}>
                              {cat.name}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </a>
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
