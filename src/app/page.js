'use client'
import { useState, useEffect } from 'react'
import MockDataForm from '../components/mockDataForm'
import Game from '../components/game'

export default function Home () {
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
  return (
    <>
      <h1>Hola</h1>
      {mockDataFormVisible && <MockDataForm setData={setMockDataForm} />}
      <Game mockData={mockData} />
    </>
  )
}
