import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home_Slider = () => {
  const [slide1, setSlide1] = useState(null)
  const [slide2, setSlide2] = useState(null)
  const [slide3, setSlide3] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/banners')
      .then((res) => res.json())
      .then((data) => {
        if (data.formattedBanners && data.formattedBanners.length >= 3) {
          setSlide1(data.formattedBanners[0])
          setSlide2(data.formattedBanners[1])
          setSlide3(data.formattedBanners[2])
        }
      })
      .catch((err) => console.log('Error fetching banners: ', err))
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="theme-slider section-pt-space">
      <div className="custom-container">
        <div className="row">
          <div className="col-xl-8 col-lg-9 offset-xl-2 px-abjust">
            {/* ✅ Just replace this div with Slider */}
            <Slider {...settings} className="slide-1 no-arrow">
              {/* Slide 1 */}
              {slide1 && (
                <div>
                  <div className="slider-banner slide-banner-5">
                    <div className="slider-img">
                      <ul className="layout6-slide-1">
                        <li>
                          <img
                            src={slide1.image}
                            className="img-fluid"
                            alt="slider"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="slider-banner-contain">
                      <div>
                        <h5>
                          {' '}
                          {slide1.title.split(' ').slice(0, 2).join(' ')}
                        </h5>
                        <h3>
                          {' '}
                          {slide1.title.split(' ').slice(2, 4).join(' ')}
                        </h3>
                        <h1>
                          {' '}
                          {slide1.title.split(' ').slice(4, 9).join(' ')}
                        </h1>
                        <a href="#" className="btn btn-rounded">
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Slide 2 */}
              {slide2 && (
                <div>
                  <div className="slider-banner slide-banner-5">
                    <div
                      className="slider-img bg-size"
                      style={{
                        backgroundImage: `url(${slide2.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <img
                        src={slide2.image}
                        className="bg-img"
                        alt={slide2.title}
                        style={{ display: 'none' }}
                      />
                      <ul className="layout6-slide-2">
                        <li>
                          <img
                            src="../assets/images/layout-6/slider/2.2.png"
                            className="img-fluid"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="../assets/images/layout-6/slider/2.3.png"
                            className="img-fluid"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="../assets/images/layout-6/slider/2.4.png"
                            className="img-fluid"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="../assets/images/layout-6/slider/2.5.png"
                            className="img-fluid"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="slider-banner-contain">
                      <div>
                        <h5>{slide2.title.split(' ').slice(0, 2).join(' ')}</h5>
                        <h3>{slide2.title.split(' ').slice(2, 4).join(' ')}</h3>
                        <h1>{slide2.title.split(' ').slice(4, 9).join(' ')}</h1>
                        <a href="#" className="btn btn-rounded">
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Slide 3 */}
              {slide3 && (
                <div>
                  <div className="slider-banner slide-banner-5">
                    <div className="slider-img">
                      <ul className="layout6-slide-1">
                        <li>
                          <img
                            src={slide3.image}
                            className="img-fluid"
                            alt="slider"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="slider-banner-contain">
                      <div>
                        <h5>{slide3.title.split(' ').slice(0, 2).join(' ')}</h5>
                        <h3>{slide3.title.split(' ').slice(2, 4).join(' ')}</h3>
                        <h1>{slide3.title.split(' ').slice(4, 9).join(' ')}</h1>
                        <a href="#" className="btn btn-rounded">
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Slider>
          </div>

          {/* Right banner (unchanged) */}
          {slide3 && (
            <div className="col-xl-2 col-sm-3 ps-0 offer-banner">
              <div className="offer-banner-img">
                <img
                  src={slide3.image}
                  alt="offer-banner"
                  className="img-fluid"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Home_Slider
