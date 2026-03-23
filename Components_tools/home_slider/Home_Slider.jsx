import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home_Slider = () => {
  const [banners, setBanners] = useState([])

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  const sliderImages = [
    '/assets/images/tools/slider/1.png',
    '/assets/images/tools/slider/2.png',
    '/assets/images/tools/slider/3.png',
  ]

  useEffect(() => {
    fetch('http://localhost:4000/api/banners')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBanners(data.formattedBanners.slice(0, 3))
        }
      })
      .catch((err) => console.error('Error fetching banners:', err))
  }, [])

  return (
    <section className="tools-slide home-slide">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <section
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // minHeight: '450px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 8%',
                }}
              >
                {/* LEFT TEXT */}
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      color: '#ff4c3b',
                      fontSize: '48px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                    }}
                  >
                    {banner.title.split(' ').slice(0, 2).join(' ')}
                  </h2>

                  <h3
                    style={{
                      fontSize: '34px',
                      fontWeight: '600',
                      marginBottom: '15px',
                    }}
                  >
                    {banner.title.split(' ').slice(2, 5).join(' ')}
                  </h3>

                  <p
                    style={{
                      color: '#777',
                      fontSize: '16px',
                      lineHeight: '26px',
                      marginBottom: '25px',
                    }}
                  >
                    {/* In addition to genuine tool parts, we also supply a wide
                    range of high quality tool parts from after makers. */}

                    {banner.title.split(' ').slice(5).join(' ')}
                  </p>

                  <button
                    style={{
                      background: '#ff4c3b',
                      border: 'none',
                      padding: '12px 35px',
                      color: '#fff',
                      borderRadius: '30px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    Shop Now
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div style={{ flex: 1, textAlign: 'right' }}>
                  <img
                    src={sliderImages[index]}
                    alt="slider"
                    style={{
                      maxHeight: '300px',
                      width: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Home_Slider
