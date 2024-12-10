import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const cart = () => {
    return (
        <div>
            <section className='bg-[#F6F5FF] h-[286px] w-full flex flex-col items-center justify-center'>
                <div className='flex justify-center'>
                    <h1 className='text-[42px] font-bold text-[#151875]'>Shopping Cart</h1>
                </div>
                <div>
                    <ul className='flex space-x-4'>
                        <li className='text-[20px] cursor-pointer'>Home</li>
                        <li className='text-[20px] cursor-pointer'>Pages</li>
                        <li className='text-[#FB2E86] text-[20px] cursor-pointer'>shopping cart</li>
                    </ul>
                </div>
            </section>






            <div className="font-sans md:max-w-7xl max-md:max-w-xl mx-auto bg-white py-4">
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 bg-white p-4 rounded-md">
                        <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                        <hr className="border-gray-300 mt-4 mb-8" />

                        <div className="space-y-4">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                        <img src='/sho2.png' className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">Velvet Sneaker</h3>
                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                        <div className="flex gap-4 mt-4">
                                            <div className="relative group">
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    XL
                                                    <MdKeyboardArrowDown />

                                                </button>

                                                <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <FaMinus />


                                                    <span className="mx-2.5">1</span>
                                                    <FaPlus />

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-base font-bold text-gray-800">$20.00</h4>
                                </div>
                            </div>


                            <div className="grid grid-cols-3 items-center gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                        <img src='/sho5.png' className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">Velvet Sneaker</h3>
                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                        <div className="flex gap-4 mt-4">
                                            <div className="relative group">
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    XL
                                                    <MdKeyboardArrowDown />

                                                </button>

                                                <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <FaMinus />


                                                    <span className="mx-2.5">1</span>
                                                    <FaPlus />

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-base font-bold text-gray-800">$20.00</h4>
                                </div>
                            </div>


                            <div className="grid grid-cols-3 items-center gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                        <img src='/sho6.png' className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">Velvet Sneaker</h3>
                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                        <div className="flex gap-4 mt-4">
                                            <div className="relative group">
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    XL
                                                    <MdKeyboardArrowDown />

                                                </button>

                                                <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <FaMinus />


                                                    <span className="mx-2.5">1</span>
                                                    <FaPlus />

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-base font-bold text-gray-800">$20.00</h4>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                        <img src='/sho7.png' className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">Velvet Sneaker</h3>
                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                        <div className="flex gap-4 mt-4">
                                            <div className="relative group">
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    XL
                                                    <MdKeyboardArrowDown />

                                                </button>

                                                <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <FaMinus />


                                                    <span className="mx-2.5">1</span>
                                                    <FaPlus />

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-base font-bold text-gray-800">$20.00</h4>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                        <img src='/sho3.png' className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">Smart Watch Timex</h3>
                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                        <div className="flex gap-4 mt-4">
                                            <div className="relative group">
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    XL
                                                    <MdKeyboardArrowDown />

                                                </button>

                                                <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <FaMinus />


                                                    <span className="mx-2.5">1</span>
                                                    <FaPlus />

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-base font-bold text-gray-800">$120.00</h4>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                        <img src='sho4.png' className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">Sun Glass</h3>
                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                        <div className="flex gap-4 mt-4">
                                            <div className="relative group">
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    XL
                                                    <MdKeyboardArrowDown />
                                                </button>

                                                <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <FaMinus />

                                                    <span className="mx-2.5">1</span>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-base font-bold text-gray-800">$50.00</h4>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
                        <div className="flex border border-[#FB2E86] overflow-hidden rounded-md">
                            <input type="email" placeholder="Promo code"
                                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
                            <button type='button' className="flex items-center justify-center font-semibold tracking-wide bg-[#FB2E86] hover:bg-[#f53e8d] px-4 text-sm text-white">
                                Apply
                            </button>
                        </div>

                        <ul className="text-gray-800 mt-8 space-y-4">
                            <li className="flex flex-wrap gap-4 text-base">Discount <span className="ml-auto font-bold">$0.00</span></li>
                            <li className="flex flex-wrap gap-4 text-base">Shipping <span className="ml-auto font-bold">$2.00</span></li>
                            <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">$4.00</span></li>
                            <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">$52.00</span></li>
                        </ul>

                        <div className="mt-8 space-y-2">
                            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-[#FB2E86] hover:bg-[#f53e8d] text-white rounded-md">Checkout</button>
                            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cart
