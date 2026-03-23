import React, { useEffect, useState } from 'react'

const Collection_Banners = () => {
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
    const h3 = words.slice(0, 3).join(' ')
    const h4 = words.slice(2).join(' ')

    return (
      <>
        <h3>{h3}</h3>
        <h4>{h4}</h4>
      </>
    )
  }

  return (
    <section className="collection-banner b-g-white section-py-space ">
      <div className="custom-container">
        <div className="row collection-p3">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                {slide1 ? (
                  <div className="collection-banner-main banner-style6 collection-color6 p-center p-top text-center  banner-14">
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
                        className="img-fluid bg-img  "
                        alt={slide1.title}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain ">
                      <div>
                        {renderTitle(slide1?.title)}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-sm"
                        >
                          sop now
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Loading Banner 1...</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              {slide2 ? (
                <div className="col-md-6">
                  <div className="collection-banner-main banner-style6 collection-color7 p-left text-center banner-13">
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
                    <div className="collection-banner-contain ">
                      <div>
                        {renderTitle(slide2?.title)}

                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-sm"
                        >
                          sop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading Banner2 ...</p>
              )}

              {slide3 ? (
                <div className="col-md-6">
                  <div className="collection-banner-main banner-style6 collection-color8 p-left text-center banner-13">
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
                    <div className="collection-banner-contain ">
                      <div>
                        {renderTitle(slide3.title)}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-sm"
                        >
                          sop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading banner 3...</p>
              )}

              {slide4 ? (
                <div className="col-md-12">
                  <div className="collection-banner-main banner-style6 bg-color0  p-left text-center banner-13">
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
                    <div className="collection-banner-contain ">
                      <div>
                        {renderTitle(slide4.title)}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-sm"
                        >
                          sop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p> Loading banner4...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection_Banners
