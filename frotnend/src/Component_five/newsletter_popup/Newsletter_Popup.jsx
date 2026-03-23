import React from 'react'

const Newsletter_Popup = ({ show, onClose }) => {
  if (!show) return null

  return (
    <div
      className={`modal fade bd-example-modal-lg theme-modal ${show ? 'show d-block' : ''}`}
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="news-latter">
              <div className="modal-bg">
                <div className="newslatter-main">
                  <div className="offer-content">
                    <div>
                      <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={onClose}
                      ></button>

                      <h2>newsletter</h2>
                      <p>
                        Subscribe to our website mailling list <br /> and get a
                        Offer, Just for you!
                      </p>

                      <form
                        action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                        className="auth-form needs-validation"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        target="_blank"
                      >
                        <div className="form-group mx-sm-3">
                          <input
                            type="email"
                            className="form-control"
                            name="EMAIL"
                            id="mce-EMAIL"
                            placeholder="Enter your email"
                            required
                          />
                          <button
                            type="submit"
                            className="btn btn-theme btn-normal btn-sm"
                            id="mc-submit"
                          >
                            subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="imd-wrraper">
                    <img
                      src="../assets/images/layout-5/blog/2.jpg"
                      alt="newsletterimg"
                      style={{ width: '700%', height: '400px' }}
                      className="img-fluid bg-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter_Popup
