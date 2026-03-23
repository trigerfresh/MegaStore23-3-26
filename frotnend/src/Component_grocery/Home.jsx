import React, { useEffect, useState } from 'react'
import TopHeader from './header/TopHeader'
import MainHeader from './header/MainHeader'
// import Navbar from './Header/Navbar'
// import Navbar from './header/Navbar'
import Home_slider from './Home_Slider/Home_slider'
import Services from './services/Services'
import Tending_Products from './trending_products/Tending_Products'
import Product_Banner from './Banner/Product_Banner'
import Testinmonials from './testimonials/Testinmonials'
import Team from './team/Team'
import Product_Banner1 from './Banner/Product_Banner1'
import Blog from './Blog/Blog'
import Banner from './Banner/Banner'
import Footer from './footer/Footer'
import Category_Products from './category_products/Category_Products'
import Navbar from './header/Navbar'
import NewsLetter from './newsletter_popup/NewsLetter'
import Icons from './components/Icons'

const Home_grocery = () => {
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

      <header id="stickyheader" className="header-style2">
        <TopHeader />
        <MainHeader />
        <Navbar />
        <div className="mobile-fix-option">
          <Icons />
        </div>
      </header>
      <Home_slider />
      <Services />
      <Tending_Products />
      <Product_Banner />
      <Category_Products />
      <Testinmonials />
      <Team />
      <Product_Banner1 />
      <Blog />
      <Banner />
      <Footer />
    </>
  )
}

export default Home_grocery
