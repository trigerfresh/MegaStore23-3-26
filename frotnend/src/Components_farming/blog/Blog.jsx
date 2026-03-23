import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 cards visible
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  const blogs = [
    { img: '1.jpg', title: 'the next big thing' },
    { img: '2.jpg', title: 'ten quick tips' },
    { img: '3.jpg', title: 'why is everyone' },
    { img: '4.jpg', title: 'trends in farming to watch' },
  ]

  return (
    <>
      <div className="title8">
        <h4>latest blog</h4>
      </div>

      <section className="blog section-big-mb-space">
        <div className="custom-container">
          <Slider {...settings} className="blog-slide-4">
            {blogs.map((item, index) => (
              <div key={index}>
                <div className="blog-contain">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img
                        src={`../assets/images/farming/blog/${item.img}`}
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a
                      href="blog-details.html"
                      className="btn btn-normal btn-xs btn-outline"
                    >
                      read more
                    </a>
                  </div>

                  <div className="blog-label1 square">
                    27 <br /> nov
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Blog
