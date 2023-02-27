import React, { useState } from 'react'
import '../App.css';
const Addtask = ({fnc}) => {
    const [newtask,setnewtask]=useState({name:"",description:"", done:false})
  return (
    <div>
      <input type="text" placeholder="Name of task" onChange={(e)=>setnewtask({...newtask,name:e.target.value})}></input>
      <input type="text" placeholder="Description" onChange={(e)=>setnewtask({...newtask,description:e.target.value})}></input>
      <button onClick={()=>fnc(newtask)}>Add task</button>
    </div>
  )
}

export default Addtask
