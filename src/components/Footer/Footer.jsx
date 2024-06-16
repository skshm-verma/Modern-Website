import React from 'react'
import { FooterData1 } from "../DataForPage/DummyData";
import { FooterData2 } from "../DataForPage/DummyData";
import { FooterData3 } from "../DataForPage/DummyData";
import logo from "../../../public/assets/logo.svg"
import googlePlay from "../../../public/assets/google-play.svg";
import appleStore from "../../../public/assets/apple-store.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='sm:mt-10 mt-[12rem]'>
      <div className="sm:grid-cols-2 grid grid-cols-4 gap-0 items-center justify-items-center pl-20 pr-[8rem]">
        <div className="sm:w-full sm:pl-2 sm:h-40 h-64 mx-auto pl-24">
          <div>
            <img className="h-10 cursor-pointer" src={logo} alt="logo"></img>
          </div>
          <div className="mt-5">
            <img
              className="h-8 cursor-pointer"
              src={appleStore}
              alt="apple-store"
            ></img>
          </div>
          <div className="mt-5">
            <img
              className="h-8 cursor-pointer"
              src={googlePlay}
              alt="apple-store"
            ></img>
          </div>
        </div>
        <div className="sm:pl-[6rem] sm:h-48 h-64">
          <h3 className="text-dark font-inter font-medium text-xl no-underline align-middle tracking-wide normal-case">
            Features
          </h3>
          {FooterData1.map((item) => {
            return (
              <div key={item.id}>
                <p className="text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="sm:pl-2 sm:my-8 sm:h-48 h-64">
          <h3 className="text-dark font-inter font-medium text-xl no-underline align-middle tracking-wide normal-case">
            Features
          </h3>
          {FooterData2.map((item) => {
            return (
              <div key={item.id}>
                <p className="text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="sm:pl-20 sm:my-8  sm:h-48 h-64">
          <h3 className="text-dark font-inter font-medium text-xl no-underline align-middle tracking-wide normal-case">
            Features
          </h3>
          {FooterData3.map((item) => {
            return (
              <div key={item.id}>
                <p className="text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="sm:w-full h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex justify-around items-center py-6">
        <div>
          <p className="sm:text-sm text-dark pb-2 font-inter font-medium cursor-pointer no-underline align-middle tracking-wide normal-case">
            AxeL
          </p>
        </div>
        <div>
          <p className="sm:text-xs text-dark pb-2 font-inter font-light cursor-pointer no-underline align-middle tracking-wide normal-case">
          &copy; Copyright {year} made with ❤️ by Saksham Verma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer
