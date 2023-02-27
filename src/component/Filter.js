import React from 'react'

const Filter = ({setsearch}) => {
  return (
    <div>
      <input type="text" placeholder="search" onChange={(e)=>setsearch(e.target.value)}></input>
    </div>
  )
}

export default Filter
