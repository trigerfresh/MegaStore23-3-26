import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FurnitureSlider = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  }

  return (
    <section className="furniture-slide">
      <Slider {...settings} className="slide-1">
        {/* ================= Slide 1 ================= */}

        <div>
          <div
            className="slide-main bg-size"
            style={{
              backgroundImage: `url(${slide1?.image || '/assets/images/furniture1/slider/1.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className="custom-container">
              <div className="row">
                <div className="col-12 p-0">
                  <div className="slide-contain">
                    <div>
                      <h2>{slide1?.title.split(' ').slice(0, 2).join(' ')}</h2>
                      <h3>
                        {slide1?.title.split(' ').slice(2, 4).join(' & ')}
                      </h3>
                      <p>{slide1?.title.split(' ').slice(4, 9).join(' ')}</p>

                      <a
                        href="product-page(left-sidebar).html"
                        className="btn btn-rounded btn-md"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Slide 2 ================= */}

        <div>
          <div
            className="slide-main bg-size"
            style={{
              backgroundImage: `url(${slide2?.image || '/assets/images/furniture1/slider/2.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className="custom-container">
              <div className="row">
                <div className="col-12 p-0">
                  <div className="slide-contain">
                    <div>
                      <h2>{slide1?.title.split(' ').slice(0, 2).join(' ')}</h2>
                      <h3>
                        {slide1?.title.split(' ').slice(2, 4).join(' & ')}
                      </h3>
                      <p>{slide1?.title.split(' ').slice(4, 9).join(' ')}</p>

                      <a
                        href="product-page(left-sidebar).html"
                        className="btn btn-rounded btn-md"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Slide 3 ================= */}

        <div>
          <div
            className="slide-main bg-size"
            style={{
              backgroundImage: `url(${slide3?.image || '/assets/images/furniture1/slider/3.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className="custom-container">
              <div className="row">
                <div className="col-12 p-0">
                  <div className="slide-contain">
                    <div>
                      <h2>{slide1?.title.split(' ').slice(0, 2).join(' ')}</h2>
                      <h3>
                        {slide1?.title.split(' ').slice(2, 4).join(' & ')}
                      </h3>
                      <p>{slide1?.title.split(' ').slice(4, 9).join(' ')}</p>

                      <a
                        href="product-page(left-sidebar).html"
                        className="btn btn-rounded btn-md"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}

export default FurnitureSlider
