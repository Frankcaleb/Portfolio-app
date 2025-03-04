import React from 'react'
import resume from "../assets/Resume.pdf"
import { motion } from 'framer-motion';
import person from "../assets/avatar2.jpeg"


function Banner() {
  return (
    <div className='px-3 py-12 md:px-20 bg-gray-200 rounded-b-4xl font-quicksand'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>
          <img src={person} alt=""  className='rounded-full w-20 h-20 mx-44 md:mx-[550px] ' />
          <p className='text-center my-3'>Hi, I'm Frank Caleb</p>

        <h1 className='text-center text-xl font-semibold mx-10 md:text-3xl md:mx-72'>Developing Frontend applications with good browser optimization.</h1>
        <div className='flex mt-5 justify-center'>
        <a href={resume} download="Resume"><p className=' md:block   text-sm py-2 px-4  text-center bg-black text-white rounded-full hover:bg-inherit hover:text-black hover:border hover:border-black hover:font-semibold'>My CV</p></a>
        </div>
      </motion.div>

    </div>
  )
}

export default Banner;