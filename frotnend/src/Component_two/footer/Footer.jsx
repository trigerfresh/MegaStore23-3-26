import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer1 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-main">
                <div className="footer-box">
                  <div className="footer-title mobile-title">
                    <h5>about</h5>
                  </div>
                  <div className="footer-contant">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img
                          src="../assets/images/layout-1/logo/logo.png"
                          className="img-fluid"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece.
                    </p>
                    <ul className="sosiyal">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-rss"></i>
                        </a>
                      </li>
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
                    <h5>quick link</h5>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">store location</a>
                      </li>
                      <li>
                        <a href="#"> my account</a>
                      </li>
                      <li>
                        <a href="#"> orders tracking</a>
                      </li>
                      <li>
                        <a href="#"> size guide</a>
                      </li>
                      <li>
                        <a href="#">FAQ </a>
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
                        <i className="fa fa-map-marker"></i>big deal store demo
                        store <br /> india-<span>3654123</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter footer-border">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-8 col-sm-12">
              <div className="footer-left">
                <p>2019-20 Copy Right by Themeforest Powered by pixel strap</p>
              </div>
            </div>
            <div className="col-xl-6 col-md-4 col-sm-12">
              <div className="footer-right">
                <ul className="payment">
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/layout-1/pay/1.png"
                        className="img-fluid"
                        alt="pay"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/layout-1/pay/2.png"
                        className="img-fluid"
                        alt="pay"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/layout-1/pay/3.png"
                        className="img-fluid"
                        alt="pay"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/layout-1/pay/4.png"
                        className="img-fluid"
                        alt="pay"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/layout-1/pay/5.png"
                        className="img-fluid"
                        alt="pay"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
