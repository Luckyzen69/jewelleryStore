import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/home'
import Login from './components/UserAuth/login'
import SignUp from './components/UserAuth/SignUp'
import ContactUs from './components/home/ContactUs'
import AboutUs from './components/other/aboutUs'
import Products from './components/other/products'
import ProductDetail from './components/other/productDetail'
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
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/productdetail" element={<ProductDetail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>

      </div>
      <ContactUs/>
    </>
  )
}

export default App
