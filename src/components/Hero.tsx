import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPenNib } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";


const Hero = () => {
    return (
        <div className='w-full'>
            <div className='w-full h-[764px] grid grid-cols-1 md:grid-cols-[0.5fr_1fr_1fr] bg-[#F2F0FF] mb-4'>
                {/* First lamp section */}
                <div className='w-[387px] h-[387px]'>
                    <Image src={"/image 32.png"} width={387} height={387} alt=''></Image>
                </div>
                {/* Center text section */}
                <div className='space-y-4 py-[230px]'>
                    <p className='text-[16px] text-[#FB2E86]'>Best Furniture For Your Castle....</p>
                    <p className='text-[53px] font-extrabold'>New Furniture Collection
                        Trends in 2020</p>
                    <p className='text-[16px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                        in phasellus non in justo.</p>
                    <button className='w-[163px] h-[50px] bg-[#FB2E86] text-white'>Shop Now</button>
                </div>
                {/* Last section sofa section */}
                <div className='pt-8'>
                    <Image src={"/sofaa.png"} width={706} height={686} alt=''></Image>
                </div>
            </div>




            {/* featured section */}
            <div>
                {/* Featured Section Heading */}
                <div className='flex justify-center py-20'>
                    <h1 className='text-4xl font-extrabold text-[#151875]'>Featured product</h1>
                </div>
                {/* Featured Section Cards */}
                <div className='flex px-4 justify-center gap-8 py-20'>
                    {/* Card no 1 */}
                    <div className='flex flex-col items-center justify-center h-[361px] w-[270px] shadow-lg'>
                        <Image src={"/r1.png"} width={270} height={236} alt=''></Image>
                        <h1 className='text-[#FB2E86]'>Cantilever chair</h1>
                        <p>Code - Y523201</p>
                        <p>$42.00</p>
                    </div>

                    {/* Card no 2 */}
                    <div className='flex flex-col items-center justify-center h-[361px] w-[270px] shadow-lg'>
                        <Image src={"/r2.png"} width={270} height={236} alt=''></Image>
                        <h1 className='text-[#FB2E86]'>Cantilever chair</h1>
                        <p>Code - Y523201</p>
                        <p>$42.00</p>
                    </div>

                    {/* Card no 3 */}
                    <div className='flex flex-col items-center justify-center h-[361px] w-[270px] shadow-lg'>
                        <Image src={"/r3.png"} width={240} height={150} alt=''></Image>
                        <h1 className='text-[#FB2E86]'>Cantilever chair</h1>
                        <p>Code - Y523201</p>
                        <p>$42.00</p>
                    </div>
                    {/* Card no 4 */}
                    <div className='flex flex-col items-center justify-center h-[361px] w-[270px] shadow-lg'>
                        <Image src={"/r4.png"} width={270} height={236} alt=''></Image>
                        <h1 className='text-[#FB2E86]'>Cantilever chair</h1>
                        <p>Code - Y523201</p>
                        <p>$42.00</p>
                    </div>

                </div>
            </div>





            {/* Latest Products section */}
            <section>
                <div className='flex justify-center py-20'>
                    <h1 className='text-4xl font-extrabold text-[#151875]'>Latest product</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 px-40 py-8 gap-16'>
                    {/* card 1 */}
                    <div className='w-[360px] h-[500px]'>
                        <Image src={"/l1.png"} width={360} height={269} alt=''></Image>
                        <div className='flex justify-between'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='w-[360px] h-[500px]'>
                        <Image src={"/l2.png"} width={360} height={269} alt=''></Image>
                        <div className='flex justify-between'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='w-[360px] h-[500px]'>
                        <Image src={"/l3.png"} width={360} height={269} alt=''></Image>
                        <div className='flex justify-between'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className='w-[360px] h-[500px]'>
                        <Image src={"/l4.png"} width={300} height={200} alt=''></Image>
                        <div className='flex justify-between'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className='w-[360px] h-[500px]'>
                        <Image src={"/l5.png"} width={360} height={269} alt=''></Image>
                        <div className='flex justify-between'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 6 */}
                    <div className='w-[360px] h-[500px]'>
                        <Image src={"/l6.png"} width={360} height={360} alt=''></Image>
                        <div className='flex justify-between'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                </div>

            </section>



            {/* What shoppex offer Section */}

            {/* Heading */}
            <div className='flex justify-center py-20'>
                <h1 className='text-4xl font-extrabold text-[#151875]'>What Shopex Offer!</h1>
            </div>


            {/* Cards  */}


            <section className='flex justify-center gap-8 py-8'>
                {/* Cards 1 */}
                <div className='flex flex-col w-[270px] h-[320px] items-center justify-evenly shadow-lg'>
                    <Image src={"/s3.png"} width={65} height={65} alt=''></Image>
                    <p>24/7 Support</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet, </p>
                        <p> consectetur adipiscing elit.</p>
                        <p> Massa purus gravida.</p>
                    </div>
                </div>

                {/* Cards 2 */}
                <div className='flex flex-col w-[270px] h-[320px] items-center justify-evenly shadow-lg'>
                    <Image src={"/s2.png"} width={65} height={65} alt=''></Image>
                    <p>24/7 Support</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet, </p>
                        <p> consectetur adipiscing elit.</p>
                        <p> Massa purus gravida.</p>
                    </div>
                </div>


                {/* Cards 3 */}
                <div className='flex flex-col w-[270px] h-[320px] items-center justify-evenly shadow-lg'>
                    <Image src={"/s4.png"} width={65} height={65} alt=''></Image>
                    <p>24/7 Support</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet, </p>
                        <p> consectetur adipiscing elit.</p>
                        <p> Massa purus gravida.</p>
                    </div>
                </div>

                {/* Cards 4 */}
                <div className='flex flex-col w-[270px] h-[320px] items-center justify-evenly shadow-lg'>
                    <Image src={"/s1.png"} width={65} height={65} alt=''></Image>
                    <p>24/7 Support</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet, </p>
                        <p> consectetur adipiscing elit.</p>
                        <p> Massa purus gravida.</p>
                    </div>
                </div>
            </section>




            {/* unique fetures section */}
            <div className='bg-[#F1F0FF] flex justify-center'>
                <Image src={"/unique feature sofa.png"} width={1050} height={550} alt=''></Image>
            </div>
            {/* Trending products heading */}
            <div className='flex justify-center py-20'>
                <h1 className='text-4xl font-extrabold text-[#151875]'>Trending Products</h1>
            </div>
            {/* Trending products section */}
            <section>
                <div className='grid grid-cols-1 md:grid-cols-4 px-40 py-8'>
                    {/* card 1 */}
                    <div className='w-[247px] h-[350px]'>
                        <Image src={"/t4.png"} width={247} height={244} alt=''></Image>
                        <div className='flex flex-col items-center'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='w-[247px] h-[350px]'>
                        <Image src={"/t2.png"} width={247} height={244} alt=''></Image>
                        <div className='flex flex-col items-center'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='w-[247px] h-[350px]'>
                        <Image src={"/t3.png"} width={247} height={244} alt=''></Image>
                        <div className='flex flex-col items-center'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className='w-[247px] h-[350px]'>
                        <Image src={"/t5.png"} className='bg-[#F5F6F8]' width={247} height={244} alt=''></Image>
                        <div className='flex flex-col items-center'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>





                    {/*  */}
                </div>
            </section>

            {/* Trending products section part 2 */}
            <section className='grid grid-cols-1 md:grid-cols-3 py-8 px-36 gap-4'>
                {/* Left side card*/}
                <div className='w-[500px] h-[270px] bg-[#FFF6FB] flex pl-8 py-8'>
                    <div>
                        <h1 className='text-[26px] font-bold'>23% off in all products</h1>
                        <p className='text-[#FB2E86] underline text-[16px]'>Shop Now</p>
                    </div>
                    <Image src={"/c1.png"} width={200} height={207} alt=''></Image>
                </div>
                {/* Center Card */}
                <div className='w-[500px] h-[270px] bg-[#EEEFFB] flex pl-8 py-12'>
                    <div>
                        <h1 className='text-[26px] font-bold'>23% off in all products</h1>
                        <p className='text-[#FB2E86] underline text-[16px]'>View Collection</p>
                    </div>
                    <Image src={"/c7.png"} width={200} height={207} alt=''></Image>
                </div>
                {/* Right side Cards */}
                <div className='w-[5000px] h-[270px]'>
                    {/* card 1 */}
                    <div className='flex items-center'>
                        <div className='w-[64px] h-[71px]'>
                            <Image src={"/t5.png"} width={64} height={71} alt=''></Image>
                        </div>
                        <div>
                            <p>Executive Seat chair</p>
                            <p className='line-through'>$32.00</p>
                        </div>
                    </div>
                    {/* card 1 */}
                    <div className='flex items-center'>
                        <div className='w-[64px] h-[71px]'>
                            <Image src={"/t3.png"} width={64} height={71} alt=''></Image>
                        </div>
                        <div>
                            <p>Executive Seat chair</p>
                            <p className='line-through'>$32.00</p>
                        </div>
                    </div>
                    {/* card 1 */}
                    <div className='flex items-center'>
                        <div className='w-[64px] h-[71px]'>
                            <Image src={"/t4.png"} width={64} height={71} alt=''></Image>
                        </div>
                        <div>
                            <p>Executive Seat chair</p>
                            <p className='line-through'>$32.00</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Discound Section */}
            <section>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-center py-2'>
                        <h1 className='text-4xl font-extrabold text-[#151875]'>Discound Item</h1>
                    </div>
                    <ul className='flex gap-2 text-[#151875] text-[18px]'>
                        <li>
                            Wood Chair
                        </li>
                        <li>
                            Plastic Chair
                        </li>
                        <li>
                            Sofa Collection
                        </li>
                    </ul>
                </div>
                <div className='w-full flex justify-center'>
                    <div>
                        <Image src={"/d1.png"} width={1214} height={597} alt=''></Image>
                    </div>
                </div>
            </section>
            {/* Top Categories Heading */}
            <div className='flex justify-center py-20'>
                <h1 className='text-4xl font-extrabold text-[#151875]'>Top Categories</h1>
            </div>
            {/* Top categories Cardds */}
            <section>
                <div className='grid grid-cols-1 md:grid-cols-4 px-40 py-8'>
                    {/* card 1 */}
                    <div className='w-[247px] h-[350px]'>
                        <Image src={"/t4.png"} className='bg-[#F5F6F8] rounded-full' width={247} height={244} alt=''></Image>
                        <div className='flex flex-col items-center'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='w-[247px] h-[350px]'>
                        <Image src={"/t2.png"} className='bg-[#F5F6F8] rounded-full' width={247} height={244} alt=''></Image>
                        <div className='flex flex-col items-center'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='w-[247px] h-[350px]'>
                        <Image src={"/t3.png"} className='bg-[#F5F6F8] rounded-full' width={247} height={244} alt=''></Image>
                        <div className='flex flex-col items-center'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className='w-[247px] h-[350px]'>
                        <Image src={"/t5.png"} className='bg-[#F5F6F8] rounded-full' width={247} height={244} alt=''></Image>
                        <div className='flex flex-col items-center'>
                            <p>Comfort Handy Craft</p>
                            <p>$42.00 <span className='line-through text-red-500'>$65.00</span></p>
                        </div>
                    </div>





                    {/*  */}
                </div>
            </section>

            {/* Get latest update section */}
            <div>
                <Image src={"/g1.png"} width={2500} height={700} alt=''></Image>
            </div>


            {/* Companies section */}
            <div className='flex justify-center py-4'>
                <Image src={"/n2.png"} width={904} height={93} alt=''></Image>
            </div>


            {/* Blog Section */}
            <div className='flex justify-center py-20'>
                <h1 className='text-4xl font-extrabold text-[#151875] text-[42px]'>Latest Blogs</h1>
            </div>


            {/* Blog Section Cards */}
            <div className=' w-full flex justify-around'>
                <div className='grid grid-cols-1 md:grid-cols-3 px-20 py-12 gap-16'>
                    {/* Card 1 */}
                    <div className='w-[370px] flex flex-col gap-4 shadow-xl rounded-lg'>
                        <div>
                            <Image src={"/b1.png"} width={370} height={255} alt=''></Image>
                        </div>
                        <div className='flex justify-between  h-[16px]'>
                            <div className='flex gap-2  px-4 py-4 items-center'>
                                <div>
                                    <FaPenNib className='text-[#FB2E86]' />
                                </div>
                                <p>
                                    SaberAli
                                </p>
                            </div>
                            <div className='flex gap-2  px-4 py-4 items-center'>
                                <div>
                                    <CiCalendarDate className='text-[#FFA454]' />
                                </div>
                                <p>
                                    21 August,2020
                                </p>
                            </div>
                        </div>
                        <div className=' px-4 py-10 space-y-4 text-[#151875]'>
                            <p className='text-[18px]  text-2xl font-bold'>Top esssential Trends in 2021</p>
                            <p>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <button className='underline'>Read More</button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className='w-[370px] flex flex-col gap-4 shadow-xl rounded-lg'>
                        <div>
                            <Image src={"/b1.png"} width={370} height={255} alt=''></Image>
                        </div>
                        <div className='flex justify-between  h-[16px]'>
                            <div className='flex gap-2  px-4 py-4 items-center'>
                                <div>
                                    <FaPenNib className='text-[#FB2E86]' />
                                </div>
                                <p>
                                    Surfauxion
                                </p>
                            </div>
                            <div className='flex gap-2  px-4 py-4 items-center'>
                                <div>
                                    <CiCalendarDate className='text-[#FFA454]' />
                                </div>
                                <p>
                                    21 August,2020
                                </p>
                            </div>
                        </div>
                        <div className=' px-4 py-4 space-y-4  text-[#FB2E86]'>
                            <p className='text-[18px]  text-2xl font-bold'>Top esssential Trends in 2021</p>
                            <p>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <button className='underline'>Read More</button>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className='w-[370px] flex flex-col gap-4 shadow-xl rounded-lg'>
                        <div>
                            <Image src={"/b1.png"} width={370} height={255} alt=''></Image>
                        </div>
                        <div className='flex justify-between  h-[16px]'>
                            <div className='flex gap-2  px-4 py-4 items-center'>
                                <div>
                                    <FaPenNib className='text-[#FB2E86]' />
                                </div>
                                <p>
                                    SaberAli
                                </p>
                            </div>
                            <div className='flex gap-2  px-4 py-4 items-center'>
                                <div>
                                    <CiCalendarDate className='text-[#FFA454]' />
                                </div>
                                <p>
                                    21 August,2020
                                </p>
                            </div>
                        </div>
                        <div className=' px-4 py-4 space-y-4  text-[#151875]'>
                            <p className='text-[18px]  text-2xl font-bold'>Top esssential Trends in 2021</p>
                            <p>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <button className='underline'>Read More</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>



    )
}


export default Hero
