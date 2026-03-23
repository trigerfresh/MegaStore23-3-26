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
    autoplay: true,
    autoplaySpeed: 3000,
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
      <div className="title8  section-big-pt-space ">
        <h4>latest blog</h4>
      </div>

      <section className="blog  section-big-pb-space">
        <div className="custom-container">
          <div className="row">
            <div className="col pr-0">
              {/* 🔥 Slider Added Here */}
              <Slider {...settings} className="blog-slide-4 no-arrow">
                {/* KEEP YOUR EXISTING BLOG ITEMS ONLY (REMOVE slick-track, slick-slide, slick-cloned wrappers) */}

                {/* Blog 1 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/grocery/blog/1.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="blog-details-2 text-center">
                      <a href="blog-details.html">
                        <h4>This Is Why Spices.</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend a massa rhoncus gravida.
                      </p>
                      <a
                        href="blog-details.html"
                        className="btn btn-rounded btn-xs"
                      >
                        read more
                      </a>
                    </div>
                    <div className="blog-label1">
                      27 <br /> nov
                    </div>
                  </div>
                </div>

                {/* Blog 2 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/grocery/blog/2.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="blog-details-2 text-center">
                      <a href="blog-details.html">
                        <h4>Seven Tips To Avoid.</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend a massa rhoncus gravida.
                      </p>
                      <a
                        href="blog-details.html"
                        className="btn btn-rounded btn-xs"
                      >
                        read more
                      </a>
                    </div>
                    <div className="blog-label1">
                      27 <br /> nov
                    </div>
                  </div>
                </div>

                {/* Blog 3 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/grocery/blog/3.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="blog-details-2 text-center">
                      <a href="blog-details.html">
                        <h4>Ten Preparations Should</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend a massa rhoncus gravida.
                      </p>
                      <a
                        href="blog-details.html"
                        className="btn btn-rounded btn-xs"
                      >
                        read more
                      </a>
                    </div>
                    <div className="blog-label1">
                      27 <br /> nov
                    </div>
                  </div>
                </div>

                {/* Blog 4 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/grocery/blog/4.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="blog-details-2 text-center">
                      <a href="blog-details.html">
                        <h4>Seven Outrageous Ideas.</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend a massa rhoncus gravida.
                      </p>
                      <a
                        href="blog-details.html"
                        className="btn btn-rounded btn-xs"
                      >
                        read more
                      </a>
                    </div>
                    <div className="blog-label1">
                      27 <br /> nov
                    </div>
                  </div>
                </div>

                {/* Blog 5 */}
                <div>
                  <div className="blog-contain">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="../assets/images/grocery/blog/4.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="blog-details-2 text-center">
                      <a href="blog-details.html">
                        <h4>Seven Outrageous Ideas.</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend a massa rhoncus gravida.
                      </p>
                      <a
                        href="blog-details.html"
                        className="btn btn-rounded btn-xs"
                      >
                        read more
                      </a>
                    </div>
                    <div className="blog-label1">
                      27 <br /> nov
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
