import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home_Banner = () => {
  const [slide1, setSlide1] = useState(null)
  const [slide2, setSlide2] = useState(null)
  const [slide3, setSlide3] = useState(null)

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/banners/all')
        const data = await res.json()

        if (data.success && data.formattedBanners) {
          setSlide1(data.formattedBanners[0])
          setSlide2(data.formattedBanners[1])
          setSlide3(data.formattedBanners[2])
        }
      } catch (err) {
        console.error('Error fetching banners:', err)
      }
    }
    fetchBanners()
  }, [])

  const renderTitle = (title) => {
    if (!title) return null
    const words = title.split(' ')
    const mid = Math.ceil(words.length / 2)
    return (
      <>
        <h3>{words.slice(0, 4).join(' ')}</h3>
        <h2>{words.slice(5, mid + 1).join(' ')}</h2>
        <h4>{words.slice(mid).join(' ')}</h4>
      </>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  }

  return (
    <section className="cosmetic-slide home-slide">
      <div className="slide-1 no-arrow">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <div
              className="slide-main bg-size pt-3"
              style={{
                backgroundImage: `url(${slide1?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                display: 'block',
              }}
            >
              <img
                src={slide1?.image}
                className="img-fluid bg-img"
                alt={slide1?.title}
                style={{ display: 'none' }}
              />
              <div className="custom-container">
                <div className="row">
                  <div className="col-12 p-0">
                    <div className="slide-contain">
                      <div>
                        <h3>{renderTitle(slide1?.title)}</h3>
                        {/* <h2>cosmetics store</h2>
                        <h4>Biggest Offers On This Season</h4> */}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-solid"
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

          {/* Slide 2 */}
          <div>
            <div
              className="slide-main bg-size"
              style={{
                backgroundImage: `url(${slide2?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                display: 'block',
              }}
            >
              <img
                src={slide2?.image}
                className="img-fluid bg-img"
                alt={slide2?.title}
                style={{ display: 'none' }}
              />
              <div className="custom-container">
                <div className="row">
                  <div className="col-12 p-0">
                    <div className="slide-contain">
                      <div>
                        {renderTitle(slide2?.title)}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-solid"
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

          {/* Slide 3 */}
          <div>
            <div
              className="slide-main bg-size"
              style={{
                backgroundImage: `url(${slide3?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                display: 'block',
              }}
            >
              <img
                src={slide3?.image}
                className="img-fluid bg-img"
                alt="slider"
                style={{ display: 'none' }}
              />
              <div className="custom-container">
                <div className="row">
                  <div className="col-12 p-0">
                    <div className="slide-contain">
                      <div>
                        {renderTitle(slide3?.title)}

                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-solid"
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
      </div>
    </section>
  )
}

export default Home_Banner
