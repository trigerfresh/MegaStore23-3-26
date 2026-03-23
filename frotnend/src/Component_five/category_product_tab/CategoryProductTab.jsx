import React from 'react'
import Slider from 'react-slick'

// Import slick css in your main App.js or here
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CategoryProductTab = () => {
  // Slider Settings
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  }

  const categories = [
    { img: '1.png', name: 'flower' },
    { img: '2.png', name: 'furniture' },
    { img: '3.png', name: 'bag' },
    { img: '4.png', name: 'tools' },
    { img: '5.png', name: 'grocery' },
    { img: '6.png', name: 'camera' },
    { img: '7.png', name: 'shoes' },
  ]

  return (
    <section className="rounded-category rounded-category-inverse">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="slide-6 no-arrow">
              <Slider {...settings}>
                {categories.map((item, index) => (
                  <div key={index}>
                    <div style={{ width: '100%', display: 'inline-block' }}>
                      <div className="category-contain">
                        <div className="img-wrapper">
                          <a href="category-page(left-sidebar).html">
                            <img
                              src={`../assets/images/layout-1/rounded-cat/${item.img}`}
                              alt="category"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <a
                          href="category-page(left-sidebar).html"
                          className="btn-rounded"
                        >
                          {item.name}
                        </a>
                      </div>
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

export default CategoryProductTab
