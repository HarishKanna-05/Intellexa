import React from 'react'
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } from '../assert/gallery_page/index';
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];


function Gallery() {
  return (
    <div className='flex justify-center mb-16'>
        <div className='w-[70%]'>
          <div className='my-5'>
            <div className='font-thin text-5xl'>Photo</div>
            <div className='font-bold text-5xl'>Gallery</div>
          </div>
          <div className='grid gap-5 grid-cols-5'>
            {
              images.map((img,index)=>(
                <div key={index} className='col-span-1'>
                  <img  src={img} alt={`image${index}`} />
                </div>
              ))
            }

          </div>
        </div>
    </div>
  )
}

export default Gallery