/* eslint-disable no-unused-vars */
import profile from "../../assets/profile.png";
import { motion } from "motion/react";
import { fadInUp, nameAnimation, transition } from "../../utils/animation";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        {/* image and name animation */}
        <div className="relative">
          <div>
            <img src={profile} alt="" className="w-32 h-32 rounded-full relative z-10" />
          </div>
          <motion.div
          initial={nameAnimation.initial}
          animate={nameAnimation.animate}
          transition={nameAnimation.transition}
          className="bg-white px-4 py-2 rounded-full absolute -top-0 -right-28 z-30 -rotate-12">
            <p className="text-sm font-medium">Kawsar Ahmed 👋🏼</p>
          </motion.div>
        </div>
        {/* title */}
        <div>
          <motion.h2 
          variants={fadInUp}
          initial='initial'
          animate='animate'
          transition={{...transition.default, delay:0.4}}
          className="text-white text-3xl md:text-5xl font-medium text-center">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">Building digital</span><br />
            <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 text-transparent bg-clip-text">products, brands, and</span><br />
            <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 text-transparent bg-clip-text">experience.</span>
          </motion.h2>
        </div>
        {/* button */}
        <div className="mt-6">
          <motion.button
          initial={{scale:0}}
          animate={{scale:1}}
          transition= { {duration: 1} }
          className="bg-[#1A1A1A] text-white py-6 px-12 rounded-full cursor-pointer">Latest Shots</motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
