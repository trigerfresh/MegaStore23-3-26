import React from 'react'
import Slider from 'react-slick'

// Import slick css in your index.js or here
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Set to false to match the clean look in your screenshots
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  const serviceData = [
    {
      title: 'Free Shipping',
      desc: 'Free Shipping World Wide',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', fill: '#d48a7b' }}>
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13.5-8.5l1.96 2.5H17V9.5h2.5zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      ),
    },
    {
      title: '24 Services',
      desc: 'Online Service For 24 X 7',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', fill: '#d48a7b' }}>
          <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.36 8-5.29 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
        </svg>
      ),
    },
    {
      title: 'Festival Offer',
      desc: 'Festival Offer Discount',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', fill: '#d48a7b' }}>
          <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
        </svg>
      ),
    },
    {
      title: 'Online Payment',
      desc: 'Square Payment',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', fill: '#d48a7b' }}>
          <path d="M21 18H3V6h18v12zm0-14H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 8H5v2h2V8zm12 0H9v2h10V8zm-12 4H5v2h2v-2zm12 0H9v2h10v-2z" />
        </svg>
      ),
    },
    {
      title: '24 Services',
      desc: 'Online Service For 24 X 7',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', fill: '#d48a7b' }}>
          <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.36 8-5.29 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      className="services1 section-py-space"
      style={{ backgroundColor: '#fff', borderTop: '1px solid #f1f1f1' }}
    >
      <div className="custom-container">
        <div className="row">
          <div className="col-12">
            <div className="services-slide4">
              <Slider {...settings}>
                {serviceData.map((item, index) => (
                  <div key={index}>
                    <div
                      style={{
                        padding: '30px 15px',
                        borderRight:
                          index !== serviceData.length - 1
                            ? '1px solid #f1f1f1'
                            : 'none',
                      }}
                    >
                      <div
                        className="media"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <div
                          className="icon-wrapper"
                          style={{ marginRight: '20px' }}
                        >
                          {item.icon}
                        </div>
                        <div className="media-body">
                          <h4
                            style={{
                              fontSize: '16px',
                              fontWeight: '700',
                              color: '#333',
                              margin: '0 0 2px 0',
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              fontSize: '14px',
                              color: '#888',
                              margin: 0,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
