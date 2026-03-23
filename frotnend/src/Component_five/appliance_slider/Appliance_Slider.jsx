import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

// Make sure to import these in your App.js or here for the slider to work
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Appliance_Slider = () => {
  const [slide1, setSlide1] = useState(null)
  const [slide2, setSlide2] = useState(null)
  const [slide3, setSlide3] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/banners')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.formattedBanners.length >= 3) {
          setSlide1(data.formattedBanners[0])
          setSlide2(data.formattedBanners[1])
          setSlide3(data.formattedBanners[2])
        }
      })
      .catch((err) => console.error('Error fetching banners : ', err))
  }, [])

  // Slider Settings: Arrows removed, Autoplay added for movement
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // This removes the Previous/Next buttons
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <section className="theme-slider layout-5 home-slide ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="slide-1 no-arrow">
              {/* React Slider starts here */}
              <Slider {...settings}>
                {/* Slide 1 */}
                {slide1 && (
                  <div className="slider-banner slide-banner-4">
                    <div className="slider-img">
                      <ul className="layout5-slide-1">
                        <li
                          style={{
                            transform:
                              'translateX(5.34667%) translateY(0.993333%)',
                          }}
                        >
                          <img
                            src={slide1.image}
                            className="img-fluid"
                            alt={slide1.title}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="slider-banner-contain">
                      <div>
                        <h3>{slide1.title.split(' ').slice(0, 2).join(' ')}</h3>
                        <h1>
                          {slide1.title.split(' ').slice(2, 4).join(' & ')}
                        </h1>
                        <h2>{slide1.title.split(' ').slice(4).join(' ')}</h2>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-normal"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {/* Slide 2 */}
                {slide2 && (
                  <div className="slider-banner slide-banner-4">
                    <div className="slider-img">
                      <ul className="layout5-slide-2">
                        <li
                          style={{
                            transform:
                              'translateX(5.34667%) translateY(0.993333%)',
                          }}
                        >
                          <img
                            src={slide2.image}
                            className="img-fluid"
                            alt={slide2.title}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="slider-banner-contain">
                      <div>
                        <h3>{slide2.title.split(' ').slice(0, 2).join(' ')}</h3>
                        <h1>
                          {slide2.title.split(' ').slice(2, 4).join(' & ')}
                        </h1>
                        <h2>{slide2.title.split(' ').slice(4).join(' ')}</h2>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-normal"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {/* Slide 3 */}
                {slide3 && (
                  <div className="slider-banner slide-banner-4">
                    <div className="slider-img">
                      <ul className="layout5-slide-3">
                        <li
                          style={{
                            transform:
                              'translateX(5.34667%) translateY(0.993333%)',
                          }}
                        >
                          <img
                            src={slide3.image}
                            className="img-fluid"
                            alt={slide3.title}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="slider-banner-contain">
                      <div>
                        <h3>{slide3.title.split(' ').slice(0, 2).join(' ')}</h3>
                        <h1>
                          {slide3.title.split(' ').slice(2, 4).join(' & ')}
                        </h1>
                        <h2>{slide3.title.split(' ').slice(4).join(' ')}</h2>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-normal"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                )}{' '}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appliance_Slider
