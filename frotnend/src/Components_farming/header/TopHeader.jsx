import React from 'react'
import { Link } from 'react-router-dom'

const TopHeader = () => {
  return (
    <div className="top-header2">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="top-header-left">
              <ul>
                <li>
                  <a href="#">bigdeal ecommerce always free delevery</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone"></i>Call Us: 123 - 456 - 7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="top-header-right">
              <ul>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault()
                      openWishlist()
                    }}
                  >
                    <i className="fa fa-heart"></i> wishlist
                  </Link>
                </li>
                <li onClick={() => openAccount()}>
                  <Link>
                    <i className="fa fa-user"></i> my profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist sidebar start */}
      <div id="wishlist_side" className="add_to_cart right ">
        <Link
          to="#"
          className="overlay"
          onClick={(e) => {
            e.preventDefault()
            closeWishlist()
          }}
        ></Link>
        <div className="cart-inner">
          <div className="cart_top">
            <h3>my wishlist</h3>
            <div className="close-cart">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault()
                  closeWishlist()
                }}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="cart_media">
            <ul className="cart_product">
              <li>
                <div className="media">
                  <a href="product-page(left-sidebar).html">
                    <img
                      alt="megastore1"
                      className="me-3"
                      src="../assets/images/farming/product/1.jpg"
                    />
                  </a>
                  <div className="media-body">
                    <a href="product-page(left-sidebar).html">
                      <h4>redmi not 3</h4>
                    </a>
                    <h6>
                      $80.00 <span>$120.00</span>
                    </h6>
                    <div className="addit-box">
                      <div className="qty-box">
                        <div className="input-group">
                          <button className="qty-minus"></button>
                          <input
                            className="qty-adj form-control"
                            type="number"
                            value="1"
                          />
                          <button className="qty-plus"></button>
                        </div>
                      </div>
                      <div className="pro-add">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <i data-feather="edit"></i>
                        </a>
                        <a href="#">
                          <i data-feather="trash-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <a href="product-page(left-sidebar).html">
                    <img
                      alt="megastore1"
                      className="me-3"
                      src="../assets/images/farming/product/2.jpg"
                    />
                  </a>
                  <div className="media-body">
                    <a href="product-page(left-sidebar).html">
                      <h4>Double Door Refrigerator</h4>
                    </a>
                    <h6>
                      $80.00 <span>$120.00</span>
                    </h6>
                    <div className="addit-box">
                      <div className="qty-box">
                        <div className="input-group">
                          <button className="qty-minus"></button>
                          <input
                            className="qty-adj form-control"
                            type="number"
                            value="1"
                          />
                          <button className="qty-plus"></button>
                        </div>
                      </div>
                      <div className="pro-add">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <i data-feather="edit"></i>
                        </a>
                        <a href="#">
                          <i data-feather="trash-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <a href="product-page(left-sidebar).html">
                    <img
                      alt="megastore1"
                      className="me-3"
                      src="../assets/images/farming/product/3.jpg"
                    />
                  </a>
                  <div className="media-body">
                    <a href="product-page(left-sidebar).html">
                      <h4>woman hande bag</h4>
                    </a>
                    <h6>
                      $80.00 <span>$120.00</span>
                    </h6>
                    <div className="addit-box">
                      <div className="qty-box">
                        <div className="input-group">
                          <button className="qty-minus"></button>
                          <input
                            className="qty-adj form-control"
                            type="number"
                            value="1"
                          />
                          <button className="qty-plus"></button>
                        </div>
                      </div>
                      <div className="pro-add">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <i data-feather="edit"></i>
                        </a>
                        <a href="#">
                          <i data-feather="trash-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="cart_total">
              <li>
                subtotal : <span>$1050.00</span>
              </li>
              <li>
                shpping <span>free</span>
              </li>
              <li>
                taxes <span>$0.00</span>
              </li>
              <li>
                <div className="total">
                  total<span>$1050.00</span>
                </div>
              </li>
              <li>
                <div className="buttons">
                  <a
                    href="wishlist.html"
                    className="btn btn-solid btn-block btn-md"
                  >
                    view wislist
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Wishlist sidebar end */}

      {/* Account sidebar start */}
      <div id="myAccount" className="add_to_cart right account-bar">
        <Link className="overlay" onClick={() => closeAccount()}></Link>
        <div className="cart-inner">
          <div className="cart_top">
            <h3>my account</h3>
            <div className="close-cart">
              <Link onClick={() => closeAccount()}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <form className="theme-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="review">Password</label>
              <input
                type="password"
                className="form-control"
                id="review"
                placeholder="Enter your password"
                required=""
              />
            </div>
            <div className="form-group">
              <a href="#" className="btn btn-solid btn-md btn-block ">
                Login
              </a>
            </div>
            <div className="accout-fwd">
              <a href="forget-pwd.html" className="d-block">
                <h5>forget password?</h5>
              </a>
              <a href="register.html" className="d-block">
                <h6>
                  you have no account ?<span>signup now</span>
                </h6>
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* Account sidebar end */}
    </div>
  )
}

export default TopHeader
