import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import WrapperContainer from './components/WrapperContainer/WrapperContainer'

function App() {
  return (
      <div>
        <WrapperContainer navHead>
        <Navbar/>
        <Header/>
        </WrapperContainer>
         <div className='bg-gray-100 w-full'>
         <WrapperContainer>
          
         </WrapperContainer>
         </div>
      </div>
  )
}

export default App
