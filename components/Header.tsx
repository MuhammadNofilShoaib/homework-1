import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div  style={{ backgroundColor: '#044E83'}}className='bg-blue-600 h-20' >   
      <ul className=' font-semibold flex justify-center items-center gap-10 h-full '>    
        <li className='flex gap-4 mr-11 font-sans items-center h-10'>
          <img src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" alt="Logo" className='h-28 mt-20' />
          <h3 className='text-2xl font-bold text-blue-200 mr-14 ml-28' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Tuition Free Education Program on Latest Technologies</h3>
        </li>   
        <Link href="/"><li>Home</li></Link>
        <Link href="/apply"><li>Apply</li></Link> 
        <Link href="/job"><li>Jobs</li></Link>    
        <Link href="/courses"><li>Courses</li></Link>
      </ul>
    </div>
  )
}

export default Header
  