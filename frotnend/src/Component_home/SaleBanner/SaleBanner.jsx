import React from 'react'
import Slider from 'react-slick'

const SaleBanner = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
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
        <h4>our category</h4>
      </div>

      <section className="category4 section-big-pb-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pr-0">
              {/* SAME CLASS NAME - no style changes */}
              <Slider {...settings} className="category-slide5two no-arrow">
                {/* ITEM 1 */}
                <div>
                  <div className="category-box">
                    <a href="category-page(left-sidebar).html">
                      <img
                        src="../assets/images/mega-store/category/1.jpg"
                        alt="category"
                        className="img-fluid"
                      />
                    </a>
                    <div className="category-detail">
                      <h2>Fashion & Clothing</h2>
                      <ul>
                        <li>Winter Jackets</li>
                        <li>Office Blazer</li>
                        <li>Sports Watches</li>
                        <li>Professional Cap</li>
                        <li>Printed T-shirt</li>
                      </ul>
                      <a
                        href="category-page(left-sidebar).html"
                        className="btn btn-rounded btn-md btn-block"
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div>
                  <div className="category-box">
                    <a href="category-page(left-sidebar).html">
                      <img
                        src="../assets/images/mega-store/category/2.jpg"
                        alt="category"
                        className="img-fluid"
                      />
                    </a>
                    <div className="category-detail">
                      <h2>Home Furniture</h2>
                      <ul>
                        <li>Chesterfield Chair</li>
                        <li>Bunching Table</li>
                        <li>Sofa Beds</li>
                        <li>Sleeper Sofas</li>
                        <li>Storage Cabinets</li>
                      </ul>
                      <a
                        href="category-page(left-sidebar).html"
                        className="btn btn-rounded btn-md btn-block"
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div>
                  <div className="category-box">
                    <a href="category-page(left-sidebar).html">
                      <img
                        src="../assets/images/mega-store/category/3.jpg"
                        alt="category"
                        className="img-fluid"
                      />
                    </a>
                    <div className="category-detail">
                      <h2>Latest Electronics</h2>
                      <ul>
                        <li>Sony OLED TV</li>
                        <li>Gaming Phone</li>
                        <li>Asus Zenbook Pro</li>
                        <li>LG 21:9 Monitor</li>
                        <li>Ceiling Fans</li>
                      </ul>
                      <a
                        href="category-page(left-sidebar).html"
                        className="btn btn-rounded btn-md btn-block"
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>

                {/* ITEM 4 */}
                <div>
                  <div className="category-box">
                    <a href="category-page(left-sidebar).html">
                      <img
                        src="../assets/images/mega-store/category/4.jpg"
                        alt="category"
                        className="img-fluid"
                      />
                    </a>
                    <div className="category-detail">
                      <h2>Beauty & Cosmetics</h2>
                      <ul>
                        <li>Skin Concealer</li>
                        <li>Eye Makeup Mascara</li>
                        <li>Skin Cleansing Cream</li>
                        <li>Organic Cream</li>
                        <li>Body Lotion</li>
                      </ul>
                      <a
                        href="category-page(left-sidebar).html"
                        className="btn btn-rounded btn-md btn-block"
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>

                {/* ITEM 5 */}
                <div>
                  <div className="category-box">
                    <a href="category-page(left-sidebar).html">
                      <img
                        src="../assets/images/mega-store/category/5.jpg"
                        alt="category"
                        className="img-fluid"
                      />
                    </a>
                    <div className="category-detail">
                      <h2>Fresh Grocery</h2>
                      <ul>
                        <li>White Pepper Powder</li>
                        <li>Vegetables & Fruits</li>
                        <li>Tomato Sauce</li>
                        <li>Barbecue Sauce</li>
                        <li>Fresh Coffee Powder</li>
                      </ul>
                      <a
                        href="category-page(left-sidebar).html"
                        className="btn btn-rounded btn-md btn-block"
                      >
                        shop now
                      </a>
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

export default SaleBanner
