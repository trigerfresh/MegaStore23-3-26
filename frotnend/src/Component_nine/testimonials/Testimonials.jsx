import React from 'react'
import Slider from 'react-slick'

// Essential CSS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
  // Hardcoded Slider Settings
  const settings = {
    arrows: false, // Matches your "no-arrow" class intent
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Shows 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <>
      <div className="title8 section-big-my-space">
        <h4>our happy clients</h4>
      </div>
      <section className="testimonial2 section-big-pb-space">
        <div className="custom-container">
          <div className="row">
            <div className="col-12 pr-0">
              <div className="testimonial-slide3 no-arrow">
                <Slider {...settings}>
                  {/* Slide 1 */}
                  <div className="testimonial-item">
                    <div className="testimonial-box">
                      <div className="img-wrapper">
                        <img
                          src="../assets/images/testimonial/1.jpg"
                          alt="testimonial"
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimonial-detail">
                        <h3>mark jecno</h3>
                        <p>
                          Lorem ipsum dolor sit consectetur adipisicing elit. At
                          consectetur cum cumque cupiditate ea esse facilis fuga
                          laudantium.
                        </p>
                        <h6>makeup artist</h6>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="testimonial-item">
                    <div className="testimonial-box">
                      <div className="img-wrapper">
                        <img
                          src="../assets/images/testimonial/2.jpg"
                          alt="testimonial"
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimonial-detail">
                        <h3>johan folden</h3>
                        <p>
                          Lorem ipsum dolor sit consectetur adipisicing elit. At
                          consectetur cum cumque cupiditate ea esse facilis fuga
                          laudantium.
                        </p>
                        <h6>makeup artist</h6>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div className="testimonial-item">
                    <div className="testimonial-box">
                      <div className="img-wrapper">
                        <img
                          src="../assets/images/testimonial/3.jpg"
                          alt="testimonial"
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimonial-detail">
                        <h3>johan deo</h3>
                        <p>
                          Lorem ipsum dolor sit consectetur adipisicing elit. At
                          consectetur cum cumque cupiditate ea esse facilis fuga
                          laudantium.
                        </p>
                        <h6>makeup artist</h6>
                      </div>
                    </div>
                  </div>

                  {/* Slide 4 */}
                  <div className="testimonial-item">
                    <div className="testimonial-box">
                      <div className="img-wrapper">
                        <img
                          src="../assets/images/testimonial/4.jpg"
                          alt="testimonial"
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimonial-detail">
                        <h3>elina folden</h3>
                        <p>
                          Lorem ipsum dolor sit consectetur adipisicing elit. At
                          consectetur cum cumque cupiditate ea esse facilis fuga
                          laudantium.
                        </p>
                        <h6>makeup artist</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
