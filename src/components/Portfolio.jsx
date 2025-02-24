import React from 'react'
import Ahava from "../assets/ahava.jpg";
import Hospital from "../assets/hospital.jpg";
import Commerce from "../assets/ecommerce.jpg";
import Tech from "../assets/TechImage.jpg";
import Video from "../assets/Video.jpg";
import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <div className='px-3 py-5 md:px-20 bg-gray-200 rounded-b-4xl'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>

        <h1 className='text-center font-semibold text-xl my-3'>Portfolio</h1>
        <p className=' text-center mb-10'>Below are links to my work.</p>
        <div className='mx-20 md:mx-0 md:flex justify-center'>
          <a href="https://food-app-y7nk.vercel.app/"><img src={Ahava} alt="" className='w-80 rounded-lg hover:ease-in-out cursor-pointer hover:shadow-lg' /></a>
          <a href="https://e-commerce-kappa-five-75.vercel.app/"><img src={Commerce} alt="" className='w-80 rounded-lg hover:ease-in-out cursor-pointer hover:shadow-lg my-10 mx-0 md:my-0 md:mx-10' /></a>
          <a href="https://hospital-ekah.vercel.app/"><img src={Hospital} alt="" className='w-80 rounded-2xl hover:ease-in-out cursor-pointer hover:shadow-lg' /></a>
        </div>
        <div className='mx-20 md:mx-0 md:flex justify-center md:mt-10'>
          <a href="/"><img src={Tech} alt="" className='w-80 rounded-lg hover:ease-in-out cursor-pointer hover:shadow-lg my-10 mx-0 md:my-0 md:mx-10' /></a>
          <a href="/"><img src={Video} alt="" className='w-80 h-52 rounded-2xl hover:ease-in-out cursor-pointer hover:shadow-lg ' /></a>
        </div>

      </motion.div>



    </div>
  )
}

export default Portfolio;