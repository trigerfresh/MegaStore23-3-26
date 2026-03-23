import React, { useEffect, useState } from 'react'
import TopHeader from './header/TopHeader'
import MainHeader from './header/MainHeader'
import Home_slider from './home_slider/Home_slider'
import Services from './services/Services'
import Collection_Banner from './collection_banner/Collection_Banner'
import Category from './category/Category'
import Category_Products from './category/Category_Products'
import Collection_Banner1 from './collection_banner/Collection_Banner1'
import Team from './team/Team'
import Footer from './footer/Footer'
import Contact_Banner from './collection_banner/Contact_Banner'
import Testimonials from './testimonials/Testimonials'
import Collection_Banner2 from './collection_banner/Collection_Banner2'
import Blog from './blog/Blog'
import Collection_Banner3 from './collection_banner/Collection_Banner3'
import Pricing from './pricing/Pricing'
import NewsLetter from './newsletter_popup/NewsLetter'
import Icons from './components/Icons'

const Home_farming = () => {
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
          <img src="../assets/images/grocery/loader.gif" alt="loader" />
        </div>
      </div>
    )
  }

  return (
    <>
      <NewsLetter show={showPopup} onClose={() => setShowPopup(false)} />

      <header id="stickyheader" className="">
        <TopHeader />
        <MainHeader />
        <div className="mobile-fix-option">
          <Icons />
        </div>
      </header>
      <Home_slider />
      <Services />
      <Collection_Banner />
      <Category />
      <Category_Products />
      <Collection_Banner1 />
      <Team />
      <Testimonials />
      <Pricing />
      <Collection_Banner3 />
      <Blog />
      <Collection_Banner2 />
      <Contact_Banner />
      <Footer />
    </>
  )
}

export default Home_farming
