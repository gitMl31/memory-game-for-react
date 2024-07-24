import Card from './card'

export default function Game ({ numberOfRows, numberOfColumns }) {
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
