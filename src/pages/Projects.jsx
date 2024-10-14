import React from 'react'
import {img1, img2, img3} from '../assert/projects_page/index';
import { AiOutlineArrowRight,AiOutlineArrowLeft } from 'react-icons/ai';


const item=[
  {
  id:1,
  img:img1,
  title:'Sample Project',
  description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet,',
  },
  {
  id:2,
  img:img2,
  title:'Sample Project 2',
  description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet,',
  },
  {
  id:3,
  img:img3,
  title:'Sample Project 3',
  description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, ',
  },
]

function Projects() {
  return (
    <div className='flex justify-center my-4'>
        <div className='w-[70%]'>
          <div className='my-5'>
            <div className='font-thin text-5xl'>Our</div>
            <div className='font-bold text-5xl'>Projects</div>
          </div>
          <div className="space-y-10 my-10">
          {
            item.map((item,id)=>(
              <div key={id} className="flex justify-center items-center bg-gray-100 ">
                <img className="w-1/2" src={item.img} alt="" />
                <div className="w-1/2 pl-5 md:space-y-4 space-y-6 ">
                  <div className=" text-4xl font-thin text-gray-500">{item.title}</div>
                  <div className="w-[90%]">{item.description}</div>
                  <button className='bg-white tracking-wider font  px-6 py-4 text-xs text-black rounded-none'>
                  VIEW MORE 
                  <AiOutlineArrowRight className='inline-block ml-5' />
                  </button>
                </div>
            </div>
            ))
          }
          </div>
          <div className="flex mb-14 items-center space-x-5">
            <div >0 1</div>
            <div className="text-gray-400">/</div>
            <div className="text-gray-400"> 0 5</div>
            <button className="border border-gray-200 p-2"><AiOutlineArrowLeft/></button>
            <button className="border disabled:bg-gray-100 disabled:text-gray-500 border-gray-300 p-2" disabled><AiOutlineArrowRight/></button>
          </div>


        </div>
    </div>
  )
}

export default Projects