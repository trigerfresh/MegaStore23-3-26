import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' // Theme file add karna zaroori hai

const Home_Slider = () => {
  const [slide1, setSlide1] = useState(null)
  const [slide2, setSlide2] = useState(null)
  const [slide3, setSlide3] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/banners')
      .then((res) => res.json())
      .then((data) => {
        const banners = data.formattedBanners || []
        if (banners.length >= 3) {
          setSlide1(banners[0])
          setSlide2(banners[1])
          setSlide3(banners[2])
        }
      })
      .catch((err) => console.log('Error fetching banners: ', err))
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  return (
    <section className="theme-slider section-py-space home-slide">
      <div className="custom-container">
        <div className="row slider-layout-4">
          <div className="col-xl-10 slider-slide">
            <div className="slide-1 no-arrow">
              <Slider {...settings}>
                {/* Slide 1 */}
                {slide1 && (
                  <div>
                    <div style={{ width: '100%', display: 'inline-block' }}>
                      <div className="slider-banner slide-banner-3">
                        <div className="slider-img">
                          <ul className="layout4-slide-1">
                            <li
                              id="img-1"
                              style={{
                                transform:
                                  'translateX(3.66667%) translateY(0.98%)',
                              }}
                            >
                              <img
                                src={slide1.image}
                                className="img-fluid"
                                alt={slide1.title || 'Slide 1'}
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="slider-banner-contain">
                          <div>
                            <h5>
                              {slide1.title.split(' ').slice(0, 5).join(' ')}
                            </h5>
                            <h3>
                              {slide1.title.split(' ').slice(5, 6).join(' ')}
                            </h3>
                            <h1>
                              {slide1.title.split(' ').slice(6, 8).join(' ')}
                            </h1>
                            <h2>
                              {slide1.title.split(' ').slice(8).join(' ')}
                            </h2>
                            <a
                              href={slide1.link || '#'}
                              className="btn btn-normal"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slide 2 */}
                {slide2 && (
                  <div>
                    <div style={{ width: '100%', display: 'inline-block' }}>
                      <div className="slider-banner slide-banner-3">
                        <div className="slider-img">
                          <ul className="layout4-slide-2">
                            <li
                              id="img-2"
                              style={{
                                transform:
                                  'translateX(3.66667%) translateY(0.98%)',
                              }}
                            >
                              <img
                                src={slide2.image}
                                className="img-fluid"
                                alt={slide2.title || 'Slide 2'}
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="slider-banner-contain">
                          <div>
                            <h5>
                              {slide2.title.split(' ').slice(0, 5).join(' ')}
                            </h5>
                            <h3>
                              {slide2.title.split(' ').slice(5, 6).join(' ')}
                            </h3>
                            <h1>
                              {slide2.title.split(' ').slice(6, 8).join(' ')}
                            </h1>
                            <h2>
                              {slide2.title.split(' ').slice(8).join(' ')}
                            </h2>
                            <a
                              href={slide2.link || '#'}
                              className="btn btn-normal"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slide 3 */}
                {slide3 && (
                  <div>
                    <div style={{ width: '100%', display: 'inline-block' }}>
                      <div className="slider-banner slide-banner-3">
                        <div className="slider-img">
                          <ul className="layout4-slide-3">
                            <li
                              id="img-3"
                              className="slide-center"
                              style={{
                                transform:
                                  'translateX(3.66667%) translateY(0.98%)',
                              }}
                            >
                              <img
                                src={slide3.image}
                                className="img-fluid"
                                alt={slide3.title || 'Slide 3'}
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="slider-banner-contain">
                          <div>
                            <h5>
                              {slide3.title.split(' ').slice(0, 5).join(' ')}
                            </h5>
                            <h3>
                              {slide3.title.split(' ').slice(5, 6).join(' ')}
                            </h3>
                            <h1>
                              {slide3.title.split(' ').slice(6, 8).join(' ')}
                            </h1>
                            <h2>
                              {slide3.title.split(' ').slice(8).join(' ')}
                            </h2>
                            <a
                              href={slide3.link || '#'}
                              className="btn btn-normal"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home_Slider
