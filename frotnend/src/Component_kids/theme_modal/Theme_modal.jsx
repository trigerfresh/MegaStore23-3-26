import React from 'react'

const Theme_modal = ({ onClose }) => {
  return (
    <div
      className="modal fade bd-example-modal-lg cyber-monday theme-modal show"
      role="dialog"
      aria-modal="true"
      style={{ paddingRight: '15px', display: 'block' }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>

            <div
              className="offer-content bg-size"
              style={{
                backgroundImage: `url("/assets/images/theme-modal/1.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                display: 'block',
              }}
            >
              <img
                src="../assets/images/theme-modal/1.png"
                className="img-fluid bg-img"
                alt=""
                style={{ display: 'none' }}
              />
              <div>
                <div>
                  <h6>special offer</h6>
                  <h2>
                    cyber<span>monday</span>
                  </h2>
                  <h3>up to 50% off deal</h3>
                  <a href="#" className="btn btn-solid btn-md">
                    Use Code:CYBER25
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theme_modal
