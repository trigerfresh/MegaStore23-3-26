import React from 'react'

const DiscountBanner = () => {
  return (
    <>
      <section className="deal-banner ">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="deal-banner-containe">
                <h2>save up to 30% to 40% off</h2>
                <h1>omg! just look at the great deals!</h1>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 ">
              <div className="deal-banner-containe">
                <div className="deal-btn">
                  <a
                    href="category-page(left-sidebar).html"
                    className="btn-white"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="discount-banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="discount-banner-contain">
                <h2>Discount on every single item on our site.</h2>
                <h1>
                  <span>OMG! Just Look at the</span> <span>great Deals!</span>
                </h1>
                <div className="rounded-contain ">
                  <div className="rounded-subcontain">
                    How does it feel, when you see great discount deals for each
                    product?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DiscountBanner
