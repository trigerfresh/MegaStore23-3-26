import React, { useEffect, useState } from 'react'
import TopHeader from './header/TopHeader'
import Main_Header from './header/Main_Header'
import Category_Header from './header/Category_Header'
import Home_Slider from './home_slider/Home_Slider'
import Collection_Banner from './collection_banner/Collection_Banner'
import Category from './category/Category'
import Services from './services/Services'
import Container from './containers/Container'
import Trending_Products from './trending_products/Trending_Products'
import Collection_Banner1 from './collection_banner/Collection_Banner1'
import Footer from './footer/Footer'
import Collection_Banner2 from './collection_banner/Collection_Banner2'
import Blog from './blog/Blog'
import Parallex_Banner from './collection_banner/Parallex_Banner'
import Newsletter from './newsletter_popup/Newsletter'

const Home_vegetables = () => {
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
          <img src="../assets/images/vagitable-loader.gif" alt="loader" />
        </div>
      </div>
    )
  }
  return (
    <>
      <Newsletter show={showPopup} onClose={() => setShowPopup(false)} />

      <header id="stickyheader" className="">
        <TopHeader />
        <Main_Header />
        <Category_Header />
        <div className="mobile-fix-option"></div>
      </header>
      <Home_Slider />
      <Collection_Banner />
      <Category />
      <Services />
      <Container />
      <Trending_Products />
      <Collection_Banner1 />
      <Parallex_Banner />
      <Blog />
      <Collection_Banner2 />
      <Footer />
    </>
  )
}

export default Home_vegetables
