import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CartPage from './Pages/CartPage'
import NotFoundPage from './Pages/NotFoundPage'
import Header from './Components/Header'

const Routers = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routers