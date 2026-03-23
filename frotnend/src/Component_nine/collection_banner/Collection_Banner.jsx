import React, { useEffect, useState } from 'react'

const Collection_Banner = () => {
  const [slide1, setSlide1] = useState(null)
  const [slide2, setSlide2] = useState(null)
  const [slide3, setSlide3] = useState(null)
  const [slide4, setSlide4] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setSlide1(data[0])
        setSlide2(data[1])
        setSlide3(data[2])
        setSlide4(data[3])
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
        <div className="row collection-p2">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className="collection-banner-main p-left banner-13 banner-style1 collection-color1">
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
                      className="img-fluid bg-img  "
                      alt={slide4?.title}
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div className="collection-banner-contain text-center">
                    <div>
                      {/* <h3>get a discount</h3>
                      <h4>terry makeup</h4> */}
                      {renderTitle(slide1?.title)}
                      <div className="shop">
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-solid btn-sm"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="collection-banner-main p-left banner-13 banner-style1 collection-color2">
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
                      className="img-fluid bg-img  "
                      alt={slide2?.title}
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div className="collection-banner-contain text-center">
                    <div>
                      {/* <h3>best natural</h3>
                      <h4>body care</h4> */}
                      {renderTitle(slide2?.title)}
                      <div className="shop">
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-solid btn-sm"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="collection-banner-main p-left banner-13 banner-style1 collection-color3">
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
                      src={slide1?.image}
                      className="img-fluid bg-img  "
                      alt={slide1?.title}
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div className="collection-banner-contain text-center">
                    <div>
                      {renderTitle(slide1?.title)}
                      <div className="shop">
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-solid btn-sm"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="collection-banner-main p-left p-top p-center banner-14 banner-style1">
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
                  className="img-fluid bg-img  "
                  alt={slide3?.title}
                  style={{ display: 'none' }}
                />
              </div>
              <div className="collection-banner-contain  p-top text-center ">
                <div>
                  {renderTitle(slide3?.title)}

                  <div className="shop">
                    <a
                      href="product-page(left-sidebar).html"
                      className="btn btn-solid btn-sm"
                    >
                      shop now
                    </a>
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

export default Collection_Banner
