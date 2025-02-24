import React from 'react'
import resume from "../assets/Resume.pdf"


function Navbar() {
 
  
  return (
    <div className=' w-full bg-gray-200 flex justify-between text-sm items-center px-3 py-5 md:px-20 md:py-10'>
      <div className='flex'>
      <p>belaccal@gmail.com</p>
      <p className='hidden md:block bg-white font-semibold mx-3 w-14 text-xs p-1 text-center rounded-full'>Copy</p>
      <a href={resume} download="Resume"><p className='hidden md:block bg-white font-semibold w-14 text-xs p-1 text-center rounded-full'>CV</p></a>
      </div>
       
        <div className='flex '>
            <a href="https://www.linkedin.com/in/okere-caleb-5526712b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><p>linkedin</p></a>
           <a href="https://wa.me/2348057363359"><p className='px-3'>/  Whatsapp  /</p></a> 
            <a href="https://x.com/Belaccal?t=wm-Oh3Wg3bAks_enMvBxEQ&s=09"><p>Twitter</p></a>
        </div>

    </div>
  )
}

export default Navbar;