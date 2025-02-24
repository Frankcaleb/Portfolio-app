import React from 'react'
import resume from "../assets/Resume.pdf"
import { motion } from 'framer-motion';
import person from "../assets/avatar2.jpeg"

function Banner() {
  return (
    <div className='px-3 py-20 md:px-20 bg-gray-200 rounded-b-4xl'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>
          <img src={person} alt=""  className='rounded-full w-20 h-20 mx-44 md:mx-[550px] ' />

        <h1 className='text-center text-xl font-semibold mx-20 md:text-3xl md:mx-96'>Developing Frontend applications with good browser optimization.</h1>
        <a href={resume} download="Resume"> <p className='text-center text-white bg-black mx-44 md:w-32 md:mx-[520px] p-2 text-sm font-semibold rounded-full mt-5'>Learn More</p></a>
      </motion.div>

    </div>
  )
}

export default Banner;