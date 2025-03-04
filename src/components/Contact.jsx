import React from 'react'
import { BiLogoLinkedinSquare, BiLogoWhatsapp, BiLogoTwitter } from 'react-icons/bi';


function Contact() {
  return (
    <div className='px-3 pt-5 pb-3 md:px-20 text-xs flex justify-between font-quicksand'>
        <p>@ 2025 All rights reserved</p>
        <div className='flex '>
        <a href="https://www.linkedin.com/in/okere-caleb-5526712b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><BiLogoLinkedinSquare size={20} className='m-2'/></a>
           <a href="https://wa.me/2348057363359"><BiLogoWhatsapp size={20} className='m-2'/></a> 
            <a href="https://x.com/Belaccal?t=wm-Oh3Wg3bAks_enMvBxEQ&s=09"><BiLogoTwitter size={20} className='m-2'/></a>
            
        
        
        </div>

    </div>
  )
}

export default Contact;