import React, { useEffect, useState } from 'react'

const Collection_Banner1 = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setBanners(data.slice(0, 7))
      })
      .catch((err) => console.error('Error fetching banners : ', err))
  }, [])

  const banner1 = banners[0]
  const banner2 = banners[1]
  const banner3 = banners[2]
  const banner4 = banners[3]
  const banner5 = banners[4]
  const banner6 = banners[5]

  return (
    <section className="masonory-banner o-hidden">
      <div className="container-fluid">
        <div className="row masonary-banner-block1 gutter-15">
          <div className="col-xl-6 col-lg-12 ">
            <div className="row">
              <div className="col-sm-6">
                <div className="row masonary-banner-block">
                  {banner4 && (
                    <div className="col-md-12">
                      <div className="masonary-banner-main">
                        <div
                          className="masonory-banner-img bg-size"
                          style={{
                            backgroundImage: `url(${banner4.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            display: 'block',
                          }}
                        >
                          <img
                            src={banner4.image}
                            className="img-fluid bg-img"
                            alt={banner4.title}
                            style={{ display: 'none' }}
                          />
                        </div>
                        <div className="masonary-banner-contant p-center">
                          <div>
                            <h5>
                              {banner4.title.split(' ').slice(0, 2).join(' ')}
                            </h5>
                            <a
                              href="category-page(left-sidebar).html"
                              className="btn-rounded"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {banner6 && (
                    <div className="col-md-12">
                      <div className="masonary-banner-main">
                        <div
                          className="masonory-banner-img bg-size"
                          style={{
                            backgroundImage: `url(${banner6.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            display: 'block',
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
                            <h5>
                              {banner1.title.split(' ').slice(0, 1).join(' ')}
                            </h5>
                            <a
                              href="category-page(left-sidebar).html"
                              className="btn-rounded"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {banner5 && (
                <div className="col-sm-6 ps-3">
                  <div className="masonary-banner-main">
                    <div
                      className="masonory-banner-img masonory-img1 bg-size"
                      style={{
                        backgroundImage: `url(${banner5.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
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
                        <div>
                          <h5>
                            {banner1.title.split(' ').slice(0, 1).join(' ')}
                          </h5>
                          <a
                            href="category-page(left-sidebar).html"
                            className="btn-rounded"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-xl-6 col-lg-12 ">
            <div className="row masonary-banner-block masonary-inner1">
              <div className="col-md-12">
                <div className="row masonary-banner-block2">
                  {banner1 && (
                    <div className="col-sm-6 pr-0">
                      <div className="masonary-banner-main">
                        <div
                          className="masonory-banner-img bg-size"
                          style={{
                            backgroundImage: `url(${banner1.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            display: 'block',
                          }}
                        >
                          <img
                            src={banner1.image}
                            className="img-fluid bg-img"
                            alt={banner1.title}
                            style={{ display: 'none' }}
                          />
                        </div>
                        <div className="masonary-banner-contant p-center">
                          <div>
                            <h5>
                              {banner1.title.split(' ').slice(0, 1).join(' ')}
                            </h5>
                            <a
                              href="category-page(left-sidebar).html"
                              className="btn-rounded"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {banner2 && (
                    <div className="col-sm-6">
                      <div className="masonary-banner-main">
                        <div
                          className="masonory-banner-img bg-size"
                          style={{
                            backgroundImage: `url(${banner2.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            display: 'block',
                          }}
                        >
                          <img
                            src={banner2.image}
                            className="img-fluid bg-img"
                            alt={banner1.title}
                            style={{ display: 'none' }}
                          />
                        </div>
                        <div className="masonary-banner-contant p-center">
                          <div>
                            <h5>
                              {banner2.title.split(' ').slice(0, 2).join(' ')}
                            </h5>
                            <a
                              href="category-page(left-sidebar).html"
                              className="btn-rounded"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {banner3 && (
                <div className="col-md-12 pr-0">
                  <div className="masonary-banner-main">
                    <div
                      className="masonory-banner-img bg-size"
                      style={{
                        backgroundImage: `url(${banner3.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src={banner3.image}
                        alt={banner3.title}
                        className="img-fluid bg-img"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="masonary-banner-contant p-right">
                      <div className="masonary-banner-subcontant">
                        <div>
                          <h2>
                            {banner3.title.split(' ').slice(0, 1).join(' ')}
                          </h2>
                          <h5>
                            {banner3.title.split(' ').slice(1, 2).join(' ')}
                          </h5>
                          <a className="btn-rounded">shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection_Banner1
