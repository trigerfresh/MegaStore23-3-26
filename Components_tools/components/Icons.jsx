import React from 'react'
import { Link } from 'react-router-dom'

const Icons = () => {
  return (
    <div className="icon-block">
      <ul className="theme-color">
        <li className="mobile-search icon-md-block m-1">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 612.01 612.01"
            style={{ enableBackground: 'new 0 0 612.01 612.01' }}
            xmlSpace="preserve"
          >
            <g>
              <g id="_x34__4_">
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
        </li>
        <li
          className="mobile-user icon-desk-none  m-1"
          onClick={() => openAccount()}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 480 480"
            style={{ enableBackground: 'new 0 0 480 480' }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M386.816,323.456l-69.984-14.016c-7.424-1.472-12.832-8.064-12.832-15.68v-16.064c4.608-6.4,8.928-14.944,13.408-23.872
                                c3.424-6.752,8.576-16.928,10.88-19.328c13.568-13.28,28.032-29.76,32.448-51.232c4-19.456,0-29.568-4.64-37.568
                                c0-15.648,0-44.288-5.44-64.928c-0.544-24.928-5.12-39.008-16.608-51.552c-8.128-8.768-20.096-10.816-29.696-12.448
                                c-3.808-0.64-9.024-1.536-10.848-2.528C276.896,5.056,260.032,0.512,239.392,0c-42.24,1.6-94.08,28.384-111.424,76.544
                                c-5.28,14.624-4.768,38.624-4.384,57.92l-0.448,11.232c-4.064,8-8.064,18.112-4.032,37.536
                                c4.416,21.568,18.88,38.016,32.384,51.232c2.336,2.432,7.552,12.672,11.008,19.424c4.544,8.896,8.896,17.44,13.504,23.84v16.032
                                c0,7.616-5.408,14.208-12.864,15.68l-69.984,14.016C48.448,332.384,16,371.968,16,417.568V448c0,17.632,14.368,32,32,32h384
                                c17.632,0,32-14.368,32-32v-30.432C464,371.968,431.552,332.384,386.816,323.456z M432,448H48v-30.432
                                c0-30.4,21.632-56.8,51.456-62.752l69.952-14.016C191.776,336.384,208,316.576,208,293.76V272c0-4.288-1.728-8.416-4.768-11.392
                                c-2.752-2.688-8.672-14.336-12.224-21.28c-6.016-11.776-11.2-21.952-17.12-27.712c-10.624-10.368-20.768-21.76-23.456-34.816
                                c-2.08-10.112-0.64-12.96,1.216-16.576c1.632-3.2,4.064-8,4.064-14.528l-0.16-11.872c-0.288-13.984-0.768-37.408,2.496-46.432
                                C170.464,52.96,209.856,33.152,239.584,32c14.656,0.384,26.176,3.424,38.4,10.24c6.592,3.648,14.272,4.928,21.024,6.08
                                c3.808,0.64,10.176,1.728,11.488,2.56c4.32,4.704,7.904,10.368,8.16,32.384c0,1.44,0.224,2.88,0.64,4.288
                                c4.768,16.352,4.768,44.576,4.768,58.144c0,6.528,2.464,11.328,4.064,14.528c1.856,3.616,3.296,6.464,1.216,16.608
                                c-2.656,12.992-12.864,24.416-23.456,34.784c-5.952,5.824-11.104,16-17.056,27.808c-3.456,6.912-9.312,18.496-12.032,21.152
                                c-3.072,3.008-4.8,7.136-4.8,11.424v21.76c0,22.816,16.224,42.624,38.592,47.072l69.984,14.016
                                c29.792,5.92,51.424,32.32,51.424,62.72V448z"
                ></path>
              </g>
            </g>
          </svg>
        </li>
        <li className="mobile-setting  m-1" onClick={() => openSetting()}>
          <svg
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"></path>
            <path d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"></path>
          </svg>
        </li>

        {/* Open setting start */}
        <div id="mySetting" className="add_to_cart right">
          <Link
            href="#"
            className="overlay"
            onClick={() => closeSetting()}
          ></Link>
          <div className="cart-inner">
            <div className="cart_top">
              <h3>my setting</h3>
              <div className="close-cart">
                <Link href="#" onClick={() => closeSetting()}>
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
        {/* OPen setting close */}

        <li
          className="mobile-wishlist item-count icon-desk-none  m-1"
          onClick={(e) => {
            e.preventDefault()
            openWishlist()
          }}
        >
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
                  d="M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25
                                c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25
                                c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7
                                c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574
                                c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431
                                c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351
                                C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646
                                c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245
                                C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659
                                c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66
                                c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351
                                C482,254.358,413.255,312.939,309.193,401.614z"
                ></path>
              </g>
            </g>
          </svg>
          {/* <div className="item-count-contain inverce"> 1 </div> */}
        </li>

        {/* Wishlist sidebar open */}
        <div id="wishlist_side" className="add_to_cart right ">
          <Link
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
                        src="../assets/images/tools/product/1.jpg"
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
                        src="../assets/images/tools/product/2.jpg"
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
                        src="../assets/images/tools/product/3.jpg"
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
        {/* Wishlist sidebar close */}

        <li className="mobile-cart item-count  m-1" onClick={() => openCart()}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 511.999 511.999"
            style={{ enableBackground: 'new 0 0 511.999 511.999' }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M435.099,29.815h-71.361V0H148.262v29.814H76.901L40.464,181.549H0.008v103.359h30.969l34.508,227.091h381.029
                                    l34.509-227.091h30.968V181.55h-40.456L435.099,29.815z M178.261,29.999h155.477v29.629H178.261V29.999z M100.549,59.813h47.714
                                    v29.814h215.475V59.813h47.714l29.233,121.736H71.316L100.549,59.813z M420.73,482.001H91.27L61.32,284.909h389.36L420.73,482.001
                                    z M481.993,254.91H30.007v-43.361h451.986V254.91z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <rect
                  x="241.002"
                  y="326.38"
                  width="29.999"
                  height="114.156"
                ></rect>
              </g>
            </g>
            <g>
              <g>
                <rect
                  x="143.436"
                  y="326.38"
                  width="29.999"
                  height="114.156"
                ></rect>
              </g>
            </g>
            <g>
              <g>
                <rect
                  x="338.559"
                  y="326.38"
                  width="29.999"
                  height="114.156"
                ></rect>
              </g>
            </g>
          </svg>
          {/* <div className="item-count-contain inverce"> 3 </div> */}
        </li>
      </ul>
    </div>
  )
}

export default Icons
