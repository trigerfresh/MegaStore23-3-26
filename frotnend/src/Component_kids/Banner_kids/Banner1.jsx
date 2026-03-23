import React, { useEffect, useState } from 'react'

const Banner1 = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.error(err))
  }, [])

  const getBanner = (index) => banners[index] || {}

  // Function to split title into first 2 words and remaining
  const splitTitle = (title) => {
    if (!title) return ['', '']
    const words = title.split(' ')
    const h3 = words.slice(0, 2).join(' ')
    const h4 = words.slice(2).join(' ')
    return [h3, h4]
  }

  return (
    <section className="collection-banner b-g-white section-py-space">
      <div className="custom-container">
        <div className="row collection-p3">
          <div className="col-md-4">
            <div className="row">
              {[0, 1].map((i) => {
                const banner = getBanner(i)
                const [h3Title, h4Title] = splitTitle(banner.title)
                return (
                  <div className="col-md-12" key={i}>
                    <div className="collection-banner-main p-left text-center banner-style5 banner-13">
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
                          <h3>{h3Title}</h3>
                          <h4>{h4Title}</h4>
                          <a
                            href={banner.url || '#'}
                            className="btn btn-rounded btn-sm"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              {[2, 3].map((i) => {
                const banner = getBanner(i)
                const [h3Title, h4Title] = splitTitle(banner.title)
                return (
                  <div className="col-md-6" key={i}>
                    <div className="collection-banner-main p-left text-center banner-style5 banner-13">
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
                          <h3>{h3Title}</h3>
                          <h4>{h4Title}</h4>
                          <a
                            href={banner.url || '#'}
                            className="btn btn-rounded btn-sm"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className="col-md-12">
                {(() => {
                  const banner = getBanner(4)
                  const [h3Title, h4Title] = splitTitle(banner.title)
                  return (
                    <div className="collection-banner-main p-left text-center banner-style5 banner-13">
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
                          <h3>{h3Title}</h3>
                          <h4>{h4Title}</h4>
                          <a
                            href={banner.url || '#'}
                            className="btn btn-rounded btn-sm"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner1
