export function getCardTable (numberOfRows, numberOfColumns) {
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
    return cardTableData
}

export function getCardTableFromMockData (mockData) {
    const cardTableData = []
    let mocktable = (mockData.split('-'))
    mocktable = mocktable.map((row) => { return row.split('') })
    for (let row = 0; row < mocktable.length; row += 1) {
      cardTableData.push([])
      for (let column = 0; column < mocktable[0].length; column += 1) {
        cardTableData[row].push({
        y: row,
        x: column
        })
      }
    }
    return cardTableData
}