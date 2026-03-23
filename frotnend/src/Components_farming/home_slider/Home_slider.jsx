import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick.css'

const Home_slider = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  return (
    <section
      className="farming-slide home-slide bg-size"
      style={{
        backgroundImage: 'url("../assets/images/farming/slider/bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'block',
      }}
    >
      <img
        src="../assets/images/farming/slider/bg.jpg"
        className="img-fluid bg-img"
        alt="furniture-slider"
        style={{ display: 'none' }}
      />
      <div className="slide-1 no-arrow">
        <Slider {...settings}>
          {/* Slide 1 */}
          {slide1 && (
            <div>
              <div style={{ width: '100%', display: 'inline-block' }}>
                <div className="slide-main">
                  <div className="custom-container">
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="slide-contain">
                          <div>
                            <h3>
                              {slide1.title.split(' ').slice(0, 2).join(' ')}
                            </h3>
                            <h2>
                              {slide1.title.split(' ').slice(2, 4).join(' ')}
                            </h2>
                            <h4>
                              {slide1.title.split(' ').slice(4, 9).join(' ')}
                            </h4>
                            <a href="#" className="btn btn-rounded btn-md">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="animat-block">
                    <img
                      src={slide1?.image}
                      className="img-fluid animat1"
                      alt={slide1.title}
                    />
                    <img
                      src="../assets/images/farming/slider/animat/1.png"
                      className="img-fluid animat2"
                      alt="animat"
                    />
                    <img
                      src="../assets/images/farming/slider/animat/2.png"
                      className="img-fluid animat3"
                      alt="animat"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 2 */}
          {slide2 && (
            <div>
              <div style={{ width: '100%', display: 'inline-block' }}>
                <div className="slide-main">
                  <div className="custom-container">
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="slide-contain">
                          <div>
                            <h3>
                              {slide2.title.split(' ').slice(0, 2).join(' ')}
                            </h3>
                            <h2>
                              {slide2.title.split(' ').slice(2, 4).join(' ')}
                            </h2>
                            <h4>
                              {slide2.title.split(' ').slice(4, 9).join(' ')}
                            </h4>
                            <a href="#" className="btn btn-rounded btn-md">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="animat-block">
                    <img
                      src={slide2?.image}
                      className="img-fluid animat1"
                      alt={slide2.title}
                    />
                    <img
                      src="../assets/images/farming/slider/animat/1.png"
                      className="img-fluid animat2"
                      alt="animat"
                    />
                    <img
                      src="../assets/images/farming/slider/animat/2.png"
                      className="img-fluid animat3"
                      alt="animat"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Slide 3 */}
          {slide3 && (
            <div>
              <div style={{ width: '100%', display: 'inline-block' }}>
                <div className="slide-main">
                  <div className="custom-container">
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="slide-contain">
                          <div>
                            <h3>
                              {' '}
                              {slide3.title.split(' ').slice(0, 2).join(' ')}
                            </h3>
                            <h2>
                              {' '}
                              {slide2.title.split(' ').slice(2, 4).join(' ')}
                            </h2>
                            <h4>
                              {' '}
                              {slide2.title.split(' ').slice(4, 9).join(' ')}
                            </h4>
                            <a href="#" className="btn btn-rounded btn-md">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="animat-block">
                    <img
                      src={slide3.image}
                      className="img-fluid animat1"
                      alt={slide3?.title}
                    />
                    <img
                      src="../assets/images/farming/slider/animat/1.png"
                      className="img-fluid animat2"
                      alt="animat"
                    />
                    <img
                      src="../assets/images/farming/slider/animat/2.png"
                      className="img-fluid animat3"
                      alt="animat"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </section>
  )
}

export default Home_slider
