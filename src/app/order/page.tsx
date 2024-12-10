import React from 'react'
import Image from 'next/image'
const order = () => {
    return (
        <div>


            {/* First Section */}
            <section className='bg-[#F6F5FF] h-[286px] w-full flex flex-col items-center justify-center'>
                <div className='flex justify-center'>
                    <h1 className='text-[42px] font-bold text-[#151875]'>Order Completed</h1>
                </div>
                <div>
                    <ul className='flex space-x-8'>
                        <li className='text-[20px] cursor-pointer'>Home</li>
                        <li className='text-[20px] cursor-pointer'>Pages</li>
                        <li className='text-[#FB2E86] text-[20px] cursor-pointer'>Order Completed</li>
                    </ul>
                </div>
            </section>


            {/* Second Section */}
            <section className='w-full flex justify-center items-center h-[600px]'>
                <div className='w-[1400px] grid grid-cols-1 md:grid-cols-[0.5fr_1fr_0.5fr] gap-16'>
                    {/* Left Section or clock section */}
                    <div className='flex flex-col items-end'>
                        <Image src={"/o1.png"} width={94} height={94} alt=''></Image>
                    </div>
                    {/* center section or text section */}
                    <div className='space-y-8 flex flex-col items-center w-[700px]'>
                        <Image src={"/o3.png"} width={94} height={94} alt=''></Image>
                        <h1 className='text-[#101750] text-[36px]'>Your order is completed.</h1>
                        <p className='text-[#101750] text-[16px] text-center'>Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.</p>
                        <button className='w-[208px] h-[50px] bg-[#FB2E86] text-white font-medium'>Continue Shopping</button>

                    </div>
                    {/* Last section or checklist section */}
                    <div className='flex items-end'>
                    <Image src={"/o2.png"} width={94} height={94} alt=''></Image>  
                    </div>
                </div>
            </section>
            {/* Companies section */}
            <section className='flex justify-center py-4'>
                <Image src={"/n2.png"} width={904} height={93} alt=''></Image>
            </section>
        </div>
    )
}

export default order
