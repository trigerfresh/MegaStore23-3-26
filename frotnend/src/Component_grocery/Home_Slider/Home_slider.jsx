import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home_slider = () => {
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
      .catch((err) => console.error('Error fetching banners: ', err))
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  }

  return (
    <section className="section-pb-space grocery-slide bg-white home-slide">
      <div className="custom-container">
        <div className="row grocery-slide-block">
          <div className="col-md-12">
            <Slider {...settings} className="slide-1 no-arrow">
              {/* Slide 1 */}
              {slide1 && (
                <div>
                  <div
                    className="slide-main bg-size"
                    style={{
                      backgroundImage: `url("${slide1.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      display: 'block',
                    }}
                  >
                    <img
                      src={slide1.image}
                      className="img-fluid bg-img"
                      alt="grocery-slider"
                      style={{ display: 'none' }}
                    />
                    <div className="animat-block">
                      <img
                        src={slide1.image}
                        className="img-fluid animat1"
                        alt="grocery-slider"
                      />
                    </div>
                    <div className="slide-contain">
                      <div>
                        <h3>{slide1.title.split(' ').slice(0, 2).join(' ')}</h3>
                        <h2>
                          {slide1.title.split(' ').slice(2, 4).join(' & ')}
                        </h2>
                        <h4>{slide1.title.split(' ').slice(4).join(' ')}</h4>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-md btn-rounded"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 2 */}
              {slide2 && (
                <div>
                  <div
                    className="slide-main bg-size"
                    style={{
                      backgroundImage: `url("${slide2.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      display: 'block',
                    }}
                  >
                    <img
                      src={slide2.image}
                      className="img-fluid bg-img"
                      alt="grocery-slider"
                      style={{ display: 'none' }}
                    />
                    <div className="animat-block">
                      <img
                        src={slide2.image}
                        className="img-fluid animat1"
                        alt="grocery-slider"
                      />
                    </div>
                    <div className="slide-contain">
                      <div>
                        <h3>{slide1.title.split(' ').slice(0, 2).join(' ')}</h3>
                        <h2>
                          {slide1.title.split(' ').slice(2, 4).join(' & ')}
                        </h2>
                        <h4>{slide1.title.split(' ').slice(4).join(' ')}</h4>

                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-md btn-rounded"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 3 */}
              {slide3 && (
                <div>
                  <div
                    className="slide-main bg-size"
                    style={{
                      backgroundImage: `url("${slide3.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      display: 'block',
                    }}
                  >
                    <img
                      src={slide3.image}
                      className="img-fluid bg-img"
                      alt="grocery-slider"
                      style={{ display: 'none' }}
                    />
                    <div className="animat-block">
                      <img
                        src={slide3.image}
                        className="img-fluid animat1"
                        alt="grocery-slider"
                      />
                    </div>
                    <div className="slide-contain">
                      <div>
                        <h3>{slide1.title.split(' ').slice(0, 2).join(' ')}</h3>
                        <h2>
                          {slide1.title.split(' ').slice(2, 4).join(' & ')}
                        </h2>
                        <h4>{slide1.title.split(' ').slice(4).join(' ')}</h4>

                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-md btn-rounded"
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
        </div>
      </div>
    </section>
  )
}

export default Home_slider
