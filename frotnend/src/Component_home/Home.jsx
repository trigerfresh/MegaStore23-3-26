import { useEffect, useState } from 'react'

import NewsLetter_Popup from './newsletter_popup/NewsLetter_Popup.jsx'
import MainHeader from './HeaderCompnents/MainHeader'
import TopHeader from './HeaderCompnents/TopHeader'
import ShopBy from './HeaderCompnents/ShopBy'
import MegaStore from './HomeSlider/MegaStore'
import CollectionBanner from './CollectionBanner/CollectionBanner.jsx'
import Services from './Services/Services.jsx'
import FearturedBrands from './FeaturedBrands/FearturedBrands.jsx'
import HappyClients from './HappyClients/HappyClients.jsx'
import DiscountBanner from './DiscountBanner/DiscountBanner'
import SaleBanner from './SaleBanner/SaleBanner'
import NewProduct from './NewProduct/NewProduct.jsx'
import SaleBanner_1 from './SaleBanner/SaleBanner_1.jsx'
import Deals from './Deals/Deals.jsx'
import CategoryProducts from './CategoryProducts/CategoryProducts.jsx'
import Footer_1 from './Footer/Footer_1.jsx'

const Header = () => {
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
      <div className="loader-wrapper">
        <div>
          <img src="/assets/images/loader1.gif" alt="loader" />
        </div>
      </div>
    )
  }

  return (
    <div id="home">
      {/* Newsletter Popup */}
      <NewsLetter_Popup show={showPopup} onClose={() => setShowPopup(false)} />

      <header id="stickyheader" className="header-style2">
        <TopHeader />
        <MainHeader />
        <div className="category-header7">
          <ShopBy />
        </div>
      </header>

      <MegaStore />
      <Services />
      <NewProduct />
      <CollectionBanner />
      <SaleBanner />
      <SaleBanner_1 />
      <Deals />
      <CategoryProducts />
      <DiscountBanner />
      <HappyClients />
      <FearturedBrands />
      <Footer_1 />
    </div>
  )
}

export default Header
