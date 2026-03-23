import React from 'react'

const Parallex_Banner = () => {
  return (
    <section className="section-big-pt-space">
      <div
        className="full-banner parallax text-left p-left bg-size"
        style={{
          backgroundImage:
            'url("../assets/images/layout-6/parallax-banner/parelex.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          display: 'block',
        }}
      >
        <img
          src="../assets/images/layout-6/parallax-banner/parelex.jpg"
          alt=""
          className="bg-img "
          style={{ display: 'none' }}
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="banner-contain">
                <h2>2019</h2>
                <h3>food market</h3>
                <h4>special offer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parallex_Banner
