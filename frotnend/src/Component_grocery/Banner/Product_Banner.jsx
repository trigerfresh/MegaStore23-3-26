import React, { useEffect, useState } from 'react'

const Product_Banner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setBanners(data.slice(0, 5)) // first 5 banners
      })
      .catch((err) => console.error('Error fetching banners:', err))
  }, [])

  return (
    <section className="collection-banner b-g-white section-py-space">
      <div className="custom-container">
        <div className="row collection-p5">
          {/* FIRST TWO LARGE BANNERS */}
          {banners.length >= 2 && (
            <div className="col-12">
              <div className="row">
                {banners.slice(0, 2).map((banner, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="collection-banner-main p-left banner-13 banner-style8 text-center">
                      <div
                        className="collection-img bg-size"
                        style={{
                          backgroundImage: `url(${banner.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          display: 'block',
                        }}
                      >
                        <img
                          src={banner.image}
                          className="img-fluid bg-img"
                          alt={banner.title}
                          style={{ display: 'none' }}
                        />
                      </div>

                      <div className="collection-banner-contain">
                        <div>
                          <h3>{banner.title}</h3>
                          <h4>special offer</h4>
                          <a
                            href="product-page(left-sidebar).html"
                            className="btn btn-rounded btn-xs"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NEXT THREE SMALL BANNERS */}
          {banners.length >= 5 && (
            <div className="col-12">
              <div className="row">
                {banners.slice(2, 5).map((banner, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="collection-banner-main p-left banner-13 banner-style8 text-center">
                      <div
                        className="collection-img bg-size"
                        style={{
                          backgroundImage: `url(${banner.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          display: 'block',
                        }}
                      >
                        <img
                          src={banner.image}
                          className="img-fluid bg-img"
                          alt={banner.title}
                          style={{ display: 'none' }}
                        />
                      </div>

                      <div className="collection-banner-contain">
                        <div>
                          <h3>{banner.title}</h3>
                          <h4>best offer</h4>
                          <a
                            href="product-page(left-sidebar).html"
                            className="btn btn-rounded btn-xs"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Product_Banner
