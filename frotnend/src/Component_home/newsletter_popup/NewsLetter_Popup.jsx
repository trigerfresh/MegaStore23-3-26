import React from 'react'

const NewsLetter_Popup = ({ show, onClose }) => {
  if (!show) return null
  return (
    <div
      className="modal fade bd-example-modal-lg blackfriday-modal theme-modal show"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      style={{ paddingRight: '15px', display: 'block' }}
    >
      <div className="modal-dialog  modal-dialog-centered" role="document">
        <div className="modal-content ">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
            <div className="rainbow">
              <span></span>
              <span></span>
            </div>
            <div
              className="offer-content  bg-size"
              style={{
                backgroundImage: `url("../assets/images/theme-modal/black-friday.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                display: 'block',
              }}
            >
              <img
                src="../assets/images/theme-modal/black-friday.jpg"
                className="img-fluid bg-img"
                alt=""
                style={{ display: 'none' }}
              />
              <div>
                <div>
                  <h2>
                    <span>up to </span>80%
                  </h2>
                  <div className="lable">get 30% off + free shipping</div>
                  <h3>black friday</h3>
                  <div className="timer">
                    <p id="demo4">
                      <span>
                        126<span className="timer-cal">Days</span>
                      </span>
                      <span>
                        6<span className="timer-cal">Hrs</span>
                      </span>
                      <span>
                        22<span className="timer-cal">Min</span>
                      </span>
                      <span>
                        53<span className="timer-cal">Sec</span>
                      </span>{' '}
                    </p>
                  </div>
                  <h4>Friday, 26 November 2021</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter_Popup
