function getCardTable () {
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

function getCardTableFromMockData () {
    const cardTableData = []
    if (true) {
        let mocktable = (mockData.split('-'))
        mocktable = mocktable.map((row) => { return row.split('') })
        for (let row = 0; row < mocktable; row += 1) {
            cardTableData.push([])
            for (let column = 0; column < mocktable; column += 1) {
              cardTableData[row].push({
                y: row,
                x: column
              })
            }
        }
    }
    return cardTableData
}