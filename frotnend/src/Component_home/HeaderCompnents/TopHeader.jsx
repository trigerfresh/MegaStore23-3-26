import React from 'react'

const TopHeader = () => {
  // Function to trigger the script.js open function
  const handleOpenWishlist = (e) => {
    e.preventDefault()
    if (typeof window.openWishlist === 'function') {
      window.openWishlist()
    }
  }

  // Function to trigger the script.js close function
  const handleCloseWishlist = (e) => {
    if (e) e.preventDefault()
    if (typeof window.closeWishlist === 'function') {
      window.closeWishlist()
    }
  }

  const openAccount = (e) => {
    e.preventDefault()
    if (typeof window.openAccount === 'function') {
      window.openAccount()
    }
  }

  const closeAccount = (e) => {
    if (typeof window.closeAccount === 'function') {
      window.closeAccount()
    }
  }

  return (
    <>
      <div className="mobile-fix-option"></div>
      <div className="top-header2">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="top-header-left">
                <ul>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      bigdeal ecommerce always free delivery
                    </a>
                  </li>
                  <li>
                    <a href="tel:1234567890">
                      <i className="fa fa-phone"></i> Call Us: 123 - 456 - 7890
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="top-header-right">
                <ul>
                  <li>
                    {/* TRIGGER: Open Wishlist */}
                    <a href="#" onClick={handleOpenWishlist}>
                      <i className="fa fa-heart"></i> wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={openAccount}>
                      <i className="fa fa-user"></i> my profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Sidebar */}
      {/* Note: We removed the conditional className logic; script.js handles 'open-side' */}
      <div id="wishlist_side" className="add_to_cart right">
        {/* TRIGGER: Close Wishlist via Overlay */}
        <div className="overlay" onClick={handleCloseWishlist}></div>

        <div className="cart-inner">
          <div className="cart_top">
            <h3>my wishlist</h3>
            <div className="close-cart">
              {/* TRIGGER: Close Wishlist via Button */}
              <button onClick={handleCloseWishlist}>
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>

          <div className="cart_media">
            <ul className="cart_product">
              <li>
                <div className="media">
                  <img
                    alt="product"
                    className="me-3"
                    src="../assets/images/mega-store/product/1.jpg"
                  />
                  <div className="media-body">
                    <h4>women fashion shoes</h4>
                    <h6>
                      $80.00 <span>$120.00</span>
                    </h6>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="cart_total">
              <li>
                subtotal : <span>$1050.00</span>
              </li>
              <li>
                <div className="total">
                  total <span>$1050.00</span>
                </div>
              </li>
              <li>
                <div className="buttons">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="btn btn-solid btn-block btn-md"
                  >
                    view wishlist
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* My Account */}
      <div id="myAccount" className="add_to_cart right account-bar">
        <button className="overlay" onClick={closeAccount}></button>
        <div className="cart-inner">
          <div className="cart_top">
            <h3>my account</h3>
            <div className="close-cart">
              <button onClick={closeAccount}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
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

      {/* My Account Close */}
    </>
  )
}

export default TopHeader
