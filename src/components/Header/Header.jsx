import React, { useContext } from 'react'
import { Switch } from "@material-tailwind/react";
import headerImg from '../../../public/assets/headerImage.png'
import { ThemeBgContext } from '../ContextWrapper/ThemeContext';

const Header = ({ topRef }) => {
    const { theme, handleTheme } = useContext(ThemeBgContext);

    return (
        <div ref={topRef} className={theme === "light" ? "bg-white mx-auto pt-16 " : "bg-dark mx-auto pt-16 "}>
            <div className='sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center'>
                <div className='sm:w-full sm:pl-4 w-4/5 pl-24'>
                    <Switch
                        label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
                        defaultChecked={theme === "dark" ? true : false}
                        onClick={handleTheme}
                    />
                    <h1 className={
                        theme === "light"
                            ? "sm:text-3xl sm:pt-4 text-6xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                            : "sm:text-3xl sm:pt-4 text-6xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
                    }>
                        Axel Brand New{" "}
                        <span
                            className={
                                theme === "light"
                                    ? "sm:text-4xl sm:pr-2  text-dark text-6xl font-petitFormal font-bold"
                                    : "sm:text-4xl sm:pr-2 text-white text-6xl font-petitFormal font-bold"
                            } >
                            Furniture</span>
                        {" "} <span className='sm:text-2xl sm:align-top text-6xl'>Responsive App</span>
                    </h1>
                    <div className='mt-4'>
                        <p
                            className={
                                theme === "light"
                                    ? "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl"
                                    : "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-white text-2xl"
                            }>
                            Giving your home a propper makeover never was this easy. Modern
                            and stylish furniture for decent prices. Take a look what we offer
                            with simple button click.
                        </p>
                    </div>
                    <div className='sm:py-4 pb-20'>
                        <button className='pushable mt-4'>
                            <span className='front'>Start Now</span>
                        </button>
                    </div>
                </div>
                <div className='sm:mt-8 mt-4'>
                    <div>
                        <h2
                            className={
                                theme === "light"
                                    ? "sm:text-3xl sm:flex sm:justify-center sm:mt-2 text-6xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                                    : "sm:text-3xl sm:flex sm:justify-center sm:mt-2  text-6xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
                            }>
                            Modern Design
                        </h2>
                    </div>
                    <img
                        className='sm:h-[475px] sm:mt-4 h-[756px] w-full bg-no-repeat relative z-10 header rounded-xl'
                        src={headerImg} alt="header-phone" />
                </div>
            </div>
        </div >
    )
}

export default Header
