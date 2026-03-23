import React from 'react'
import { useEffect, useRef } from 'react'
import { Modal } from 'bootstrap'

const NewsletterPopup = ({ show, onClose }) => {
  const modalRef = useRef(null)
  const modalInstance = useRef(null)

  useEffect(() => {
    if (show) {
      modalInstance.current = new Modal(modalRef.current)
      modalInstance.current.show()
    } else {
      if (modalInstance.current) {
        modalInstance.current.hide()
      }
    }
  }, [show])

  const handleClose = () => {
    if (modalInstance.current) {
      modalInstance.current.hide()
      modalInstance.current.dispose()
    }

    // 🧹 FULL CLEANUP (important)
    document.body.classList.remove('modal-open')
    document.body.style.overflow = 'auto'
    document.body.style.paddingRight = '0px'
    document.body.style.pointerEvents = 'auto'

    // remove any leftover backdrop
    document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove())

    // remove stuck modal styles
    const modalEl = modalRef.current
    if (modalEl) {
      modalEl.style.display = 'none'
      modalEl.classList.remove('show')
      modalEl.setAttribute('aria-hidden', 'true')
    }

    onClose()
  }

  return (
    <div
      className="modal fade bd-example-modal-lg theme-modal"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
      ref={modalRef}
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
                        onClick={handleClose}
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
                            required="required"
                          />
                          <button
                            type="submit"
                            className="btn btn-theme btn-normal btn-sm "
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
                      src="../assets/images/subscribe/2.jpg"
                      alt="newsletterimg"
                      className="img-fluid bg-img"
                      style={{
                        height: '400px',
                        width: '400px',
                      }}
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

export default NewsletterPopup
