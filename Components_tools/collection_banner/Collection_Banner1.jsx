import React from 'react'

const Collection_Banner1 = () => {
  return (
    <>
      {/* Banner Section */}
      <section
        className="video-banner bg-size"
        style={{
          backgroundImage: 'url("../assets/images/tools/video-banner/1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          display: 'block',
        }}
      >
        <img
          src="../assets/images/tools/video-banner/1.jpg"
          alt="video-banner"
          className="img-fluid bg-img"
          style={{ display: 'none' }}
        />
        <div className="custom-container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="video-banner-contain">
                <div>
                  <a
                    className="video-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#v-section1"
                    href="#!"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <h3>
                    video instructions how to pack for the most important tools
                  </h3>
                  <h2>power to perform</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Video Modal Start --- */}
      <div className="modal modal-v-sec fade" id="v-section1" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Body / Content */}
            <div className="modal-body p-0">
              {/* Close Button (Optional but recommended) */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '-30px',
                  filter: 'invert(1)',
                }}
              ></button>

              <iframe
                width="100%"
                height="450px"
                src="https://www.youtube.com/embed/eUsoKcD6f14"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* --- Video Modal End --- */}
    </>
  )
}

export default Collection_Banner1
