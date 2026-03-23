import React, { useEffect, useState } from 'react'
import defaultImg from './cat_1.jpg'

const MainHeader = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching data: ', err))
  }, [])

  return (
    <>
      <div className="category-header">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <div className="navbar-menu">
                <div className="category-left">
                  <div className=" nav-block">
                    <div className="nav-left">
                      <nav
                        className="navbar collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-expanded="false"
                      >
                        <button className="navbar-toggler" type="button">
                          <span className="navbar-icon">
                            <i className="fa fa-arrow-down"></i>
                          </span>
                        </button>
                        <h5 className="mb-0 ms-3 text-white title-font">
                          Shop by category
                        </h5>
                      </nav>
                      <div
                        className="hide nav-desk collapse"
                        id="navbarToggleExternalContent"
                        style={{}}
                      >
                        <ul className="nav-cat title-font">
                          {categories.map((cat) => (
                            <li
                              keu={cat._id}
                              style={{ listStyle: 'none', marginBottom: '5px' }}
                            >
                              <a
                                href="#"
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '5px',
                                  textDecoration: 'none',
                                }}
                              >
                                <img
                                  src={cat.image || defaultImg}
                                  alt={cat.name}
                                  style={{
                                    width: '40px',
                                    height: '30px',
                                    objectFit: 'cover',
                                    flexShrink: 0,
                                  }}
                                  onError={(e) => {
                                    e.currentTarget.src = defaultImg
                                  }}
                                />
                                <span
                                  style={{
                                    fontSize: '10px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                  }}
                                >
                                  {cat.name}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="input-box">
                      <form className="big-deal-form">
                        <div className="input-group ">
                          <span className="search">
                            <i className="fa fa-search"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search a Product"
                          />
                          <select>
                            <option>All Category</option>
                            <option>indurstrial</option>
                            <option>sports</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="category-right">
                  <div className="contact-block">
                    <div>
                      <i className="fa fa-volume-control-phone"></i>
                      <span>
                        call us<span>123-456-76890</span>
                      </span>
                    </div>
                  </div>
                  <div className="btn-group">
                    <div
                      className="gift-block"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="grif-icon">
                        <i className="icon-gift"></i>
                      </div>
                      <div className="gift-offer">
                        <p>gift box</p>
                        <span>Festivel Offer</span>
                      </div>
                    </div>
                    <div
                      className="dropdown-menu gift-dropdown"
                      style={{ margin: '0px' }}
                    >
                      <div className="media">
                        <div className="me-3">
                          <img
                            src="../assets/images/icon/1.png"
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">Billion Days</h5>
                          <p>
                            <img
                              src="../assets/images/icon/currency.png"
                              className="cash"
                              alt="gift-block"
                            />{' '}
                            Flat Rs. 270 Rewards
                          </p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <img
                            src="../assets/images/icon/2.png"
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">Fashion Discount</h5>
                          <p>
                            <img
                              src="../assets/images/icon/fire.png"
                              className="fire"
                              alt="gift-block"
                            />
                            Extra 10% off (upto Rs. 10,000*){' '}
                          </p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <img
                            src="../assets/images/icon/3.png"
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">75% off Store</h5>
                          <p>No coupon code is required.</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <img
                            src="../assets/images/icon/6.png"
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">Upto 50% off</h5>
                          <p>Buy popular phones under Rs.20.</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <img
                            src="../assets/images/icon/5.png"
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">Beauty store</h5>
                          <p>
                            <img
                              src="../assets/images/icon/currency.png"
                              className="cash"
                              alt="curancy"
                            />{' '}
                            Flat Rs. 270 Rewards
                          </p>
                        </div>
                      </div>
                    </div>
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

export default MainHeader
