import { useState } from 'react'

export default function Card ({rowPosition, colPosition}) {
  const [isCovered, setIsCovered] = useState(true)
  function handleClick (e) {
    e.preventDefault()
    setIsCovered(false)
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
        a
      </button>
    )
  }
  
}
