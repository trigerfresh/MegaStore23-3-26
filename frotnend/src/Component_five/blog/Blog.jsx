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
        breakpoint: 991,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 420,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  // Blog data to avoid repetitive JSX
  const blogPosts = [
    {
      id: 1,
      img: '../assets/images/layout-5/blog/2.jpg',
      title: 'we know that buying items',
      date: '25 july 2018',
    },
    {
      id: 2,
      img: '../assets/images/layout-5/blog/3.jpg',
      title: 'Latest News Post',
      date: '25 july 2018',
    },
    {
      id: 3,
      img: '../assets/images/layout-5/blog/1.jpg',
      title: 'we bring you the best',
      date: '25 july 2018',
    },
    {
      id: 4,
      img: '../assets/images/layout-5/blog/5.jpg',
      title: 'Latest News Post',
      date: '25 july 2018',
    },
  ]

  return (
    <section className="blog">
      <div className="custom-container">
        <div className="row">
          <div className="col-12">
            <div className="title3">
              <h4>recent blog post</h4>
            </div>
          </div>
          <div className="col-12 pr-0">
            <div className="blog-slide-4 no-arrow">
              <Slider {...settings}>
                {blogPosts.map((post) => (
                  <div key={post.id}>
                    <div style={{ width: '100%', display: 'inline-block' }}>
                      <div className="blog-contain">
                        <div className="blog-img">
                          <a href="blog(left-sidebar).html">
                            <img
                              src={post.img}
                              alt="blog"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="blog-details">
                          <a href="blog(left-sidebar).html">
                            <h4>{post.title}</h4>
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
                          <p>{post.date}</p>
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
