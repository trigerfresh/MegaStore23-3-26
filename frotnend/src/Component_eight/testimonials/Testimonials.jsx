import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  const testimonialData = [
    {
      id: 1,
      name: 'mark jecno',
      img: '../assets/images/testimonial/1.jpg',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
    },
    {
      id: 2,
      name: 'mark jecno',
      img: '../assets/images/testimonial/2.jpg',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
    },
    {
      id: 3,
      name: 'mark jecno',
      img: '../assets/images/testimonial/3.jpg',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
    },
  ]

  return (
    <section
      className="testimonial block section-mb-space bg-size"
      style={{
        backgroundImage: "url('/assets/images/furniture1/testimonial/1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'block',
      }}
    >
      <img
        src="../assets/images/furniture1/testimonial/1.jpg"
        alt="testimonial"
        className="img-fluid bg-img"
        style={{ display: 'none' }}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings} className="slide-1 no-arrow">
              {testimonialData.map((item) => (
                <div key={item.id}>
                  <div className="testimonial-contain">
                    <div className="media">
                      <div className="testimonial-img">
                        <img
                          src={item.img}
                          className="img-fluid rounded-circle"
                          alt="testimonial"
                        />
                      </div>
                      <div className="media-body">
                        <h5>{item.name}</h5>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
