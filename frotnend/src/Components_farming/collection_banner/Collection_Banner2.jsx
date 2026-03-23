import React from 'react'

const Collection_Banner2 = () => {
  return (
    <section className="app-download section-mb-space">
      <div className="custom-container">
        <div className="row">
          <div className="col-12">
            <div
              className="app-download-main bg-size"
              style={{
                backgroundImage:
                  'url("../assets/images/farming/app-download/1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                display: 'block',
              }}
            >
              <img
                src="../assets/images/farming/app-download/1.jpg"
                alt="app-download"
                className="img-fluid bg-img"
                style={{ display: 'none' }}
              />
              <div className="app-download-contian">
                <div>
                  <h2>reddy to get shopping?</h2>
                  <h3>download the bigdeal App Now</h3>
                  <a href="#" className="btn btn-rounded btn-md">
                    download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection_Banner2
