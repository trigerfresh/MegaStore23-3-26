import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './2.jpg'

const CategoryProducts = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/categories')
        const data = await res.json()
        setCategories(data)
        console.log(data)
      } catch (err) {
        console.error('Error fetching categories : ', err)
      }
    }
    fetchCategories()
  }, [])

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  }

  return (
    <section className="category1">
      <div className="custom-container">
        <div className="row">
          <div className="col-12 pr-0">
            {/* Only this part changed → wrapped in Slider */}
            <Slider {...settings} className="category-slide7 no-arrow mb--5">
              {categories.map((cat) => (
                <div>
                  <a href="category-page(left-sidebar).html">
                    <div className="category-box">
                      <div className="img-wrapper">
                        <img
                          src={cat.image}
                          className="img-fluid"
                          alt="furniture"
                          onError={(e) => {
                            e.currentTarget.src = defaultImg // fallback if image fails to load
                          }}
                        />
                      </div>
                      <div className="category-details">
                        <h4>{cat.name}</h4>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryProducts
