'use client'
import { motion } from "framer-motion";
import Link from 'next/link'
import { useRecoilValue } from "recoil";
import { text } from "../states/recoilContextProvider";
import Image from "next/image";
// color palette:
// 241834 dark purple
// 9876E0 light purple
// d4d2d8 white

export default function Home() {

  return (
    <div className="flex flex-col items-center">

      <header className="flex justify-center items-center h-[100vh] w-full max-sm:h-[40vh] max-lg:h-[70vh]">
        <div className="z-10 w-2/6 flex flex-col fixed justify-center mb-14 max-md:w-5/6">
          <h1 className="font-['Rubik_Glitch'] bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent text-4xl font-semibold text-center max-sm:text-3xl">Unleash Power: Your Ultimate Laptop Destination</h1>
          <Link href={"/shop"} className="mx-auto">
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] cursor-pointer text-lg text-slate-300 mt-8 rounded-lg w-fit px-4 py-2 max-sm:px-2 max-sm:py-1 max-sm:text-base max-sm:mt-4 mx-auto">Explore</motion.button>
          </Link>
        </div>
        <Image className="h-full opacity-90 fixed blur-[2px] z-0 w-full max-sm:h-[40vh] max-lg:h-[70vh]" width={500} height={500} src="/hero.jpg" alt="" />
      </header>

      <main className="z-20 py-10 bg-[#241834] max-sm:py-5">

        <div className="w-full py-16 
        max-sm:py-8
        max-lg:py-12">
          <div className="mx-5 flex justify-around 
          max-md:flex-col max-md:items-center 
          max-lg:mx-3
          max-[950px]:flex-col max-[950px]:items-center">
            <Image className="w-4/12 rounded-md 
            max-sm:h-[22vh] max-sm:w-11/12 
            max-md:my-2 
            max-lg:w-5/12
            max-[950px]:w-8/12
            " src="/hero.jpg" width={500} height={500} alt="" />
            <div className="w-7/12 flex flex-col justify-around 
            max-md:my-2 max-md:w-11/12 max-md:text-center max-md:items-center max-md:justify-between 
            max-lg:w-6/12
            max-[950px]:w-8/12 max-[950px]:text-center max-[950px]:items-center max-[950px]:my-6">
              <h2 className="w-full text-3xl font-medium 
              max-sm:text-2xl 
              max-lg:my-2
              max-[950px]:text-4xl">Long-lasting power for productivity</h2>
              <p className="w-4/5 max-sm:my-1 
              max-lg:my-2 max-lg:text-lg
              max-[950px]:text-xl">Experience uninterrupted productivity with our laptops boasting exceptional battery life. Stay focused and accomplish more without worrying about charging interruptions. Our commitment to lasting power ensures you conquer tasks effortlessly, anytime, anywhere.</p>
              <div className="flex justify-between w-2/3 
              max-sm:w-11/12 max-sm:my-2 
              max-lg:my-2
              max-[950px]:my-4">
                <div className="max-sm:text-base
                max-lg:text-xl
                max-[950px]:text-2xl">Up to <br /><span className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent font-semibold max-sm:text-2xl
                max-lg:text-3xl">18 hours</span><br /> on full charge</div>
                <div className="max-lg:text-xl
                max-[950px]:text-2xl">Up to <br /><span className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent font-semibold max-sm:text-2xl
                max-lg:text-3xl">20 hours</span><br /> on low settings</div>
              </div>
            </div>
          </div>
        </div>

        {/* bg-[length:112%_140%] max-sm:bg-[length:180%_80%] bg-no-repeat max-sm:bg-top style={{ backgroundImage: 'url("hero3.png")' }}*/}

        <div className="bg-[#241834] w-full flex flex-col items-center py-16 z-20 
        max-sm:py-8 
        max-md:px-3
        max-lg:py-12
        max-[950px]:px-5">
          <Image height={500} width={500} className="absolute w-[40vw] h-[80%] -mt-5 z-0 
          max-sm:w-[90vw] max-sm:h-[40vh] max-sm:mt-36 max-sm:opacity-65
          max-lg:h-[50%] max-lg:w-[50%] max-lg:mt-5
          max-[950px]:w-[60%] max-[950px]:mt-16" src={'/hero8.png'}></Image>
          <h2 className="text-4xl font-medium mb-16 
          max-sm:text-center max-sm:mb-6 z-10 max-sm:text-3xl">Laptop <span className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent">Highlights</span> Showcase</h2>
          <div className="flex justify-between w-10/12 overflow-hidden 
          max-sm:w-full px-4 max-sm:text-center z-10
          max-[950px]:w-full">
            <div className="flex flex-col items-center justify-around w-4/12 
            max-sm:w-[47%]
            max-[950px]:w-[46%]">
              <div className="my-4">
                <h3 className="text-lg font-semibold mb-3 
                max-sm:text-base
                max-lg:text-xl">Powerful Performance</h3>
                <p className="max-sm:text-sm
                max-lg:text-lg">Experience blazing-fast speeds and seamless multitasking with high-performance processors and ample RAM, ensuring efficient handling of demanding tasks.</p>
              </div>
              <div className="my-4">
                <h3 className="text-lg font-semibold mb-3 
                max-sm:text-base
                max-lg:text-xl">Vivid Display</h3>
                <p className="max-sm:text-sm
                max-lg:text-lg">Immerse yourself in stunning visuals on a high-resolution display with vibrant colors, sharp contrast, and a slim bezel for an enhanced viewing experience.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-around w-4/12 
            max-sm:w-[47%]
            max-[950px]:w-[46%]">
              <div className="my-4">
                <h3 className="text-lg font-semibold mb-3 
                max-sm:text-base
                max-lg:text-xl">Sleek and Portable Design</h3>
                <p className="max-sm:text-sm
                max-lg:text-lg">Embrace portability without compromising style. Our laptops feature a sleek, lightweight design, making them easy to carry while exuding modern aesthetics for a sophisticated look.</p>
              </div>
              <div className="my-4">
                <h3 className="text-lg font-semibold mb-3 
                max-sm:text-base
                max-lg:text-xl">Enhanced Security Features</h3>
                <p className="max-sm:text-sm
                max-lg:text-lg">Prioritize your data safety with advanced security features such as fingerprint recognition, facial recognition, and secure boot options, ensuring your personal and professional information remains protected.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#241834] w-full z-20 flex flex-col justify-center items-center my-16 max-sm:my-8">
          <div className="flex w-11/12 justify-around ml-16 mb-8 
          max-sm:flex-col max-sm:ml-0">
            <h1 className="text-5xl w-5/12 font-medium mb-16 
            max-sm:w-full max-sm:text-3xl max-sm:text-center max-sm:mb-6
            ">Discover Your Ideal <br /><span className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent">Variant</span></h1>
            <p className="w-4/12 text-sm 
            max-sm:w-full max-sm:text-center
            max-lg:text-lg max-lg:w-5/12">Find the perfect laptop variant tailored to your needs. From high-performance configurations to sleek designs, explore our range and discover the ideal match for your computing requirements.</p>
          </div>
          <div className="w-full flex justify-around items-center h-[40%] flex-wrap px-1">
            <div className="w-3/12 flex-col items-center hover:scale-105 transition max-sm:w-[45vw] my-4">
              <Image className="w-10/12 mx-auto scale-125 z-20" width={500} height={500} src="/hero4.png" alt="" />
              <h3 className="text-center text-[#9876E0] font-semibold max-sm:text-base">Mat Black</h3>
              <div className="flex-col justify-center items-center my-3 max-sm:text-sm">
                <p className="text-center my-1">Storage/Ram: T512GB/8GB</p>
                <p className="text-center my-1">Display: 38.91 cm / 15.3</p>
                <p className="text-center my-1">Processor: Apple M2 chip</p>
              </div>
            </div>
            <div className="w-3/12 flex-col items-center hover:scale-105 transition max-sm:w-[45vw] my-4">
              <Image className="w-11/12 mx-auto scale-125 z-20" width={500} height={500} src="/hero4.png" alt="" />
              <h3 className="text-center text-[#9876E0] font-semibold max-sm:text-base">Mat Black</h3>
              <div className="flex-col justify-center items-center my-3 max-sm:text-sm">
                <p className="text-center my-1 ">Storage/Ram: 1T/16gb</p>
                <p className="text-center my-1">Display: 38.91 cm / 15.3</p>
                <p className="text-center my-1">Processor: Apple M3 chip</p>
              </div>
            </div>
            <div className="w-3/12 flex-col items-center hover:scale-105 transition max-sm:w-[45vw] my-4">
              <Image className="w-full mx-auto scale-125 z-20" width={500} height={500} src="/hero4.png" alt="" />
              <h3 className="text-center text-[#9876E0] font-semibold max-sm:text-base">Mat Black</h3>
              <div className="flex-col justify-center items-center my-3 max-sm:text-sm">
                <p className="text-center my-1">Storage/Ram: 2T/24gb</p>
                <p className="text-center my-1">Display: 41.05 cm / 16.2</p>
                <p className="text-center my-1">Processor: Apple M3 Pro chip</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30vh] flex justify-center bg-[#241834] z-20 w-full flex-col items-center max-sm:h-fit max-sm:my-8">
          <h1 className="text-5xl bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent max-sm:text-3xl max-sm:text-center">Get Your Laptop Now</h1>
          <Link href={"/shop"} className="mx-auto">
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] cursor-pointer text-lg text-slate-300 mt-8 rounded-lg w-fit px-4 py-2 mx-auto max-sm:px-2 max-sm:py-1 max-sm:text-base">Shop Now</motion.button>
          </Link>
        </div>

      </main>

      <footer className="bg-[#d4d2d8] w-full z-20 text-[#513388] font-medium max-sm:pt-8">
        <div className="flex my-10 justify-between w-4/5 mx-auto max-sm:flex-col max-sm:w-full max-sm:px-3">
          <div className="flex flex-col mt-14 w-2/6 max-sm:w-full max-sm:justify-center max-sm:my-4">
            <h1 className="text-4xl font-bold max-sm:text-center max-sm:text-3xl">TechHive</h1>
            <p className="mt-4 max-sm:text-center max-sm:text-sm">Modern tech marketplace for cutting-edge computers and accessories.</p>
          </div>
          <div className="w-3/6 flex justify-around max-sm:w-full max-sm:my-4">
            <div className="flex flex-col w-3/12">
              <h3 className="font-medium text-lg text-center max-sm:text-base">Social Media</h3>
              <div className="flex flex-col justify-around mt-5 max-sm:mt-2 max-sm:text-sm">
                <p className="text-center mt-2">Instagram</p>
                <p className="text-center mt-2">Facebook</p>
                <p className="text-center mt-2">Twitter</p>
              </div>
            </div>
            <div className="flex flex-col w-3/12">
              <h3 className="font-medium text-lg text-center max-sm:text-base">Social Media</h3>
              <div className="flex flex-col justify-around mt-5 max-sm:mt-2 max-sm:text-sm">
                <p className="text-center mt-2">Contact us</p>
                <p className="text-center mt-2">FAQ</p>
                <p className="text-center mt-2">Customer Care</p>
                <p className="text-center mt-2">Customer Care</p>
                <p className="text-center mt-2">Warranty</p>
                <p className="text-center mt-2">Shipping</p>
              </div>
            </div>
            <div className="flex flex-col w-3/12">
              <h3 className="font-medium text-lg text-center max-sm:text-base">Social Media</h3>
              <div className="flex flex-col justify-around mt-5 max-sm:mt-2 max-sm:text-sm">
                <p className="text-center mt-2">Instagram</p>
                <p className="text-center mt-2">Facebook</p>
                <p className="text-center mt-2">Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
