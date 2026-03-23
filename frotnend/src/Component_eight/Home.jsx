import { useEffect, useState } from 'react'
import Newsletter_Popup from './newsletter_popup/Newsletter_Popup'
import MainHeader from './Header/MainHeader'
import TopHeader from './Header/TopHeader'
import Navbar from './Header/Navbar'
import FurnitureSlider from './furnitureslider/FurnitureSlider'
import Services from './Services/Services'
import NewProducts from './newProducts/NewProducts'
import DiscountBanner from './discountBanner/DiscountBanner'
import CollectionBanner from './collectionBanner/CollectionBanner'
import Testimonials from './testimonials/Testimonials'
import CollectionBanner1 from './collectionBanner/CollectionBanner1'
import SpecialProducts from './specialProducts/SpecialProducts'
import CategoryProducts from './Category/CategoryProducts'
import Blog from './Blog/Blog'
import Insta from './insta/Insta'
import Category from './category/Category'
import Footer from './footer/Footer'
import CategoryProduct from './category_wise_products/CategoryProduct'
import Icons from './components/Icons'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShowPopup(true) // 👈 SHOW POPUP AFTER LOADER
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="loader-wrapper">
          <img src="/assets/images/furniture1/loader.gif" alt="loader" />
        </div>
      ) : (
        <>
          <Newsletter_Popup
            show={showPopup}
            onClose={() => setShowPopup(false)}
          />

          <div id="home_eight">
            <header id="stickyheader">
              <TopHeader />
              <MainHeader />
              <Navbar />
            </header>

            <FurnitureSlider />
            <Services />
            <NewProducts />
            <DiscountBanner />
            <CollectionBanner />
            <Testimonials />
            <CategoryProduct />
            <CollectionBanner1 />
            <SpecialProducts />
            <CategoryProducts />
            <Blog />
            <Insta />
            <Category />
            <Footer />

            <div className="mobile-fix-option">
              <Icons />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
