import React from 'react'
import { IoIosSearch } from "react-icons/io";

const TOPHeader = () => {
    return (
        <div className='w-full  h-[48px] pt-3 gap-[98px] bg-[#7E33E0] text-[#FAFAFA] flex '>

            <div className='flex'>
                <div>
                    <p className=' text-center font-poppins text-sm w-[794px] h-[18px] font-normal'>mhhasanul@gmail.com</p>

                </div>
                <div>
                    <p className=' text-center font-poppins text-sm w-[794px] h-[18px] font-normal'>(12345)67890</p>
                </div>

            </div>


            <div className='flex gap-2'>
                <select name="select" id="select" className=' bg-[#7E33E0]  text-[#FAFAFA] text-center mb-2'>
                    <option value="English">'English</option>
                </select>
                <select name="select" id="select" className=' bg-[#7E33E0]  text-[#FAFAFA] text-center mb-2'>
                    <option value="USD">'USD</option>
                </select>
                <div>
                    <p>Login</p>
                </div>
                <div>
                    <p>Wishlist</p>
                </div>
            </div>
        </div>
    )
}

export default TOPHeader

export const Header = () => {
    return (
        <div className='flex w-full h-[75px] gap-[130px] items-center justify-center'>
            <div> <h2 className='font-inter font-bold text-[34px] text-[#0D0E43] hover:text-[#FB2E86] 3% cursor-pointer'>Heckto</h2>
            </div>
            <ul className='flex gap-[48px] text-[#0D0E43]'>
                <li className='font-poppins text-[22px] font-semibold text-center hover:cursor-pointer hover:text-[#2f3053]'><a href="/home">Home</a></li>
                <li className='font-poppins text-[22px] font-semibold text-center hover:cursor-pointer hover:text-[#2f3053]'><a href="/about">About</a></li>
                <li className='font-poppins text-[22px] font-semibold text-center hover:cursor-pointer hover:text-[#2f3053]'><a href="/shop">Shop</a></li>
                <li className='font-poppins text-[22px] font-semibold text-center hover:cursor-pointer hover:text-[#2f3053]'><a href="/order">Order</a></li>
                <li className='font-poppins text-[22px] font-semibold text-center hover:cursor-pointer hover:text-[#2f3053]'><a href="/cart">Cart</a></li>

            </ul>
            <div className='flex gap-3'>
                <div className="flex rounded-md shadow-sm border overflow-hidden max-w-md mx-auto font-[sans-serif]">
                    <input type="email" 
                        className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
                    <button type='button' className="flex items-center justify-center bg-[#FB2E86] px-5">
                    <IoIosSearch />
                    </button>
                </div>
            </div>
        </div>

    )
}
