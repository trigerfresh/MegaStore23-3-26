import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Blog = () => {
  // Slider settings
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  const blogData = [
    {
      id: 1,
      title: 'Simple Guidance Kids.',
      img: '../assets/images/kids/blog/1.jpg',
      date: '27',
      month: 'nov',
    },
    {
      id: 2,
      title: 'fashion suitable.',
      img: '../assets/images/kids/blog/2.jpg',
      date: '27',
      month: 'nov',
    },
    {
      id: 3,
      title: 'the hidden agenda.',
      img: '../assets/images/kids/blog/3.jpg',
      date: '27',
      month: 'nov',
    },
    {
      id: 4,
      title: 'Simple Guidance Kids.',
      img: '../assets/images/kids/blog/4.jpg',
      date: '27',
      month: 'nov',
    },
    {
      id: 5,
      title: 'Kids Fashion Famous.',
      img: '../assets/images/kids/blog/5.jpg',
      date: '27',
      month: 'nov',
    },
  ]

  return (
    <>
      <div className="title8 section-big-my-space ">
        <h4>letest blog</h4>
      </div>
      <section className="blog section-big-pb-space">
        <div className="custom-container">
          <div className="row">
            <div className="col pr-0">
              {/* Slider Component starts here */}
              <Slider {...settings} className="blog-slide-4">
                {blogData.map((item) => (
                  <div key={item.id}>
                    <div style={{ width: '100%', display: 'inline-block' }}>
                      <div className="blog-contain">
                        <div className="blog-img">
                          <a href="blog-details.html">
                            <img
                              src={item.img}
                              alt="blog"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="blog-details-2">
                          <a href="blog-details.html">
                            <h4>{item.title}</h4>
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur eleifend a massa rhoncus gravida.
                          </p>
                          <a
                            href="blog-details.html"
                            className="btn btn-normal btn-xs btn-outline"
                          >
                            read more
                          </a>
                        </div>
                        <div className="blog-label1 square">
                          {item.date} <br />
                          {item.month}
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
    </>
  )
}

export default Blog
