import logo from '/assets/images/mega-store/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer1">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-main">
                  <div className="footer-box">
                    <div className="footer-title mobile-title">
                      <h5>about</h5>
                    </div>
                    <div className="footer-content">
                      <div className="footer-logo">
                        <a href="index.html">
                          <img
                            src={logo}
                            className="img-fluid mb-2"
                            alt="logo"
                          />
                        </a>
                      </div>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                      </p>
                      <ul className="paymant">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <li key={i}>
                              <a href="#">
                                <i className="fa fa-facebook p-2"></i>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  <div className="footer-box">
                    <div className="footer-title">
                      <h5>my account</h5>
                    </div>
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <a href="#">about us</a>
                        </li>
                        <li>
                          <a href="#">contact us</a>
                        </li>
                        <li>
                          <a href="#">terms &amp; conditions</a>
                        </li>
                        <li>
                          <a href="#">returns &amp; exchanges</a>
                        </li>
                        <li>
                          <a href="#">shipping &amp; delivery</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="footer-box">
                    <div className="footer-title">
                      <h5>contact us</h5>
                    </div>
                    <div className="footer-contant">
                      <ul className="contact-list">
                        <li>
                          <i className="fa fa-map-marker"></i>
                          big deal store demo store <br /> india-
                          <span>3654123</span>
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>call us:{' '}
                          <span>123-456-7898</span>
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>email us:
                          support@bigdeal.com
                        </li>
                        <li>
                          <i className="fa fa-fax"></i>fax <span>123456</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="footer-box">
                    <div className="footer-title">
                      <h5>newsletter</h5>
                    </div>
                    <div className="footer-contant">
                      <div className="newsletter-second">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter full name"
                            />
                            <span className="input-group-text">
                              <i className="ti-user"></i>
                            </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter email address"
                            />
                            <span className="input-group-text">
                              <i className="ti-email"></i>
                            </span>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <a href="#" className="btn btn-solid btn-sm">
                            submit now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="subfooter dark-footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-8 col-sm-12">
                <div className="footer-left">
                  <p>
                    2019-20 Copy Right by Themeforest Powered by pixel strap
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-4 col-sm-12">
                <div className="footer-right">
                  <ul className="sosiyal">
                    {[
                      'facebook',
                      'google-plus',
                      'twitter',
                      'instagram',
                      'rss',
                    ].map((icon, i) => (
                      <li key={i}>
                        <a href="#">
                          <i className={`fa fa-${icon}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Newsletter modal popup start */}
      <div
        className="modal fade bd-example-modal-lg blackfriday-modal theme-modal"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="rainbow">
                <span></span>
                <span></span>
              </div>
              <div className="offer-content">
                <img
                  src="../assets/images/theme-modal/black-friday.jpg"
                  className="img-fluid bg-img"
                  alt=""
                />
                <div>
                  <div>
                    <h2>
                      <span>up to </span>80%
                    </h2>
                    <div className="lable">get 30% off + free shipping</div>
                    <h3>black friday</h3>
                    <div className="timer">
                      <p id="demo4">
                        <span>
                          126<span className="timer-cal">Days</span>
                        </span>
                        <span>
                          6<span className="timer-cal">Hrs</span>
                        </span>
                        <span>
                          22<span className="timer-cal">Min</span>
                        </span>
                        <span>
                          53<span className="timer-cal">Sec</span>
                        </span>
                      </p>
                    </div>
                    <h4>Friday, 26 November 2021</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
