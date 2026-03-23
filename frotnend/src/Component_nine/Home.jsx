import { useState, useEffect } from 'react'
import TopHeader from './header/TopHeader'
import Navbar from './header/Navbar'
import Home_Banner from './home_banner/Home_Banner'
import Category from './category/Category'
import Deal_Banner from './deal_banner/Deal_Banner'
import Collection_Banner from './collection_banner/Collection_Banner'
import Testimonials from './testimonials/Testimonials'
import Hot_Deals from './hot_deals/Hot_Deals'
import Collection_Banner1 from './collection_banner/Collection_Banner1'
import NewsLetter from './newsletter/NewsLetter'
import NewsLetter1 from './newsletter/NewsLetter1'
import Insta from './Insta/Insta'
import Services from './services/Services'
import NewsLetterBanner from './newsletter/NewsLetterBanner'
import Footer from './footer/Footer'
import SpecialProducts from './special_products/SpecialProducts'
import TabProductCategory from './tab_product_category/TabProductCategory'

const Home_nine = () => {
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Show loader for 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false)
      setShowModal(true) // Show newsletter modal after loader
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // const closeModal = () => setShowModal(false)

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div>
          <img
            src="../assets/images/cosmetic/loader.gif"
            alt="loader"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      </div>
    )
  }

  return (
    <>
      {showModal && <NewsLetter1 closeModal={() => setShowModal(false)} />}
      <header id="stickyheader" className="sticky">
        <TopHeader />
        <Navbar />
      </header>
      <Home_Banner />
      <Category />
      <SpecialProducts />
      <Deal_Banner />
      <Collection_Banner />
      <Testimonials />
      <Hot_Deals />
      <Collection_Banner1 />
      <TabProductCategory />
      <NewsLetter />
      <Insta />
      <Services />
      <NewsLetterBanner />
      <Footer />
      <div className="mobile-fix-option"></div>
    </>
  )
}

export default Home_nine
