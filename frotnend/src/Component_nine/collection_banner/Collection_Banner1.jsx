import React, { useEffect, useState } from 'react'

const Collection_Banner1 = () => {
  const [slide1, setSlide1] = useState(null)
  const [slide2, setSlide2] = useState(null)

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        fetch('http://localhost:4000/api/offer-banners')
          .then((res) => res.json())
          .then((data) => {
            setSlide1(data[2])
            setSlide2(data[4])
            console.log(data[3], data[4])
          })
          .catch((err) => console.error(err))
      } catch (err) {
        console.log(err)
      }
    }
    fetchBanners()
  }, [])

  const renderTitle = (title) => {
    if (!title) return null

    const words = title.split(' ')
    const mid = Math.ceil(words.length / 2)

    return (
      <>
        <h3>{words.slice(0, mid).join(' ')}</h3>
        <h4>{words.slice(mid).join(' ')}</h4>
      </>
    )
  }

  return (
    <section className="collection-banner ">
      <div className="custom-container">
        <div className="row layout-3-collection">
          <div className="col-md-6">
            <div className="collection-banner-main p-left  banner-13 text-center banner-style1">
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
          <div className="col-md-6 ">
            <div className="collection-banner-main p-left text-center banner-13 banner-style1  collection-color4 ">
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
                  alt={slide2?.image}
                  style={{ display: 'none' }}
                />
              </div>
              <div className="collection-banner-contain text-center">
                <div>
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
        </div>
      </div>
    </section>
  )
}

export default Collection_Banner1
