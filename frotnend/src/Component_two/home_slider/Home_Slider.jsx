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
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <section className="theme-slider section-pt-space home-slide">
      <div className="custom-container">
        <div className="row">
          <div className="col-xl-8 col-lg-9 offset-xl-2 px-abjust">
            {/* ✅ REACT SLICK SLIDER */}
            <Slider {...settings} className="slide-1 no-arrow">
              {/* SLIDE 1 */}
              {slide1 && (
                <div>
                  <div className="slider-banner">
                    <div className="slider-img">
                      <ul className="layout2-slide-1">
                        <li>
                          <img
                            src={slide1.image}
                            className="img-fluid"
                            alt={slide1.title}
                            // style={{ width: 'auto' }}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="slider-banner-contain">
                      <div>
                        <h4>{slide1.title.split(' ').slice(0, 2).join(' ')}</h4>
                        <h1>{slide1.title.split(' ').slice(2, 4).join(' ')}</h1>
                        <h2>{slide1.title.split(' ').slice(4, 8).join(' ')}</h2>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-normal"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2 */}
              {slide2 && (
                <div>
                  <div className="slider-banner">
                    <div className="slider-img">
                      <ul className="layout2-slide-2">
                        <li>
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
                        <h4>{slide1.title.split(' ').slice(0, 2).join(' ')}</h4>
                        <h1>{slide1.title.split(' ').slice(2, 4).join(' ')}</h1>
                        <h2>{slide1.title.split(' ').slice(4, 8).join(' ')}</h2>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-normal"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 3 */}
              {slide3 && (
                <div>
                  <div className="slider-banner">
                    <div className="slider-img">
                      <ul className="layout2-slide-3">
                        <li>
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
                        <h4>{slide1.title.split(' ').slice(0, 2).join(' ')}</h4>
                        <h1>{slide1.title.split(' ').slice(2, 4).join(' ')}</h1>
                        <h2>{slide1.title.split(' ').slice(4, 8).join(' ')}</h2>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-normal"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Slider>
          </div>

          {/* RIGHT SIDE BANNER (UNCHANGED) */}
          <div className="col-xl-2 col-sm-3 ps-0 offer-banner">
            <div className="offer-banner-img">
              <img
                src="../assets/images/layout-1/offer-banner.png"
                alt="offer-banner"
                className="img-fluid"
              />
            </div>
            <div className="banner-contain">
              <div>
                <a href="product-page(left-sidebar).html">
                  <h5>Special Offer for you</h5>
                  <div className="discount-offer">
                    <h1>50%</h1>
                    <sup>off</sup>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home_Slider
