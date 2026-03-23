import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import MegaProduct from './MegaStoreProducts/MegaProduct'

const MegaStore = () => {
  const [banners, setBanners] = useState([])
  const [loading, setLoading] = useState(true)
  const [offerBanners, setOfferBanners] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resBanners, resOffers] = await Promise.all([
          fetch('http://localhost:4000/api/banners'),
          axios.get('http://localhost:4000/api/offer-banners'),
        ])

        const bannerData = await resBanners.json()
        if (bannerData.success) {
          setBanners(bannerData.formattedBanners)
        }

        setOfferBanners(resOffers.data)
      } catch (err) {
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getOfferData = (index) => {
    return (
      offerBanners[index] || { image: '', title: 'Loading...', subTitle: '' }
    )
  }

  return (
    <>
      <section className="megastore-slide collection-banner section-py-space b-g-white">
        <div className="container-fluid">
          <div className="row mega-slide-block">
            <div className="col-xl-9 col-lg-12">
              <div className="row">
                <div className="col-12">
                  <div className="slide-1 no-arrow slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{ display: 'inline-block' }}
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: '1',
                          width: '4634px',
                          transform: 'translate3d(-662px, 0px, 0px)',
                        }}
                      >
                        {/* Slide 1 - Cloned */}
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-1"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: '662px' }}
                        >
                          <div>
                            <div
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="slide-main bg-size"
                                style={{
                                  backgroundImage:
                                    'url("../assets/images/mega-store/slider/3.jpg")',
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center center',
                                  display: 'block',
                                }}
                              >
                                <img
                                  src="../assets/images/mega-store/slider/3.jpg"
                                  className="img-fluid bg-img"
                                  alt="mega-store"
                                  style={{ display: 'none' }}
                                />
                                <div className="slide-contain">
                                  <div>
                                    <h4>all product</h4>
                                    <h2>megastore</h2>
                                    <h3>save up to 20% off</h3>
                                    <a
                                      href="product-page(left-sidebar).html"
                                      className="btn btn-rounded btn-md"
                                      tabIndex="-1"
                                    >
                                      Shop Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Slide 2 - Main */}
                        {loading ? (
                          <div style={{ padding: '20px', fontSize: '18px' }}>
                            Loading banners...
                          </div>
                        ) : (
                          banners.map((banner, index) => (
                            <div
                              key={index}
                              className={`slick-slide ${
                                index === 0 ? 'slick-current slick-active' : ''
                              }`}
                              data-slick-index={index}
                              aria-hidden={index === 0 ? 'false' : 'true'}
                              style={{ width: '662px' }}
                            >
                              <div>
                                <div
                                  style={{
                                    width: '100%',
                                    display: 'inline-block',
                                  }}
                                >
                                  <div
                                    className="slide-main bg-size"
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
                                      alt={`Banner ${index + 1}`}
                                      style={{ display: 'none' }}
                                    />
                                    <div className="slide-contain">
                                      <div>
                                        <h4>
                                          {banner.title
                                            .split(' ')
                                            .slice(0, 2)
                                            .join(' ')}
                                        </h4>
                                        <h2>
                                          {' '}
                                          {banner.title
                                            .split(' ')
                                            .slice(2, 4)
                                            .join(' & ')}
                                        </h2>
                                        <h3>
                                          {' '}
                                          {banner.title
                                            .split(' ')
                                            .slice(4, 8)
                                            .join(' ')}
                                        </h3>
                                        <a
                                          href="product-page(left-sidebar).html"
                                          className="btn btn-rounded btn-md"
                                          tabIndex="0"
                                        >
                                          Shop Now
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    <button
                      className="slick-next slick-arrow"
                      aria-label="Next"
                      type="button"
                      style={{ display: 'inline-block' }}
                    >
                      Next
                    </button>
                  </div>
                </div>

                {/* Left Banner 1 */}
                <div className="col-md-6">
                  <div className="collection-banner-main banner-18 banner-style7 collection-color13 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage: `url(${getOfferData(0).image})`,
                        backgroundSize: 'cover',
                        display: 'block',
                      }}
                    >
                      <img
                        src={getOfferData(0).image}
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>{getOfferData(0).title}</h3>
                        <h4>{getOfferData(0).subTitle || 'special offer'}</h4>
                        <a href="#" className="btn btn-rounded btn-xs">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Banner 2 */}
                <div className="col-md-6">
                  <div className="collection-banner-main banner-18 banner-style7 collection-color9 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage: `url(${getOfferData(1).image})`,
                        backgroundSize: 'cover',
                        display: 'block',
                      }}
                    >
                      <img
                        src={getOfferData(1).image}
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>{getOfferData(1).title}</h3>
                        <h4>{getOfferData(1).subTitle || 'weekend sale'}</h4>
                        <a href="#" className="btn btn-rounded btn-xs">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Banners */}
            <div className="col-xl-3 col-lg-12">
              <div className="row collection-p6">
                {/* Right Banner 1 */}
                <div className="col-xl-12 col-lg-4 col-md-6">
                  <div className="collection-banner-main banner-17 banner-style7 collection-color14 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage: `url(${getOfferData(2).image})`,
                        backgroundSize: 'cover',
                        display: 'block',
                      }}
                    >
                      <img
                        src={getOfferData(2).image}
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>{getOfferData(2).title}</h3>
                        <h4>{getOfferData(2).subTitle || 'best choice'}</h4>
                        <a href="#" className="btn btn-rounded btn-xs">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Banner 2 */}
                <div className="col-xl-12 col-lg-4 col-md-6">
                  <div className="collection-banner-main banner-17 banner-style7 collection-color15 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage: `url(${getOfferData(3).image})`,
                        backgroundSize: 'cover',
                        display: 'block',
                      }}
                    >
                      <img
                        src={getOfferData(3).image}
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>{getOfferData(3).title}</h3>
                        <h4>{getOfferData(3).subTitle || 'now 70% off'}</h4>
                        <a href="#" className="btn btn-rounded btn-xs">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Banner 3 */}
                <div className="col-xl-12 col-lg-4 col-md-12">
                  <div className="collection-banner-main banner-18 banner-style7 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage: `url(${getOfferData(4).image})`,
                        backgroundSize: 'cover',
                        display: 'block',
                      }}
                    >
                      <img
                        src={getOfferData(4).image}
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>{getOfferData(4).title}</h3>
                        <h4>{getOfferData(4).subTitle || 'special offer'}</h4>
                        <a href="#" className="btn btn-rounded btn-xs">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MegaStore
