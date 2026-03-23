import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import defaultImg from './2.jpg'

const Deals = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/special')

        if (!res.ok) {
          throw new Error('Failed to fetch products.')
        }

        const data = await res.json()
        setProducts(data)
        console.log('Products :', data)
      } catch (err) {
        console.error('Error fetching data : ', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading products...</p>
  }

  return (
    <>
      <div className="title8 section-mb-space ">
        <h4>deal of the day</h4>
      </div>

      <section className="hotdeal-second section-big-mb-space">
        <div className="container-fluid">
          <div className="row hotdeal-block2">
            <div className="col-12">
              {/* SAME CLASS NAME — just now it's a real slider */}
              <Slider {...settings} className="hotdeal-slide3 no-arrow">
                {/* ITEM 1 */}
                {products.map((product) => (
                  <div>
                    <div className="hotdeal-box">
                      <div className="img-wrapper">
                        <a
                          href="product-page(left-sidebar).html"
                          className="bg-size"
                          style={{
                            backgroundImage: `url(${product.image1 || defaultImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            display: 'block',
                          }}
                        >
                          <img
                            src={product.image1 || defaultImg}
                            alt="hot-deal"
                            className="img-fluid bg-img"
                            style={{ display: 'none' }}
                            onError={(e) => {
                              e.currentTarget.src = defaultImg // fallback if image fails to load
                            }}
                          />
                        </a>
                      </div>
                      <div className="hotdeal-contain">
                        <div>
                          <h3>{product.title}</h3>
                          <h5>
                            {product.productDescription}{' '}
                            {/* <span className="price">$80</span> */}
                          </h5>
                          <p>{product.productDescription}</p>
                          <a
                            href="#"
                            className="btn btn-solid btn-sm add-cartnoty"
                          >
                            add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Deals
