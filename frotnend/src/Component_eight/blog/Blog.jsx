import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Blog = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <>
      <div className="title8 section-big-my-space">
        <h4>
          our <span>letest blog</span>
        </h4>
      </div>

      <section className="blog section-big-pb-space">
        <div className="custom-container">
          <div className="row">
            <div className="col-12 pr-0">
              {/* Slider Added Here */}
              <Slider {...settings} className="blog-slide-4 no-arrow">
                {/* Slide 1 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/furniture1/blog/1.jpg"
                          alt="blog"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="blog-details">
                      <a href="blog-details.html">
                        <h4>This Year Will Be The Year of Furniture.</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend a massa rhoncus gravida.
                      </p>
                      <span>
                        <a href="javascript:void(0)">read more</a>
                      </span>
                    </div>
                    <div className="blog-label">
                      <p>25 july 2018</p>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/furniture1/blog/4.jpg"
                          alt="blog"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="blog-details">
                      <a href="blog-details.html">
                        <h4>The Modern Rules Of Furniture.</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend a massa rhoncus gravida.
                      </p>
                      <span>
                        <a href="javascript:void(0)">read more</a>
                      </span>
                    </div>
                    <div className="blog-label">
                      <p>25 july 2018</p>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/furniture1/blog/2.jpg"
                          alt="blog"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="blog-details">
                      <a href="blog-details.html">
                        <h4>Why Is Furniture So Famous?</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend a massa rhoncus gravida.
                      </p>
                      <span>
                        <a href="javascript:void(0)">read more</a>
                      </span>
                    </div>
                    <div className="blog-label">
                      <p>25 july 2018</p>
                    </div>
                  </div>
                </div>

                {/* Slide 4 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/furniture1/blog/3.jpg"
                          alt="blog"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="blog-details">
                      <a href="blog-details.html">
                        <h4>How Furniture Can Increase Your Profit!</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend a massa rhoncus gravida.
                      </p>
                      <span>
                        <a href="javascript:void(0)">read more</a>
                      </span>
                    </div>
                    <div className="blog-label">
                      <p>25 july 2018</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
