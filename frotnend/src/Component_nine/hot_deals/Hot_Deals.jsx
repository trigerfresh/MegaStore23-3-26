import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultImg from './1.jpg'

const Hot_Deals = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [slide1, setSlide1] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/special')
        const data = await res.json()

        // --- SHUFFLE LOGIC START ---
        // Hum data ko copy karke shuffle karenge taaki original data mutate na ho
        const shuffled = [...data].sort(() => 0.5 - Math.random())

        // Shuffle ke baad sirf pehle 4 products lenge
        const limitedProducts = shuffled.slice(0, 4)
        // --- SHUFFLE LOGIC END ---

        setProducts(limitedProducts)
        if (limitedProducts.length > 0) setSelectedProduct(limitedProducts[0])
      } catch (err) {
        console.error('Error fetching special products:', err)
      }
    }

    fetchProducts()
  }, [])
  useEffect(() => {
    fetch('http://localhost:4000/api/offer-banners')
      .then((res) => res.json())
      .then((data) => {
        setSlide1(data[2])
      })
      .catch((err) => console.error(err))
  }, [])

  const renderTitle = (title) => {
    if (!title) return null
    const words = title.split(' ')
    const h3 = words.slice(0, 2).join(' ')
    const h4 = words.slice(2).join(' ')
    return (
      <>
        <h3>{h3}</h3>
        <h4>{h4}</h4>
      </>
    )
  }

  const sliderSettings = {
    dots: false,
    infinite: products.length > 3, // Agar 4 se kam hain toh loop nahi karega
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3, // 4 products hain toh 3 show karna safe hai
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  if (!selectedProduct) return null

  return (
    <section className="hot-deal section-big-pb-space m-2">
      <div className="title3 title-big b-g-white text-left">
        <h4>today's hot deal</h4>
      </div>
      <div className="container-fluid">
        <div className="row align-items-stretch">
          <div className="col-lg-9 d-flex">
            <div
              className="row align-items-center p-1 w-100 h-100"
              style={{ background: '#f2f2f2', margin: 0 }}
            >
              <div className="col-lg-6 text-center pe-4">
                <img
                  src={selectedProduct.image1 || defaultImg}
                  alt={selectedProduct.title}
                  className="img-fluid"
                  style={{ height: '450px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.src = defaultImg
                  }}
                />
              </div>

              <div className="col-lg-4 d-flex align-items-center">
                <div className="w-100 text-start">
                  <h2 className="mb-3" style={{ color: '#444' }}>
                    {selectedProduct.title}
                  </h2>
                  <ul
                    className="rating d-flex ps-0 mb-2"
                    style={{ listStyle: 'none' }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <li key={i}>
                        <i className="fa fa-star text-warning"></i>
                      </li>
                    ))}
                    <li>
                      <i className="fa fa-star-o text-warning"></i>
                    </li>
                  </ul>
                  <p className="mt-3">{selectedProduct.productDescription}</p>
                  <button className="btn btn-normal btn-md mt-3">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="col-lg-2">
                <div
                  className="hot-deal-slider-wrapper"
                  style={{ height: '400px' }}
                >
                  <Slider {...sliderSettings}>
                    {products.map((product) => (
                      <div key={product.id} className="p-1">
                        <div
                          onClick={() => setSelectedProduct(product)}
                          style={{
                            cursor: 'pointer',
                            padding: '5px',
                            backgroundColor: '#fff',
                            border:
                              selectedProduct.id === product.id
                                ? '2px solid #ff4c3b'
                                : '2px solid transparent',
                          }}
                        >
                          <img
                            src={product.image1 || defaultImg}
                            alt={product.title}
                            className="img-fluid mx-auto"
                            style={{ height: '90px', objectFit: 'contain' }}
                            onError={(e) => {
                              e.currentTarget.src = defaultImg
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 d-flex">
            <div
              className="collection-banner-main p-center text-center w-100"
              style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '450px',
              }}
            >
              <div
                className="collection-img bg-size"
                style={{
                  backgroundImage: `url(${slide1?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                }}
              >
                <img
                  src={slide1?.image}
                  style={{ display: 'none' }}
                  alt={slide1?.title}
                />
              </div>

              <div
                className="collection-banner-contain"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  top: '-38%',
                }}
              >
                <div>
                  {renderTitle(slide1?.title)}
                  <div className="shop mt-3">
                    <a href="#!" className="btn btn-solid btn-sm">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hot_Deals
