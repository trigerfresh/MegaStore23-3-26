import React, { useState } from 'react'

const TopHeader = () => {
  // 1. State to track which dropdown is open
  const [langOpen, setLangOpen] = useState(false)
  const [currOpen, setCurrOpen] = useState(false)

  return (
    <>
      <div className="top-header">
        <div className="custom-container">
          <div className="row">
            <div className="col-xl-5 col-md-7 col-sm-6">
              <div className="top-header-left">
                <div className="shpping-order">
                  <h6>free shipping on order over $99 </h6>
                </div>
                <div className="app-link">
                  <h6>Download app</h6>
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
                      <a href="#">help & contact</a>
                    </li>
                    <li>
                      <a href="#">todays deal</a>
                    </li>
                    <li>
                      <a href="#">track order</a>
                    </li>
                  </ul>
                </div>

                <div className="language-block" style={{ cursor: 'pointer' }}>
                  {/* 2. Language Dropdown */}
                  <div
                    className={`language-dropdown ${langOpen ? 'open' : ''}`}
                  >
                    <span
                      className="language-dropdown-click"
                      onClick={() => setLangOpen(!langOpen)}
                    >
                      english{' '}
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                    <ul
                      className={`language-dropdown-open ${langOpen ? 'show' : ''}`}
                      style={{ display: langOpen ? 'block' : 'none' }}
                    >
                      <li>
                        <a href="#" onClick={() => setLangOpen(false)}>
                          hindi
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setLangOpen(false)}>
                          english
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setLangOpen(false)}>
                          marathi
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* 3. Currency Dropdown */}
                  <div
                    className={`curroncy-dropdown ${currOpen ? 'open' : ''}`}
                  >
                    <span
                      className="curroncy-dropdown-click"
                      onClick={() => setCurrOpen(!currOpen)}
                    >
                      usd{' '}
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                    <ul
                      className={`curroncy-dropdown-open ${currOpen ? 'show' : ''}`}
                      style={{ display: currOpen ? 'block' : 'none' }}
                    >
                      <li>
                        <a href="#" onClick={() => setCurrOpen(false)}>
                          <i className="fa fa-inr"></i> inr
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setCurrOpen(false)}>
                          <i className="fa fa-usd"></i> usd
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setCurrOpen(false)}>
                          <i className="fa fa-eur"></i> eur
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
    </>
  )
}

export default TopHeader
