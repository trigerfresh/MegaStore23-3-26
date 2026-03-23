import React, { useEffect, useState } from 'react'

const CollectionBanner1 = () => {
  const [slide1, setSlide1] = useState(null) // furniture6.jpg
  const [slide2, setSlide2] = useState(null) // furniture7.jpg

  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setSlide1(data[4])
        setSlide2(data[5])
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
    <section className="collection-banner layout-3">
      <div className="custom-container">
        <div className="row layout-3-collection">
          {/* Slide 1 */}
          <div className="col-md-6">
            {slide1 ? (
              <div className="collection-banner-main banner-12 banner-style3 text-center p-right">
                <div
                  className="collection-img bg-size"
                  style={{
                    backgroundImage: `url(${slide1.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    display: 'block',
                  }}
                />
                <div className="collection-banner-contain">
                  <div>
                    {renderTitle(slide1.title)}
                    <a
                      href="product-page(left-sidebar).html"
                      className="btn btn-rounded btn-xs"
                    >
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading Slide 1...</p>
            )}
          </div>

          {/* Slide 2 */}
          <div className="col-md-6">
            {slide2 ? (
              <div className="collection-banner-main banner-12 banner-style3 text-center p-right">
                <div
                  className="collection-img bg-size"
                  style={{
                    backgroundImage: `url(${slide2.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    display: 'block',
                  }}
                />
                <div className="collection-banner-contain">
                  <div>
                    {renderTitle(slide2.title)}
                    <a
                      href="product-page(left-sidebar).html"
                      className="btn btn-rounded btn-xs"
                    >
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading Slide 2...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionBanner1
