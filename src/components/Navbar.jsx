import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-around items-center py-5'>
      <div>
        <img className='h-[40px]' src="../src/assert/Main_page/logo.png" alt="" />
      </div>
      <div className='flex items-center text-sm font-afacad tracking-wide gap-8'>
        <Link to={"/"}><div className='hover:border-y-[1px] border-black'>MAIN</div></Link>
        <Link to={"/gallery"}><div className='hover:border-y-[1px] border-black'>GALLERY</div></Link>
        <Link to={"/projects"}><div className='hover:border-y-[1px] border-black'>PROJECTS</div></Link>
        <Link to={"/certificate"}><div className='hover:border-y-[1px] border-black'>CERTIFICATIONS</div></Link>
        <Link to={"/contact"}><div className='hover:border-y-[1px] border-black'>CONTACTS</div></Link>

      </div>
    </div>
  )
}

export default Navbar