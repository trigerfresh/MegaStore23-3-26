import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Banner2 = () => {
  const [banner, setBanner] = useState(null)

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/offer-banners')

        // API returns array → take first banner
        if (res.data && res.data.length > 0) {
          setBanner(res.data[5])
        }
      } catch (err) {
        console.error('Error fetching banner:', err)
      }
    }

    fetchBanner()
  }, [])

  if (!banner) return <p>Loading banner...</p>

  const titleWords = banner.title ? banner.title.split(' ') : []

  return (
    <section
      className="sale-banenr banner-style1 bg-size"
      style={{
        backgroundImage: `url(${banner.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <img
        src={banner.image}
        alt="sale-banner"
        className="img-fluid bg-img"
        style={{ display: 'none' }}
      />

      <div className="custom-container">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="sale-banenr-contain text-center p-left">
              <div>
                <h4>{titleWords.slice(0, 4).join(' ')}</h4>
                <h2>{titleWords.slice(4, 6).join(' ')}</h2>
                <h3>{titleWords.slice(6).join(' ')}</h3>

                <a href={banner.url || '#'} className="btn btn-rounded">
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

export default Banner2
