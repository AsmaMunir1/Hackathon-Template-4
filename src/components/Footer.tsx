import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";




const Footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-[#EEEFFB] pt-12 pb-4 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        <div>
          <h4 className="text-black font-extrabold text-lg mb-6">Hekto</h4>
          <ul className="space-y-5">
            <li>
              <div className="flex rounded-md border-2 border-[#FB2E86] overflow-hidden max-w-md mx-auto font-[sans-serif]">
                <input type="email" placeholder="Enter Email Address"
                  className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
                <button type='button' className="flex items-center justify-center bg-[#FB2E86] px-5 text-white text-[12px]">
                  Sign Up
                </button>
              </div>            </li>

            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Contact Info</a>
            </li>
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">17 Princess Road, London, Greater London NW1 8JR, UK</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold text-lg mb-6">Catagories</h4>
          <ul className="space-y-5">
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Web Development</a>
            </li>
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Testing Automation</a>
            </li>
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">AWS Development Services</a>
            </li>
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Mobile App Development</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold text-lg mb-6">Customer care</h4>
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Hubspot</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Marketo Integration Services</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Marketing Glossary</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">UIPath</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold text-lg mb-6">Pages</h4>
          <ul className="space-y-5">
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Blog</a>
            </li>
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Browse the shop</a>
            </li>
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Catagory</a>
            </li>
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Pre Built Pages</a>

            </li>
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">Visual Composer Elements</a>
            </li>
            <li>
              <a className="hover:text-[#FB2E86] text-gray-500 text-[15px] transition-all">WooCommerce Pages</a>

            </li>

          </ul>
        </div>
      </div>

      <div className="border-t text-center bg-[#E7E4F8] border-[#c9c6db] pt-4 mt-8 flex items-center justify-around">
        <p className="text-gray-500 text-[15px]">
          ©Webecy - All Rights Reserved        </p>
        <div className='flex gap-4 text-xl text-[#151875]'>
          <FaFacebook />
          <RiInstagramFill />
          <AiFillTwitterCircle />
        </div>
      </div>
    </footer>
  )
}

export default Footer
