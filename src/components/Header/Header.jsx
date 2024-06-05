import React from 'react'
import { Switch } from "@material-tailwind/react";
import headerImg from '../../../public/assets/headerImage.png'

const Header = () => {
    return (
        <div className='mx-auto pt-16'>
            <div className='grid grid-cols-2 justify-items-center items-center'>
                <div className='w-4/5 pl-24'>
                    <Switch />
                    <h1
                        className='text-5xl font-russo font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark'>
                        Axel Brand New
                        <span className='text-6xl text-dark font-petitForma font-bold'>Furniture</span>
                        {" "}Web app
                    </h1>
                    <div className='mt-4'>
                        <p className='w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-2xl text-dark'>
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
                    <div className='text-5xl pb-4 font-russo font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark'>
                        Modern Design
                    </div>
                    <img
                     className='h-[756px] w-full bg-no-repeat relative z-10 header rounded-xl'
                     src={headerImg} alt="header-phone" />
                </div>
            </div>
        </div>
    )
}

export default Header
