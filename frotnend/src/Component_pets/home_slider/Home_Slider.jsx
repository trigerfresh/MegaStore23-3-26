import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home_Slider = () => {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/banners')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.formattedBanners.length > 0) {
          setSlides(data.formattedBanners.slice(0, 2))
        }
      })
      .catch((err) => console.error('Error fetching banners:', err))
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 992, settings: { arrows: false } },
      { breakpoint: 576, settings: { arrows: false } },
    ],
  }

  return (
    <section className="pets-slide home-slide">
      <Slider {...settings} className="slide-1 no-arrow">
        {slides.map((slide, index) => (
          <div key={index}>
            <div style={{ width: '100%', display: 'inline-block' }}>
              <div
                className="slide-main bg-size"
                style={{
                  backgroundImage: `url(${slide?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'block',
                }}
              >
                <div className="animat-block">
                  {/* First image */}
                  <img
                    src={slide?.image ? slide?.image : 'No image'}
                    className="img-fluid animat1"
                    alt={slide.title}
                  />
                  {/* Second image: duplicate */}
                  <img
                    src={slide?.image ? slide?.image : 'No image'}
                    className="img-fluid animat2"
                    alt={slide.title}
                  />
                </div>

                <div className="custom-container">
                  <div className="row">
                    <div className="col-12 p-0 position-relative">
                      <div className="slide-contain">
                        <div>
                          <h3>
                            {slide.title.split(' ').slice(0, 4).join(' ')}
                          </h3>
                          <h2>
                            {slide.title.split(' ').slice(4, 10).join(' ')}
                          </h2>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="search your pets"
                          />
                          <a href="#" className="btn btn-rounded">
                            search
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Home_Slider
