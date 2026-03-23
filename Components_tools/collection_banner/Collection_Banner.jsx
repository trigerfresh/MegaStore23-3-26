import React, { useEffect, useState } from 'react'

const Collection_Banner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => setBanners(data.slice(0, 3)))
      .catch((err) => console.error(err))
  }, [])

  return (
    <section className="collection-banner section-py-space b-g-white">
      <div className="container-fluid">
        <div className="row collection2">
          {/* Banner 1 */}
          {banners.map((banner, index) => (
            <div className="col-md-4">
              <div className="collection-banner-main p-left text-center banner-style3 banner-13">
                <div
                  className="collection-img bg-size"
                  style={{
                    backgroundImage: `url(${banner.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    display: 'block',
                  }}
                />
                <img
                  src={banner.image}
                  className="img-fluid bg-img"
                  alt="banner"
                  style={{ display: 'none' }}
                />
                <div className="collection-banner-contain">
                  <div>
                    <h3>{banner.title || 'Special Offer'}</h3>
                    <h4>{banner.subtitle || 'Power Tools'}</h4>
                    <a
                      href="product-page(left-sidebar).html"
                      className="btn btn-rounded btn-sm"
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
    </section>
  )
}

export default Collection_Banner
