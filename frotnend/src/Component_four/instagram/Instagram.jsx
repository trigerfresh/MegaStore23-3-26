import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Instagram = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  return (
    <section className="instagram section-big-py-space">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="insta-contant2">
              {/* ✅ React Slick Slider */}
              <Slider {...settings} className="slide-7 no-arrow">
                {/* Slide 1 */}
                <div>
                  <div className="instagram-box">
                    <img
                      src="../assets/images/insta/1.jpg"
                      className="img-fluid"
                      alt="insta"
                    />
                    <div className="insta-cover">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div>
                  <div className="instagram-box">
                    <img
                      src="../assets/images/insta/3.jpg"
                      className="img-fluid"
                      alt="insta"
                    />
                    <div className="insta-cover">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div>
                  <div className="instagram-box">
                    <img
                      src="../assets/images/insta/5.jpg"
                      className="img-fluid"
                      alt="insta"
                    />
                    <div className="insta-cover">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </div>
                </div>

                {/* Slide 4 */}
                <div>
                  <div className="instagram-box">
                    <img
                      src="../assets/images/insta/7.jpg"
                      className="img-fluid"
                      alt="insta"
                    />
                    <div className="insta-cover">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </div>
                </div>

                {/* Slide 5 */}
                <div>
                  <div className="instagram-box">
                    <img
                      src="../assets/images/insta/9.jpg"
                      className="img-fluid"
                      alt="insta"
                    />
                    <div className="insta-cover">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </div>
                </div>

                {/* Slide 6 */}
                <div>
                  <div className="instagram-box">
                    <img
                      src="../assets/images/insta/11.jpg"
                      className="img-fluid"
                      alt="insta"
                    />
                    <div className="insta-cover">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </div>
                </div>

                {/* Slide 7 */}
                <div>
                  <div className="instagram-box">
                    <img
                      src="../assets/images/insta/13.jpg"
                      className="img-fluid"
                      alt="insta"
                    />
                    <div className="insta-cover">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </div>
                </div>
              </Slider>

              <div className="insta-sub-contant2">
                <div className="insta-title">
                  <h4>
                    <span>#</span>INSTAGRAM
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instagram
