/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { fadInUp, transition } from "../../utils/animation";

const Card = ({ service, index }) => {
  // const [icon, title, description] =service;
  return (
    <motion.div
      variants={fadInUp}
      initial="initial"
      animate="animate"
      transition={{ ...transition.default, delay:index * 0.2 }}
      className="bg-[#1A1A1A] backdrop-blur-2xl text-gray-400 space-y-3 pt-32 pl-5 pb-7 border border-gray-400 rounded hover:border-gray-500 transition-all hover:-translate-y-1"
    >
      <span>{service.icon}</span>
      <h2 className="text-xl mt-3">{service.title}</h2>
      <p className="w-full lg:w-[80%]">{service.description}</p>
    </motion.div>
  );
};

export default Card;
