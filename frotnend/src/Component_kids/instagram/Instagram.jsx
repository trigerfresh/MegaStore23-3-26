import React from 'react'
import Slider from 'react-slick'

// Import slick-carousel css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Instagram = () => {
  // Slider settings to match your design
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  // Image data array to keep the code clean
  const instaImages = [
    '../assets/images/kids/insta/1.jpg',
    '../assets/images/kids/insta/2.jpg',
    '../assets/images/kids/insta/3.jpg',
    '../assets/images/kids/insta/4.jpg',
    '../assets/images/kids/insta/5.jpg',
    '../assets/images/kids/insta/6.jpg',
    '../assets/images/kids/insta/7.jpg',
  ]

  return (
    <section className="instagram">
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0 position-relative">
            <div className="insta-contant1">
              {/* Wrapped in a div with overflow hidden to prevent page width increase */}
              <div style={{ overflow: 'hidden' }}>
                <Slider {...settings}>
                  {instaImages.map((img, index) => (
                    <div key={index}>
                      <div className="instagram-box">
                        <img src={img} className="img-fluid" alt="insta" />
                        <div className="insta-cover">
                          <i className="fa fa-instagram"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instagram
