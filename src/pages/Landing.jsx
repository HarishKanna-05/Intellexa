import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <div className='flex my-4 justify-center'>
        <div className='flex w-[70%] justify-center items-center gap-5 lg:gap-24'>
          <div>
            <div className='font-thin text-gray-500 text-5xl lg:text-6xl'>PROJECT</div>
            <div className='font-semibold text-5xl lg:text-6xl'>Lorum</div>
          </div>
          <div className='relative'>
            <img className='max-h-[82vh]' src="../src/assert/Main_page/main.png" alt="" />
            <Link to={'/projects'}>
            <button className='bg-white tracking-wider font absolute bottom-0 left-0 px-6 py-4 text-xs text-black rounded-none'>
              VIEW PROJECT 
              <AiOutlineArrowRight className='inline-block ml-5' />
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex my-10 justify-center p-10'>
        <div className='flex lg:flex-row flex-col bg-gray-100 px-16 py-8 justify-around max-w-[80%] gap-10 items-center'>
          <div className='flex gap-3'>
            <div className='space-y-4'>
              <img src="../src/assert/Main_page/about_1.png" alt="" />
              <img className='' src="../src/assert/Main_page/about_3.png" alt="" />
            </div>
            <div>
              <img src="../src/assert/Main_page/about_2.png" alt="" />
            </div>
          </div>
          <div className='w-1/2 space-y-6'>
            <div className='font-thin text-gray-500 text-6xl'>About</div>
            <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat ratione libero, laudantium cumque corporis harum repellendus quod excepturi vero tempore vitae? Earum tempore dolor aperiam, fugit unde aliquam aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat ratione libero.</div>
            <button className='bg-white tracking-wider font  px-6 py-4 text-xs text-black rounded-none'>
              READ MORE 
              <AiOutlineArrowRight className='inline-block ml-5' />
            </button>
          </div>
        </div>       
      </div>

      <div className='flex justify-center'>
        <div className='w-[70%]'>
        <div>
        <div className='font-thin pb-5 text-gray-500 text-5xl'>Main Focus/Mission Statement</div>
        </div>
        <div className='flex p-5 gap-16'>
          <div className='flex w-1/2 items-center space-x-3'>
            <div className='text-9xl text-gray-300 font-bold'>1</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores, voluptatibus odio impedit ullam voluptate, sint provident qui nihil reprehenderit, iste veniam adipisci velit sequi corrupti perspiciatis modi accusantium iure.</div>
          </div>
          <div className='flex w-1/2 items-center space-x-3'>
          <div className='text-9xl text-gray-300 font-bold'>2</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores, voluptatibus odio impedit ullam voluptate, sint provident qui nihil reprehenderit, iste veniam adipisci velit sequi corrupti perspiciatis modi accusantium iure.</div>
          </div>
        </div>
        </div>
      </div>

      <div className='flex my-10 justify-center'>
      <div className='w-[70%] '>
        <div className='font-thin pb-5 text-gray-500 my-5 text-5xl'>Our Projects</div>
        <div className=''>
          <div className='grid grid-cols-2  gap-4 pb-4'>
            <div className='relative'>
              <img className='w-full h-full' src="../src/assert/Main_page/project_4.png" alt="Sample Project" />
              <div className='absolute inset-0 p-8 space-y-1 bg-black bg-opacity-50 '>
                <div className='text-white font-semibold text-4xl'>Sample</div>
                <div className='text-white font-semibold text-4xl'>Project</div>
                <button className='text-white tracking-wider font  px-6 py-4 text-xs  rounded-none'>
                  VIEW MORE 
                  <AiOutlineArrowRight className='inline-block ml-5' />
                </button>              
            </div>
            </div>
            <img className='w-full h-full' src="../src/assert/Main_page/project_1.png" alt="Project 1" />
          </div>
          <div className='grid grid-cols-3 overflow  gap-4'>
            <img className='w-full h-full' src="../src/assert/Main_page/project_2.png" alt="Project 2" />
            <img className='w-full h-full' src="../src/assert/Main_page/project_3.png" alt="Project 3" />
            <img className='w-full h-full' src="../src/assert/Main_page/project_5.png" alt="Project 5" />
          </div>
          <div className='text-right mt-4'>
          <Link to={'/projects'}>
            <button className='bg-black text-white tracking-wider font  px-6 py-4 text-xs  rounded-none'>
              ALL PROJECTS
              <AiOutlineArrowRight className='inline-block ml-5' />
            </button>  
          </Link>      
          </div>
        </div>

      </div>
    </div>

    <div className='flex justify-center mb-10'>
      <form className='w-[70%]' action="">
        <div className='font-thin pb-5 text-gray-500 my-5 text-5xl'>Contact Us</div>
        <div className='flex gap-6 mb-5'>
          <div className='flex flex-col w-1/3  space-y-4 '>
            <input className='bg-gray-100 px-4 py-2' placeholder='Name' type="text"  />
            <input className='bg-gray-100 px-4 py-2' required placeholder='Phone Number' type="tel"  />
            <input className='bg-gray-100 px-4 py-2' required placeholder='E-Mail' type="email"  />
            <input className='bg-gray-100 px-4 py-2' placeholder='Intrested In' type="text"  />
            <textarea className='bg-gray-100  h-full px-4 py-2' required name="Message" placeholder='Message' id=""></textarea>
          </div>
          <div>
            <img src="../src/assert/Main_page/contact.png" alt="" />
          </div>
        </div>
            <button type='submit' className='bg-black my-5 tracking-wider font  px-6 py-4 text-xs text-white rounded-none'>
              SEND EMAIL
              <AiOutlineArrowRight className='inline-block ml-5' />
            </button>
      </form>
    </div>


    </div>
  )
}

export default Landing