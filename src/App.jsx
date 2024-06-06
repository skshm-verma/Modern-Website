import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import WrapperContainer from './components/WrapperContainer/WrapperContainer'
import MidFilterSection from './components/MidSection/MidFilterSection'
import MidComponentParent from './components/MidSection/MidComponentParent'
import TabsComponent from './components/MidSection/TabsComponent'
import FurnitureFlow from './components/MidSection/FurnitureFlow'
import Cards from './components/MidSection/Cards'
import NewsLetter from './components/MidSection/NewsLetter'

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
          <TabsComponent></TabsComponent>
          <FurnitureFlow/>
          <Cards/>
          <NewsLetter/>
        </WrapperContainer>
          <Footer/>
      </div>
    </div>
  )
}

export default App
