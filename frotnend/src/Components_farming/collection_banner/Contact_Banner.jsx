import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Contact_Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  const brands = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
  ]

  return (
    <section className="contact-banner2 section-mb-space">
      <div className="custom-container">
        <div className="row subscribe-block1">
          {/* LEFT */}
          <div className="col-xl-4 col-md-6">
            <div className="subscribe-box">
              <div>
                <h2>Sign Up For Our Newsletter</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                />
                <a href="#" className="btn btn-solid btn-md">
                  subscribe now
                </a>
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="col-xl-4 col-md-6">
            <div className="contact-bannerbox">
              <div>
                <h2>if you have any question please call us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul>
                  <li>
                    <h3>123-456-7890</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="col-xl-4">
            <div className="brand-third">
              <Slider {...settings} className="brand-slide3">
                {brands.map((img, index) => (
                  <div key={index}>
                    <div className="brand-box">
                      <img
                        src={`../assets/images/mega-store/brand/${img}`}
                        alt="brand"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact_Banner
