import axios from 'axios'
import React, { useEffect, useState } from 'react'
import defaultImg from './cat_1.jpg'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/categories')
        setCategories(response.data)
        console.log(response)
      } catch (err) {
        console.error('Error fetching categories : ', err)
      }
    }
    fetchCategories()
  }, [])
  return (
    <div className="layout-header4">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="contact-block">
              <div className="sm-nav-block">
                <ul className="nav-slide">
                  <li>
                    <div className="nav-sm-back">
                      {' '}
                      back <i className="fa fa-angle-right ps-2"></i>{' '}
                    </div>
                  </li>
                  {categories.map((cat) => (
                    <li
                      key={cat._id}
                      style={{ listStyle: 'none', marginBottom: '5px' }}
                    >
                      <a href={cat.url || '#'}>
                        <img
                          src={cat.image || defaultImg}
                          alt={cat.name}
                          style={{
                            width: '40px',
                            height: '30px',
                            objectFit: 'cover',
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
              <div className="desc-nav-block">
                <ul>
                  <li>
                    <div className="contact-item-main">
                      <svg
                        enableBackground="new 0 0 511.999 511.999"
                        viewBox="0 0 511.999 511.999"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d="m171.966 210.754c17.546-17.546 17.546-46.094 0-63.64l-61.707-61.707c-9.439-9.44-22.524-14.223-35.887-13.123-13.108 1.079-24.964 7.761-32.527 18.331-1.57 2.194-3.086 4.42-4.571 6.664l124.083 124.083z"></path>
                          <path d="m426.592 401.74-61.707-61.707c-17.544-17.544-46.094-17.546-63.64 0l-10.609 10.609 124.088 124.088c2.244-1.485 4.466-3.007 6.659-4.576 10.57-7.563 17.252-19.419 18.332-32.527 1.101-13.365-3.683-26.446-13.123-35.887z"></path>
                          <path d="m248.213 374.426c-12.021 0-23.32-4.681-31.82-13.18l-65.64-65.64c-8.499-8.499-13.181-19.8-13.181-31.82 0-6.828 1.515-13.422 4.377-19.404l-120.002-120.003c-16.88 35.443-24.35 75.152-21.268 115.01 4.153 53.71 27.315 104.164 65.221 142.069l64.642 64.641c37.904 37.905 88.359 61.067 142.069 65.221 5.869.454 11.733.679 17.583.679 33.875 0 67.202-7.552 97.426-21.946l-120.004-120.004c-5.981 2.863-12.575 4.377-19.403 4.377z"></path>
                          <path d="m301.999 0c-8.284 0-15 6.716-15 15s6.716 15 15 15c99.252 0 180 80.748 180 180 0 8.284 6.716 15 15 15s15-6.716 15-15c0-115.794-94.206-210-210-210z"></path>
                          <path d="m301.998 209.986s.001.005.001.014c0 8.284 6.716 15 15 15s15-6.716 15-15c0-16.542-13.458-30-30-30-8.284 0-15 6.709-15 14.993s6.715 14.993 14.999 14.993z"></path>
                          <path d="m301.999 150c33.084 0 60 26.916 60 60 0 8.284 6.716 15 15 15s15-6.716 15-15c0-49.626-40.374-90-90-90-8.284 0-15 6.716-15 15s6.716 15 15 15z"></path>
                          <path d="m301.999 60c-8.284 0-15 6.716-15 15s6.716 15 15 15c66.168 0 120 53.832 120 120 0 8.284 6.716 15 15 15s15-6.716 15-15c0-82.71-67.29-150-150-150z"></path>
                        </g>
                      </svg>
                      <span className="contact-item">
                        call us
                        <span>123-456-789</span>
                      </span>
                    </div>
                  </li>
                  <li className="mobile-user" onClick={() => openAccount()}>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240
                                c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301z
                                 M451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </li>

                  {/* Account started */}
                  <div id="myAccount" className="add_to_cart right account-bar">
                    <Link
                      className="overlay"
                      onClick={() => closeAccount()}
                    ></Link>
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
                          <label for="email">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <label for="review">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="review"
                            placeholder="Enter your password"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <a
                            href="#"
                            className="btn btn-solid btn-md btn-block "
                          >
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
                  {/* Account ended */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="logo-block">
              <a href="index.html">
                {' '}
                <img
                  src="../assets/images/layout-4/logo/logo.png"
                  alt="logo"
                  className="img-fluid  "
                />{' '}
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="icon-block">
              <ul>
                <li
                  onclick="openAccount()"
                  className="mobile-user onhover-dropdown"
                >
                  <a href="#">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240
                          c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301z
                           M451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="mobile-search">
                  <a href="#">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="612.01px"
                      height="612.01px"
                      viewBox="0 0 612.01 612.01"
                      style={{ enableBackground: 'new 0 0 612.01 612.01' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
                                  C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
                                  l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
                                  c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
                                  S377.82,467.8,257.493,467.8z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                {/* Wishlist started */}
                <li
                  className="mobile-wishlist item-count"
                  onClick={() => openWishlist()}
                >
                  <Link>
                    <svg
                      viewBox="0 -28 512.001 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"></path>
                    </svg>
                    <div className="item-count-contain"> 3 </div>
                  </Link>
                </li>

                {/* Wishlist sidebar stared */}
                <div id="wishlist_side" className="add_to_cart right ">
                  <Link
                    className="overlay"
                    onClick={() => closeWishlist()}
                  ></Link>
                  <div className="cart-inner">
                    <div className="cart_top">
                      <h3>my wishlist</h3>
                      <div className="close-cart">
                        <Link onClick={() => closeWishlist()}>
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
                                src="../assets/images/layout-2/product/1.jpg"
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
                                src="../assets/images/layout-2/product/2.jpg"
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
                                src="../assets/images/layout-2/product/3.jpg"
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

                {/* Wihlist sidebar ended */}

                {/* Wishlist ended */}

                {/* Setting started */}
                <li className="mobile-setting" onClick={() => openSetting()}>
                  <Link>
                    <svg
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"></path>
                      <path d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"></path>
                    </svg>
                  </Link>
                </li>

                {/* Settings ended */}

                {/* Cart started */}
                <li
                  className="mobile-cart item-count"
                  onClick={() => openCart()}
                >
                  <Link>
                    <div className="cart-item-main">
                      <svg
                        enableBackground="new 0 0 512 512"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d="m497 401.667c-415.684 0-397.149.077-397.175-.139-4.556-36.483-4.373-34.149-4.076-34.193 199.47-1.037-277.492.065 368.071.065 26.896 0 47.18-20.377 47.18-47.4v-203.25c0-19.7-16.025-35.755-35.725-35.79l-124.179-.214v-31.746c0-17.645-14.355-32-32-32h-29.972c-17.64 0-31.99 14.351-31.99 31.99v31.594l-133.21-.232-9.985-54.992c-2.667-14.694-15.443-25.36-30.378-25.36h-68.561c-8.284 0-15 6.716-15 15s6.716 15 15 15c72.595 0 69.219-.399 69.422.719 16.275 89.632 5.917 26.988 49.58 306.416l-38.389.2c-18.027.069-32.06 15.893-29.81 33.899l4.252 34.016c1.883 15.06 14.748 26.417 29.925 26.417h26.62c-18.8 36.504 7.827 80.333 49.067 80.333 41.221 0 67.876-43.813 49.067-80.333h142.866c-18.801 36.504 7.827 80.333 49.067 80.333 41.22 0 67.875-43.811 49.066-80.333h31.267c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-209.865-352.677c0-1.097.893-1.99 1.99-1.99h29.972c1.103 0 2 .897 2 2v111c0 8.284 6.716 15 15 15h22.276l-46.75 46.779c-4.149 4.151-10.866 4.151-15.015 0l-46.751-46.779h22.277c8.284 0 15-6.716 15-15v-111.01zm-30 61.594v34.416h-25.039c-20.126 0-30.252 24.394-16.014 38.644l59.308 59.342c15.874 15.883 41.576 15.885 57.452 0l59.307-59.342c14.229-14.237 4.13-38.644-16.013-38.644h-25.039v-34.254l124.127.214c3.186.005 5.776 2.603 5.776 5.79v203.25c0 10.407-6.904 17.4-17.18 17.4h-299.412l-35.477-227.039zm-56.302 346.249c0 13.877-11.29 25.167-25.167 25.167s-25.166-11.29-25.166-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167zm241 0c0 13.877-11.289 25.167-25.166 25.167s-25.167-11.29-25.167-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167z"></path>
                        </g>
                      </svg>
                      <div className="cart-item">
                        <div className="m-1">
                          shopping<span>cart</span>
                        </div>
                      </div>
                    </div>
                    <div className="item-count-contain"> 3 </div>
                  </Link>
                </li>

                {/* Cart sidebar ended */}
                <div id="cart_side" className="add_to_cart right">
                  <Link className="overlay" onClick={() => closeCart()}></Link>
                  <div className="cart-inner">
                    <div className="cart_top">
                      <h3>my cart</h3>
                      <div className="close-cart">
                        <Link onClick={() => closeCart()}>
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
                                src="../assets/images/layout-2/product/1.jpg"
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
                                src="../assets/images/layout-2/product/2.jpg"
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
                                src="../assets/images/layout-2/product/3.jpg"
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
                              href="cart.html"
                              className="btn btn-solid btn-sm"
                            >
                              view cart
                            </a>
                            <a
                              href="checkout.html"
                              className="btn btn-solid btn-sm "
                            >
                              checkout
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Cart sidebar ended */}

                {/* Cart ended */}
              </ul>
              <span className="toggle-nav">
                <i className="fa fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
        {/* Settings sidebar started */}
        <div id="mySetting" className="add_to_cart right">
          <Link className="overlay" onClick={() => closeSetting()}></Link>
          <div className="cart-inner">
            <div className="cart_top">
              <h3>my setting</h3>
              <div className="close-cart">
                <Link onClick={() => closeSetting()}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            <div className="setting-block">
              <div className="form-group">
                <select>
                  <option value="">language</option>
                  <option value="">english</option>
                  <option value="">french</option>
                  <option value="">hindi</option>
                </select>
              </div>
              <div className="form-group">
                <select>
                  <option value="">currency</option>
                  <option value="">uro</option>
                  <option value="">ruppees</option>
                  <option value="">piund</option>
                  <option value="">doller</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Settings sidebar ended */}
      </div>
    </div>
  )
}

export default MainHeader
