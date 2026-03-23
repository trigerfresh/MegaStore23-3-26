import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
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

  const blogs = [
    {
      img: '../assets/images/layout-1/blog/1.jpg',
      title: 'we bring you the best',
    },
    {
      img: '../assets/images/layout-1/blog/2.jpg',
      title: 'we know that buying items',
    },
    {
      img: '../assets/images/layout-1/blog/3.jpg',
      title: 'Latest News Post',
    },
  ]

  return (
    <section className="blog">
      <div className="title3">
        <h4>latest blog</h4>
      </div>

      <div className="container">
        <div className="row">
          <div className="col pr-0">
            <div className="blog-slide no-arrow">
              {/* ✅ REAL SLIDER */}
              <Slider {...settings}>
                {blogs.map((blog, index) => (
                  <div key={index}>
                    <div style={{ width: '100%', display: 'inline-block' }}>
                      <div className="blog-contain">
                        <div className="blog-img">
                          <a href="#">
                            <img
                              src={blog.img}
                              alt="blog"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>

                        <div className="blog-details">
                          <a href="#">
                            <h4>{blog.title}</h4>
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur eleifend a massa rhoncus gravida.
                          </p>
                          <span>
                            <a href="#">read more</a>
                          </span>
                        </div>

                        <div className="blog-label">
                          <p>25 july 2018</p>
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

export default Blog
