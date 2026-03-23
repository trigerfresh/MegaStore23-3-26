import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  return (
    <section className="rounded-category vagitable-category section-mt-space">
      <div className="container">
        <div className="row">
          <div className="col">
            {/* ✅ React Slick */}
            <Slider {...settings} className="slide-6 no-arrow">
              {categories.map((cat, index) => (
                <div key={index}>
                  <div className="category-contain">
                    <a href="category-page(left-sidebar).html">
                      <div className="img-wrapper">
                        <img
                          src={
                            cat.image ||
                            'http://localhost:4000/assets/img/cat_1.jpg'
                          } // 👈 backend image
                          alt={cat.name}
                          className="img-fluid"
                          style={{ width: '100px' }}
                          onError={(e) => {
                            e.currentTarget.src =
                              'http://localhost:4000/assets/img/cat_1.jpg' // fallback if image fails to load
                          }}
                        />
                      </div>
                      <div>
                        <div className="btn-rounded">
                          {cat.name} {/* 👈 backend name */}
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
    </section>
  )
}

export default Category
