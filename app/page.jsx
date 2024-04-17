'use client'
import { motion } from "framer-motion";
import Link from 'next/link'
import { useRecoilValue } from "recoil";
import { text } from "../states/recoilContextProvider";
// color palette:
// 241834 dark purple
// 9876E0 light purple
// d4d2d8 white

export default function Home() {
  
  return (
    <div className="flex flex-col items-center">

      <header className="flex justify-center items-center h-[100vh] w-full">
        <div className="z-10 w-2/6 flex flex-col fixed justify-center mb-14">
          <h1 className="font-['Rubik_Glitch'] bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent text-4xl font-semibold text-center">Unleash Power: Your Ultimate Laptop Destination</h1>
          <Link href={"/shop"} className="mx-auto">
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] cursor-pointer text-lg text-slate-300 mt-8 rounded-lg w-fit px-4 py-2 mx-auto">Explore</motion.button>
          </Link>
        </div>
        <img className="w-full h-[110vh] opacity-90 fixed blur-[2px] z-0" src="/hero.jpg" alt="" />
      </header>

      <main className="z-20 py-10 bg-[#241834]">

        <div className="w-full py-16">
          <div className="my-10 mx-5 flex justify-around">
            <img className="w-4/12 rounded-md" src="/hero.jpg" alt="" />
            <div className="w-7/12 flex flex-col justify-around">
              <h2 className="w-full text-3xl font-medium">Long-lasting power for productivity</h2>
              <p className="w-4/5">Experience uninterrupted productivity with our laptops boasting exceptional battery life. Stay focused and accomplish more without worrying about charging interruptions. Our commitment to lasting power ensures you conquer tasks effortlessly, anytime, anywhere.</p>
              <div className="flex justify-between w-2/3 ">
                <div className="">Up to <br /><span className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent text-3xl font-semibold">18 hours</span><br /> on full charge</div>
                <div>Up to <br /><span className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent text-3xl font-semibold">20 hours</span><br /> on low settings</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#241834] bg-[length:112%_140%] w-full flex flex-col items-center py-16 z-20" style={{ backgroundImage: 'url("hero3.png")' }}>
          <h2 className="text-3xl font-medium mb-16">Laptop <span className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent">Highlights</span> Showcase</h2>
          <div className="flex justify-between w-10/12 overflow-hidden">
            <div className="flex flex-col items-center justify-around w-4/12">
              <div className="my-4">
                <h3 className="text-lg font-semibold mb-3">Powerful Performance</h3>
                <p>Experience blazing-fast speeds and seamless multitasking with high-performance processors and ample RAM, ensuring efficient handling of demanding tasks.</p>
              </div>
              <div className="my-4">
                <h3 className="text-lg font-semibold mb-3">Vivid Display</h3>
                <p>Immerse yourself in stunning visuals on a high-resolution display with vibrant colors, sharp contrast, and a slim bezel for an enhanced viewing experience.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-around w-4/12">
              <div className="my-4">
                <h3 className="text-lg font-semibold mb-3">Sleek and Portable Design</h3>
                <p>Embrace portability without compromising style. Our laptops feature a sleek, lightweight design, making them easy to carry while exuding modern aesthetics for a sophisticated look.</p>
              </div>
              <div className="my-4">
                <h3 className="text-lg font-semibold mb-3">Enhanced Security Features</h3>
                <p>Prioritize your data safety with advanced security features such as fingerprint recognition, facial recognition, and secure boot options, ensuring your personal and professional information remains protected.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100vh] bg-[#241834] w-full z-20 flex flex-col justify-center items-center">
          <div className="flex w-11/12 justify-around ml-16 mb-8">
            <h1 className="text-5xl w-2/5 font-medium mb-16">Discover Your Ideal <br /><span className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent">Variant</span></h1>
            <p className="w-4/12 text-sm">Find the perfect laptop variant tailored to your needs. From high-performance configurations to sleek designs, explore our range and discover the ideal match for your computing requirements.</p>
          </div>
          <div className="w-full flex justify-around items-center h-[40%]">
            <div className="w-3/12 flex-col items-center justify-center hover:scale-105 transition">
              <img className="w-10/12 mx-auto scale-125 z-20" src="/hero4.png" alt="" />
              <h3 className="text-center text-[#9876E0] font-semibold">Mat Black</h3>
              <div className="flex-col justify-center items-center my-3">
                <p className="text-center my-1">Storage/Ram: T512GB/8GB</p>
                <p className="text-center my-1">Display: 38.91 cm / 15.3</p>
                <p className="text-center my-1">Processor: Apple M2 chip</p>
              </div>
            </div>
            <div className="w-3/12 flex-col items-center hover:scale-105 transition">
              <img className="w-11/12 mx-auto scale-125 z-20" src="/hero4.png" alt="" />
              <h3 className="text-center text-[#9876E0] font-semibold">Mat Black</h3>
              <div className="flex-col justify-center items-center my-3">
                <p className="text-center my-1 ">Storage/Ram: 1T/16gb</p>
                <p className="text-center my-1">Display: 38.91 cm / 15.3</p>
                <p className="text-center my-1">Processor: Apple M3 chip</p>
              </div>
            </div>
            <div className="w-3/12 flex-col items-center hover:scale-105 transition">
              <img className="w-full mx-auto scale-125 z-20" src="/hero4.png" alt="" />
              <h3 className="text-center text-[#9876E0] font-semibold">Mat Black</h3>
              <div className="flex-col justify-center items-center my-3">
                <p className="text-center my-1">Storage/Ram: 2T/24gb</p>
                <p className="text-center my-1">Display: 41.05 cm / 16.2</p>
                <p className="text-center my-1">Processor: Apple M3 Pro chip</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50vh] flex justify-center bg-[#241834] z-20 w-full flex-col items-center">
          <h1 className="text-5xl bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent">Get Your Laptop Now</h1>
          <Link href={"/shop"} className="mx-auto">
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] cursor-pointer text-lg text-slate-300 mt-8 rounded-lg w-fit px-4 py-2 mx-auto">Shop Now</motion.button>
          </Link>
        </div>

      </main>

      <footer className="bg-[#d4d2d8] w-full h-[50vh] z-20 text-[#513388] font-medium">
        <div className="flex my-10 justify-between w-4/5 mx-auto">
          <div className="flex flex-col mt-14 w-2/6">
            <h1 className="text-4xl font-bold">TechHive</h1>
            <p className="mt-4">Modern tech marketplace for cutting-edge computers and accessories.</p>
          </div>
          <div className="w-3/6 flex justify-around">
            <div className="flex flex-col h-full w-3/12">
              <h3 className="font-medium text-lg text-center">Social Media</h3>
              <div className="flex flex-col justify-around mt-5">
                <p className="text-center mt-2">Instagram</p>
                <p className="text-center mt-2">Facebook</p>
                <p className="text-center mt-2">Twitter</p>
              </div>
            </div>
            <div className="flex flex-col w-3/12">
              <h3 className="font-medium text-lg text-center ">Social Media</h3>
              <div className="flex flex-col justify-around mt-5">
                <p className="text-center mt-2">Contact us</p>
                <p className="text-center mt-2">FAQ</p>
                <p className="text-center mt-2">Customer Care</p>
                <p className="text-center mt-2">Customer Care</p>
                <p className="text-center mt-2">Warranty</p>
                <p className="text-center mt-2">Shipping</p>
              </div>
            </div>
            <div className="flex flex-col w-3/12">
              <h3 className="font-medium text-lg text-center">Social Media</h3>
              <div className="flex flex-col justify-around mt-5">
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
