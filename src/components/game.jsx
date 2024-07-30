import { useState, useEffect } from 'react'

import {getCardTable, getCardTableFromMockData, setCoupleId} from '../utils/cardTableData' 
import {parseMockDataToString, validateMockData} from '../utils/mockDataFormat'

import Card from './card'

export default function Game ({ numberOfRows = 3, numberOfColumns = 4 , mockData}) {
  const [cardTableData, setCardTableData] = useState([])
  const [clickedCards, setClickedCards] = useState([])

  useEffect(() => {
    const newCardTableData = [...cardTableData]
    if (clickedCards.length > 1) {
      if (clickedCards[0].value !== clickedCards[1].value) {
        setTimeout(() => {
          newCardTableData[clickedCards[0].row - 1][clickedCards[0].column - 1].isCovered = true
          newCardTableData[clickedCards[1].row - 1][clickedCards[1].column - 1].isCovered = true
        }, 500);
      }
      setClickedCards([])
      setTimeout(() => {
        setCardTableData(newCardTableData)
      }, 500);
    }
  }, [clickedCards])

  useEffect(() => {
    let preData
    if (mockData.includes('|')) {
      mockData = parseMockDataToString(mockData)
    }
    if (mockData !== '' && validateMockData(mockData)) {
      preData = getCardTableFromMockData(mockData)
    } else {
      preData = getCardTable(numberOfRows, numberOfColumns)
      setCoupleId(preData)
    }  
    setCardTableData(preData)
    
  }, [mockData])

  function onClick (row, column, value) {
    const newCardTableData = [...cardTableData]
    newCardTableData[row - 1][column - 1].isCovered = false
    setCardTableData(newCardTableData)
    setClickedCards([...clickedCards,{row, column, value}])
  }

  return (
    <div data-testid='cartTable'>
      {cardTableData.map((row, rowIndex) => (
        <div className='cartTable-row' data-testid='cartTable-row' key={rowIndex}>
          {row.map((card, cardIndex) => (
            <Card 
              key={cardIndex} 
              rowPosition={rowIndex + 1}
              colPosition={cardIndex + 1}
              coupleId={card.couple}
              onClick={onClick}
              isCovered={card.isCovered}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
