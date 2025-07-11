import { FaDribbbleSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
   <footer className="mt-20 py-5">
        <div className="container mx-auto border-t border-gray-500/50 flex justify-between items-center px-4 py-5">
           <div className="text-gray-300 ">
                <span>© 2025 All rights reserved.</span>
           </div>
           <div className="flex gap-4">
                <div className="size-10 bg-gray-400 rounded-full flex justify-center items-center hover:animate-spin cursor-pointer"><FaLinkedin className="text-xl"/></div>
                <div className="size-10 bg-gray-400 rounded-full flex justify-center items-center hover:animate-spin cursor-pointer"><FaDribbbleSquare className="text-xl"/></div>
                <div className="size-10 bg-gray-400 rounded-full flex justify-center items-center hover:animate-spin cursor-pointer"><FaInstagramSquare className="text-xl"/></div>
           </div>
        </div>
   </footer>
  )
}

export default Footer