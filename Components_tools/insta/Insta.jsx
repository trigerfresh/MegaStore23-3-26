import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Insta = () => {
  // Slider Settings: Responsive behavior ke saath taaki mobile aur desktop dono par sahi dikhe
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  // Images Array: Code ko clean rakhne ke liye
  const instaImages = [
    { img1: '1.jpg', img2: '2.jpg' },
    { img1: '3.jpg', img2: '4.jpg' },
    { img1: '5.jpg', img2: '6.jpg' },
    { img1: '7.jpg', img2: '8.jpg' },
    { img1: '9.jpg', img2: '10.jpg' },
    { img1: '11.jpg', img2: '12.jpg' },
    { img1: '13.jpg', img2: '14.jpg' },
  ]

  return (
    <section className="instagram section-big-py-space b-g-white">
      <div className="custom-container">
        <div className="row">
          <div className="col">
            <div className="insta-contant insta-contant-inverse">
              {/* Slider Component with your original class 'slide-7' */}
              <Slider {...settings} className="slide-7 no-arrow">
                {instaImages.map((item, index) => (
                  <div key={index}>
                    <div style={{ width: '100%', display: 'inline-block' }}>
                      {/* First Image Box */}
                      <div className="instagram-box">
                        <img
                          src={`../assets/images/tools/insta/${item.img1}`}
                          className="img-fluid"
                          alt="insta"
                        />
                        <div className="insta-cover">
                          <i className="fa fa-instagram"></i>
                        </div>
                      </div>
                      {/* Second Image Box (Stacked) */}
                      <div className="instagram-box">
                        <img
                          src={`../assets/images/tools/insta/${item.img2}`}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insta
