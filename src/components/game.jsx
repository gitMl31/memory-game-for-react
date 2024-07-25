'use client'
import { useState, useEffect } from 'react'
import MockDataForm from './mockDataForm'
import Card from './card'

export default function Game ({ numberOfRows = 3, numberOfColumns = 4 }) {
  const [mockDataFormVisible, setMockDataFormVisible] = useState(false)
  const [mockData, setMockData] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  function setMockDataForm (data) {
    setMockData(data)
    setMockDataFormVisible(false)
  }

  function handleKeyPress (e) {
    if (e.ctrlKey && e.key.toUpperCase() === 'M') {
      setMockDataFormVisible(!mockDataFormVisible)
    }
  }

  const cardTableData = []
  for (let row = 0; row < numberOfRows; row += 1) {
    cardTableData.push([])
    for (let column = 0; column < numberOfColumns; column += 1) {
      cardTableData[row].push({
        y: row,
        x: column
      })
    }
  }

  return (
    <>
      {mockDataFormVisible && <MockDataForm setData={setMockDataForm} />}
      {cardTableData.map((row, rowIndex) => (
        <div className='cartTable-row' data-testid='cartTable-row' key={rowIndex}>
          {row.map((card, cardIndex) => (
            <Card key={cardIndex} />
          ))}
        </div>
      ))}
    </>
  )
}
