import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <div className="title8 section-big-pt-space">
        <h4>our team</h4>
      </div>

      <section className="team1 section-big-mb-space">
        <div className="custom-container">
          <div className="row">
            <div className="col-12 pr-0">
              <Slider {...settings} className="team-slide4 no-arrow">
                {/* Team 1 */}
                <div>
                  <div className="team-box">
                    <div className="img-wrraper">
                      <img
                        src="../assets/images/grocery/team/1.jpg"
                        alt="team"
                        className="img-fluid"
                      />
                    </div>
                    <div className="team-detail">
                      <h3>mark jecno</h3>
                      <h5>mark jecno</h5>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat quisquam optio quidem, quasi consectetur.
                      </p>
                      <ul>
                        <li className="fb-color">
                          <a href="#" tabindex="-1">
                            {' '}
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li className="twt-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li className="print-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Team 2 */}
                <div>
                  <div className="team-box">
                    <div className="img-wrraper">
                      <img
                        src="../assets/images/grocery/team/2.jpg"
                        alt="team"
                        className="img-fluid"
                      />
                    </div>
                    <div className="team-detail">
                      <h3>mark jecno</h3>
                      <h5>mark jecno</h5>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat quisquam optio quidem, quasi consectetur.
                      </p>
                      <ul>
                        <li className="fb-color">
                          <a href="#" tabindex="-1">
                            {' '}
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li className="twt-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li className="print-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Team 3 */}
                <div>
                  <div className="team-box">
                    <div className="img-wrraper">
                      <img
                        src="../assets/images/grocery/team/3.jpg"
                        alt="team"
                        className="img-fluid"
                      />
                    </div>
                    <div className="team-detail">
                      <h3>mark jecno</h3>
                      <h5>mark jecno</h5>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat quisquam optio quidem, quasi consectetur.
                      </p>
                      <ul>
                        <li className="fb-color">
                          <a href="#" tabindex="-1">
                            {' '}
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li className="twt-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li className="print-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Team 4 */}
                <div>
                  <div className="team-box">
                    <div className="img-wrraper">
                      <img
                        src="../assets/images/grocery/team/4.jpg"
                        alt="team"
                        className="img-fluid"
                      />
                    </div>
                    <div className="team-detail">
                      <h3>mark jecno</h3>
                      <h5>mark jecno</h5>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat quisquam optio quidem, quasi consectetur.
                      </p>
                      <ul>
                        <li className="fb-color">
                          <a href="#" tabindex="-1">
                            {' '}
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li className="twt-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li className="print-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Team 5 */}
                <div>
                  <div className="team-box">
                    <div className="img-wrraper">
                      <img
                        src="../assets/images/grocery/team/5.jpg"
                        alt="team"
                        className="img-fluid"
                      />
                    </div>
                    <div className="team-detail">
                      <h3>mark jecno</h3>
                      <h5>mark jecno</h5>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat quisquam optio quidem, quasi consectetur.
                      </p>
                      <ul>
                        <li className="fb-color">
                          <a href="#" tabindex="-1">
                            {' '}
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li className="twt-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li className="print-color">
                          {' '}
                          <a href="#" tabindex="-1">
                            <i className="ti-pinterest"></i>
                          </a>
                        </li>
                      </ul>
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

export default Team
