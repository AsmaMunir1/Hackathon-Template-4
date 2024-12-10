import React from 'react'
import Image from 'next/image'
const about = () => {
    return (
        <div>
            {/* First Section */}
            <section className='bg-[#F6F5FF] h-[286px] w-full flex flex-col items-center justify-center'>
                <div className='flex justify-center'>
                    <h1 className='text-[42px] font-bold text-[#151875]'>About Us</h1>
                </div>
                <div>
                    <ul className='flex space-x-4'>
                        <li className='text-[20px] cursor-pointer'>Home</li>
                        <li className='text-[20px] cursor-pointer'>Pages</li>
                        <li className='text-[#FB2E86] text-[20px] cursor-pointer'>About Us</li>
                    </ul>
                </div>
            </section>


            {/* Second Section */}
            <section className='w-full flex h-[700px] items-center justify-center'>
                <div className='w-[1300px] grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <Image src={"/k1.png"} width={570} height={409} alt=''></Image>
                    </div>
                    <div className='space-y-4 flex flex-col justify-center'>
                        <h1 className='text-[38px] text-[#151875] font-bold'>Know About Our Ecommerce Business, History</h1>
                        <p className='text-[#151875]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus nesciunt inventore, corporis sapiente consequatur ratione obcaecati. Officiis, repellendus? Voluptatibus officia perferendis inventore velit. Minima corporis cum non esse iste?
                        </p>
                        <button className='w-[145px] h-[50px] bg-[#FB2E86] text-white font-medium'>Contact Us</button>

                    </div>
                </div>
            </section>
            {/*Our Feature section */}

            {/* Heading */}
            <div className='flex justify-center py-20'>
                <h1 className='text-[42px] font-extrabold text-[#151875]'>Our Features</h1>
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



            {/* what client say section  */}
            <section className='w-full h-[600px] flex flex-col items-center py-16'>
                <div className='h-[700px]'>
                    <div className='w-[689px]'>
                        <div className='flex flex-col items-center gap-4'>
                            <div>
                                <h1 className='text-[42px] font-bold'>Our Client Say!</h1>
                            </div>
                            <div>
                                <Image src={"/client.png"} width={191} height={64} alt=''></Image>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-[22px] font-bold'>Selina Gomez</h1>
                                <p>Ceo At Webecy Digital</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                            <Image src={"/clie2.png"} width={73} height={3} alt=''></Image>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default about
