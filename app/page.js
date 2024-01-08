'use client'
import { motion } from "framer-motion";
// #9C7BEB
// #241834
// #7E5493
// #32378A
// #513388


export default function Home() {

  return (
    <div className="flex flex-col items-center">
      <header className="flex justify-center items-center h-[100vh] w-full">
        <div className="z-10 w-2/6 flex flex-col fixed justify-center mb-14">
          <h1 className="font-['Rubik_Glitch'] bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent text-4xl text-white font-semibold text-center">Unleash Power: Your Ultimate Laptop Destination"</h1>
          <motion.button 
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="bg-[#513388] cursor-pointer text-lg text-slate-300 mt-8 rounded-lg w-fit px-3 py-2 mx-auto">Explore</motion.button>
        </div>
        <img className="w-full h-[110vh] opacity-90 fixed blur-[2px] z-0" src="/hero.jpg" alt="" />
      </header>
      <div className="bg-[#241834] w-full pb-16 z-20">
        <div className="my-10 mx-5 flex justify-around">
          <img className="w-4/12 rounded-md" src="/hero.jpg" alt="" />
          <div className="w-7/12 flex flex-col justify-around">
            <h2 className="w-full text-3xl font-medium">Long-lasting power for productivity</h2>
            <p className="w-4/5">Experience uninterrupted productivity with our laptops boasting exceptional battery life. Stay focused and accomplish more without worrying about charging interruptions. Our commitment to lasting power ensures you conquer tasks effortlessly, anytime, anywhere.</p>
            <div className="flex justify-between w-2/3">
              <div className="">Up to <br />36 hours<br /> on full charge</div>
              <div>Up to <br />60 hours<br /> on low settings</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] bg-[length:115%_115%] bg-left bg-no-repeat w-full flex flex-col items-center py-16 z-20" style={{backgroundImage: `url('/hero2.jpg')`}}>
        <h2 className="text-3xl font-medium mb-16">Laptop <span className="text-[#241834]">Highlights</span> Showcase</h2>
        <div className="flex justify-between w-10/12">
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
    </div>
  )
}
