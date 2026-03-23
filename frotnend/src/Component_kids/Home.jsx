import React, { useState, useEffect } from 'react'
import TopHeader from './Header/TopHeader'
import MainHeader from './Header/MainHeader'
import Kids_slide from './kids_slide/Kids_slide'
import Navbar from './Header/Navbar'
import Services from './Services/Services'
import Banner1 from './Banner_kids/Banner1'
import Banner2 from './Banner_kids/Banner2'
import Deal_Banner from './Banner_kids/Deal_Banner'
import Category from './Category/Category'
import Discount_Banner from './Banner_kids/Discount_Banner'
import Blog from './Blog/Blog'
import Instagram from './instagram/Instagram'
import Footer from './footer/Footer'
import New_Arrival_Products from './new_arrival_products/New_Arrival_Products'
import Special_Products from './Special_Products/Special_Products'
import Icons from './components/Icons'

const Home_kids = () => {
  const [loading, setLoading] = useState(true)

  // Simulate loading for demonstration; replace with real data loading if needed
  useEffect(() => {
    // You can also tie this to actual data fetching completion if needed
    const timer = setTimeout(() => setLoading(false), 1500) // 1.5 seconds loader

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div
        className="loader-wrapper"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <img src="../assets/images/kids/loader.gif" alt="loader" />
      </div>
    )
  }

  return (
    <>
      <header id="stickyheader" className="">
        <TopHeader />
        <MainHeader />
        <Navbar />
      </header>
      <Kids_slide />
      <Services />
      <Banner1 />
      <New_Arrival_Products />
      <Banner2 />
      <Special_Products />
      <Deal_Banner />
      <Category />
      <Discount_Banner />
      <Blog />
      <Instagram />
      <Footer />
      <div className="mobile-fix-option">
        <Icons />
      </div>
    </>
  )
}

export default Home_kids
