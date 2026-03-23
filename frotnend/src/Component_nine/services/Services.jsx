import React from 'react'
import Slider from 'react-slick'

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
    arrows: false, // Usually false for this specific section in the theme
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  }

  const serviceData = [
    {
      title: 'free shipping',
      desc: 'Free Shipping World Wide',
      icon: (
        <svg
          version="1.1"
          viewBox="0 0 490.667 490.667"
          style={{ width: '40px', fill: '#f78195' }}
        >
          <path d="M192,192h-21.333v42.667H192c11.776,0,21.333-9.579,21.333-21.333S203.776,192,192,192z" />
          <path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333S380.608,0,245.333,0z M103.915,131.989C138.581,88.789,190.123,64,245.333,64s106.752,24.789,141.419,67.989c3.691,4.587,2.965,11.307-1.643,14.997c-1.963,1.579-4.309,2.347-6.677,2.347c-3.115,0-6.208-1.365-8.32-3.989C339.52,107.2,294.037,85.333,245.333,85.333s-94.187,21.867-124.8,60.011c-3.669,4.608-10.389,5.333-14.976,1.643C100.949,143.296,100.224,136.576,103.915,131.989z" />
        </svg>
      ),
    },
    {
      title: '24 services',
      desc: 'Online Service For 24 X 7',
      icon: (
        <svg
          viewBox="0 -5 512.00031 512"
          style={{ width: '40px', fill: '#f78195' }}
        >
          <path d="m500.21875 277.257812-35.714844-41.15625c-10.683594-12.316406-14.394531-29.199218-9.878906-44.859374l14.304688-49.515626c9.074218-31.441406-15.230469-62.585937-47.9375-61.414062l-54.304688 1.949219c-15.957031.570312-31.15625-6.8125-40.566406-19.699219l-31.277344-42.828125c-19.207031-26.3125-58.480469-26.3125-77.6875 0l-31.277344 42.828125c-9.410156 12.886719-24.609375 20.269531-40.566406 19.699219l-54.304688-1.949219" />
        </svg>
      ),
    },
    {
      title: 'festival offer',
      desc: 'New Online Special Festival Offer',
      icon: (
        <svg
          viewBox="0 0 512.003 512.003"
          style={{ width: '40px', fill: '#f78195' }}
        >
          <path d="M477.958,262.633c-2.06-4.215-2.06-9.049,0-13.263l19.096-39.065c10.632-21.751,2.208-47.676-19.178-59.023" />
        </svg>
      ),
    },
    {
      title: 'online payment',
      desc: 'Online Special Festival Offer',
      icon: (
        <svg
          viewBox="0 0 511.84 511.84"
          style={{ width: '40px', fill: '#f78195' }}
        >
          <path d="m229.553 503.941c0 4.363 3.537 7.899 7.899 7.899h264.834c4.363 0 7.899-3.537 7.899-7.899v-28.505h-280.632z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="services1 services-transparent section-py-space">
      <div className="custom-container">
        <div className="row">
          <div className="col-12">
            <div className="services-slide4">
              <Slider {...settings}>
                {serviceData.map((item, index) => (
                  <div key={index}>
                    <div
                      className="services-box"
                      style={{ textAlign: 'center', padding: '20px 10px' }}
                    >
                      {/* ICON ON TOP */}
                      <div
                        className="icon-wrapper"
                        style={{
                          marginBottom: '15px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {item.icon}
                      </div>

                      {/* TEXT BELOW */}
                      <div className="media-body">
                        <h4
                          style={{
                            textTransform: 'capitalize',
                            fontSize: '16px',
                            fontWeight: '600',
                            marginBottom: '5px',
                            color: '#222',
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            margin: 0,
                            fontSize: '14px',
                            color: '#777',
                            lineHeight: '1.2',
                          }}
                        >
                          {item.desc}
                        </p>
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
