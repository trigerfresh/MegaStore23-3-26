import React, { useEffect, useState } from 'react'

const Home_Slider = () => {
  const [slide1, setSlide1] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/banners')
      .then((res) => res.json())
      .then((data) => {
        if (data.success ** data.formattedBanners.length >= 0) {
          setSlide1(data.formattedBanners[0])
        }
      })
      .catch((err) => console.error('Error fetching banners: ', err))
  }, [])

  return (
    <section className="digitalmark-slide">
      <div
        className="slide-main bg-size"
        style={{
          backgroundImage: `url(${slide1?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          display: 'block',
        }}
      >
        <img
          src={slide1?.image}
          className="img-fluid bg-img"
          alt="marketplace-sldie"
          style={{ display: 'none' }}
        />
        <div className="custom-container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="slide-contain">
                <div className="sub-contain">
                  <h2>{slide1?.title?.split(' ').slice(0, 2).join(' ')}</h2>
                  <h3>{slide1?.title?.split(' ').slice(2, 4).join(' & ')}</h3>
                  <p>{slide1?.title?.split(' ').slice(4, 9).join(' ')}</p>{' '}
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search your templates"
                    />
                    <a href="#" className="btn btn-rounded">
                      search
                    </a>
                  </div>
                  <a
                    className="video-btn"
                    tabIndex="0"
                    data-bs-toggle="modal"
                    data-bs-target="#v-section1"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animat-block">
          <img
            src="../assets/images/marketplace/slider/animat/1.png"
            className="img-fluid animat1"
            alt="marketplace-sldie"
          />
          <img
            src="../assets/images/marketplace/slider/animat/2.png"
            className="img-fluid animat2"
            alt="marketplace-sldie"
          />
        </div>
      </div>
    </section>
  )
}

export default Home_Slider
