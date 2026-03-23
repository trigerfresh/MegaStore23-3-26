import React, { useEffect, useState } from 'react'

const CollectionBanner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setBanners(data.slice(0, 4))
      })
      .catch((err) => console.error('Error fetching banners : ', err))
  }, [])

  const banner1 = banners[0]
  const banner2 = banners[1]
  const banner3 = banners[2]
  const banner4 = banners[3]

  return (
    <>
      <section className="collection-banner section-py-space b-g-white">
        <div className="container-fluid">
          <div className="row collection-p4">
            {banner1 && (
              <div className="col-md-4">
                <div className="collection-banner-main p-center text-center p-top banner-16 banner-style7">
                  <div
                    className="collection-img bg-size"
                    style={{
                      backgroundImage: `url(${banner1.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      display: 'block',
                    }}
                  >
                    <img
                      src={banner1.image}
                      className="img-fluid bg-img  "
                      alt={banner1.image}
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div className="collection-banner-contain ">
                    <div>
                      <h3>{banner1.title.split(' ').slice(0, 2).join(' ')}</h3>
                      <h4>{banner1.title.split(' ').slice(2).join(' ')}</h4>
                      <a
                        href="product-page(left-sidebar).html"
                        className="btn btn-rounded btn-xs"
                      >
                        {' '}
                        Shop Now{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Banner 2 */}

            <div className="col-md-4">
              <div className="row">
                {banner2 && (
                  <div className="col-12">
                    <div className="collection-banner-main p-left text-center banner-13 banner-style7">
                      <div
                        className="collection-img bg-size"
                        style={{
                          backgroundImage: `url(${banner2.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          display: 'block',
                        }}
                      >
                        <img
                          src={banner2.image}
                          className="img-fluid bg-img  "
                          alt={banner2.image}
                          style={{ display: 'none' }}
                        />
                      </div>
                      <div className="collection-banner-contain ">
                        <div>
                          <h3>
                            {banner2.title.split(' ').slice(0, 2).join(' ')}
                          </h3>
                          <h4>{banner2.title.split(' ').slice(2).join(' ')}</h4>
                          <a
                            href="product-page(left-sidebar).html"
                            className="btn btn-rounded btn-xs"
                          >
                            {' '}
                            Shop Now{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {banner3 && (
                  <div className="col-12">
                    <div className="collection-banner-main p-left text-center banner-13 banner-style7">
                      <div
                        className="collection-img bg-size"
                        style={{
                          backgroundImage: `url(${banner3.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          display: 'block',
                        }}
                      >
                        <img
                          src={banner3.image}
                          className="img-fluid bg-img  "
                          alt={banner3.image}
                          style={{ display: 'none' }}
                        />
                      </div>
                      <div className="collection-banner-contain ">
                        <div>
                          <h3>
                            {banner3.title.split(' ').slice(0, 2).join(' ')}
                          </h3>
                          <h4>{banner3.title.split(' ').slice(2).join(' ')}</h4>
                          <a
                            href="product-page(left-sidebar).html"
                            className="btn btn-rounded btn-xs"
                          >
                            {' '}
                            Shop Now{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {banner4 && (
              <div className="col-md-4">
                <div className="collection-banner-main p-center p-top text-center banner-16 banner-style7">
                  <div
                    className="collection-img bg-size"
                    style={{
                      backgroundImage: `url(${banner4.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      display: 'block',
                    }}
                  >
                    <img
                      src={banner4.image}
                      className="img-fluid bg-img  "
                      alt="banner"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div className="collection-banner-contain ">
                    <div>
                      <h3>{banner4.title.split(' ').slice(0, 2).join(' ')}</h3>
                      <h4>{banner4.title.split(' ').slice(2).join(' ')}</h4>
                      <a
                        href="product-page(left-sidebar).html"
                        className="btn btn-rounded btn-xs"
                      >
                        {' '}
                        Shop Now{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default CollectionBanner
