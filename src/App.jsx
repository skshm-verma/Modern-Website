import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import WrapperContainer from './components/WrapperContainer/WrapperContainer'
import MidFilterSection from './components/MidSection/MidFilterSection'
import MidComponentParent from './components/MidSection/MidComponentParent'

function App() {
  return (
    <div>
      <div className='bg-white'>
        <WrapperContainer navHead>
          <Navbar />
          <Header />
        </WrapperContainer>
      </div>
      <div className='bg-gray-100 w-full relative'>
        <WrapperContainer>
          <MidFilterSection />
          <MidComponentParent/>
        </WrapperContainer>
      </div>
    </div>
  )
}

export default App
