import React, { useContext } from 'react'
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
import PopUpButton from './components/ContactUs/PopUpButton'
import ThemeContext from './components/ContextWrapper/ThemeContext'
import { ThemeBgContext } from "./components/ContextWrapper/ThemeContext";

function App() {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div>
      <ThemeContext>
        <div>
          <PopUpButton></PopUpButton>
        </div>
        <div className={theme === "light" ? "bg-white" : "bg-dark"}>
          <WrapperContainer navHead>
            <Navbar />
            <Header />
          </WrapperContainer>
        </div>
        <div className='bg-gray-100 w-full relative'>
          <WrapperContainer>
            <MidFilterSection />
            <MidComponentParent />
            <TabsComponent></TabsComponent>
            <FurnitureFlow />
            <Cards />
            <NewsLetter />
          </WrapperContainer>
          <Footer />
        </div>
      </ThemeContext>
    </div>
  )
}

export default App
