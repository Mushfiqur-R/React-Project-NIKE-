import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Navigation'
import Navigation from './Components/Navigation'
import Productadd from './Components/Productadd'
import image1 from './assets/Shoes2.jpg'
import image2 from './assets/discountimag2.jpg'
import image3 from './assets/Favourite.jpg'
import Productcart from './Productcart'
import Footer from './footer'
import Signin from './Components/Signin'
function Home() {
  return (
    <>
      <Navigation />
      <div className='flex h-[450px] w-full justify-center'>
        <div className="flex h-[450px] w-[90%] bg-gray-700 bg-no-repeat bg-cover items-center p-6 rounded-3xl gap-8">
          <Productadd
            animationtype='usestate'
            headertext={"New Arrival!!"}
            insidetext={"Introducing our latest innovation! This product combines style, performance, and cutting-edge technology to deliver an unmatched experience. Engineered for excellence and crafted with precision, it's time to redefine your expectations."}
            bgimage={image1}
          />
          <Productadd
            animationtype='bounce'
            headertext={"50% Discount"}
            color={"black"}
            insidetext={"\u00A0\u00A0\u00A0   "}
            bgimage={image2}
          />
          <Productadd
            animationtype={"none"}
            headertext={"Fan Favorites Are Back!"}
            insidetext={" "}
            bgimage={image3}
          />
        </div>
      </div>
      <div className='flex h-auto w-full justify-center items-center gap-8 mt-5'>
        <div className="flex flex-wrap h-auto w-[95%] bg-no-repeat bg-cover items-center justify-center p-6 rounded-3xl gap-8">

          <Productcart />
          <Productcart />
          <Productcart />
          <Productcart />
          <Productcart />
          <Productcart />
        </div>
      </div >
      <Footer />



    </>
  )

}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
