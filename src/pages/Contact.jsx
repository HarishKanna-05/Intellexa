import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

function Contact() {
  return (
    
    <div className='flex justify-center'>
      <div className='flex  my-16  justify-around items-center gap-10 w-[70%]'>
        <div className='space-y-16'>
          <div className=''>
                <div className='font-thin text-5xl'>Contact</div>
                <div className='font-bold text-5xl'>Information</div>
                <div className='font-bold py-10 pb-10'>
                  <div>Intellexa</div>
                  <div>Rajalakshmi Engineering College</div>
                </div>
          </div>
          <div>
            <div className='mb-5'>Intellexa@gmail</div>
            <button className='bg-black tracking-wider bottom-0 left-0 px-6 py-4 text-xs text-white rounded-none'>
                  Contact Us
                  <AiOutlineArrowRight className='inline-block ml-5' />
            </button>
          </div>
        </div>
        <div className='border border-black'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28663.54608909886!2d-97.7566872961824!3d30.26481671232177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728909757585!5m2!1sen!2sin" width="500" height="400" style={{ border: 0 }}   loading="lazy" ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact