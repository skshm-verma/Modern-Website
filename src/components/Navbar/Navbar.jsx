import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { navbarData } from '../DataForPage/DummyData'
import logo from '../../../public/assets/logo.svg'
import { Link } from 'react-scroll'
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeBgContext);

  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      //returning a function to prevent infinte scrolling
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scroll])

  //backdrop-opacity-70 can be added to class if scroll is true
  //gap-[30rem] extra feature for gap between cols

  return (
    <div className={scroll ?
      'sm:hidden h-16 w-full fixed flex transition items-center ease-in-out duration-500 bg-white rounded-sm bg-clip-padding  backdrop-blur-sm bg-opacity-40 z-20'
      :
      'sm:hidden bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20'
    }>
      <div className="grid grid-cols-2 justify-items-center items-center content-center">
        <div className='pl-20 w-4/5'>
          <img src={logo} alt="logoImage" />
        </div>
        <div className='flex items-center w-full'>
          {navbarData.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className={
                    theme === "light"
                      ? "cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                      : "cursor-pointer text-white font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                  }
                >
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
