import React, { useContext } from 'react'
import { Switch } from "@material-tailwind/react";
import headerImg from '../../../public/assets/headerImage.png'
import { ThemeBgContext } from '../ContextWrapper/ThemeContext';

const Header = () => {
    const { theme, handleTheme } = useContext(ThemeBgContext);

    return (
        <div className= {theme === "light" ? "bg-white mx-auto pt-16 " : "bg-dark mx-auto pt-16 "}>
            <div className='grid grid-cols-2 justify-items-center items-center'>
                <div className='w-4/5 pl-24'>
                    <Switch
                        label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
                        defaultChecked={theme === "dark" ? true : false}
                        onClick={handleTheme}
                    />
                    <h1 className={
                        theme === "light"
                            ? "sm:text-3xl text-6xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                            : "sm:text-3xl text-6xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
                    }>
                        Axel Brand New{" "}
                        <span
                            className={
                                theme === "light"
                                    ? "sm:text-4xl text-dark text-6xl font-petitFormal font-bold"
                                    : "sm:text-4xl text-white text-6xl font-petitFormal font-bold"
                            } >
                            Furniture</span>
                        {" "}Web app
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
                    <div className='pb-20'>
                        <button className='pushable mt-4'>
                            <span className='front'>Start Now</span>
                        </button>
                    </div>
                </div>
                <div className='mt-4'>
                    <div>
                        <h2
                            className={
                                theme === "light"
                                    ? "sm:text-3xl text-6xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                                    : "sm:text-3xl text-6xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
                            }>
                        Modern Design
                        </h2>
                    </div>
                    <img
                        className='h-[756px] w-full bg-no-repeat relative z-10 header rounded-xl'
                        src={headerImg} alt="header-phone" />
                </div>
            </div>
        </div >
    )
}

export default Header
