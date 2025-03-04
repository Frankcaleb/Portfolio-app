import React from 'react'
import Ahava from "../assets/ahava.jpg";
import Hospital from "../assets/hospital.jpg";
import Commerce from "../assets/ecommerce.jpg";
import Tech from "../assets/TechImage.jpg";
import Video from "../assets/Video.jpg";
import Test from "../assets/Test.jpg";
import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <div className='px-3 py-5 md:px-20 bg-gray-200 rounded-b-4xl font-quicksand'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>

        <h1 className='text-center font-semibold text-xl my-3'>Portfolio</h1>
        <p className=' text-center mb-10'>Below are links to my work.</p>
        <div className='mx-20 md:mx-0'>
          <div className='md:flex justify-center'>
            <img src={Ahava} alt="" className='w-80 rounded-lg hover:ease-in-out cursor-pointer hover:shadow-lg md:mx-10' />
            <div className='md:w-80 md:mx-10'>
            <h1 className='text-center my-3 font-semibold'>Ahavah Food Website</h1>
            <p className='text-justify'>A food website created with html, css and javascript where customers can check the kind out the menu of ahavah restaurant before placing orders. <strong> Tech Stack: HTML, CSS and Javascript.</strong></p>
            <div>
              <a href="https://food-app-y7nk.vercel.app/"><p className='text-center text-white bg-black   p-2 text-sm my-3 rounded-sm hover:bg-inherit hover:font-semibold hover:text-black hover:border hover:border-black hover:ease-in-out'>View Project</p></a>
            </div>
            </div>
            
          </div>

          <div className='my-10 md:flex justify-center'>
            <img src={Commerce} alt="" className='w-80 rounded-lg hover:ease-in-out cursor-pointer hover:shadow-lg md:mx-10' />
            <div className='md:w-80 md:mx-10'>
            <h1 className='text-center my-3 font-semibold'>An E-commerce website</h1>
            <p className='text-justify'>An E-comerce site cretaed with React. Allows customers to place add items they like to their cart and also get the total amount of the items they want.<strong> Tech Stack: React (React- router, Usestate and Usecontext.)</strong> 
            </p>
            <a href="https://e-commerce-kappa-five-75.vercel.app/"><p className='text-center text-white bg-black p-2 text-sm my-3 rounded-sm hover:bg-inherit hover:font-semibold hover:text-black hover:border hover:border-black hover:ease-in-out'>View Project</p></a>
            </div>
            
          </div>

          <div className='md:flex justify-center'>
            <img src={Hospital} alt="" className='w-80 rounded-2xl hover:ease-in-out cursor-pointer hover:shadow-lg md:mx-10' />
            <div className='md:w-80 md:mx-10'>
            <h1 className='text-center my-3 font-semibold'>Hospital Landing Page</h1>
            <p className='text-justify'>A Hospital Landing page where patients gets to see the kind of medical care they can get from the hospital with different financial plans. <strong> Tech Stack: React and Tailwind</strong> </p>
            <a href="https://hospital-ekah.vercel.app/"><p className='text-center text-white bg-black p-2 text-sm my-3 rounded-sm hover:bg-inherit hover:font-semibold hover:text-black hover:border hover:border-black hover:ease-in-out'>View Project</p></a>
            </div>
           
          </div>
          <div className='my-10 md:flex justify-center'>
            <img src={Tech} alt="" className='w-80 rounded-lg hover:ease-in-out cursor-pointer hover:shadow-lg  mx-0  md:mx-10' />
            <div className='md:w-80 md:mx-10'>
            <h1 className='text-center my-3 font-semibold'>Manufacturing Landing page</h1>
            <p className='text-justify'>A simple Landing page with good user friendly interface sthat talks about amnufacturing amd the what you can get with different plans. <strong>Tech Stack: React and Tailwind.</strong></p>
            <a href="https://tech-app-rosy.vercel.app/"><p className='text-center text-white bg-black p-2 text-sm my-3 rounded-sm hover:bg-inherit hover:font-semibold hover:text-black hover:border hover:border-black hover:ease-in-out'>View Project</p></a>
            </div>
            

          </div>
          <div className='md:flex justify-center'>
            <img src={Video} alt="" className='w-80 h-52 rounded-2xl hover:ease-in-out cursor-pointer hover:shadow-lg md:mx-10' />
            <div className='md:w-80 md:mx-10'>
            <h1 className='text-center my-3 font-semibold'>A Video Call Website</h1>
            <p className='text-justify'>A website that allow users to have video calls either one on one or group calls. Used react and also Zeocloud technologies API. <strong> Tech Stack: React and API</strong>  </p>
            <a href="https://video-app-three-theta.vercel.app/"><p className='text-center text-white bg-black p-2 text-sm my-3 rounded-sm hover:bg-inherit hover:font-semibold hover:text-black hover:border hover:border-black hover:ease-in-out'>View Project</p></a>
            </div>
            
          </div>
          <div className='md:flex justify-center my-10'>
            <img src={Test} alt="" className='w-80 h-52 rounded-2xl hover:ease-in-out cursor-pointer hover:shadow-lg md:mx-10' />
            <div className='md:w-80 md:mx-10'>
            <h1 className='text-center my-3 font-semibold'>A Job Website Dashboard</h1>
            <p className='text-justify'>A website dashboard that allow users find and match jobs based on their skills and then apply for the jobs. <strong> Tech Stack: React (Usestate and React Router)</strong>  </p>
            <a href="https://test-app-jade-beta.vercel.app/"><p className='text-center text-white bg-black p-2 text-sm my-3 rounded-sm hover:bg-inherit hover:font-semibold hover:text-black hover:border hover:border-black hover:ease-in-out'>View Project</p></a>
            </div>
            
          </div>



        </div>


      </motion.div>



    </div>
  )
}

export default Portfolio;