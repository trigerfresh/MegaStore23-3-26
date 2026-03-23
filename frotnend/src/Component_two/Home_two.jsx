import React, { useEffect, useState } from 'react'
import TopHeader from './header/TopHeader'
import MainHeader from './header/MainHeader'
import BottomHeader from './header/BottomHeader'
import Home_Slider from './home_slider/Home_Slider'
import Collection_Banner from './collection_banner/Collection_Banner'
import Top_Brands from './top_brands/Top_Brands'
import Services from './services/Services'
import Media_Banner from './media_banner/Media_Banner'
import Discount_Banner from './discount_banner/Discount_Banner'
import Collection_Banner1 from './collection_banner/Collection_Banner1'
import Category_Products from './category_products/Category_Products'
import Deal_Banners from './deal_banner/Deal_Banners'
import Category from './category_products/Category'
import Products from './products/Products'
import Blog from './blog/Blog'
import Category_Boxes from './category_products/Category_Boxes'
import Special_Products from './special_products/Special_Products'
import Testimonials from './testimonials/Testimonials'
import Instagram from './instagram/Instagram'
import Subscribe_Banners from './collection_banner/Subscribe_Banners'
import Footer from './footer/Footer'
import NewsletterPopup from './newsletterPopup/NewsletterPopup.jsx'

const Home_two = () => {
  const [loading, setLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setShowPopup(true) // 👈 Show popup after loader
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div class="loader-wrapper">
        <div>
          <img src="../assets/images/loader.gif" alt="loader" />
        </div>
      </div>
    )
  }

  return (
    <>
      <NewsletterPopup show={showPopup} onClose={() => setShowPopup(false)} />
      <header id="stickyheader" className="">
        <TopHeader />
        <MainHeader />
        <BottomHeader />
        <div className="mobile-fix-option"></div>
      </header>
      <Home_Slider />
      <Collection_Banner />
      <Top_Brands />
      <Services />
      <Media_Banner />
      <Discount_Banner />
      <Collection_Banner1 />
      <Category_Products />
      <Deal_Banners />
      <Category />
      <Products />
      <Blog />
      <Category_Boxes />
      <Special_Products />
      <Testimonials />
      <Instagram />
      <Subscribe_Banners />
      <Footer />
    </>
  )
}

export default Home_two
