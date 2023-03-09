import React from 'react'
import data from '../data'
import { useState } from 'react'
import {Link } from 'react-router-dom'
export default function Home() {
    const [input , setInput] = useState("")
    const [show, setShow] = useState(data)

    const inputHadle =(search)=>{
        setShow(data.filter((a)=> a.name.toLowerCase().includes(search)) )
    }
   
  return (
   <div>
     <div className='d-flex m-3'>
        <input value={input} type="text" placeholder='emoji name' className='form-control' onChange={(e)=>{ setInput(e.target.value); inputHadle(e.target.value);}}/>
    </div>
    <div>
        {show.map((a)=>{
            return(
                <Link to={`${a.id}`} >
                    <div className='d-flex p-3 gap-2 hover border-top'>
                    <div className='fs-4' > {a.icon}</div>
                    <p className='fs-4'>{a.name}</p>
                    </div>
                </Link>
            )
        })}
    </div>
   </div>
  )
}
