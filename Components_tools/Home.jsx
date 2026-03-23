import React, { useEffect, useState } from 'react'
import TopHeader from './Header/TopHeader.jsx'
import MainHeader from './Header/MainHeader.jsx'
import Navbar from './Header/Navabr.jsx'
import Home_Slider from './home_slider/Home_Slider.jsx'
import Services from './Services/Services.jsx'
import Category from './Category/Category.jsx'
import Collection_Banner from './collection_banner/Collection_Banner.jsx'
import Collection_Banner1 from './collection_banner/Collection_Banner1.jsx'
import Blog from './blog/Blog.jsx'
import Testimonials from './testimonial/Testimonials.jsx'
import Insta from './insta/Insta.jsx'
import NewsLetter from './newsletter/NewsLetter.jsx'
import Footer from './footer/Footer.jsx'
import Special_Products from './special_products/Special_Products.jsx'
import Categoryu_Products from './Categoryu_Products.jsx'
import Icons from './components/Icons.jsx'

const Home_tools = () => {
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
          <img src="../assets/images/tools/loader.gif" alt="loader" />
        </div>
      </div>
    )
  }

  return (
    <>
      <header id="stickyheader" className="header-style2">
        <TopHeader />
        <MainHeader />
        <Navbar />
      </header>
      <Home_Slider />
      <Services />
      <Category />
      <Collection_Banner />
      <Categoryu_Products />
      <Collection_Banner1 />
      <Special_Products />
      <Blog />
      <Testimonials />
      <Insta />
      <NewsLetter />
      <Footer />
      <div className="mobile-fix-option">
        <Icons />
      </div>
    </>
  )
}

export default Home_tools
