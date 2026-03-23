import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Instagram = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
  ]

  return (
    <section className="instagram  b-g-white section-big-py-space">
      <div className="container">
        <div className="row">
          <div className="col ">
            <div className="insta-contant insta-contant-inverse no-arrow">
              {/* ✅ REACT SLIDER */}
              <Slider {...settings} className="slide-7 no-arrow">
                {images.map((img, index) => (
                  <div key={index}>
                    <div style={{ width: '100%', display: 'inline-block' }}>
                      <div className="instagram-box">
                        <img
                          src={`../assets/images/insta/${img}`}
                          className="img-fluid"
                          alt="insta"
                        />
                        <div className="insta-cover">
                          <i className="fa fa-instagram"></i>
                        </div>
                      </div>

                      <div className="instagram-box">
                        <img
                          src={`../assets/images/insta/${images[(index + 1) % images.length]}`}
                          className="img-fluid"
                          alt="insta"
                        />
                        <div className="insta-cover">
                          <i className="fa fa-instagram"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              {/* TITLE */}
              <div className="insta-sub-contant">
                <div className="insta-title">
                  <h4>
                    <span>#</span>INSTAGRAM
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instagram
