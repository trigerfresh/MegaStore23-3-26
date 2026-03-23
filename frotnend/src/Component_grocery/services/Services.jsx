import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'
import defaultImg from './cat_1.jpg'

const Services = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/categories')
        setCategories(response.data)
      } catch (err) {
        console.log('Error fetching categories: ', err)
      }
    }
    fetchCategories()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  }

  return (
    <section className="category2 section-mt-space">
      <div className="custom-container">
        <div className="row">
          <div className="col-12 pr-0">
            <Slider {...settings} className="category-slide6 no-arrow">
              {/* Item 1 */}
              {categories.map((cat) => (
                <div>
                  <a href="category-page(left-sidebar).html">
                    <div className="category-box">
                      <div>
                        <div className="icon-wrapper">
                          {/* your svg stays exactly same */}
                          <img
                            src={cat.image}
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
                        </div>
                        <div className="category-details">
                          <h6
                            style={{
                              fontSize: '10px',
                              whiteSpace: 'nowrap',
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
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
