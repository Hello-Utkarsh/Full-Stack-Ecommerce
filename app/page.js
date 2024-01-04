'use client'
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className="flex flex-col items-center">
      <header className="flex justify-center items-center h-[100vh] w-full">
        <div className="z-10 w-2/6 flex flex-col fixed justify-center mb-14">
          <h1 className="font-['Rubik_Glitch'] bg-gradient-to-r from-[#7E5493] via-[#571bc6] to-[#2b31a3] bg-clip-text text-transparent text-4xl text-white font-semibold text-center">Unleash Power: Your Ultimate Laptop Destination"</h1>
          <motion.button whileTap={{ scale: 0.85 }} className="bg-[#513388] cursor-pointer text-lg text-slate-300 mt-8 rounded-lg w-fit px-3 py-2 mx-auto">Explore</motion.button>
        </div>
        <img className="w-full h-[110vh] opacity-90 fixed blur-[2px] z-0" src="/hero.jpg" alt="" />
      </header>
      <div className="z-20 bg-[#241834] h-[100vh] w-full">
        <div className="my-10 mx-5 flex justify-around">
          <img className="w-4/12 rounded-md" src="/hero.jpg" alt="" />
          <div className="w-7/12 flex flex-col justify-around">
            <h2 className="w-full text-2xl">Long-lasting power for productivity</h2>
            <p className="w-4/5">Experience uninterrupted productivity with our laptops boasting exceptional battery life. Stay focused and accomplish more without worrying about charging interruptions. Our commitment to lasting power ensures you conquer tasks effortlessly, anytime, anywhere.</p>
            <div className="flex justify-between w-2/3">
              <div className="">Up to <br />36 hours<br /> on full charge</div>
              <div>Up to <br />60 hours<br /> on low settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
