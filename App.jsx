import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Component_eight/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from './Component_home/Home'
import Home_nine from './Component_nine/Home'
import Home_five from './Component_five/Home'
import { useEffect } from 'react'
import Home_tools from './Components_tools/Home'
import Home_kids from './Component_kids/Home'
import Home_grocery from './Component_grocery/Home'
import Home_two from './Component_two/Home_two'
import Home_four from './Component_four/Home_four'
import Home_pets from './Component_pets/Home_pets'
import Home_farming from './Components_farming/Home_farming'
import Home_vegetables from './Component_vegetables/Home_vegetables'
import Home_digi from './Digital_market/Home_digi'

const ThemeLoader = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    const existingLink = document.getElementById('theme-css')
    if (existingLink) existingLink.remove()

    let themeHref = ''

    if (location.pathname === '/') {
      themeHref = '/assets/css/color11.css'
    } else if (location.pathname === '/home_five') {
      themeHref = '/assets/css/color5.css'
    } else if (location.pathname === '/home_nine') {
      themeHref = '/assets/css/color8.css'
    } else if (location.pathname === '/home_eight') {
      themeHref = '/assets/css/color7.css'
    } else if (location.pathname === '/home_tools') {
      themeHref = '/assets/css/colors10.css'
    } else if (location.pathname === '/home_kids') {
      themeHref = '/assets/css/color9.css'
    } else if (location.pathname === '/home_grocery') {
      themeHref = '/assets/css/color12.css'
    } else if (location.pathname === '/home_two') {
      themeHref = '/assets/css/color1.css'
    } else if (location.pathname === '/home_four') {
      themeHref = '/assets/css/color4.css'
    } else if (location.pathname === '/home_pets') {
      themeHref = '/assets/css/color13.css'
    } else if (location.pathname === '/home_farming') {
      themeHref = '/assets/css/color14.css'
    } else if (location.pathname === '/home_vegetables') {
      themeHref = '/assets/css/color6.css'
    } else if (location.pathname === '/home_digital') {
      themeHref = '/assets/css/color15.css'
    }

    if (themeHref) {
      const link = document.createElement('link')
      link.id = 'theme-css'
      link.rel = 'stylesheet'
      link.href = themeHref
      document.head.appendChild(link)
    }
  }, [location.pathname])

  return children
}

function App() {
  return (
    <BrowserRouter>
      <ThemeLoader>
        <Routes>
          <Route path="/home_eight" element={<Home />} />
          <Route path="/" element={<Header />} />
          <Route path="/home_five" element={<Home_five />} />
          <Route path="/home_nine" element={<Home_nine />} />
          <Route path="/home_tools" element={<Home_tools />} />
          <Route path="/home_kids" element={<Home_kids />} />
          <Route path="/home_grocery" element={<Home_grocery />} />
          <Route path="/home_two" element={<Home_two />} />
          <Route path="/home_four" element={<Home_four />} />
          <Route path="/home_pets" element={<Home_pets />} />
          <Route path="/home_farming" element={<Home_farming />} />
          <Route path="/home_vegetables" element={<Home_vegetables />} />
          <Route path="/home_digital" element={<Home_digi />} />
        </Routes>
      </ThemeLoader>
    </BrowserRouter>
  )
}

export default App
