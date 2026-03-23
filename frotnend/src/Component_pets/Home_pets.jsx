import React, { useEffect, useState } from 'react'
import TopHeader from './header/TopHeader'
import MainHeader from './header/MainHeader'
import Navbar from './header/Navbar'
import Home_Slider from './home_slider/Home_Slider'
import Services from './services/Services'
import Collection_Banners from './banners/Collection_Banners'
import Happy_Clients from './clients/Happy_Clients'
import New_Products from './new_products/New_Products'
import Banner from './banners/Banner'
import Pricing from './pricing/Pricing'
import Tab_Products from './tab_products/Tab_Products'
import New_Letter from './newLetter/New_Letter'
import Footer from './Footer/Footer'
import Newsletter from './newsletter_popup/Newsletter'
import Icons from './component/Icons'

const Home_pets = () => {
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
          <img src="../assets/images/pets/loader.gif" alt="loader" />
        </div>
      </div>
    )
  }

  return (
    <>
      <Newsletter show={showPopup} onClose={() => setShowPopup(false)} />

      <header id="stickyheader" className="header-style2">
        <TopHeader />
        <MainHeader />
        <Navbar />
        <div className="mobile-fix-option">
          <Icons />
        </div>
      </header>
      <Home_Slider />
      <Services />
      <Collection_Banners />
      <Happy_Clients />
      <New_Products />
      <Banner />
      <Pricing />
      <Tab_Products />
      <New_Letter />
      <Footer />
    </>
  )
}

export default Home_pets
