import React, { useEffect, useState } from 'react'

const Collection_Banner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <section className="collection-banner section-py-space bg-white">
      <div className="container-fluid">
        <div className="row collection2">
          {banners.slice(0, 3).map((banner) => (
            <div className="col-md-4">
              <div className="collection-banner-main p-right banner-9">
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
                    className="img-fluid bg-img  "
                    alt={banner.title}
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>{banner.title.split(' ').slice(0, 1).join(' ')}</h3>
                    <h4>{banner.title.split(' ').slice(1, 2).join()}</h4>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collection_Banner
