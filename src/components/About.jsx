import React from 'react'
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='px-3 py-10 md:px-20 rounded-b-4xl bg-white'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>

        <h1 className='text-center font-semibold text-xl'>About Me</h1>
        <p className='text-sm text-justify my-5 md:text-center md:mx-44 '>I'm a frontend developer with 1 year of experience, I create webpage interface that enhance user experience. I use tools like react, js and tailwind to develop user interface
          with good browser and search engine optimzation. I have good communication skill, and I'm also time efficient. I look forward to working with other developers to create projects.</p>
      </motion.div>


    </div>
  )
}

export default About;