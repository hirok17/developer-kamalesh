/* eslint-disable no-unused-vars */
import { FaCode, FaPencilAlt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import Card from "./Card";
import { motion } from "motion/react";
import { fadInUp, nameAnimation, transition } from "../../utils/animation";
const Services = () => {
    const services =[
        {
            icon:<FaPencilAlt className="text-2xl" />,
            title:'UX & UI',
            description:'Designing interfaces that are intuitive, efficient, and enjoyable to use.'
        },
         {
            icon:<MdOutlinePhoneIphone className="text-2xl" />,
            title:'Web & Mobile App',
            description:'Transforming ideas into exceptional web and mobile app experiences.'
        },
            {
            icon:<FiMonitor className="text-2xl" />,
            title:'Design & Creative',
            description:'Crafting visually stunning designs that connect with your audience.'
        },
          
            {
            icon:<FaCode className="text-2xl" />,
            title:'Development',
            description:'Bringing your vision to life with the latest technology and design trends.'
        }
    ]
  return (
        <section className="bg-[#161616] py-10">
                <div className="container mx-auto">
                        <div>
                            <h2 className="text-center text-white text-4xl font-bold"><span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">Collaborate with brands and agencies to</span> <br /> <span>create impactful results.</span></h2>
                        </div>
                        <div className="text-center mt-16">
                            <div className="w-full h-[0.5px] bg-gray-800"></div>
                            <motion.button
                             initial={nameAnimation.initial}
                                      animate={nameAnimation.animate}
                                      transition={nameAnimation.transition}
                             className="bg-gray-300 py-3 px-10 rounded-full text-lg font-bold -rotate-12 -mt-5">Services</motion.button>
                        </div>
                        {/* service section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 mt-10 px-3 max-w-6xl mx-auto">
                            {
                                services.map((service, index)=><Card
                                key={index} index={index}  service={service}></Card>)
                            }
                        </div>
                </div>
        </section>
  )
}

export default Services;