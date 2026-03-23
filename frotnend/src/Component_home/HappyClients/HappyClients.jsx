import React from 'react'
import Slider from 'react-slick'
// Note: Make sure to import slick-carousel css in your App.js or index.js
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const HappyClients = () => {
  // Slider settings configuration
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  // Data array to avoid repeating large blocks of HTML
  const testimonials = [
    { id: 1, name: 'mark jecno', role: 'designer', img: '1.jpg' },
    { id: 2, name: 'johan deo', role: 'designer', img: '2.jpg' },
    { id: 3, name: 'elthan markote', role: 'designer', img: '3.jpg' },
    { id: 4, name: 'elina folden', role: 'designer', img: '4.jpg' },
  ]

  return (
    <>
      <div className="title8 section-big-my-space ">
        <h4>our happy clients</h4>
      </div>

      <section className="testimonial3 section-big-pb-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pr-0">
              <div className="testimonial-slide3 no-arrow">
                {/* Adding the Slider component */}
                <Slider {...settings}>
                  {testimonials.map((item) => (
                    <div key={item.id}>
                      <div className="testimonial-box">
                        <div className="testimonial-detail">
                          <h3>{item.name}</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. At consectetur cum cumque cupiditate ea esse
                            facilis fuga laudantium, nisi obcaecati perspiciatis
                            quam quas quasi quis repudiante suscipit temporibus
                            vel vitae.
                          </p>
                          <h6>{item.role}</h6>
                        </div>
                        <div className="img-wrapper">
                          <img
                            src={`../assets/images/testimonial/${item.img}`}
                            alt="testimonial"
                            className="img-fluid"
                          />
                        </div>
                        <ul>
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i className="fa fa-star"></i>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HappyClients
