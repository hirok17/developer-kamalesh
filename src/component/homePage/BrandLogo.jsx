import code from '../../assets/brand/code.svg'
import adove from '../../assets/brand/adove.svg'
import cocacola from '../../assets/brand/cocacola.svg'
import suv from '../../assets/brand/suv.svg'
import matador from '../../assets/brand/matador.svg'
import bank from '../../assets/brand/bank.svg'
 


const BrandLogo = () => {
    const partner =[
        {name:'code cademy', image:code},
        {name:'Adove', image:adove},
        {name:'cocacola', image:cocacola},
        {name:'subway', image:suv},
        {name:'matador', image:matador},
        {name:'Nationl bank', image:bank}
    ]

    const dublicateLogo =[...partner, ...partner];
     
  return (
    <div className='bg-white py-12 relative overflow-hidden'>
       
        <div className='flex animate-marquee whitespace-nowrap'>
            {
                dublicateLogo.map((logo, index)=>(
                    <img key={index} src={logo.image} alt="" className='mx-6 w-[160px] h-[40px] object-contain hover:scale-110 transition-transform duration-300' />
                ))
            }
            {
                dublicateLogo.map((logo, index)=>(
                    <img key={`dublicate-${index}`} src={logo.image} alt="" className='mx-6 w-[160px] h-[40px] object-contain hover:scale-110 transition-transform duration-300' />
                ))
            }
        </div>
        
    </div>
  )
}

export default BrandLogo