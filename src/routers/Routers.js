import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login '
import Signup from '../pages/Signup'



const Routers = () => {
  return ( 
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/cars' element={<CarListing />} />
    <Route path='/cars/.slug' element={<CarDetails />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='*' element={<NotFound />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />


  </Routes>
  );
}
export default Routers