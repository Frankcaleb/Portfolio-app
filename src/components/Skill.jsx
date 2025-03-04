import React from 'react'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact } from 'react-icons/bi';

function Skill() {
    return (
        <div className='px-3 py-10 md:px-20 rounded-b-4xl bg-white font-quicksand'>
            <h1 className='text-center font-semibold text-xl'>My TechStack</h1>
            <div className='md:flex justify-center'>
                <main className='flex justify-center my-5'>
                    <div className='border border-white rounded-lg shadow-xl mx-2 p-3 w-32'>
                        <BiLogoHtml5 size={100} className='text-orange-500 text-center'/>
                        <p className='text-center my-3 '>HTML</p>
                    </div>
                    <div className='border border-white rounded-lg shadow-xl p-3 mx-2 w-32'>
                        <BiLogoCss3 size={100} className='text-blue-600' />
                        <p className='text-center my-3'>CSS</p>
                    </div>
                </main>

                <main className='flex justify-center my-5'>
                    <div className='border border-white rounded-lg shadow-xl p-3 mx-2 w-32'>
                        <BiLogoJavascript  size={100} className='text-yellow-400' />
                        <p className='text-center my-3'>Javascript</p>
                    </div>

                    <div className='border border-white rounded-lg shadow-xl p-3 mx-2 w-32'>
                        <BiLogoTailwindCss  size={100} className='text-blue-900' />
                        <p className='text-center my-3'>TailwindCSS</p>
                    </div>
                </main>


                <div className='border border-white rounded-lg shadow-xl my-5  p-3 mx-40 md:mx-2 w-32'>
                    <BiLogoReact  size={100} className='text-blue-500' />
                    <p className='text-center my-3'>React Js</p>
                </div>

            </div>

        </div>
    )
}

export default Skill;