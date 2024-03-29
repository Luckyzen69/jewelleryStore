import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/home'
import Login from './components/UserAuth/login'
import SignUp from './components/UserAuth/SignUp'
import ContactUs from './components/home/ContactUs'
import AboutUs from './components/other/aboutUs'
import Products from './components/other/products'
import ProductDetail from './components/other/productDetail'
import Locations from './components/other/location'
import Luxury from './components/category/luxury'
import Bracelets from './components/category/bracelet'
import Necklaces from './components/category/necklace'
import Rings from './components/category/ring'
import Earrings from './components/category/earring'
import OtherItems from './components/category/other'
import Contact from './components/other/contact'
import './App.css'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/location" element={<Locations/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/productdetail" element={<ProductDetail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />

          <Route path="/necklaces" element={<Necklaces/>} />
          <Route path="/rings" element={<Rings/>} />
          <Route path="/earrings" element={<Earrings/>} />
          <Route path="/luxury" element={<Luxury/>} />
          <Route path="/bracelets" element={<Bracelets/>} />
          <Route path="/other" element={<OtherItems/>} />

        </Routes>

      </div>
      <ContactUs/>
    </>
  )
}

export default App
