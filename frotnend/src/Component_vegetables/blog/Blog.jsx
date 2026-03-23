import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
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
      <div className="title4 ">
        <h4>
          latest <span>blog</span>
        </h4>
      </div>

      <section className="blog section-big-mb-space mb--5 ">
        <div className="custom-container">
          <div className="row">
            <div className="col pr-0">
              {/* ✅ React Slick Slider */}
              <Slider {...settings} className="blog-slide-4 no-arrow">
                {/* Slide 1 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/layout-6/blog/1.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="blog-details-2">
                      <a href="blog-details.html">
                        <h4>Proin sit amet libero</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/layout-6/blog/2.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="blog-details-2">
                      <a href="blog-details.html">
                        <h4>We know that buying items</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/layout-6/blog/3.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="blog-details-2">
                      <a href="blog-details.html">
                        <h4>Proin sit amet libero</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slide 4 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/layout-6/blog/4.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="blog-details-2">
                      <a href="blog-details.html">
                        <h4>Latest News Post</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
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
