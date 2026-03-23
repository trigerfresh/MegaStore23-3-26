import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'

const Category = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/categories')
        setCategories(response.data) // ✅ correct
      } catch (err) {
        console.error('Error while fetching categories : ', err)
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
        settings: { slidesToShow: 4 },
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
    <section className="rounded-category">
      <div className="container">
        <div className="row">
          <div className="col">
            <Slider {...settings}>
              {Array.isArray(categories) &&
                categories.map((cat) => (
                  <div key={cat.id || cat._id}>
                    <div className="category-contain">
                      <div className="img-wrapper">
                        <a href={cat.url || '#'}>
                          <img
                            src={
                              cat.image ||
                              '../assets/images/layout-1/rounded-cat/1.png'
                            }
                            alt={cat.name}
                            className="img-fluid"
                            onError={(e) => {
                              e.currentTarget.src =
                                '../assets/images/layout-1/rounded-cat/1.png'
                            }}
                            style={{
                              width: '300%',
                            }}
                          />
                        </a>
                      </div>
                      <a href={cat.url || '#'} className="btn-rounded">
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

export default Category
