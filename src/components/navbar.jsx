import React from 'react'
import { BiLogoLinkedinSquare, BiLogoWhatsapp, BiLogoTwitter } from 'react-icons/bi';




function Navbar() {
 
  
  return (
    <div className=' w-full bg-gray-200 flex justify-between text-sm items-center px-3 py-5 md:px-20 md:py-10 font-quicksand'>
    
      <p className='font-semibold text-lg'>Cyber.dev</p>
      <div className='flex'>
        <a href="https://www.linkedin.com/in/okere-caleb-5526712b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><BiLogoLinkedinSquare size={25} className='m-2'/></a>
        <a href="https://x.com/Belaccal?t=wm-Oh3Wg3bAks_enMvBxEQ&s=09"><BiLogoTwitter size={25} className='m-2'/></a>
        <a href="https://wa.me/2348057363359"><BiLogoWhatsapp size={25} className='m-2 '/></a>
        
      </div>
       

    </div>
  )
}

export default Navbar;