import React, { useEffect, useState } from 'react'
import TopHeader from './header/TopHeader'
import MainHeader from './header/MainHeader'
import Navbar from './header/Navbar'
import Home_Slider from './home_slider/Home_Slider'
import Footer from './footer/Footer'
import Subscribe from './subscribe/Subscribe'
import Blog from './blog/Blog'
import Pricing from './pricing/Pricing'
import Services from './services/Services'
import Collection_Banner from './collection_banner/Collection_Banner'
import Client from './clients/Client'
import Featured_Products from './featured_products/Featured_Products'
import Tab_Product from './tab_product/Tab_Product'
import Newsletter from './newsletter_popup/Newsletter'
import Icons from './components/icons'
import { Link } from 'react-router-dom'

const Home_digi = () => {
  const [loading, setLoading] = useState([])
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
          <img src="../assets/images/marketplace/loader.gif" alt="loader" />
        </div>
      </div>
    )
  }

  return (
    <>
      <Newsletter show={showPopup} onClose={() => setShowPopup(false)} />

      <header id="stickyheader" className="">
        <TopHeader />
        <MainHeader />
        <Navbar />
        <div className="mobile-fix-option">
          <Icons />
        </div>
      </header>
      <Home_Slider />
      <Featured_Products />
      <Tab_Product />
      <Client />
      <Collection_Banner />
      <Services />
      <Pricing />
      <Blog />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home_digi
