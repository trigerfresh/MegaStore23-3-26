import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testinmonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }

  return (
    <section
      className="testimonial block bg-size"
      style={{
        backgroundImage: 'url("../assets/images/grocery/testimonial/1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'block',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings} className="slide-1 no-arrow">
              {/* Slide 1 */}
              <div>
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
                        random text. It has roots in classical Latin literature
                        from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div>
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
                        random text. It has roots in classical Latin literature
                        from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div>
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
                        random text. It has roots in classical Latin literature
                        from 45 BC, making it over 2000 years old.
                      </p>
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

export default Testinmonials
