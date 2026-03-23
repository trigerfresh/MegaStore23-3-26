import React, { useEffect, useState } from 'react'
import TopHeader from './header/TopHeader'
import MainHeader from './header/MainHeader'
import Navbar from './header/Navbar'
import Home_Slider from './home_slider/Home_Slider'
import CollectionBanner from './Banners/CollectionBanner'
import Brand from './brand/Brand'
import Custom_Containers from './containers/Custom_Containers'
import Tab_Products from './tab_product/Tab_Products'
import Services from './services/Services'
import CollectionBanner1 from './banners/CollectionBanner1'
import Tab_Products1 from './tab_product/Tab_Products1'
import Category from './category/Category'
import OfferBanner from './banners/OfferBanner'
import Category1 from './category/Category1'
import Testimonials from './testimonials/Testimonials'
import Instagram from './instagram/Instagram'
import Footer from './footer/footer'
import Special_Products from './special_products/Special_Products'
import { Link } from 'react-router-dom'
import NewsletterPopup from './newsletter_poup/NewsLeeter'
import Icons from './component/Icons'

const Home_four = () => {
  const [loading, setLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setShowPopup(true)
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
        <Navbar />
        <div className="mobile-fix-option">
          <Icons />
        </div>
      </header>
      <Home_Slider />
      <CollectionBanner />
      <Brand />
      <Custom_Containers />
      <Tab_Products />
      <Services />
      <CollectionBanner1 />
      <Tab_Products1 />
      <Category />
      <OfferBanner />
      <Category1 />
      <Special_Products />
      <Testimonials />
      <Instagram />
      <Footer />
    </>
  )
}

export default Home_four
