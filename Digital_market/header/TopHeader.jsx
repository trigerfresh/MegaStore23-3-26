import React, { useEffect } from 'react'

const TopHeader = () => {
  useEffect(() => {
    const $ = window.$

    if (!$) return

    $('.language-dropdown-open').slideUp()
    $('.curroncy-dropdown-open').slideUp()

    const handleLanguage = () => {
      $('.language-dropdown-open').slideToggle()
    }
    const handleCurroncy = () => {
      $('.curroncy-dropdown-open').slideToggle()
    }

    $('.language-dropdown-click').on('click', handleLanguage)
    $('.curroncy-dropdown-click').on('click', handleCurroncy)

    // cleanup
    return () => {
      $('.language-dropdown-click').off('click', handleLanguage)
      $('.curroncy-dropdown-click').off('click', handleCurroncy)
    }
  }, [])
  return (
    <div className="top-header">
      <div className="custom-container">
        <div className="row">
          <div className="col-xl-5 col-md-7 col-sm-6">
            <div className="top-header-left">
              <div className="shpping-order">
                <h6>free shipping on order over $99 </h6>
              </div>
              <div className="app-link">
                <h6>Download aap</h6>
                <ul>
                  <li>
                    <a>
                      <i className="fa fa-apple"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-android"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-windows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-5 col-sm-6">
            <div className="top-header-right">
              <div className="top-menu-block">
                <ul>
                  <li>
                    <a href="#">gift cards</a>
                  </li>
                  <li>
                    <a href="#">Notifications</a>
                  </li>
                  <li>
                    <a href="#">help &amp; contact</a>
                  </li>
                  <li>
                    <a href="#">todays deal</a>
                  </li>
                  <li>
                    <a href="#">track order</a>
                  </li>
                  <li>
                    <a href="#">shipping </a>
                  </li>
                  <li>
                    <a href="#">easy returns</a>
                  </li>
                </ul>
              </div>
              <div className="language-block">
                <div className="language-dropdown">
                  <span className="language-dropdown-click">
                    english{' '}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                  <ul
                    className="language-dropdown-open"
                    style={{ display: 'none' }}
                  >
                    <li>
                      <a href="#">hindi</a>
                    </li>
                    <li>
                      <a href="#">english</a>
                    </li>
                    <li>
                      <a href="#">marathi</a>
                    </li>
                    <li>
                      <a href="#">spanish</a>
                    </li>
                  </ul>
                </div>
                <div className="curroncy-dropdown">
                  <span className="curroncy-dropdown-click">
                    usd<i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                  <ul
                    className="curroncy-dropdown-open"
                    style={{ display: 'none' }}
                  >
                    <li>
                      <a href="#">
                        <i className="fa fa-inr"></i>inr
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-usd"></i>usd
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-eur"></i>eur
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
