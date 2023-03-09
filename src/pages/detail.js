import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'
export default function Detail() {
  const {id} = useParams()

  return (
    <div>
    <div className='d-flex justify-content-around'>
    <div className='d-flex gap-2'>
      <i class="bi bi-emoji-smile fs-3"></i>
      <p style={{fontSize:"  30px"}}>Emoji with Fun</p>
      <i class="bi bi-emoji-smile fs-3"></i>
     </div>
    </div>
    <div>
      {data.map((a)=>{
        if(a.id == id){
          return(
            <div className='text-center'>
              <div className='fs-1'>
                {a.icon}
              </div>
              <div className='fs-4'>{a.name}</div>
            </div>
          )
        }
      })}
    </div>
    </div>
  )
}
