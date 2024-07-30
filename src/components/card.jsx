import { useState } from 'react'

export default function Card ({rowPosition, colPosition, coupleId, isCovered, onClick}) {

  function handleClick (e) {
    e.preventDefault()
    onClick(rowPosition, colPosition, coupleId)
  }

  if (isCovered) {
    return (
      <button 
        onClick={handleClick} 
        data-testid={`memory-card card-row${rowPosition}-col${colPosition}`}
        className='memory-card covered' 
      >
        0
      </button>
    )
  } else {
    return (
      <button  
        data-testid={`memory-card card-row${rowPosition}-col${colPosition}`}
        className='memory-card' 
        disabled
      >
        {coupleId}
      </button>
    )
  }
  
}
