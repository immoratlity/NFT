import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trending from './pages/Trending'
import FAQ from './pages/FAQ'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </>
  )
}

export default App
