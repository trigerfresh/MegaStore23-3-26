import React, { useEffect, useState } from 'react'

const Product_Banner1 = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setBanners(data.slice(0, 6))
      })
      .catch((err) => console.error('Error fetching banners:', err))
  }, [])

  const banner1 = banners[0]
  const banner2 = banners[1]
  const banner3 = banners[2]
  const banner4 = banners[3]
  const banner5 = banners[4]
  const banner6 = banners[5]
  return (
    <section className="masonory-banner section-py-space b-g-white">
      <div className="container-fluid">
        <div className="row masonory-p1">
          {/* Banner 1 */}
          {banner1 && (
            <div className="col-xl-3 col-sm-6">
              <div className="masonary-banner-main">
                <div
                  className="masonory-banner-img masonory-img1 bg-size"
                  style={{
                    backgroundImage: `url(${banner1.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <img
                    src={banner1.image}
                    className="img-fluid bg-img"
                    alt={banner1.title}
                    style={{ display: 'none' }}
                  />
                </div>

                <div className="masonary-banner-contant p-center p-top">
                  <div className="masonary-banner-subcontant">
                    <div>
                      <h5>{banner1.title}</h5>
                      <a href="#" className="btn-rounded btn-md">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Banner 2 + 3 */}
          <div className="col-xl-3 col-sm-6">
            <div className="row">
              {banner2 && (
                <div className="col-md-12">
                  <div className="masonary-banner-main">
                    <div
                      className="masonory-banner-img bg-size"
                      style={{
                        backgroundImage: `url(${banner2.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <img
                        src={banner2.image}
                        className="img-fluid bg-img"
                        alt={banner2.title}
                        style={{ display: 'none' }}
                      />
                    </div>

                    <div className="masonary-banner-contant p-center">
                      <div>
                        <h5>{banner2.title}</h5>
                        <a href="#" className="btn-rounded btn-md">
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {banner3 && (
                <div className="col-md-12">
                  <div className="masonary-banner-main">
                    <div
                      className="masonory-banner-img bg-size"
                      style={{
                        backgroundImage: `url(${banner3.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <img
                        src={banner3.image}
                        className="img-fluid bg-img"
                        alt={banner3.title}
                        style={{ display: 'none' }}
                      />
                    </div>

                    <div className="masonary-banner-contant p-center">
                      <div>
                        <h5>{banner3.title}</h5>
                        <a href="#" className="btn-rounded btn-md">
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Banner 4 */}
          {banner4 && (
            <div className="col-xl-6 col-sm-12">
              <div className="row">
                <div className="col-12">
                  <div className="masonary-banner-main banner-style1">
                    <div
                      className="masonory-banner-img bg-size"
                      style={{
                        backgroundImage: `url(${banner4.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <img
                        src={banner4.image}
                        className="img-fluid bg-img"
                        alt={banner4.title}
                        style={{ display: 'none' }}
                      />
                    </div>

                    <div className="masonary-banner-contant p-right py-center">
                      <div className="masonary-banner-subcontant">
                        <div>
                          <h2>{banner4.title}</h2>
                          <a href="#" className="btn-rounded btn-md">
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Banner 5 */}
                {banner5 && (
                  <div className="col-sm-6">
                    <div className="masonary-banner-main">
                      <div
                        className="masonory-banner-img bg-size"
                        style={{
                          backgroundImage: `url(${banner5.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <img
                          src={banner5.image}
                          className="img-fluid bg-img"
                          alt={banner5.title}
                          style={{ display: 'none' }}
                        />
                      </div>

                      <div className="masonary-banner-contant p-center">
                        <div>
                          <h5>{banner5.title}</h5>
                          <a href="#" className="btn-rounded btn-md">
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Banner 6 */}
                {banner5 && (
                  <div className="col-sm-6">
                    <div className="masonary-banner-main">
                      <div
                        className="masonory-banner-img bg-size"
                        style={{
                          backgroundImage: `url(${banner6.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <img
                          src={banner6.image}
                          className="img-fluid bg-img"
                          alt={banner6.title}
                          style={{ display: 'none' }}
                        />
                      </div>

                      <div className="masonary-banner-contant p-center">
                        <div>
                          <h5>{banner6.title}</h5>
                          <a href="#" className="btn-rounded btn-md">
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Product_Banner1
