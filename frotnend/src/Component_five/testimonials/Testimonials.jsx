import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Set to false because we are using your hardcoded buttons
  }

  return (
    <section className="testimonial testimonial-inverse section-mb-space">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="slide-1 no-arrow slick-initialized slick-slider">
              {/* Previous Button - Linked to Slider */}
              <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style={{ display: 'inline-block' }}
                onClick={() => sliderRef.current.slickPrev()}
              >
                Previous
              </button>

              <div className="slick-list draggable">
                <Slider ref={sliderRef} {...settings}>
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
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia.
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
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia.
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
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>

              {/* Next Button - Linked to Slider */}
              <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style={{ display: 'inline-block' }}
                onClick={() => sliderRef.current.slickNext()}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
