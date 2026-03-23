import React, { useEffect, useState } from 'react'
import TopHeader from './header/TopHeader'
import Navbar from './header/Navbar'
import MainHeader from './header/MainHeader'
import Appliance_Slider from './appliance_slider/Appliance_Slider'
import Special_Products from './special_products/Special_Products'
import Collection_Banner from './collection_banner/Collection_Banner'
import TopBrandPanel from './brand_panels/TopBrandPanel'
import Services from './services/Services'
import Collection_Banner1 from './collection_banner/Collection_Banner1'
import CategoryProductTab from './category_product_tab/CategoryProductTab'
import CategoryProductTab1 from './category_product_tab/CategoryProductTab1'
import Testimonials from './testimonials/Testimonials'
import Insta from './insta/Insta'
import NewsletterBanner from './collection_banner/NewsletterBanner'
import Footer from './footer/Footer'
import Hot_Deals from './hot_deals/Hot_Deals'
import Blog from './blog/blog'
import MediaBannerTab from './collection_banner/MediaBannerTab'
import Newsletter_Popup from './newsletter_popup/Newsletter_Popup'

const Home_five = () => {
  const [loading, setLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setShowPopup(true) // show popup after loader
    }, 2000) // 2 seconds loader

    return () => clearTimeout(timer)
  }, [])

  // Show loader first
  if (loading) {
    return (
      <div className="loader-wrapper">
        <div>
          <img src="/assets/images/loader.gif" alt="loader" />
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Newsletter Popup */}
      <Newsletter_Popup show={showPopup} onClose={() => setShowPopup(false)} />

      <header id="stickyheader">
        <TopHeader />
        <Navbar />
        <MainHeader />
        <div className="mobile-fix-option"></div>
      </header>

      <Appliance_Slider />
      <Special_Products />
      <Collection_Banner />
      <TopBrandPanel />
      <MediaBannerTab />
      <Services />
      <Collection_Banner1 />
      <CategoryProductTab />
      <CategoryProductTab1 />
      <Testimonials />
      <Hot_Deals />
      <Blog />
      <Insta />
      <NewsletterBanner />
      <Footer />
    </>
  )
}

export default Home_five
