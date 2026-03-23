import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

// Import slick-carousel css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Kids_slide = () => {
  // Separate state for each slide
  const [slide1, setSlide1] = useState(null)
  const [slide2, setSlide2] = useState(null)
  const [slide3, setSlide3] = useState(null)

  useEffect(() => {
    // Fetch first slide
    fetch('http://localhost:4000/api/banners')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.formattedBanners.length >= 3) {
          setSlide1(data.formattedBanners[0])
          setSlide2(data.formattedBanners[1])
          setSlide3(data.formattedBanners[2])
        }
      })
      .catch((err) => console.error('Error fetching banners:', err))
  }, [])

  // Slider settings
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <section className="kids-slide">
      <div className="slide-1 no-arrow">
        <Slider {...settings}>
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
                  alt="kids-slider"
                  style={{ display: 'none' }}
                />
                <div className="custom-container">
                  <div className="row">
                    <div className="col-12 p-0">
                      <div className="slide-contain">
                        <div>
                          {/* Split title for h4, h2, h3, p */}
                          <h4>
                            {slide1.title.split(' ').slice(0, 2).join(' ')}
                          </h4>
                          <h2>
                            {slide1.title.split(' ').slice(2, 4).join(' & ')}
                          </h2>
                          <h3>
                            {slide1.title.split(' ').slice(4, 9).join(' ')}
                          </h3>
                          <p>{slide1.title.split(' ').slice(9).join(' ')}</p>
                          <a href="#" className="btn btn-rounded">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animat-block">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <img
                      key={num}
                      src={`../assets/images/kids/slider/animat/${num}.png`}
                      className={`img-fluid animat${num}`}
                      alt="animation"
                    />
                  ))}
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
                  alt="kids-slider"
                  style={{ display: 'none' }}
                />
                <div className="custom-container">
                  <div className="row">
                    <div className="col-12 p-0">
                      <div className="slide-contain">
                        <div>
                          <h4>
                            {slide2.title.split(' ').slice(0, 2).join(' ')}
                          </h4>
                          <h2>
                            {slide2.title.split(' ').slice(2, 4).join(' & ')}
                          </h2>
                          <h3>
                            {slide2.title.split(' ').slice(4, 9).join(' ')}
                          </h3>
                          <p>{slide2.title.split(' ').slice(9).join(' ')}</p>
                          <a href="#" className="btn btn-rounded">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animat-block">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <img
                      key={num}
                      src={`../assets/images/kids/slider/animat/${num}.png`}
                      className={`img-fluid animat${num}`}
                      alt="animation"
                    />
                  ))}
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
                  alt="kids-slider"
                  style={{ display: 'none' }}
                />
                <div className="custom-container">
                  <div className="row">
                    <div className="col-12 p-0">
                      <div className="slide-contain">
                        <div>
                          <h4>
                            {slide3.title.split(' ').slice(0, 2).join(' ')}
                          </h4>
                          <h2>
                            {slide3.title.split(' ').slice(2, 4).join(' & ')}
                          </h2>
                          <h3>
                            {slide3.title.split(' ').slice(4, 9).join(' ')}
                          </h3>
                          <p>{slide3.title.split(' ').slice(9).join(' ')}</p>
                          <a href="#" className="btn btn-rounded">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animat-block">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <img
                      key={num}
                      src={`../assets/images/kids/slider/animat/${num}.png`}
                      className={`img-fluid animat${num}`}
                      alt="animation"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </section>
  )
}

export default Kids_slide
