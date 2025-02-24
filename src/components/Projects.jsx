import React from 'react'
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div  className='px-3 py-8 md:px-20 md:py-10 '>
      <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}>
      <h1 className='text-2xl mx-20 text-center font-semibold md:text-3xl'>Tell us More about your Project</h1>
        <div className='flex text-xs justify-center my-5'>
            <p className='bg-black text-white font-semibold mx-3 p-2 w-20 text-center rounded-full'>Email Us</p>
           <a href="https://wa.me/2348057363359"><p className=' border-black border font-semibold p-2 w-20 text-center rounded-full'>Whatsapp</p></a> 
        </div>
      </motion.div>
       

    </div>
  )
}

export default Projects;