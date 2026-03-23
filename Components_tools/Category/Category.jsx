import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import defaultImg from './cat_1.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Category = () => {
  const [categories, setCategories] = useState([])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992, // Tablets
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 576, // Mobile phones
        settings: {
          slidesToShow: 2,
          centerMode: true, // Mobile par visual depth ke liye
          centerPadding: '20px',
        },
      },
    ],
  }

  useEffect(() => {
    fetch('http://localhost:4000/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err))
  }, [])

  // Categories ko divide karne ka cleaner way
  const categoriesRow1 = categories.slice(0, Math.ceil(categories.length / 2))
  const categoriesRow2 = categories.slice(Math.ceil(categories.length / 2))

  const renderSlides = (data) =>
    data.map((item) => (
      <div key={item._id} className="p-2">
        {' '}
        {/* Padding for spacing between cards */}
        <div
          className="category-box"
          style={{
            background: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <div
            className="img-wrapper"
            style={{ position: 'relative', textAlign: 'center' }}
          >
            <a href={`/category/${item._id}`}>
              <img
                src={item.image || defaultImg}
                alt={item.name}
                className="img-fluid"
                style={{
                  width: '100%',
                  height: '180px', // Fixed height for consistency
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.currentTarget.src = defaultImg
                }}
              />
            </a>
            <div className="category-detail" style={{ padding: '10px' }}>
              <h4
                style={{
                  fontSize: '16px',
                  margin: '0',
                  textTransform: 'capitalize',
                }}
              >
                {item.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    ))

  return (
    <>
      <div className="title8 section-big-pt-space text-center my-4">
        <h4 className="text-uppercase font-weight-bold">Trending Category</h4>
      </div>

      <section className="category3 section-big-pb-space">
        <div className="container-fluid px-md-5">
          {' '}
          {/* Fluid container with padding */}
          <div className="row">
            {/* First Slider Row */}
            <div className="col-12 mb-3">
              <Slider {...settings}>{renderSlides(categoriesRow1)}</Slider>
            </div>

            {/* Second Slider Row */}
            <div className="col-12 mt-2">
              <Slider {...settings}>{renderSlides(categoriesRow2)}</Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category
