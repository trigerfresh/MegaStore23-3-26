import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Category1 = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/categories')
        setCategories(res.data) // adjust if data is inside res.data.data
      } catch (error) {
        console.error('Error fetching categories:', error)
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
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  return (
    <section className="rounded-category rounded-category-inverse">
      <div className="container">
        <div className="row">
          <div className="col">
            <Slider {...settings} className="slide-6 no-arrow">
              {categories.map((cat, index) => (
                <div key={cat._id || index}>
                  <div className="category-contain">
                    <div className="img-wrapper">
                      <a href="#">
                        <img
                          src={cat.image} // make sure backend sends full URL
                          alt={cat.name}
                          className="img-fluid"
                          style={{ width: '100%' }}
                        />
                      </a>
                    </div>
                    <a href="#" className="btn-rounded">
                      {cat.name}
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

export default Category1
