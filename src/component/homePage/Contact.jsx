import { MdEmail } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
const Contact = () => {
  return (
     <section className="mt-6">
            <div className="size-24 mx-auto rounded-full bg-gray-900 flex justify-center items-center">
                <PiHandshakeFill className="text-5xl text-white" />
            </div>
            <div className="mt-2">
                 <h2 className="text-center text-white text-4xl font-bold"><span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">Tell me about your</span> <br /> <span>next project.</span></h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a href="mailto:hirokray17@gmail.com" className="bg-gray-300 px-8 py-3 rounded-full text-gray-700 text-base font-bold inline-flex items-center gap-1 rotate-12 hover:-translate-y-1 transition-transform"><MdEmail />Email me</a>
                <a href="https://wa.me/01750823817" target="_blank" className="border border-gray-300 text-gray-300 -rotate-12 hover:text-gray-700 hover:bg-gray-300 transition-colors px-8 py-3 rounded-full text-base font-bold">WhatsApp</a>
            </div>
     </section>
  )
}

export default Contact