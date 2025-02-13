import React from 'react'
import {assets} from '../assets/assets'
import './Logout1.css'
import pto1 from '../assets/pto1.png'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between '>
        <img className='w-[max(10%,80px)]' src={pto1} alt="" />
        <button onClick={()=>setToken('')} className='lg-btn'>Logout</button>
    </div>
  )
}

export default Navbar