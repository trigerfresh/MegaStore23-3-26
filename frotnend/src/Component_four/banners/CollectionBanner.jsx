import React, { useEffect, useState } from 'react'

const CollectionBanner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setBanners(data.slice(0, 2))
      })
      .catch((err) => console.error('Error fetching banners : ', err))
  }, [])

  const banner1 = banners[0]
  const banner2 = banners[1]

  return (
    <section className="collection-banner ">
      <div className="custom-container">
        <div className="row layout-4-collection">
          {banner1 && (
            <div className="col-md-4  ">
              <div
                className="collection-banner-main p-left  height-equal"
                style={{ minHeight: '200px' }}
              >
                <div
                  className="collection-img bg-size"
                  style={{
                    backgroundImage: `url(${banner1.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    display: 'block',
                  }}
                >
                  {' '}
                  <img
                    src={banner1.image}
                    className="img-fluid bg-img  "
                    alt="banner"
                    style={{ display: 'none' }}
                  />{' '}
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>{banner1.title.split(' ').slice(0, 2).join(' ')}</h3>
                    <h4>{banner1.title.split(' ').slice(2).join(' ')}</h4>
                    <div className="shop">
                      {' '}
                      <a href="product-page(left-sidebar).html">
                        shop now
                        <i className="fa fa-arrow-circle-right"></i>
                      </a>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {banner2 && (
            <div className="col-md-4  ">
              <div
                className="collection-banner-main p-left  height-equal"
                style={{ minHeight: '200px' }}
              >
                <div
                  className="collection-img  bg-size"
                  style={{
                    backgroundImage: `url(${banner2.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    display: 'block',
                  }}
                >
                  {' '}
                  <img
                    src={banner2.image}
                    className="img-fluid bg-img  "
                    alt="banner"
                    style={{ display: 'none' }}
                  />{' '}
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>{banner2.title.split(' ').slice(0, 2).join(' ')}</h3>
                    <h4>{banner2.title.split(' ').slice(2).join(' ')}</h4>
                    <div className="shop">
                      {' '}
                      <a href="product-page(left-sidebar).html">
                        shop now
                        <i className="fa fa-arrow-circle-right"></i>
                      </a>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="col-md-2 ">
            <div
              className="collection-banner-main p-left banner-8 height-equal"
              style={{ minHeight: '200px' }}
            >
              <div className="collection-banner-contain">
                <div>
                  <h3>extra</h3>
                  <h3>50% off</h3>
                  <h1>sale</h1>
                  <h6>free shipping</h6>
                  <div className="shop">
                    {' '}
                    <a href="product-page(left-sidebar).html">
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionBanner
