import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FearturedBrands = () => {
  // Slider settings to match "brand-slide12" behavior
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  const brands = [
    { id: 1, img: '../assets/images/mega-store/brand/1.png' },
    { id: 2, img: '../assets/images/mega-store/brand/2.png' },
    { id: 3, img: '../assets/images/mega-store/brand/3.png' },
    { id: 4, img: '../assets/images/mega-store/brand/4.png' },
    { id: 5, img: '../assets/images/mega-store/brand/5.png' },
    { id: 6, img: '../assets/images/mega-store/brand/6.png' },
    { id: 7, img: '../assets/images/mega-store/brand/7.png' },
    { id: 7, img: '../assets/images/mega-store/brand/7.png' },
    { id: 3, img: '../assets/images/mega-store/brand/3.png' },
    { id: 4, img: '../assets/images/mega-store/brand/4.png' },
    { id: 5, img: '../assets/images/mega-store/brand/5.png' },
  ]

  return (
    <>
      <div className="title8 section-mb-space ">
        <h4>featured brands</h4>
      </div>

      <section className="brand-second section-big-mb-space">
        <div className="container-fluid">
          <div className="row brand-block">
            <div className="col-12">
              <div className="brand-slide12 no-arrow mb--5">
                <Slider {...settings}>
                  {brands.map((brand) => (
                    <div key={brand.id}>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <div className="brand-box">
                          <img
                            src={brand.img}
                            alt="brand"
                            className="img-fluid"
                          />
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
    </>
  )
}

export default FearturedBrands
