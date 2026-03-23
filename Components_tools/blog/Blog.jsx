import React, { useState } from 'react'

const Blog = () => {
  // ✅ Slider State
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideWidth = 412
  const totalSlides = 4

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1))
  }

  return (
    <section className="blog section-big-pb-space">
      <div className="title8">
        <h4>letest blog</h4>
      </div>

      <div className="custom-container">
        <div className="row">
          <div className="col pr-0">
            <div className="blog-slide-4 no-arrow slick-initialized slick-slider">
              {/* Previous Button */}
              <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style={{ display: 'inline-block' }}
                onClick={prevSlide}
              >
                Previous
              </button>

              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: '4532px',
                    transform: `translate3d(-${currentIndex * slideWidth}px, 0px, 0px)`,
                    transition: 'transform 0.5s ease',
                  }}
                >
                  {/* Slide 1 */}
                  <div
                    className="slick-slide"
                    style={{ width: '412px', display: 'inline-block' }}
                  >
                    <div className="blog-contain">
                      <div className="blog-img">
                        <img
                          src="../assets/images/tools/blog/1.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="blog-details-2 text-center">
                        <h4>so you've bought tools ... Now What?</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="blog-label1">
                        27 <br />
                        nov
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div
                    className="slick-slide"
                    style={{ width: '412px', display: 'inline-block' }}
                  >
                    <div className="blog-contain">
                      <div className="blog-img">
                        <img
                          src="../assets/images/tools/blog/2.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="blog-details-2 text-center">
                        <h4>7 Simple Secrets to Totally Rocking Your Tools</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="blog-label1">
                        27 <br />
                        nov
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div
                    className="slick-slide"
                    style={{ width: '412px', display: 'inline-block' }}
                  >
                    <div className="blog-contain">
                      <div className="blog-img">
                        <img
                          src="../assets/images/tools/blog/3.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="blog-details-2 text-center">
                        <h4>Meet the Steve Jobs of the Tools Industry</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="blog-label1">
                        27 <br />
                        nov
                      </div>
                    </div>
                  </div>

                  {/* Slide 4 */}
                  <div
                    className="slick-slide"
                    style={{ width: '412px', display: 'inline-block' }}
                  >
                    <div className="blog-contain">
                      <div className="blog-img">
                        <img
                          src="../assets/images/tools/blog/4.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="blog-details-2 text-center">
                        <h4>9 Signs You Sell Tools for a Living</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="blog-label1">
                        27 <br />
                        nov
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style={{ display: 'inline-block' }}
                onClick={nextSlide}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
