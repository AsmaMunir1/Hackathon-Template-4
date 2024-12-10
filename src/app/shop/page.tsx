import React from 'react'
import Image from 'next/image'
const shop = () => {
  return (
    <div>
      {/* First Section */}
      <section className='bg-[#F6F5FF] h-[286px] w-full flex flex-col items-center justify-center'>
        <div className='flex justify-center'>
          <h1 className='text-[42px] font-bold text-[#151875]'>Shop Grid Default</h1>
        </div>
        <div>
          <ul className='flex space-x-8'>
            <li className='text-[20px] cursor-pointer'>Home</li>
            <li className='text-[20px] cursor-pointer'>Pages</li>
            <li className='text-[#FB2E86] text-[20px] cursor-pointer'>Shop Grid Default</li>
          </ul>
        </div>
      </section>


      {/* Second section or navbar */}
      <section className=' w-full'>
        <div className='w-full flex justify-center items-center h-[300px]'>
          <Image src={"/sh1.png"} width={1171} height={44} alt=''></Image>
        </div>
      </section>


      {/* Cards section */}
      <section className='flex justify-center w-full'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* card 1 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho2.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 2 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho3.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 3 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho4.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 4 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho5.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 5 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho6.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 6 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho7.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 7 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho8.png"} height={230} width={220} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 8 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho9.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 9 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho10.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 10 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho11.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 11 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho12.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
          {/* card 12 */}
          <div className='h-[363px] w-[270px] flex flex-col items-center'>
            <Image className='bg-[#F6F7FB]' src={"/sho13.png"} height={280} width={270} alt=''></Image>
            <p>Vel elit euismod</p>
            <Image src={"/dots.png"} width={42} height={10} alt=''></Image>
            <p>$26.00 <span className='text-[#FB2E86] line-through'>$42.00</span></p>
          </div>
        </div>
      </section>


      {/* companies section */}
      <section className='flex justify-center py-4'>
        <Image src={"/n2.png"} width={904} height={93} alt=''></Image>
      </section>
    </div>
  )
}

export default shop
