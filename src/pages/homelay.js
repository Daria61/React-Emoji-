import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <div className='d-flex  justify-content-around'> 
     <div className='d-flex gap-2'>
      <i class="bi bi-emoji-smile fs-3"></i>
      <p style={{fontSize:"  30px"}}>Emoji with Fun</p>
      <i class="bi bi-emoji-smile fs-3"></i>
     </div>
    </div>
    <Outlet/>
    </div>
  )
}
