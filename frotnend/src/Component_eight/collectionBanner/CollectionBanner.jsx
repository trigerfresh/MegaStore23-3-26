import React, { useEffect, useState } from 'react'

const CollectionBanner = () => {
  const [slide1, setSlide1] = useState(null)
  const [slide2, setSlide2] = useState(null)
  const [slide3, setSlide3] = useState(null)
  const [slide4, setSlide4] = useState(null)
  const [slide5, setSlide5] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setSlide1(data[0])
        setSlide2(data[1])
        setSlide3(data[2])
        setSlide4(data[3])
        setSlide5(data[4])
      })
      .catch((err) => console.error(err))
  }, [])

  const renderTitle = (title) => {
    if (!title) return null

    const words = title.split(' ')
    const h3 = words.slice(0, 2).join(' ')
    const h4 = words.slice(2).join(' ')

    return (
      <>
        <h3>{h3}</h3>
        <h4>{h4}</h4>
      </>
    )
  }

  return (
    <section className="collection-banner b-g-white section-py-space">
      <div className="custom-container">
        <div className="row collection-p1">
          <div className="col-md-4 col-sm-12">
            <div className="row">
              {/* Slide 1 */}
              <div className="col-md-12">
                {slide1 ? (
                  <div className="collection-banner-main banner-10 banner-style3 p-right text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage: `url(${slide1?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src={slide1.image}
                        className="img-fluid bg-img"
                        alt={slide1.title}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        {renderTitle(slide1?.title)}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Loading Banner 1...</p>
                )}
              </div>

              {/* Slide 2 */}
              <div className="col-md-12">
                {slide2 ? (
                  <div className="collection-banner-main banner-10 banner-style3 p-right text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage: `url(${slide2?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src={slide2?.image}
                        className="img-fluid bg-img"
                        alt={slide2.title}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        {renderTitle(slide2?.title)}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Loading Banner 2...</p>
                )}
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="col-md-4">
            {slide3 ? (
              <div className="collection-banner-main banner-11 banner-style3 p-right p-top text-center">
                <div
                  className="collection-img bg-size"
                  style={{
                    backgroundImage: `url(${slide3?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    display: 'block',
                  }}
                >
                  <img
                    src={slide3?.image}
                    className="img-fluid bg-img"
                    alt={slide3?.title}
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    {renderTitle(slide3?.title)}
                    <a
                      href="product-page(left-sidebar).html"
                      className="btn btn-rounded btn-xs"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading Banner 3...</p>
            )}
          </div>

          {/* Slide 4 */}
          <div className="col-md-4 col-sm-12">
            <div className="row">
              <div className="col-md-12">
                {slide4 ? (
                  <div className="collection-banner-main banner-10 banner-style3 p-right text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage: `url(${slide4?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src={slide4?.image}
                        className="img-fluid bg-img"
                        alt={slide4?.title}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        {renderTitle(slide4?.title)}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Loading Banner 4...</p>
                )}
              </div>

              {/* Slide 5 */}
              <div className="col-md-12">
                {slide5 ? (
                  <div className="collection-banner-main banner-10 banner-style3 p-right text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage: `url(${slide5?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src={slide5?.image}
                        className="img-fluid bg-img"
                        alt={slide5.title}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        {renderTitle(slide5?.title)}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Loading Banner 5...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionBanner
