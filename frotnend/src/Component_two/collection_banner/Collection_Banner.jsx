import React, { useEffect, useState } from 'react'

const Collection_Banner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setBanners(data.slice(0, 3))
      })
      .catch((err) => console.error('Error fetching banners : ', err))
  }, [])

  const banner1 = banners[0]
  const banner2 = banners[1]
  const banner3 = banners[2]

  return (
    <section className="collection-banner section-pt-space">
      <div className="custom-container">
        <div className="row collection collection-layout1">
          {banner1 && (
            <div className="col-md-4 offset-xl-2 p-r-md-0">
              <div className="collection-banner-main p-left">
                <div
                  className="collection-img bg-size"
                  style={{
                    backgroundImage: `url(${banner1?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    display: 'block',
                  }}
                >
                  <img
                    src={banner1?.image}
                    className="img-fluid bg-img  "
                    alt={banner1?.title}
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>{banner1.title.split(' ').slice(0, 1).join(' ')}</h3>
                    <h4>{banner1.title.split(' ').slice(1, 3).join(' ')}</h4>
                    <div className="shop">
                      <a href="product-page(left-sidebar).html">
                        shop now
                        <i className="fa fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {banner2 && (
            <div className="col-md-4 col-4">
              <div className="collection-banner-main p-left">
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
                    alt={banner2.title}
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>{banner2.title.split(' ').slice(0, 1).join(' ')}</h3>
                    <h4>{banner2.title.split(' ').slice(1, 3).join(' ')}</h4>
                    <div className="shop">
                      <a href="product-page(left-sidebar).html">
                        shop now
                        <i className="fa fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {banner3 && (
            <div className="col-md-2  ps-md-0">
              <div className="collection-banner-main p-top banner-6">
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
                    alt={banner3.title}
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h6>{banner3.title.split(' ').slice(0, 1).join(' ')}</h6>
                    <h4>{banner3.title.split(' ').slice(1, 3).join(' ')}</h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Collection_Banner
