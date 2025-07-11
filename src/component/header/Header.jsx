
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";

const Header = () => {
    const [open, setOpen] =useState(false);
  return (
    <header className="py-5">
      <div className="container mx-auto flex justify-between px-2 items-center relative md:border-b border-gray-700 pb-3">
        <div className="flex items-center gap-2">
            <span className="bg-gray-800 p-2 rounded-full"><MdOutlineMail className="text-white" /></span>
          <span className={`text-white ${open ? 'hidden' : 'block'}`}>info@developerkamlesh.com</span>
        </div>
        {/* mobile menu button */}
        <div className="md:hidden z-50 cursor-pointer" onClick={()=>setOpen(!open)}>
                <div className={`w-6 h-0.5 bg-gray-300 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-300 my-1 transition-all ${open ? 'opacity-0' : ''}`}></div>
                 <div className={`w-6 h-0.5 bg-gray-300 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
        {/* desktop menu */}

       <nav className="hidden md:block text-white">
            <ul className="flex space-x-6">
                <li>
                    <a href="#">Linkedin</a>
                     <span className="ml-3">/</span>   
                </li>
                  <li>
                    <a href="#">Dribble</a>
                     <span className="ml-3">/</span>   
                </li>
                  <li>
                    <a href="#">Instagram</a>
                     
                </li>
            </ul>
       </nav>
       {/* mobile menu */}

       <nav className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} text-white flex justify-center items-center z-40`}>
            <ul className="flex flex-col space-y-8 text-center">
                <li><a onClick={()=>setOpen(false)} href="#">Linkedin</a></li>
                <li><a onClick={()=>setOpen(false)} href="#">Dribble</a></li>
                <li><a onClick={()=>setOpen(false)} href="#">Instagram</a></li>
            </ul>
       </nav>
       {/* overlay */}

       {
        open && (
            <div className="fixed md:hidden inset-0 bg-black/50" onClick={()=>setOpen(false)}></div>
        )
       }
      </div>
    </header>
  );
};

export default Header;
