import React from 'react'
import Slider from 'react-slick'
// Slick carousel styles import karna na bhoolein (agar aapke main CSS mein pehle se nahi hain)
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Aapke buttons ko active karne ke liye
    className: 'slide-1 no-arrow', // Aapki original classes
  }

  return (
    <section
      className="testimonial banner-style1 bg-size"
      style={{
        backgroundImage: 'url("../assets/images/tools/testimonial/1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'block',
      }}
    >
      <img
        src="../assets/images/tools/testimonial/1.jpg"
        alt="tools"
        className="img-fluid bg-img"
        style={{ display: 'none' }}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* React Slick Slider implementation */}
            <Slider {...settings}>
              {/* Slide 1 */}
              <div>
                <div style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testimonial-contain">
                    <div className="media">
                      <div className="testimonial-img">
                        <img
                          src="../assets/images/testimonial/1.jpg"
                          className="img-fluid rounded-circle"
                          alt="testimonial"
                        />
                      </div>
                      <div className="media-body">
                        <h5>mark jecno</h5>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div>
                <div style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testimonial-contain">
                    <div className="media">
                      <div className="testimonial-img">
                        <img
                          src="../assets/images/testimonial/2.jpg"
                          className="img-fluid rounded-circle"
                          alt="testimonial"
                        />
                      </div>
                      <div className="media-body">
                        <h5>mark jecno</h5>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div>
                <div style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testimonial-contain">
                    <div className="media">
                      <div className="testimonial-img">
                        <img
                          src="../assets/images/testimonial/3.jpg"
                          className="img-fluid rounded-circle"
                          alt="testimonial"
                        />
                      </div>
                      <div className="media-body">
                        <h5>mark jecno</h5>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
