import React, { useEffect, useState } from 'react'

const SaleBanner_1 = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setBanners(data)
      })
      .catch((err) => console.error('Error fetching banners : ', err))
  }, [])

  const banner = banners[banners.length - 3]

  if (!banner) return null

  return (
    <section
      className="sale-banenr banner-style2 section-big-mb-space bg-size"
      style={{
        backgroundImage: `url(${banner.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <img
        src={banner.image}
        alt={banner.title}
        className="img-fluid bg-img"
        style={{ display: 'none' }}
      />

      <div className="custom-container">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="sale-banenr-contain text-center p-right">
              <div>
                <h4>{banner.title.split(' ').slice(0, 4).join(' ')}</h4>
                <h2>{banner.title.split(' ').slice(4, 6).join(' ')}</h2>
                <h3>fashion trends</h3>

                <a href="#" className="btn btn-rounded">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SaleBanner_1
