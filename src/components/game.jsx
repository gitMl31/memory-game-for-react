import { useState, useEffect } from 'react'

import {getCardTable, getCardTableFromMockData} from '../utils/cardTableData' 
import {parseMockDataToString, validateMockData} from '../utils/mockDataFormat'

import Card from './card'

export default function Game ({ numberOfRows = 3, numberOfColumns = 4 , mockData}) {
  const [cardTableData, setMinefieldData] = useState([])
  
  useEffect(() => {
    let preData
    if (mockData.includes('|')) {
      mockData = parseMockDataToString(mockData)
    }
    if (mockData !== '' && validateMockData(mockData)) {
      preData = getCardTableFromMockData(mockData)
    } else {
      preData = getCardTable(numberOfRows, numberOfColumns)
    }  
    setMinefieldData(preData)
  }, [mockData])

  console.log(mockData)

  return (
    <div data-testid='cartTable'>
      {cardTableData.map((row, rowIndex) => (
        <div className='cartTable-row' data-testid='cartTable-row' key={rowIndex}>
          {row.map((card, cardIndex) => (
            <Card 
              key={cardIndex} 
              rowPosition={rowIndex + 1}
              colPosition={cardIndex + 1}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
