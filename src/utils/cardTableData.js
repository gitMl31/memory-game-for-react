export function getCardTable (numberOfRows, numberOfColumns) {
    const cardTableData = []
    for (let row = 0; row < numberOfRows; row += 1) {
      cardTableData.push([])
      for (let column = 0; column < numberOfColumns; column += 1) {
        cardTableData[row].push({
          y: row,
          x: column,
          isCovered: true,
          couple: ''
        })
      }
    }
    return cardTableData
}

export function getCardTableFromMockData (mockData) {
    const cardTableData = []
    let mocktable = (mockData.split('-'))
    console.log(mocktable)
    mocktable = mocktable.map((row) => { return row.split('') })
    for (let row = 0; row < mocktable.length; row += 1) {
      cardTableData.push([])
      for (let column = 0; column < mocktable[0].length; column += 1) {
        cardTableData[row].push({
        y: row,
        x: column,
        isCovered: true,
        couple: mockData.substring(column,column +1)
        })
      }
    }
    return cardTableData
}

export function setCoupleId (board) {
  const NUMBER_OF_ROWS = board.length
  const NUMBER_OF_COLUMNS = board[0].length
  let character = ['a','b','c','d','e','f','a','b','c','d','e','f',]
  let cards = 0
  while (cards < 12 && cards < NUMBER_OF_ROWS * NUMBER_OF_COLUMNS) {
    const randomRow = Math.floor(Math.random() * NUMBER_OF_ROWS)
    const randomColumn = Math.floor(Math.random() * NUMBER_OF_COLUMNS)
    if (board[randomRow][randomColumn].couple === '') {
      board[randomRow][randomColumn].couple = character[cards]
      cards++
    }
  }
}
